// src/components/FAQ.js
import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Is KesChain legitimate?",
      answer: "Yes! KesChain is a legal referral rewards program that complies with Kenyan regulations. We provide real earnings for genuine referrals."
    },
    {
      question: "How much does it cost to join?",
      answer: "There's a one-time registration fee of 200 KSh to verify your account and activate your referral earning potential."
    },
    {
      question: "How do I get paid?",
      answer: "You earn 100 KSh for every person who joins through your referral link. Earnings are credited instantly and can be withdrawn to your M-Pesa account at any time."
    },
    {
      question: "Is there a withdrawal limit?",
      answer: "No! You can withdraw any amount above 100 KSh at any time with no restrictions."
    },
    {
      question: "How do I maximize my earnings?",
      answer: "Share your referral link widely on social media, WhatsApp groups, and with friends and family. The more people you refer, the more you earn!"
    }
  ];

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our referral program</p>
        </div>
        <div className="accordion">
          {faqItems.map((item, index) => (
            <div className={`accordion-item ${activeIndex === index ? 'active' : ''}`} key={index}>
              <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                <span>{item.question}</span>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </div>
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;