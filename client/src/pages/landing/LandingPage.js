// src/App.js
import React from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import HowItWorks from '../../components/how/HowItWorks';
import Features from '../../components/features/Features';
import Cta from '../../components/cta/Cta';
import FAQ from '../../components/faq/FAQ';
import Testimonials from '../../components/testimonials/Testimonials';
import Footer from '../../components/footer/Footer';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Cta />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;