// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>What Our Users Say</h2>
          <p>Hear from people who are already earning with KesChain</p>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p className="testimonial-text">
              "I was skeptical at first, but after earning 3,000 KSh in my first week, I'm now a believer! KesChain is the real deal."
            </p>
            <p className="testimonial-author">Sarah W.</p>
            <p className="testimonial-location">Nairobi</p>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">
              "Easy money by just sharing my link. I've made over 15,000 KSh in two months without much effort."
            </p>
            <p className="testimonial-author">James M.</p>
            <p className="testimonial-location">Mombasa</p>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">
              "The withdrawals are instant and reliable. I use my earnings to supplement my small business income."
            </p>
            <p className="testimonial-author">Amina K.</p>
            <p className="testimonial-location">Kisumu</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;