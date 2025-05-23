import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';

const EditSpace = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [space, setSpace] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const ref = doc(db, 'spaces', id);
      const snap = await getDoc(ref);
      if (!snap.exists() || snap.data().owner !== auth.currentUser.uid) {
        alert("Accès refusé.");
        return navigate('/');
      }
      setSpace({ id, ...snap.data() });
    };
    fetch();
  }, [id, navigate]);

  const handleChange = (field, value) => {
    setSpace(prev => ({ ...prev, [field]: value }));
  };

  const handleUpdate = async () => {
    await updateDoc(doc(db, 'spaces', space.id), {
      title: space.title,
      description: space.description,
      price: parseFloat(space.price),
      slots: space.slots,
    });
    alert("Modifié !");
    navigate('/host');
  };

  const handleSlotChange = (i, value) => {
    const updated = [...space.slots];
    updated[i] = value;
    setSpace({ ...space, slots: updated });
  };

  const addSlot = () => {
    setSpace({ ...space, slots: [...space.slots, ''] });
  };

  if (!space) return <p>Chargement...</p>;

  return (
    <div className="container">
      <h2>Modifier l’espace</h2>
      <input value={space.title} onChange={e => handleChange('title', e.target.value)} />
      <textarea value={space.description} onChange={e => handleChange('description', e.target.value)} />
      <input type="number" value={space.price} onChange={e => handleChange('price', e.target.value)} />
      <h4>Créneaux :</h4>
      {space.slots.map((slot, i) => (
        <input key={i} value={slot} onChange={(e) => handleSlotChange(i, e.target.value)} />
      ))}
      <button type="button" onClick={addSlot}>+ Ajouter un créneau</button>
      <button onClick={handleUpdate}>Enregistrer</button>
    </div>
  );
};

export default EditSpace;
