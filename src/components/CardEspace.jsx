import React from 'react';
import { Link } from 'react-router-dom';

const CardEspace = ({ space }) => {
  return (
    <div style={styles.card}>
      <img src={space.imageUrl} alt={space.title} style={styles.image} />
      <div style={styles.body}>
        <h3 style={styles.title}>{space.title}</h3>
        <p style={styles.desc}>{space.description?.slice(0, 60)}...</p>
        <p style={styles.price}><strong>{space.price} €</strong> / heure</p>
        <Link to={`/booking/${space.id}`}>
          <button style={styles.button}>🕒 Réserver</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  card: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  body: {
    padding: '0.8rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  title: {
    margin: 0,
    fontSize: '1rem',
  },
  desc: {
    fontSize: '0.9rem',
    color: '#555',
  },
  price: {
    fontSize: '0.95rem',
    marginTop: '0.2rem',
  },
  button: {
    marginTop: '0.4rem',
    padding: '0.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
  }
};

export default CardEspace;