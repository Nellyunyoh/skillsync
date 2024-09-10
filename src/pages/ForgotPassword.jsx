// import React from 'react'
import "./styles.css";
import profile from "../assets/images/profileimg.png";
import logomark from "../assets/images/Logomark.png";
import logo from "../assets/images/logo1.png";
// import {Link} from 'react-router-dom';

export const ForgotPassword = () => {
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
        <h2>Welcome back</h2>
        <p>Welcome back, please enter your details</p>

        <form action="#">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johnmerry@gmail.com"
            required
          />

          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
