// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import eImage from '../assets/e.png';
import '../pages/Home.css';

const Login = ({ onOtpRequested }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleRequestOtp = async () => {
    try {
      const response = await axios.post('/api/request-otp', { phoneNumber });
      if (response.data.success) {
        onOtpRequested();
      } else {
        setError(response.data.message || 'Error requesting OTP');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className='container'>
       <p className='center-align'>
    <h2>Enter your Details...</h2>
    You'll need to log in to access your Aik-tech account
    </p><p className='center-align'>
      <h2 className='left-align'>Phone Number<sup style={{color: 'red'}}>*</sup></h2></p>

      <p className='center-align'><input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter Phone Number here...." 
        style={{ width: '50%', padding:'10px', boxSizing:'border-box'}}/></p>
    <p className='center-align '>
      <button onClick={handleRequestOtp}>Send OTP</button>
      {error && <p>{error}</p>}</p>
      
      <p className='right-align'><img src={eImage} alt="Image" className="e.png"  style={{ width: '40%', height: 'auto' }} /></p>
      
    </div>
  );
};

export default Login;


/*const Login = () => (
  <div>
    <h1 className='center-align'>Login</h1>
    <p className='left-align'>
    <h2>Enter your Details...</h2>
    You'll need to log in to access your Aik-tech account
    <h2>Phone number</h2>
    </p>
  </div>
);

export default Login;*/