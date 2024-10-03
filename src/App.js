import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import Payment from './pages/Payment';
import Address from './pages/Address';
import Account from './pages/Account';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/address" element={<Address />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
