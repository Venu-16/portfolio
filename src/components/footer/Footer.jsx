import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">© {new Date().getFullYear()} Maile Venu Madhav. All rights reserved.</p>
        <div className="footer__socials">
          <a href="https://github.com/Venu-16" target="_blank" rel="noopener noreferrer" className="footer__link">
            <i className='bx bxl-github'></i>
          </a>
          <a href="https://linkedin.com/in/venu-madhav-maile-24p" target="_blank" rel="noopener noreferrer" className="footer__link">
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href="mailto:venumadhav2216@gmail.com" className="footer__link">
            <i className='bx bx-envelope'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
