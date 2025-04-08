import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate hook
import "./About2.scss"; // Ensure the correct path

const About2 = () => {
  const navigate = useNavigate();  // Initialize navigate function

  // Function to handle button click
  const handleLearnMoreClick = () => {
    navigate("/Contact");  // Navigate to /Contact page
  };

  return (
    <div className="about2-container">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-lg-6 col-md-12 text-center">
            <img
              src="/Assests/About2.jpg"
              alt="About Us"
              className="about2-image"
            />
          </div>

          {/* Right Side - Content */}
          <div className="col-lg-6 col-md-12 about2-content">
            <h2 className="about2-title">Our Mission</h2>
            <p className="about2-text">
              At FakeCatcher AI, our mission is to combat digital misinformation by leveraging
              advanced AI-driven deepfake detection technology. We aim to provide a reliable,
              efficient, and accurate solution for identifying manipulated media.
            </p>
            <p className="about2-text">
              Our tool is built for journalists, researchers, and organizations that seek truth
              in the age of AI-generated content. We believe in a future where authenticity matters.
            </p>
            <button className="btn btn-primary" onClick={handleLearnMoreClick}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
