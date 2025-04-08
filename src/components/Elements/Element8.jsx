import React from 'react';
import './Element8.scss'; // Ensure the path is correct

const Element8 = () => {
  return (
    <div className="element8-container container" style={{ marginTop: '100px' }}>
      <div className="text-center">
        <br />
        <h3 className="element8-heading2">Why Choose Us</h3>
        <br />
        <h2 className="element8-heading">
          People trust us because we provide the most <br />
          accurate two-in-one detection tool detection
        </h2>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12 mb-4">
          <div className="element8-content">
            <div className="d-flex align-items-center justify-content-center">
              <img src="/Assests/Icon.png" alt="Icon" className="img-fluidn" />
              <h3 className="element8-subheading">AI-Powered</h3>
            </div>
            <p className="element8-subparagraph">
              Our advanced AI models analyze videos and images to detect deepfakes with high precision.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-4">
          <div className="element8-content">
            <div className="d-flex align-items-center justify-content-center">
              <img src="/Assests/Icon (1).png" alt="Icon" className="img-fluidn" />
              <h3 className="element8-subheading">Real-Time Analysis</h3>
            </div>
            <p className="element8-subparagraph">
              Instantly verify content authenticity and protect yourself from misinformation and digital fraud.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-4">
          <div className="element8-content">
            <div className="d-flex align-items-center justify-content-center">
              <img src="/Assests/Icon (2).png" alt="Icon" className="img-fluidn" />
              <h3 className="element8-subheading">Privacy-Focused</h3>
            </div>
            <p className="element8-subparagraph">
              We ensure secure and confidential deepfake detection without compromising your personal data.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Element8;
