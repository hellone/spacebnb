// src/pages/Explore.jsx
import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const Explore = () => {
  const [spaces, setSpaces] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchSpaces = async () => {
      const snapshot = await getDocs(collection(db, 'spaces'));
      setSpaces(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchSpaces();
  }, []);

  const toggleFavorite = async (spaceId) => {
    if (!user) return alert("Connectez-vous.");
    const favRef = doc(db, 'favorites', `${user.uid}_${spaceId}`);
    const exists = await getDocs(collection(db, 'favorites'));
    const fav = exists.docs.find(d => d.id === `${user.uid}_${spaceId}`);
    fav ? await deleteDoc(favRef) : await setDoc(favRef, { userId: user.uid, spaceId });
  };

  return (
    <div className="container">
      <h2>Espaces disponibles</h2>
      <div>
        {spaces.map(space => (
          <div key={space.id} className="card">
            <img src={space.imageUrl} alt={space.title} />
            <h3>{space.title}</h3>
            <p>{space.description}</p>
            <p><strong>{space.price} € / heure</strong></p>
            <button onClick={() => toggleFavorite(space.id)}>❤️ Favori</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
