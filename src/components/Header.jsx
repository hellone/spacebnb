import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';
import { signOut } from 'firebase/auth';

const Header = ({ isHost, toggleRole }) => {
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <header style={{ padding: '1rem', background: '#eee' }}>
      <h2>SpaceBnB</h2>
      <nav>
        <Link to="/">Accueil</Link>
        {isHost && <Link to="/host" style={{ marginLeft: '1rem' }}>Hôte</Link>}
        <button onClick={toggleRole} style={{ marginLeft: '1rem' }}>
          Mode {isHost ? 'Client' : 'Hôte'}
        </button>
        <button onClick={logout} style={{ marginLeft: '1rem' }}>
          Déconnexion
        </button>
      </nav>
    </header>
  );
};

export default Header;