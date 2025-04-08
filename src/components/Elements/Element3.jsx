import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Element3.scss'; // Ensure correct path

const stats = [
  { value: "65%", text: "Deepfake detection tools fail to accurately identify both deepfakes and cheap fakes." },
  { value: "90%", text: "Manipulated media online consists of cheap fakes, which many AI tools fail to detect." },
  { value: "$250M", text: "Lost annually due to misinformation spread by undetected deepfake content." },
];

const Element3 = () => {
  return (
    <div className="element3-container container">
      <div className="row justify-content-center">
        {stats.map((stat, index) => (
          <div key={index} className="col-md-4 element3-col">
            <div className="element3-card">
              <h2 className="element3-heading">{stat.value}</h2>
              <p className="element3-paragraph">{stat.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Element3;
