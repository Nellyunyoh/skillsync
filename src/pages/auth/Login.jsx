// import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import logomark from "../../assets/images/Logomark.png";
import logo from "../../assets/images/logo1.png";
import profile from "../../assets/images/profileimg.png";
import "../css/auth.css";

function Login() {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/admin");
  }
  return (
    <div>
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

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                placeholder="Ex: johnmerry@mail.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                className="form-input"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="login">
              Login
            </button>

            <div className="forgot-question">
              <Link to="/ForgotPassword" className="forgot-password">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
