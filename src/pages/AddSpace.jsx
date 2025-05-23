import React, { useState } from 'react';
import { db, storage, auth } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const defaultAvailability = {
  monday: { active: false, from: '', to: '' },
  tuesday: { active: false, from: '', to: '' },
  wednesday: { active: false, from: '', to: '' },
  thursday: { active: false, from: '', to: '' },
  friday: { active: false, from: '', to: '' },
  saturday: { active: false, from: '', to: '' },
  sunday: { active: false, from: '', to: '' },
};

const AddSpace = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [availability, setAvailability] = useState(defaultAvailability);
  const navigate = useNavigate();

  const handleTimeChange = (day, field, value) => {
    setAvailability(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value
      }
    }));
  };

  const handleActiveChange = (day, checked) => {
    setAvailability(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        active: checked
      }
    }));
  };

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
        <input placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} required />
        <input type="number" placeholder="Prix/heure (€)" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} required />

        <h4>Créneaux hebdomadaires :</h4>
        {Object.keys(availability).map(day => (
          <div key={day} style={{ marginBottom: '0.5rem' }}>
            <label style={{ textTransform: 'capitalize' }}>
              <input
                type="checkbox"
                checked={availability[day].active}
                onChange={(e) => handleActiveChange(day, e.target.checked)}
              /> {day}
            </label>
            {availability[day].active && (
              <>
                <input
                  type="time"
                  value={availability[day].from}
                  onChange={(e) => handleTimeChange(day, 'from', e.target.value)}
                  required
                />
                {' '}
                à{' '}
                <input
                  type="time"
                  value={availability[day].to}
                  onChange={(e) => handleTimeChange(day, 'to', e.target.value)}
                  required
                />
              </>
            )}
          </div>
        ))}

        <button type="submit">Publier</button>
      </form>
    </div>
  );
};

export default AddSpace;
