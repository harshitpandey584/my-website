import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="grid-container">
    <div className='left-align'>About Us </div>
    <div className='center-align'>Useful Link </div> 
    <div className='right-align'>Contact </div>
    </div>
    <br/>
    <div className="grid-container">
      <div className='left-align'>Just like you, we have <br/>managed our retail stores. 
        <br/>We understand how difficult<br/>it is to maintain and build<br/> 
        tech while running operations. 
        <br/>That is why we present you <br/>AikTech.
        With Aik, you can build <br/>yourself custom tech solutions<br/>
        instantly to get started.
        <br/> Add Features as you<br/>grow your business.
        <br/> Billing to Mobile Application, 
        <br/>we take care of everything<br/>
        so that you can focus on <br/>doing what you do best - 
      <br/>Delight your customers <br/>
      and grow your Business.</div>
      <div className='center-align'>About Us<br/>Privacy Policy<br/>Contact Information</div>
      <div className='right-align'>E-mail us at<br/>care@aiktech.in</div>
    </div>

    
    <p>&copy; Aik-tech Private Limited 2024.</p>
  </footer>
);

export default Footer;