import React from 'react';
import HeroSection from './components/HeroSection';
import './Home.css';
import SecondSection from './components/SecondSection';
import Comparision from './components/Comparision';
import Testimonial from './components/Testimonial';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Form */}
      <HeroSection />

      {/* Features Section */}
      <SecondSection />

      {/* Comparison Section */}
      <Comparision />

      {/* Testimonials Section */}
      <Testimonial />
    </div>
  );
};

export default Home;
