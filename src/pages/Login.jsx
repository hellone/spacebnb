import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Login = () => {
  const login = async () => {
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="container">
      <h2>Connexion</h2>
      <button onClick={login}>Se connecter avec Google</button>
    </div>
  );
};

export default Login;