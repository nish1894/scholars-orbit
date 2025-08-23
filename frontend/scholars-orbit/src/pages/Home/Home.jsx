import React from 'react';
import HeroSection from './components/HeroSection';
import './Home.css';
import SecondSection from './components/SecondSection';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Form */}
      <HeroSection />

      {/* Features Section */}
      <SecondSection/>
    </div>
  );
};

export default Home;
