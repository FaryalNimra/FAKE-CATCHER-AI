import React from "react";
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import './About1.scss'; // Ensure the path is correct

const About = () => {
  const navigate = useNavigate();  // Initialize navigate function

  // Function to handle button click
  const handleLearnMoreClick = () => {
    navigate('/Contact');  // Navigate to /Contact page
  };

  return (
    <div className="about-container">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Content */}
          <div className="col-lg-6 col-md-12 about-content">
            <h1 className="about-title">Who We Are?</h1>
            <p className="about-text">
              <strong>FakeCatcher AI</strong> is an advanced <strong>deepfake and cheap fake detection</strong> tool that leverages cutting-edge <strong>AI-powered machine learning</strong> to identify manipulated media.
            </p>
            <p className="about-text">
              Our tool is designed for <strong>researchers, journalists, and forensic experts</strong> to detect <strong>AI-generated faces, altered voices, and synthetic content</strong>. With industry-leading accuracy, FakeCatcher AI helps combat misinformation and ensures digital authenticity.
            </p>
            <div className="text-start">
              {/* Updated button with onClick event */}
              <button className="btn btn-primary" onClick={handleLearnMoreClick}>
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="col-lg-6 col-md-12 text-center">
            <img src="/Assests/About1.jpg" alt="Deepfake Detection Tool - FakeCatcher AI" className="about-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
