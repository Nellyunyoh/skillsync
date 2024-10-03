// import React, { useState } from 'react';
import "../css/auth.css";
import profile from "../../assets/images/profileimg.png";
import logomark from "../../assets/images/Logomark.png";
import logo from "../../assets/images/logo1.png";
import { useState } from "react";

export const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setStep(2); 
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
   
    setStep(3); 
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    
    alert("Password reset successful. Redirecting to login.");
    window.location.href = "/login"; 
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={profile} alt="" />
        <div className="overlay">
          <div className="logo-text">
            <img src={logomark} alt="Logo" />
            <h1>Catalog</h1>
          </div>
        </div>
      </div>

      <div className="login-container">
        <img src={logo} alt="Logo" />
        {step === 1 && (
          <div>
            <h2>Forgot Password</h2>
            <p>Enter your email to reset your password</p>
            <form onSubmit={handleEmailSubmit}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johnmerry@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input type="submit" value="Send" className="logins"/>
            </form>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2>Enter OTP</h2>
            <p>We have sent a 4-digit code to your email. Enter it below.</p>
            <form onSubmit={handleOtpSubmit}>
              <label htmlFor="otp">OTP</label>
              <input
                type="text"
                id="otp"
                name="otp"
                placeholder="Enter OTP"
                maxLength="4"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <input type="submit" value="Verify OTP" className="logins" />
            </form>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2>Reset Password</h2>
            <p>Enter your new password below</p>
            <form onSubmit={handlePasswordSubmit}>
              <label htmlFor="new-password">New Password</label>
              <input
                type="password"
                id="new-password"
                name="new-password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <input type="submit" value="Reset Password" className="logins"/>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
