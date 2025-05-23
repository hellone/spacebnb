import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const MyBookings = () => {
  const [user] = useAuthState(auth);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      if (!user) return;
      const q = query(collection(db, 'bookings'), where('userId', '==', user.uid));
      const snap = await getDocs(q);
      const data = await Promise.all(snap.docs.map(async docu => {
        const space = await getDoc(doc(db, 'spaces', docu.data().spaceId));
        return {
          ...docu.data(),
          space: space.data(),
        };
      }));
      setBookings(data);
    };
    fetch();
  }, [user]);

  return (
    <div className="container">
      <h2>Mes réservations</h2>
      {bookings.length === 0 && <p>Aucune réservation encore.</p>}
      {bookings.map((b, i) => (
        <div key={i} className="card">
          <h3>{b.space?.title}</h3>
          <p>Créneau : {b.slot}</p>
          <p>Réservé le : {new Date(b.reservedAt.seconds * 1000).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
