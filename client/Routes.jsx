import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
export default function Routes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="Navbar" element={<Navbar />} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}
