import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About_Us from './pages/About_Us';
import Contact_Us from './pages/Contact_Us';
import Our_Clients from './pages/Our_Clients';
import Request_a_Quote from './pages/Request_a_Quote';
import Service from './pages/Service';
import Ticket from './pages/Ticket';
import Login from './pages/Login';
import './App.css';

const App = () => (
  <Router>
    <div className="App Home">
    <h2 className='right-align'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ticket" element={<Ticket />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/About_Us" element={<About_Us />} />
          <Route path="/Our_clients" element={<Our_Clients />} />
          <Route path="/Contact_Us" element={<Contact_Us />} />
          <Route path="/Request_a_Quoute" element={<Request_a_Quote />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/getstarted" element={<getstarted />} />
          
        </Routes>
      </main>
      <Footer />
    </h2></div>
  </Router>
);export default App;