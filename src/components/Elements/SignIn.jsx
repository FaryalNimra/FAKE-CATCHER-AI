import React, { useState } from "react";
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import "./SignIn.scss";

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="signin-container">
      <div className="signin-box">
        {/* Left Side - Background Image & Text */}
        <div
          className="signin-left"
          style={{
            backgroundImage: "url('/Assests/eye-4453129_1280.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2>Capturing Moments, <br /> Creating Memories</h2>
        </div>

        {/* Right Side - Form */}
        <div className="signin-right">
          <h1 className="signin-title">Create an Account</h1>
          <p className="signin-text">
            Already have an account? <a href="/SignUp">Log in</a>
          </p>

          <form className="signin-form">
            {/* Name Fields */}
            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder="First Name" className="form-control" />
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="Last Name" className="form-control" />
              </div>
            </div>

            {/* Email Field */}
            <input type="email" placeholder="Email" className="form-control mt-3" />

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

            {/* Terms Checkbox */}
            <div className="terms mt-3">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the <a href="/PrivacyPolicy.pdf">Terms & Conditions</a>
              </label>
            </div>

            {/* Create Account Button */}
            <button className="btn btn-primary w-100 mt-3">Create Account</button>

            {/* Divider */}
            <div className="divider">Or register with</div>

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

export default SignIn;
