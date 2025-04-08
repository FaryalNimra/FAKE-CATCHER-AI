import React from "react";
import { Accordion } from "react-bootstrap";
import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";
import "./FAQ.scss"; // Ensure SCSS file exists

const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="container">
        <h1 className="faq-title">
          <FaQuestionCircle /> Frequently Asked Questions (FAQ)
        </h1>

        {/* FAQ Section - Deepfake */}
        <section className="faq-section">
          <h2 className="faq-subtitle">FAQ - Deepfake</h2>
          <Accordion>
            {[
              {
                question: "What is a deepfake?",
                answer:
                  "A deepfake is an AI-generated fake video or image that swaps faces, voices, or movements, making it look real.",
              },
              {
                question: "How are deepfakes created?",
                answer:
                  "Deepfakes use AI models like GANs, which learn patterns from real footage to generate realistic fakes.",
              },
              {
                question: "Are deepfakes illegal?",
                answer:
                  "Deepfakes are legal in some cases (entertainment, satire) but illegal for fraud, defamation, and misinformation.",
              },
              {
                question: "How can deepfakes be detected?",
                answer:
                  "AI tools analyze facial inconsistencies, unnatural blinking, and digital artifacts to detect deepfakes.",
              },
              {
                question: "What are the risks of deepfakes?",
                answer:
                  "Deepfakes can spread misinformation, damage reputations, and be used for fraud or political manipulation.",
              },
              {
                question: "Can deepfakes be used positively?",
                answer:
                  "Yes! Deepfakes help in movies, gaming, and speech restoration for people with disabilities.",
              },
              {
                question: "How can we prevent deepfake misuse?",
                answer:
                  "Stronger AI detection tools, digital watermarks, and strict regulations help combat deepfake threats.",
              },
            ].map((faq, index) => (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>
                  <FaChevronDown className="icon" /> {faq.question}
                </Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </section>

        {/* FAQ Section - CheapFake */}
        <section className="faq-section">
          <h2 className="faq-subtitle">FAQ - CheapFake</h2>
          <Accordion>
            {[
              {
                question: "What is a CheapFake?",
                answer:
                  "A CheapFake is a fake video altered using simple edits like speed changes, cropping, or misleading captions.",
              },
              {
                question: "How are CheapFakes made?",
                answer:
                  "Unlike deepfakes, CheapFakes are edited manually using basic software, without AI or deep learning.",
              },
              {
                question: "Are CheapFakes harmful?",
                answer:
                  "Yes! CheapFakes can spread misinformation, especially in politics, and manipulate public opinion.",
              },
              {
                question: "How can CheapFakes be detected?",
                answer:
                  "Look for unnatural movements, strange audio changes, and verify the original video source.",
              },
              {
                question: "Where are CheapFakes used?",
                answer:
                  "CheapFakes are common in fake news, viral hoaxes, and social media misinformation campaigns.",
              },
              {
                question: "How do CheapFakes impact trust?",
                answer:
                  "They make it harder to believe real footage, leading to distrust in media and journalism.",
              },
              {
                question: "How can we stop CheapFakes?",
                answer:
                  "Media literacy, fact-checking tools, and AI detection can help counter CheapFake misinformation.",
              },
            ].map((faq, index) => (
              <Accordion.Item eventKey={index + 7} key={index + 7}>
                <Accordion.Header>
                  <FaChevronDown className="icon" /> {faq.question}
                </Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
