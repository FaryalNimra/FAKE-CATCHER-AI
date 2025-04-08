import React, { useState } from "react";
import { BsExclamationTriangleFill } from "react-icons/bs"; // 🚨 Importing Alert Icon
import "./About4.scss";

const About4 = () => {
  const [expanded, setExpanded] = useState(null);

  const handleLearnMore = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="about4-container">
      <div className="container">
        {/* Main Heading */}
        <h2 className="section-title">Real World Impact of Deepfake Technology</h2>

        {/* Incident Rows with Marquee Effect */}
        <div className="incident-row">
          <marquee className="incident-marquee" scrollamount="6">
            <BsExclamationTriangleFill className="alert-icon" />
            <span className="alert-text">ALERT:</span>
            2018 - A viral deepfake video of Barack Obama surfaced, created by AI, where he was shown making statements he never actually said. This raised global concerns about political misinformation.
          </marquee>
        </div>

        <div className="incident-row">
          <marquee className="incident-marquee" scrollamount="6">
            <BsExclamationTriangleFill className="alert-icon" />
            <span className="alert-text">ALERT:</span>
            2019 - A deepfake video of rapper Drake was released online, featuring a song he never recorded. This sparked debates about AI misuse in the music industry and copyright violations.
          </marquee>
        </div>

        <div className="incident-row">
          <marquee className="incident-marquee" scrollamount="6">
            <BsExclamationTriangleFill className="alert-icon" />
            <span className="alert-text">ALERT:</span>
            2020 - The U.S. elections witnessed the rise of deepfake videos, spreading political misinformation. Fake clips of candidates swayed public opinion, highlighting the dangers of AI-generated deception.
          </marquee>
        </div>

        {/* Scenarios */}
        <div className="row">
          {/* Scenario 1 */}
          <div className="col-lg-4 col-md-12">
            <div className="scenario-box">
              <img src="/Assests/Obama.png" alt="Obama Deepfake" className="scenario-image" />
              <h4 className="scenario-title">Obama Deepfake (2018)</h4>
              <p className="scenario-text">
                A digitally altered video of Barack Obama demonstrated the potential risks of AI-generated misinformation.
              </p>
              {expanded !== 1 && <div className="learn-more" onClick={() => handleLearnMore(1)}>Learn More</div>}
              {expanded === 1 && (
                <div className="expanded-text">
                  <p>
                    This video highlighted concerns about trust in media and raised alarms about the dangers of political deepfakes.
                  </p>
                  <div className="close-text" onClick={() => handleLearnMore(1)}>Close</div>
                </div>
              )}
            </div>
          </div>

          {/* Scenario 2 */}
          <div className="col-lg-4 col-md-12">
            <div className="scenario-box">
              <img src="/Assests/Fakedrake.png" alt="Fake Drake" className="scenario-image" />
              <h4 className="scenario-title">Fake Drake Song (2019)</h4>
              <p className="scenario-text">
                A deepfake of Drake performing an unauthorized song sparked discussions about AI misuse in the music industry.
              </p>
              {expanded !== 2 && <div className="learn-more" onClick={() => handleLearnMore(2)}>Learn More</div>}
              {expanded === 2 && (
                <div className="expanded-text">
                  <p>
                    This case shed light on copyright concerns and how AI could alter the entertainment industry forever.
                  </p>
                  <div className="close-text" onClick={() => handleLearnMore(2)}>Close</div>
                </div>
              )}
            </div>
          </div>

          {/* Scenario 3 */}
          <div className="col-lg-4 col-md-12">
            <div className="scenario-box">
              <img src="/Assests/Vote.png" alt="Deepfake Election" className="scenario-image" /><br></br>
              <h4 className="scenario-title">Deepfake in Elections (2020)</h4>
              <p className="scenario-text">
                Fake political videos spread misinformation, raising concerns about digital security and media integrity.
              </p>
              {expanded !== 3 && <div className="learn-more" onClick={() => handleLearnMore(3)}>Learn More</div>}
              {expanded === 3 && (
                <div className="expanded-text">
                  <p>
                    The rise of election deepfakes emphasized the urgent need for AI regulation and fact-checking mechanisms.
                  </p>
                  <div className="close-text" onClick={() => handleLearnMore(3)}>Close</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About4;
