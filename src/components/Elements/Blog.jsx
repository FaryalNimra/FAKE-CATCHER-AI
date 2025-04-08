import React from "react";
import "./Blog.scss";

const Blog = () => {
  return (
    <div className="blog">

      {/* Awareness Section */}
      <section className="blog-section">
        <h2 style={{ fontSize: "1.8rem" }}>Want to Learn more??</h2>
        <p>
          The rise of cheapfakes highlights the importance of media literacy. To combat misinformation, we must develop critical thinking skills and verify information before sharing it online.
        </p>
        <p>Some ways to stay informed include:</p>
        <ul>
          <li>✔️ Checking reliable news sources for fact-checked reports.</li>
          <li>✔️ Using fact-checking websites like Snopes, PolitiFact, or FactCheck.org.</li>
          <li>✔️ Analyzing videos for sudden jumps, altered audio, and other manipulation signs.</li>
          <li>✔️ Encouraging media literacy programs in schools and workplaces.</li>
        </ul>
        <p>
          As technology advances, new forms of digital manipulation will continue to emerge. By staying vigilant and questioning the content we consume, we can help reduce the spread of misinformation.
          Want to protect your organization from deepfake fraud?  
          <a href="/contact" className="contact-link"><b> Contact us today </b></a> to explore AI-powered security solutions and safeguard your business against emerging digital threats.
        </p>
      </section>
    </div>
  );
};

export default Blog;
