// src/components/Features.js
import React from 'react';
import './Features.css';

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose KesChain?</h2>
          <p>Discover what makes our referral program the best way to earn extra income</p>
        </div>
        <div className="feature-grid">
          <div className="feature">
            <h3>Instant Payments</h3>
            <p>Receive your earnings immediately after each successful referral. No waiting periods.</p>
          </div>
          <div className="feature">
            <h3>Easy Withdrawals</h3>
            <p>Cash out your earnings directly to your M-Pesa account with just one click.</p>
          </div>
          <div className="feature">
            <h3>Unlimited Earnings</h3>
            <p>There's no limit to how much you can earn. The more you refer, the more you make!</p>
          </div>
          <div className="feature">
            <h3>Real-Time Tracking</h3>
            <p>Monitor your referrals and earnings in real-time through your dashboard.</p>
          </div>
          <div className="feature">
            <h3>24/7 Support</h3>
            <p>Our team is always available to help you with any questions or issues.</p>
          </div>
          <div className="feature">
            <h3>Secure Platform</h3>
            <p>Your information and earnings are protected with advanced security measures.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;