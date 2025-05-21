// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>KesChain</h3>
            <p>The easiest way to earn money through referrals in Kenya. Join thousands of happy users today.</p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/refund">Refund Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>Email: support@keschain.co.ke</li>
              <li>Phone: +254 700 000000</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} KesChain. All rights reserved.</p>
          <p>KesChain is a referral rewards program compliant with Kenyan laws.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;