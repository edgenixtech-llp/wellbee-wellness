import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand reveal fade-up">
          <div className="logo">
            Wellb<span className="dot">ee</span> Wellness
          </div>
          <p className="tagline">Where Science Meets Serenity.</p>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="WhatsApp">WA</a>
          </div>
        </div>

        <div className="footer-links reveal fade-up" style={{ animationDelay: '0.1s' }}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#therapies">Therapies</a></li>
            <li><a href="#booking">Book Appointment</a></li>
          </ul>
        </div>

        <div className="footer-links reveal fade-up" style={{ animationDelay: '0.2s' }}>
          <h4>Therapies</h4>
          <ul>
            <li><a href="#therapies">Dental Care</a></li>
            <li><a href="#therapies">Skincare Treatments</a></li>
            <li><a href="#therapies">Fat Loss Programs</a></li>
          </ul>
        </div>

        <div className="footer-hours reveal fade-up" style={{ animationDelay: '0.3s' }}>
          <h4>Operating Hours</h4>
          <table>
            <tbody>
              <tr>
                <td>Mon - Fri:</td>
                <td>9:00 AM - 8:00 PM</td>
              </tr>
              <tr>
                <td>Saturday:</td>
                <td>10:00 AM - 6:00 PM</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Wellbee Wellness. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
