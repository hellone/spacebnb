import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import CardEspace from '../components/CardEspace';

const Explore = () => {
  const [spaces, setSpaces] = useState([]);
  const [user] = useAuthState(auth);
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    const fetchSpaces = async () => {
      const snapshot = await getDocs(collection(db, 'spaces'));
      const result = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSpaces(result);
    };

    const fetchFavorites = async () => {
      if (!user) return;
      const snapshot = await getDocs(collection(db, 'favorites'));
      const favs = snapshot.docs
        .filter(doc => doc.data().userId === user.uid)
        .map(doc => doc.data().spaceId);
      setFavorites(new Set(favs));
    };

    fetchSpaces();
    fetchFavorites();
  }, [user]);

  const toggleFavorite = async (spaceId) => {
    if (!user) return alert("Connectez-vous pour ajouter aux favoris.");

    const favRef = doc(db, 'favorites', `${user.uid}_${spaceId}`);
    if (favorites.has(spaceId)) {
      await deleteDoc(favRef);
      setFavorites(prev => {
        const newFavs = new Set(prev);
        newFavs.delete(spaceId);
        return newFavs;
      });
    } else {
      await setDoc(favRef, { userId: user.uid, spaceId });
      setFavorites(prev => new Set(prev).add(spaceId));
    }
  };

  return (
    <div className="container">
      <h2 style={{ marginBottom: '1rem' }}>Explorer les espaces</h2>
      <div style={styles.grid}>
        {spaces.map(space => (
          <div key={space.id} style={{ position: 'relative' }}>
            <CardEspace space={space} />
            {user && (
              <button
                onClick={() => toggleFavorite(space.id)}
                style={styles.favBtn(favorites.has(space.id))}
              >
                {favorites.has(space.id) ? '❤️' : '🤍'}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1.5rem',
  },
  favBtn: (active) => ({
    position: 'absolute',
    top: 10,
    right: 10,
    background: 'none',
    border: 'none',
    fontSize: '1.8rem',
    cursor: 'pointer',
    color: active ? 'red' : '#aaa',
  }),
};

export default Explore;
