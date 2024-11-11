// App.js
import React from 'react';

import { useSelector } from 'react-redux';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import PaymentGateway from './components/PaymentGateway';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Refer from './components/Refer';

const App = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <BrowserRouter 
       future={{
        v7_startTransition: true,
      }}
      >
        {user?<Header />:""}
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/payment-gateway" element={<PaymentGateway/>} />
          <Route path="/refer" element={<Refer />} />
        </Routes>
      </BrowserRouter>

      {/* <Header />
      {user ? <p>You are logged in as {user.username}</p> : <Login />} */}
    </div>
  );
};

export default App;
