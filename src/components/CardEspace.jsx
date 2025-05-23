import React from 'react';
import { Link } from 'react-router-dom';

const CardEspace = ({ space }) => {
  return (
    <div className="card" style={styles.card}>
      <img src={space.imageUrl} alt={space.title} style={styles.image} />
      <h3>{space.title}</h3>
      <p>{space.description}</p>
      <p><strong>{space.price} € / h</strong></p>
      <Link to={`/booking/${space.id}`}>
        <button style={styles.button}>🕒 Réserver</button>
      </Link>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    boxShadow: '0 0 4px rgba(0,0,0,0.05)',
    background: '#fff',
  },
  image: {
    width: '100%',
    borderRadius: '6px',
    marginBottom: '0.5rem',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default CardEspace;
