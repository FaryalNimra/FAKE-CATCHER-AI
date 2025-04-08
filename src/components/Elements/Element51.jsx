import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Element51.scss'; // Ensure the path is correct

const Element51 = () => {
  return (
    <div className="element51-container container">
      <div className="row">
        
        <div className="col-md-6 d-flex flex-column align-items-center">
          <h2 className="element51-heading">See participants & Assign actions fast</h2>
          <p className="element51-paragraph">
          Get real-time data on participants with this platform, offering detailed insights into attendance, engagement, and their roles
          </p>
          <button className="btn btn-primary btn-left-align">Get a demo now</button>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src="/Assests/Img.png" alt="Laptop" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Element51;
