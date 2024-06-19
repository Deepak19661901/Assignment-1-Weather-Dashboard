import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-column">
          <h3>Social</h3>
          <ul className="social-links">
            <li><a  href="https://www.geeksforgeeks.org/user/deepakkump2tv/"  target="_blank"  className="social-link">GFG</a></li>
            <li><a href="https://www.linkedin.com/in/deepak-kumar-95121b21a/"  target="_blank" className="social-link">LinkedIn</a></li>
            <li><a href="https://github.com/Deepak19661901"  target="_blank" className="social-link">GitHub</a></li>
          </ul>
        </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Made by Deepak. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
