import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/resume">Home</a>
          <a href="/resume/HireMe">Hire Me</a>
          <a href="/resume/Blog">Blog</a>
          <a href="/resume/Salary">Salary History</a>
          <a href="https://www.linkedin.com/in/mark-ebel" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/MarkEbel" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p>&copy; 2024 Mark Ebel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
