import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import logo from "../../assets/images/image 21 copy.png";
import profile from "../../assets/images/profileimg.png";
import "../css/auth.css";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);

      const response = await axios.get("http://localhost:3000/users");
      const user = response.data?.find((item) => item.email === data.email && item.password === data.password)

      if (user) {
        console.log("Login successful!");

        navigate("/admin");
      } else {
        alert("Invalid email or password");
      }
    } catch (err) {
      console.error("Error during login:", err);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={profile} alt="Profile" />
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
