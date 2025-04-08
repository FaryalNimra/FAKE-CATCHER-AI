import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Element4.scss'; // Ensure the path is correct
import { GoArrowRight } from 'react-icons/go'; // Import GoArrowRight icon

const Element4 = () => {
  return (
    <div className="element4-container container">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          {/* Embed the video link */}
          <iframe 
            width="100%" 
            height="300" 
            src="/Assests/trevor_sesli.mp4" // Replace with actual video link
            title="Fake Catcher AI Tool Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-start">
          <h2 className="element4-heading">Detect Deepfakes with Our Advanced AI Tool</h2>
          <p className="element4-paragraph">
            Leverage cutting-edge AI technology to detect deepfakes and manipulated media with high accuracy. Our platform provides instant analysis to ensure content authenticity.
          </p>
          <a href="/Product" className="demo-link d-inline-flex align-items-center text-primary mt-3">
            Get a Demo now <GoArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Element4;
