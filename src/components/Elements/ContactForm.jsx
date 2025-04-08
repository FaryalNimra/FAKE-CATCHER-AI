import React from "react";
import "./ContactForm.scss"; // Ensure correct path

const ContactForm = () => {
  return (
    <div className="contactform-wrapper">
      <div className="contactform-container">
        <h3 className="contactform-heading">"OR"</h3>
        <h3 className="contactform-heading">Send Us Message</h3>
        <form className="contact-form">
          
          {/* Your Email Field */}
          <div className="form-group">
            <label htmlFor="email">Enter Your Email</label>
            <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
          </div>

          {/* Your Query Dropdown */}
          <div className="form-group">
            <label htmlFor="query">What's Your Query??</label>
            <select id="query" className="form-control" required>
              <option value="">Select an option</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="feedback">Feedback & Suggestions</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label htmlFor="message">Any Additional Comments</label>
            <textarea id="message" className="form-control" rows="6" placeholder="Type your message here..." required></textarea>
          </div>

          {/* Send Button */}
          <div className="form-group text-center">
            <button type="submit" className="btn-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
