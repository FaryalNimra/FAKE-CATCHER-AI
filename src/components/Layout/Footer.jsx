import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo Section */}
          <div className="col-md-3 col-lg-2 logo-box">
            <img src="\Assests\footerimage.png" alt="Logo" className="logo-image" /><br></br>
            {/* ✅ Social Media Links Below the Logo */}
            <div className="social-icons">
              <a href="https://www.linkedin.com/company/fake-catcher-ai-deepfake-and-cheapfake-detector/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="social-icon" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61574791244051" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="social-icon" />
              </a>
              <a href="https://wa.me/+923369629878" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="social-icon" />
              </a>
            </div>
          </div>

          {/* Content Boxes */}
          <div className="col-md-9 col-lg-10 box-content d-flex justify-content-between">
            <div className="box">
              <h4>Company</h4>
              <Link to="/About"><p>About Us</p></Link>
              <Link to="/Contact"><p>Contact Us</p></Link>
              <Link to="/Team"><p>Our Team</p></Link>
            </div>
            <div className="box">
              <h4>Product</h4>
              <Link to="/Product"><p>Our Solution</p></Link>
              <Link to="/About"><p>Features</p></Link>
              <Link to="/Pricing"><p>Pricing</p></Link>
            </div>
            <div className="box">
              <h4>Legal Info</h4>
              <Link to="/Datasets"><p>Our Datasets</p></Link>
              <Link to="/About"><p>Incidents & Scams</p></Link>
              <a href="/PrivacyPolicy.pdf" target="_blank" rel="noopener noreferrer">
                <p>Privacy & Policy</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
