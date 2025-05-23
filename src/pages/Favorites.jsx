// src/pages/Favorites.jsx
import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const Favorites = () => {
  const [user] = useAuthState(auth);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) return;
      const snapshot = await getDocs(collection(db, 'favorites'));
      const favs = snapshot.docs.filter(doc => doc.data().userId === user.uid);
      const results = await Promise.all(favs.map(f =>
        getDoc(doc(db, 'spaces', f.data().spaceId)).then(d => ({ id: d.id, ...d.data() }))
      ));
      setFavorites(results);
    };
    fetchFavorites();
  }, [user]);

  return (
    <div className="container">
      <h2>Mes favoris</h2>
      {favorites.map(space => (
        <div key={space.id} className="card">
          <img src={space.imageUrl} alt={space.title} />
          <h3>{space.title}</h3>
          <p>{space.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
