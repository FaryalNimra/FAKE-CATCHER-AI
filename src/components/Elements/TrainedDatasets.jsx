import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap Import
import { FaDatabase, FaImage, FaUserSecret, FaRobot, FaFingerprint } from "react-icons/fa"; // Import Icons
import "./TrainedDatasets.scss"; // Custom SCSS for styling

const datasets = [
  { 
    name: "FaceForensics++", 
    description: "A dataset for detecting face manipulations, including real and deepfake videos.",
    icon: <FaImage />,
    link: "https://github.com/ondyari/FaceForensics"
  },
  { 
    name: "FakeCeleb", 
    description: "AI-generated and real celebrity images for deepfake detection.",
    icon: <FaUserSecret />,
    link: "https://github.com/yuezunli/celeb-deepfakeforensics"
  },
  { 
    name: "DFDC Preview", 
    description: "A Facebook dataset for deepfake detection with real and manipulated videos.",
    icon: <FaRobot />,
    link: "https://paperswithcode.com/paper/the-deepfake-detection-challenge-dfdc-preview"
  },
  { 
    name: "Columbia Splicing", 
    description: "A dataset focused on detecting image splicing and photo manipulation.",
    icon: <FaFingerprint />,
    link: "https://www.ee.columbia.edu/ln/dvmm/downloads/AuthSplicedDataSet/AuthSplicedDataSet.htm"
  },
  { 
    name: "CASIA", 
    description: "Designed for image forgery detection, including Soriginal and tampered images.",
    icon: <FaDatabase />,
    link: "https://github.com/namtpham/casia2groundtruth"
  }
];

const TrainedDatasets = () => {
  return (
    <div className="container-fluid py-5 datasets-container">
      <div className="container">
        <h2 className="datasets-title text-center mb-4">State-of-the-Art Datasets for Model Training</h2>
        <div className="row">
          {datasets.map((dataset, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="dataset-item text-center p-4 shadow">
                <div className="dataset-icon">{dataset.icon}</div>
                <h3 className="dataset-name">{dataset.name}</h3>
                <p className="dataset-description">{dataset.description}</p>
                <a href={dataset.link} target="_blank" rel="noopener noreferrer" className="dataset-link">
                  View Dataset
                </a> {/* Link Added */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainedDatasets;
