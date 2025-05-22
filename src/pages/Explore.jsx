import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Explore = () => {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const fetchSpaces = async () => {
      const querySnapshot = await getDocs(collection(db, 'spaces'));
      setSpaces(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchSpaces();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Espaces disponibles</h2>
      {spaces.map(space => (
        <div key={space.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
          <h3>{space.title}</h3>
          <p>{space.description}</p>
          <p><strong>{space.category}</strong> - {space.price}€/h</p>
          {space.imageUrl && <img src={space.imageUrl} alt={space.title} style={{ width: '200px' }} />}
        </div>
      ))}
    </div>
  );
};

export default Explore;