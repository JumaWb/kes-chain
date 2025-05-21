// src/components/CTA.js
import React from 'react';
import './Cta.css';

function Cta() {
  return (
    <section className="cta">
      <div className="container">
        <h2>Ready to Start Earning?</h2>
        <p>
          Join thousands of Kenyans who are already making money with KesChain. Sign up now and get your unique referral link!
        </p>
        <a href="/signup" className="btn btn-white">Sign Up Now</a>
      </div>
    </section>
  );
}

export default Cta;