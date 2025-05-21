// src/components/HowItWorks.js
import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-title">
          <h2>How It Works</h2>
          <p>Start earning in just 3 simple steps</p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-icon">1</div>
            <h3>Sign Up & Verify</h3>
            <p>Register and pay a one-time 200 KSh verification fee to activate your account.</p>
          </div>
          <div className="step">
            <div className="step-icon">2</div>
            <h3>Share Your Link</h3>
            <p>Invite friends using your unique referral link or code.</p>
          </div>
          <div className="step">
            <div className="step-icon">3</div>
            <h3>Earn Money</h3>
            <p>Get 100 KSh instantly for every successful referral. Withdraw anytime via M-Pesa.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;