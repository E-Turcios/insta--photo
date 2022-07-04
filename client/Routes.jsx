import React from 'react';
import { BrowserRouter, Routes as Switch, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useAuth } from './context/AuthContext';

export default function Routes() {
  const { currentUser } = useAuth();
  return (
    <BrowserRouter>
      {currentUser ? (
        <>
          <Navbar />
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Switch>
        </>
      ) : (
        <Switch>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Switch>
      )}
    </BrowserRouter>
  );
}
