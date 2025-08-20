import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PrivacySection from './components/PrivacySection';
import FloatingElements from './components/FloatingElements';
import WavePattern from './components/WavePattern';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section with Background */}
      <div className="bg-gradient-hero relative overflow-hidden">
        {/* Background Pattern */}
        <WavePattern />
        
        {/* Floating Elements */}
        <FloatingElements />
        
        {/* Hero Content */}
        <Header />
        <HeroSection />
      </div>
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Privacy & Trust Section */}
      <PrivacySection />
    </div>
  );
}

export default App;