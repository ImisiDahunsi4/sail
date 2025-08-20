import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FloatingElements from './components/FloatingElements';
import WavePattern from './components/WavePattern';

function App() {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <WavePattern />
      
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Main Content */}
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;