import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/a.svg';

const Header = () => (
  <header className="header">
    
    <nav>
      <ul><div className='container'>
      <img src={logo} className="a.svg resized-image" />
      <p className="text">
        <li><b><Link to="/">Home</Link></b></li>
        <li><b><Link to="/Ticket">Ticket</Link></b></li>
        <li><b><Link to="/Service">Service</Link></b></li>
        <li><b><Link to="/About_Us">About Us</Link></b></li>
        <li><b><Link to="/Our_Clients">Our Clients</Link></b></li>
        <li><b><Link to="/Contact_Us">Contact Us</Link></b></li>
        <li><b><Link to="/Request_a_Quote">Request a Quote</Link></b></li>
        <li><b><div className="border-text">
        <Link to="/Login"><p className='textColor1'>Login</p></Link></div></b></li>
      </p>
      </div></ul>
    </nav>
  </header>
);

export default Header;