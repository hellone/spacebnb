import React, { useState } from 'react';
import { auth } from '../services/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => signInWithEmailAndPassword(auth, email, password).catch(alert);
  const signup = () => createUserWithEmailAndPassword(auth, email, password).catch(alert);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Connexion / Inscription</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" /><br/>
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Mot de passe" type="password" /><br/>
      <button onClick={login}>Connexion</button>
      <button onClick={signup} style={{ marginLeft: '1rem' }}>Créer un compte</button>
    </div>
  );
};

export default Login;