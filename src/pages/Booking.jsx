import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import TimeSlotGrid from '../components/TimeSlotGrid';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const dayKeys = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

const Booking = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [space, setSpace] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reservedSlots, setReservedSlots] = useState([]);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      const snap = await getDoc(doc(db, 'spaces', id));
      if (!snap.exists()) return;

      const data = snap.data();
      setSpace({ id, ...data });
    };

    fetch();
  }, [id]);

  useEffect(() => {
    const fetchReserved = async () => {
      if (!selectedDate) return;
      const q = query(collection(db, 'bookings'), where('spaceId', '==', id));
      const snap = await getDocs(q);
      const dayStr = selectedDate.toISOString().split('T')[0];
      const results = snap.docs
        .filter(doc => doc.data().date === dayStr)
        .flatMap(doc => doc.data().slots || []);
      setReservedSlots(results);
    };

    fetchReserved();
  }, [selectedDate, id]);

  const handleReserve = async () => {
    if (!user) return alert("Connectez-vous.");
    if (!selectedSlots.length) return alert("Sélectionnez au moins un créneau.");

    const conflict = selectedSlots.find(slot => reservedSlots.includes(slot));
    if (conflict) return alert(`Le créneau ${conflict} est déjà réservé.`);

    const dayStr = selectedDate.toISOString().split('T')[0];

    await addDoc(collection(db, 'bookings'), {
      userId: user.uid,
      spaceId: id,
      slots: selectedSlots,
      date: dayStr,
      reservedAt: new Date()
    });

    alert("Réservation confirmée !");
    navigate('/bookings');
  };

  if (!space) return <p>Chargement...</p>;

  const selectedKey = dayKeys[selectedDate.getDay()];
  const availability = space.availability?.[selectedKey];

  return (
    <div className="container">
      <h2>Réserver : {space.title}</h2>
      <p>{space.description}</p>
      <p><strong>{space.price} € / heure</strong></p>

      <label>Choisissez une date :</label><br />
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        minDate={new Date()}
        dateFormat="dd/MM/yyyy"
      />

      <br /><br />
      {availability?.active ? (
        <>
          <p style={{ fontWeight: 'bold' }}>Créneaux disponibles ({selectedKey}) :</p>
          <TimeSlotGrid
            reserved={reservedSlots}
            onChange={setSelectedSlots}
          />
          <br />
          <button onClick={handleReserve}>Réserver</button>
        </>
      ) : (
        <p>L’espace est fermé ce jour-là.</p>
      )}
    </div>
  );
};

export default Booking;
