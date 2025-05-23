import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="container">
        <p>Vous devez être connecté pour voir votre profil.</p>
        <button onClick={() => navigate('/login')}>Connexion</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Mon Profil</h2>
      <img src={user.photoURL} alt="profil" style={{ borderRadius: '50%', width: '100px' }} />
      <ul style={{ marginTop: '1rem' }}>
        <li><strong>Nom :</strong> {user.displayName}</li>
        <li><strong>Email :</strong> {user.email}</li>
        <li><strong>UID :</strong> {user.uid}</li>
      </ul>
    </div>
  );
};

export default Profile;
