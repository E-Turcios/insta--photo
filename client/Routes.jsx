import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Switch>
    </BrowserRouter>
  );
}
