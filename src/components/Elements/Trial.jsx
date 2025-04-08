import React, { useState } from "react";
import "./Trial.scss";

const Trial = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResult(null); // Reset result when a new file is uploaded
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setResult(null); // Reset result on file drop
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="trial-container">
      <div className="trial-content">
        <div className="left-section">
          <h1 className="trial-heading">Image Forgery Detection</h1>
          <p className="trial-paragraph">Upload an image to detect if it's a Deepfake or Cheapfake.</p>

          <div
            className="drag-drop-zone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <p>Drag & Drop your image here</p>
            <p>or</p>
            <label htmlFor="file-upload" className="file-upload-label">
              Choose Image
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="trial-file-upload"
              onChange={handleFileChange}
            />
          </div>

          <button className="trial-upload-btn" onClick={handleUpload}>
            Detect Forgery
          </button>
        </div>

        <div className="right-section">
          {loading ? (
            <div className="loader"></div>
          ) : (
            // Only show the video by default if no file is uploaded
            !file ? (
              <div className="video-preview">
                <video width="100%" height="100%" controls autoPlay style={{ marginTop: "25px" }}>
                  <source src="/Assests/trevor_sesli.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <p className="demo-text">
                  <span>Use this Demo video to understand how the tool works</span>
                </p>
              </div>
            ) : (
              // Show the results after the file is uploaded
              result && (
                <div
                  className="trial-result"
                  style={{
                    opacity: result ? 1 : 0,
                    background: 'linear-gradient(45deg, #ff9e50, #fbc2d5)', // Lighter gradient
                    color: '#fff', // Keep text white for readability
                    borderRadius: '10px',
                    padding: '20px',
                    marginTop: '20px',
                    transform: 'translateY(-30px)',
                    animation: 'slideIn 0.5s ease-out forwards',
                  }}
                >
                  <div
                    className="result-heading"
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '15px',
                    }}
                  >
                    Detection Result
                  </div>
                  <div
                    className="result-details"
                    style={{
                      fontSize: '1rem',
                      color: '#f1f1f1', // Light text for better readability
                    }}
                  >
                    <p style={{ marginBottom: '10px' }}>
                      <strong>Status:</strong> <span className="fake-type" style={{ fontWeight: 'bold', color: 'red' }}>{result.prediction}</span>
                    </p>
                    <p style={{ marginBottom: '10px' }}>
                      <strong>Fake Type:</strong> <span className="fake-type" style={{ fontWeight: 'bold', color: 'red' }}>{result.fake_type}</span>
                    </p>
                    <p style={{ marginBottom: '10px' }}><strong>Deepfake Confidence :</strong> {result.deepfake_confidence_before}</p>
                    <p style={{ marginBottom: '10px' }}><strong>Deepfake Confidence :</strong> {result.deepfake_confidence_adjusted}</p>
                    <p style={{ marginBottom: '10px' }}><strong>Cheapfake Confidence:</strong> {result.cheapfake_confidence_before}</p>
                    <p style={{ marginBottom: '10px' }}><strong>Cheapfake Confidence:</strong> {result.cheapfake_confidence_adjusted}</p>
                    <p style={{ marginBottom: '10px' }}><strong>Faces Detected:</strong> {result.faces_detected}</p>
                    <p style={{ marginBottom: '10px' }}>
                      <strong>View More: </strong> 
                      <a 
                        href="/Assests/Deepfakes_vs_Cheapfakes_Guide.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ color: 'yellow', textDecoration: 'underline' }}
                      >
                        Click on link
                      </a>
                    </p>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Trial;
