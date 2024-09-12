// src/components/OtpInput.js
import React, { useState } from 'react';
import axios from 'axios';

const otp = ({ phoneNumber }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('/api/verify-otp', { phoneNumber, otp });
      if (response.data.success) {
        setSuccess('OTP Verified Successfully');
      } else {
        setError(response.data.message || 'Error verifying OTP');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="OTP"
      />
      <button onClick={handleVerifyOtp}>Verify OTP</button>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </div>
  );
};

export default otp;