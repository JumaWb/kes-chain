// src/components/Hero.js
import React, { useEffect } from 'react';
import './Hero.css';

function Hero() {
  useEffect(() => {
    const createCoins = () => {
      const container = document.getElementById('floatingCoins');
      if (!container) return;
      
      const coinCount = 15;
      
      for (let i = 0; i < coinCount; i++) {
        const coin = document.createElement('div');
        coin.classList.add('coin');
        
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 10 + Math.random() * 10;
        const size = 20 + Math.random() * 20;
        
        coin.style.left = `${left}%`;
        coin.style.bottom = `-${size}px`;
        coin.style.width = `${size}px`;
        coin.style.height = `${size}px`;
        coin.style.animationDelay = `${delay}s`;
        coin.style.animationDuration = `${duration}s`;
        
        container.appendChild(coin);
      }
    };
    
    createCoins();
  }, []);

  return (
    <section className="hero">
      <div className="floating-coins" id="floatingCoins"></div>
      <div className="container hero-content">
        <h1 className="animate__animated animate__fadeInDown">Earn Money Through Referrals</h1>
        <p className="animate__animated animate__fadeInUp animate__delay-1s">
          Join KesChain today, refer friends, and earn instant cash! Get 100 KSh for every person you bring to our platform.
        </p>
        <a href="/signup" className="btn animate__animated animate__fadeInUp animate__delay-2s">Get Started Now</a>
      </div>
    </section>
  );
}

export default Hero;