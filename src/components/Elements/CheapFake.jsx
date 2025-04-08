import React, { useState } from "react";
import { BsExclamationTriangleFill } from "react-icons/bs"; // 🚨 Importing Alert Icon
import "./CheapFake.scss"; // Importing SCSS file

const CheapFake = () => {
  const [expanded, setExpanded] = useState(null);

  const handleLearnMore = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="cheapfake-container">
      <div className="container">
        {/* Main Heading */}
        <h2 className="section-title">Cheap Fake Real Words Scams&Incidents</h2>


        <div className="incident-row">
          <marquee className="incident-marquee" scrollamount="6">
            <BsExclamationTriangleFill className="alert-icon" />
            <span className="alert-text">ALERT:</span>
            2022 - A fake video of Cristiano Ronaldo endorsing an investment scam misled his fans into financial losses.
          </marquee>
        </div>

       
        
        <div className="incident-row">
          <marquee className="incident-marquee" scrollamount="6">
            <BsExclamationTriangleFill className="alert-icon" />
            <span className="alert-text">ALERT:</span>
            2024 - A deepfake video of Shah Rukh Khan supporting a political party led to major controversy.
          </marquee>
        </div>

        <div className="incident-row">
          <marquee className="incident-marquee" scrollamount="6">
            <BsExclamationTriangleFill className="alert-icon" />
            <span className="alert-text">ALERT:</span>
            2024 - A low-quality deepfake of Taylor Swift promoting a fake perfume brand scammed thousands of fans.
          </marquee>
        </div>

        {/* Cheap Fake Scenarios */}
        <div className="row">
          {/* Scenario 1 - Elon Musk Crypto Scam */}
          <div className="col-lg-4 col-md-6">
            <div className="scenario-box">
              <img src="/Assests/Elon Musk.png" alt="Elon Musk Crypto Scam" className="scenario-image" /><br></br>
              <h4 className="scenario-title">Elon Musk Crypto Scam (2021)</h4>
              <p className="scenario-text">A cheap fake deepfake of Elon Musk promoting a crypto scam misled thousands.</p>
              {expanded !== 1 && <div className="learn-more" onClick={() => handleLearnMore(1)}>Learn More</div>}
              {expanded === 1 && (
                <div className="expanded-text">
                  <p>This poorly edited deepfake used old video clips with AI-generated voice to trick investors.</p>
                  <div className="close-text" onClick={() => handleLearnMore(1)}>Close</div>
                </div>
              )}
            </div>
          </div>

          {/* Scenario 2 - Ronaldo Investment Scam */}
          <div className="col-lg-4 col-md-6">
            <div className="scenario-box">
              <img src="/Assests/Cristiano.png" alt="Cristiano Ronaldo Scam" className="scenario-image" /><br></br>
              <h4 className="scenario-title">Cristiano Ronaldo Scam (2022)</h4>
              <p className="scenario-text">A fake video of Ronaldo endorsing a fraudulent investment scheme misled his fans.</p>
              {expanded !== 2 && <div className="learn-more" onClick={() => handleLearnMore(2)}>Learn More</div>}
              {expanded === 2 && (
                <div className="expanded-text">
                  <p>The deepfake had poor lip-syncing but still fooled many fans into investing in a scam.</p>
                  <div className="close-text" onClick={() => handleLearnMore(2)}>Close</div>
                </div>
              )}
            </div>
          </div>

          {/* Scenario 3 - Tom Cruise Magic Trick */}
          <div className="col-lg-4 col-md-6">
            <div className="scenario-box">
              <img src="/Assests/Tom cruises.png" alt="Tom Cruise Deepfake" className="scenario-image" />
              <h4 className="scenario-title">Tom Cruise Magic Tricks (2023)</h4>
              <p className="scenario-text">A viral AI-generated video of Tom Cruise performing magic tricks confused millions.</p>
              {expanded !== 3 && <div className="learn-more" onClick={() => handleLearnMore(3)}>Learn More</div>}
              {expanded === 3 && (
                <div className="expanded-text">
                  <p>The deepfake was part of an experiment showing how easily celebrities can be faked.</p>
                  <div className="close-text" onClick={() => handleLearnMore(3)}>Close</div>
                </div>
              )}
            </div>
          </div>

          {/* Scenario 4 - Fake News Anchor */}
          <div className="col-lg-4 col-md-6">
            <div className="scenario-box">
              <img src="/Assests/men-reading-newspaper-isolated-white-background.jpg" alt="Fake News Anchor" className="scenario-image" />
              <h4 className="scenario-title">Fake News Anchor (2023)</h4>
              <p className="scenario-text">A deepfake of a news anchor spreading false war news created mass panic.</p>
              {expanded !== 4 && <div className="learn-more" onClick={() => handleLearnMore(4)}>Learn More</div>}
              {expanded === 4 && (
                <div className="expanded-text">
                  <p>The fake broadcast was designed to manipulate public opinion and create chaos.</p>
                  <div className="close-text" onClick={() => handleLearnMore(4)}>Close</div>
                </div>
              )}
            </div>
          </div>

          {/* Scenario 5 - Shah Rukh Khan Political Fake */}
          <div className="col-lg-4 col-md-6">
            <div className="scenario-box">
              <img src="/Assests/Shahruk Khan.png" alt="SRK Political Deepfake" className="scenario-image" />
              <h4 className="scenario-title">Shah Rukh Political Fake (2024)</h4>
              <p className="scenario-text">A manipulated deepfake of SRK supporting a political party sparked controversy.</p>
              {expanded !== 5 && <div className="learn-more" onClick={() => handleLearnMore(5)}>Learn More</div>}
              {expanded === 5 && (
                <div className="expanded-text">
                  <p>The fake video was edited to look like an official endorsement, misleading millions.</p>
                  <div className="close-text" onClick={() => handleLearnMore(5)}>Close</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheapFake;
