import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Explorer</Link>
      <Link to="/host">Hôte</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/login">Connexion</Link>
    </nav>
  </header>
);

export default Header;