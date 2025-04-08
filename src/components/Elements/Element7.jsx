import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Element7.scss'; // Ensure the path is correct

const Element7 = () => {
  return (
    <div className="element7-container container">
      <div className="text-center">
        <p className="element7-paragraph">OUR SERVICES AND PLANS (COMING SOON)</p>
        <h3 className="element7-heading12">
          We offer a comprehensive meeting<br /> platform designed for your needs.
        </h3>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="element7-new-form1">
            <p className="element7-new-section-paragraph">OFFER FREE FOR 3 MONTHS</p>
            <h3 className="element7-new-heading">For 1 licence</h3>
            <div className="element7-new-spacer"></div>
            <button className="btn btn-primary">
              Start Free Trial <FaArrowRight className="button-icon" />
            </button><br />
            <p className="element7-new-section-paragraph black-text">2 months free, after X €/<br />months</p>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="element7-new-form">
            <p className="element7-new-section-paragraph">THE OFFER S (SMALL)</p>
            <h3 className="element7-new-heading">For 3 licences</h3>
            <div className="element7-new-spacer"></div>
            <button className="btn btn-primary">
              Start Free Trial <FaArrowRight className="button-icon" />
            </button><br />
            <p className="element7-new-section-paragraph black-text">2 months free, after X €/<br />months</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="element7-new-form">
            <p className="element7-new-section-paragraph">THE OFFER M (MEDIUM)</p>
            <h3 className="element7-new-heading">For 5 licences</h3>
            <div className="element7-new-spacer"></div>
            <button className="btn btn-primary">
              Start Free Trial <FaArrowRight className="button-icon" />
            </button><br />
            <p className="element7-new-section-paragraph black-text">2 months free, after X €/<br />months</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="element7-new-form">
            <p className="element7-new-section-paragraph">THE OFFER L (LARGE)</p>
            <h3 className="element7-new-heading">For 15 licences</h3>
            <div className="element7-new-spacer"></div>
            <button className="btn btn-primary">
              Start Free Trial <FaArrowRight className="button-icon" />
            </button><br />
            <p className="element7-new-section-paragraph black-text">2 months free, after X €/<br />months</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="element7-new-form">
            <p className="element7-new-section-paragraph">THE OFFER XL (X LARGE)</p>
            <h3 className="element7-new-heading">For 50 licences</h3>
            <div className="element7-new-spacer"></div>
            <button className="btn btn-primary">
              Start Free Trial <FaArrowRight className="button-icon" />
            </button><br />
            <p className="element7-new-section-paragraph black-text">2 months free, after X €/<br />months</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="element7-new-form">
            <p className="element7-new-section-paragraph">THE OFFER XL (X LARGE)</p>
            <h3 className="element7-new-heading">For 50 licences</h3>
            <div className="element7-new-spacer"></div>
            <button className="btn btn-primary">
              Start Free Trial <FaArrowRight className="button-icon" />
            </button><br />
            <p className="element7-new-section-paragraph black-text">2 months free, after X €/<br />months</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Element7;
