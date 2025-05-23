import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Explore from './pages/Explore.jsx';
import MySpaces from './pages/MySpaces.jsx';
import AddSpace from './pages/AddSpace.jsx';
import EditSpace from './pages/EditSpace.jsx';
import Booking from './pages/Booking.jsx';
import MyBookings from './pages/MyBookings.jsx';
import BookingsForSpace from './pages/BookingsForSpace.jsx';

import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

import Header from './components/Header.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/host" element={<MySpaces />} />
        <Route path="/add" element={<AddSpace />} />
        <Route path="/edit/:id" element={<EditSpace />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/bookings-for-space/:id" element={<BookingsForSpace />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
