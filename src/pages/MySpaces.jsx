import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const MySpaces = () => {
  const [user] = useAuthState(auth);
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      if (!user) return;
      const q = query(collection(db, 'spaces'), where('owner', '==', user.uid));
      const snap = await getDocs(q);
      setSpaces(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetch();
  }, [user]);

  return (
    <div className="container">
      <h2>Mes espaces</h2>
      <Link to="/add">
        <button style={styles.add}>+ Ajouter un espace</button>
      </Link>

      {spaces.length === 0 ? (
        <p>Aucun espace publié.</p>
      ) : (
        spaces.map(space => (
          <div key={space.id} style={styles.card}>
            <h3>{space.title}</h3>
            <p>{space.description}</p>
            <p><strong>{space.price} € / heure</strong></p>
            <p>Créneaux : {space.slots?.join(', ') || '—'}</p>
            <Link to={`/edit/${space.id}`} style={styles.link}>✏️ Modifier</Link>
            <Link to={`/bookings-for-space/${space.id}`} style={styles.link}>📆 Réservations</Link>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  card: {
    background: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem',
    boxShadow: '0 0 4px rgba(0,0,0,0.05)'
  },
  link: {
    marginRight: '1rem',
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: '500'
  },
  add: {
    marginBottom: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }
};

export default MySpaces;
