import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Element.scss'; // Ensure the path is correct

const Element = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const containerStyle = {
    backgroundImage: "url('/Assests/Vote.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    minHeight: '500px',
    position: 'relative',
  };

  const handleButtonClick = () => {
    navigate('/Product'); // Redirects to the Product page
  };

  return (
    <div style={containerStyle} className="element-container d-flex justify-content-center align-items-center">
      <div className="overlay"></div>
      <div className="text-center">
        <h1 className="element-heading">
          Manage all your moments,
          <br />
          with our solution
        </h1>
        <p className="element-paragraph">Manage and Detect Deepfake & CheapFake.</p>
        <button 
          className="element-button btn btn-dark" 
          onClick={handleButtonClick} // Apply the onClick handler
        >
          Get a Free Demo Now
        </button>
      </div>
    </div>
  );
};

export default Element;
