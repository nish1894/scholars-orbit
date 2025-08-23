import React, { useState } from 'react';
import './HeroSection.css';
import RequestCall from '../../../components/Cards/RequestCall';

const HeroSection = () => {
  

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Column - Promotional Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Scholar's Orbit 
          </h1>
          <h1 className="hero-title">Home Coaching but Online</h1>
          <p className="hero-subtitle">
            Experience the All IIT Faculty
          </p>
          
          <div className="hero-actions">
            <button className="btn btn--hero btn--hero-primary">
              BOOK A LIVE CLASS
            </button>
            <button className="btn btn--hero btn--hero-outline">
              EXPLORE ONLINE ACADEMY
            </button>
          </div>
          
          <div className="batch-info">
            <span className="batch-text">NEXT BATCH STARTS</span>
            <span className="batch-date">SEPTEMBER</span>
          </div>
        </div>

        {/* Right Column - Form Card */}
        <RequestCall/>
      </div>
    </section>
  );
};

export default HeroSection;
