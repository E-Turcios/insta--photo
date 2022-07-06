import React from 'react';
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import { useAuth } from './context/AuthContext';

export default function Routes() {
  const { currentUser } = useAuth();
  return (
    <BrowserRouter>
      {currentUser ? <DashboardRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}

function DashboardRoutes() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Switch>
    </React.Fragment>
  );
}

function AuthRoutes() {
  return (
    <Switch>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Switch>
  );
}
