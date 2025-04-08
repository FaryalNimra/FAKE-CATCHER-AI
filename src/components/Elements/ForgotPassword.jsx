import React, { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import "./SignUp.scss";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Password reset link sent to", email);
  };

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
          <h2>Forgot Password? <br /> Enter your email to recover your password</h2>
        </div>

        {/* Right Side - Forgot Password Form */}
        <div className="signup-right">
          <h1 className="signup-title">Recover Password</h1>
          <p className="signup-text">
            Remembered your password? <a href="/SignIn">Log In</a>
          </p>

          <form className="signup-form" onSubmit={handleSubmit}>
            {/* Email Field */}
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control mt-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Send Reset Link
            </button>

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
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
