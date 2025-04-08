import React from 'react';
import { FaRobot, FaEdit, FaClock, FaShieldAlt } from 'react-icons/fa'; // Importing icons
import './Element9.scss';

const Element9 = () => {
  return (
    <div className="element9-container container">
      <div className="text-center">
        <h2 className="element9-heading">Features of Fake Catcher AI Tool</h2><br></br>
        <p className="element9-paragraph1">
          Detect deepfakes and manipulated content with high <br></br>precision using advanced AI technology.
        </p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="element9-content">
            <h3 className="element9-subheading">Advanced Deepfake Detection</h3>
            <img src="/Assests/Line 13.png" alt="Icon" className="img-fluidn11" />
            <p className="element9-subparagraph">
              Identify AI-generated videos and images with industry-leading accuracy.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="element9-content">
            <h3 className="element9-subheading">Cheap Fake Detection</h3>
            <img src="/Assests/Line 13.png" alt="Icon" className="img-fluidn11" />
            <p className="element9-subparagraph">
              Detect simple media manipulations, such as speed changes and image distortions.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="element9-content">
            <h3 className="element9-subheading">Real-Time Analysis</h3>
            <img src="/Assests/Line 13.png" alt="Icon" className="img-fluidn11" />
            <p className="element9-subparagraph">
              Instantly verify content authenticity and prevent the spread of misinformation.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="element9-content">
            <h3 className="element9-subheading">Privacy & Security</h3>
            <img src="/Assests/Line 13.png" alt="Icon" className="img-fluidn11" />
            <p className="element9-subparagraph">
              Ensure data protection while analyzing content for deepfake manipulation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Element9;
