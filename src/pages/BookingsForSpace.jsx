import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useParams } from 'react-router-dom';
import { doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore';

const BookingsForSpace = () => {
  const { id } = useParams(); // id de l’espace
  const [space, setSpace] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const spaceSnap = await getDoc(doc(db, 'spaces', id));
      if (!spaceSnap.exists()) return;

      setSpace({ id, ...spaceSnap.data() });

      const q = query(collection(db, 'bookings'), where('spaceId', '==', id));
      const snap = await getDocs(q);
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBookings(data);
    };

    fetch();
  }, [id]);

  return (
    <div className="container">
      {space && <h2>Réservations pour : {space.title}</h2>}
      {bookings.length === 0 ? (
        <p>Aucune réservation pour cet espace.</p>
      ) : (
        <ul>
          {bookings.map((b, i) => (
            <li key={i}>
              Créneau : <strong>{b.slot}</strong> — Réservé le {new Date(b.reservedAt?.seconds * 1000).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingsForSpace;
