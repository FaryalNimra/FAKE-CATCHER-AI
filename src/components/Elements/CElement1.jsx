import React from 'react';
import { FaWhatsapp, FaEnvelope, FaFacebook } from 'react-icons/fa'; // Importing Icons
import './CElement1.scss'; // Ensure the path is correct

const CElement1 = () => {
  return (
    <div className="celement2-container container">
      <div className="text-center">
        <h2 className="celement2-heading">Contact us</h2>
        <p className="celement2-paragraph">
          With advanced AI-powered detection, FakeCatcher identifies deepfake content with high accuracy.<br />
          Detect manipulated images and videos in just a few seconds.
        </p>
      </div>

      {/* 3 Divs in One Row */}
      <div className="row contact-row">
        {/* Call Us */}
        <div className="col-md-4">
          <div className="celement2-content">
            <img src="/Assests/phone-2.png" alt="Call Icon" className="img-fluidh" />
            <div>
              <h3 className="celement2-subheading">Call us</h3>
              <p className="celement2-subparagraph">
                <a href="tel:+923026130237">+92-302-6130237</a><br />
                <a href="tel:+923369629878">+92-336-9629878</a>
              </p>
            </div>
          </div>
        </div>

        {/* Email Us */}
        <div className="col-md-4">
          <div className="celement2-content">
            <img src="/Assests/Icon (4).png" alt="Email Icon" className="img-fluidh" />
            <div>
              <h3 className="celement2-subheading">Email us</h3>
              <p className="celement2-subparagraph">
                <a href="mailto:fakecatcherai@gmail.com">fakecatcherai@gmail.com</a><br />
                <a href="mailto:catcheraifake@gmail.com">catcheraifake@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Links (Instead of Address) */}
        <div className="col-md-4">
          <div className="celement2-content">
            <div>
              <h3 className="celement2-subheading">Follow us</h3>
              
              {/* Social Links with React Icons */}
              <div className="social-links">
                <a href="https://wa.me/+923026130237" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="social-icon whatsapp" />
                </a>
                <a href="mailto:fakecatcherai@gmail.com">
                  <FaEnvelope className="social-icon email" />
                </a>
                <a href="https://www.facebook.com/fakecatcherai" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="social-icon facebook" />
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CElement1;
