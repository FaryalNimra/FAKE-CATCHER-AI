import React, { useState } from "react";
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import "./SignUp.scss";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="signup-container">
      <div className="signup-box">
        {/* Left Side - Background Image & Text */}
        <div
          className="signup-left"
          style={{
            backgroundImage: "url('/Assests/eye-4453129_1280.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2>Welcome Back!<br /> Log in to Continue</h2>
        </div>

        {/* Right Side - Login Form */}
        <div className="signup-right">
          <h1 className="signup-title">Log In</h1>
          <p className="signup-text">
            Don't have an account? <a href="/SignIn">Sign Up</a>
          </p>

          <form className="signup-form">
            {/* Username Field */}
            <input type="text" placeholder="Username" className="form-control mt-3" />

            {/* Password Field */}
            <div className="password-field mt-3">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="form-control"
              />
              <span onClick={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Login Button */}
            <button className="btn btn-primary w-100 mt-3">Log In</button>

            {/* Divider */}
            <div className="divider">Or log in with</div>

            {/* Social Login Buttons */}
            <div className="social-buttons">
              <button className="btn btn-outline-light">
                <FaGoogle /> Google
              </button>
              <button className="btn btn-outline-light">
                <FaApple /> Apple
              </button>
            </div>
          </form>

          {/* Forgot Password Option */}
          <div className="forgot-password mt-3">
            <a href="/ForgotPassword">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
