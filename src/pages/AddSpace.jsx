import React, { useState } from 'react';
import { db, storage, auth } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import WeeklyAvailabilityGrid from '../components/WeeklyAvailabilityGrid';

const AddSpace = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [availability, setAvailability] = useState({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Ajoutez une image.");

    const storageRef = ref(storage, `spaces/${image.name}`);
    const snapshot = await uploadBytes(storageRef, image);
    const imageUrl = await getDownloadURL(snapshot.ref);

    await addDoc(collection(db, 'spaces'), {
      title,
      description: desc,
      price: parseFloat(price),
      imageUrl,
      availability,
      owner: auth.currentUser.uid,
      createdAt: Timestamp.now(),
    });

    alert("Espace ajouté !");
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Ajouter un espace</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Prix/heure (€)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} required />

        <h4>Créneaux hebdomadaires (00:00 - 23:30) :</h4>
        <WeeklyAvailabilityGrid availability={availability} onChange={setAvailability} />

        <button type="submit" style={{ marginTop: '1rem' }}>
          Publier
        </button>
      </form>
    </div>
  );
};

export default AddSpace;
