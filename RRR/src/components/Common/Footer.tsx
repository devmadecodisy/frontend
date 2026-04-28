import React from 'react';
import '../../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Platform</h4>
            <p>
              A comprehensive mutual fund investment platform providing analysis,
              recommendations, and portfolio management tools.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/investor/funds">Funds</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="/">Documentation</a></li>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">Support</a></li>
              <li><a href="/">Blog</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Terms of Service</a></li>
              <li><a href="/">Disclaimer</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Mutual Funds Investment Platform. All rights reserved.</p>
          <p>For academic purposes - Investment Perception and Selection Behavior Analysis</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
