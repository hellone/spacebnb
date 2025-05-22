import React, { useState } from 'react';
import { db, storage } from '../services/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const HostDashboard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Salle de sport');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = '';
    if (file) {
      const imageRef = ref(storage, 'spaces/' + file.name);
      await uploadBytes(imageRef, file);
      imageUrl = await getDownloadURL(imageRef);
    }

    await addDoc(collection(db, 'spaces'), {
      title, description, price, category, imageUrl
    });

    alert('Espace publié !');
    setTitle(''); setDescription(''); setPrice(''); setCategory('Salle de sport'); setFile(null);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '1rem' }}>
      <h2>Publier un espace</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Titre" required /><br/>
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required /><br/>
      <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Prix/heure (€)" required /><br/>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option>Salle de sport</option>
        <option>Jardin</option>
        <option>Cuisine</option>
        <option>Piscine</option>
      </select><br/>
      <input type="file" onChange={e => setFile(e.target.files[0])} /><br/>
      <button type="submit">Publier</button>
    </form>
  );
};

export default HostDashboard;