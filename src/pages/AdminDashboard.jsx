// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

const AdminDashboard = () => {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const snapshot = await getDocs(collection(db, 'spaces'));
      setSpaces(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetch();
  }, []);

  const disableSpace = async (id) => {
    await updateDoc(doc(db, 'spaces', id), { disabled: true });
    alert("Annonce désactivée.");
  };

  return (
    <div className="container">
      <h2>Admin : modération</h2>
      {spaces.map(space => (
        <div key={space.id} className="card">
          <h3>{space.title}</h3>
          <button onClick={() => disableSpace(space.id)}>Désactiver</button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
