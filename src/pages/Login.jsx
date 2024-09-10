// import React from 'react';
import "./styles.css";
import profile from "../assets/images/profileimg.png";
import logomark from "../assets/images/Logomark.png";
import logo from "../assets/images/logo1.png";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/admin")
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
                type="email"
                id="email"
                name="email"
                placeholder="johnmerry@gmail.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password"
                name="password"
                placeholder="1234@5"
                required
              />
            </div>

            {/* <Link to="/Admin"></Link> */}
            <button type="submit" className="login">Login</button>

            {/* <input type="submit" value="Login" /> */}

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
