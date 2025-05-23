import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);
  const provider = new GoogleAuthProvider();

  const handleLogin = () => signInWithPopup(auth, provider);
  const handleLogout = () => signOut(auth);

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div>
          <Link to="/" style={styles.link}>Explorer</Link>
          <Link to="/host" style={styles.link}>Hôte</Link>
          <Link to="/admin" style={styles.link}>Admin</Link>
        </div>
        <div>
          {user ? (
            <div style={styles.profileWrapper}>
              <Link to="/profile">
                <img
                  src={user.photoURL}
                  alt="profile"
                  style={styles.avatar}
                />
              </Link>
              <button onClick={handleLogout} style={styles.logout}>Déconnexion</button>
            </div>
          ) : (
            <button onClick={handleLogin} style={styles.login}>Connexion</button>
          )}
        </div>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    background: '#fff',
    borderBottom: '1px solid #eee',
    padding: '1rem 2rem',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    marginRight: '1rem',
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: '500',
  },
  login: {
    padding: '0.5rem 1rem',
    background: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  logout: {
    marginLeft: '1rem',
    padding: '0.4rem 0.8rem',
    background: '#ddd',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  profileWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    cursor: 'pointer',
  },
};

export default Header;
