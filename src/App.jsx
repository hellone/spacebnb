import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Explore from './pages/Explore';
import HostDashboard from './pages/HostDashboard';
import Login from './pages/Login';
import Header from './components/Header';
import { auth } from './services/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);
  const [isHost, setIsHost] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  return (
    <Router>
      {user && <Header isHost={isHost} toggleRole={() => setIsHost(!isHost)} />}
      <Routes>
        <Route path="/" element={user ? <Explore /> : <Navigate to="/login" />} />
        <Route path="/host" element={user && isHost ? <HostDashboard /> : <Navigate to="/" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;