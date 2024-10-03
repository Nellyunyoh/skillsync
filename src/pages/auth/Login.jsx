// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logomark from "../../assets/images/Logomark.png";
import logo from "../../assets/images/logo1.png";
import profile from "../../assets/images/profileimg.png";
import "../css/auth.css";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate("/admin");
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={profile} alt="Profile" />
        <div className="overlay">
          <div className="logo-text">
            <img src={logomark} alt="Logo" />
            <h1>Catalog</h1>
          </div>
        </div>
      </div>

     <div className="nelly">
     <div className="login-container">
        <img src={logo} alt="Logo" />
        <h2>Welcome back</h2>
        <p>Please enter your details</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="form-input"
              type="email"
              id="email"
              placeholder="Ex: johnmerry@mail.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              className="form-input"
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />

            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>

          <button type="submit" className="logins">
            Login
          </button>

          <div className="forgot-question">
            <Link to="/forgot-password" className="forgot-password">
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
