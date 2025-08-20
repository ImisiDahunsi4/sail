import React, { useState } from 'react';
import GeometricAccents from './GeometricAccents';

const HeroSection: React.FC = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleButtonClick = () => {
    setIsButtonPressed(true);
    setTimeout(() => setIsButtonPressed(false), 600);
    // Add navigation logic here
  };

  return (
    <section className="relative z-10 min-h-[calc(100vh-100px)] flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Geometric Accents */}
        <GeometricAccents />
        
        {/* Main Content */}
        <div className="space-y-8">
          {/* Headlines */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-950 tracking-tight leading-tight">
              Navigate Your Research{' '}
              <span 
                className="bg-gradient-text bg-clip-text text-transparent bg-[length:200%_100%] hover:animate-shimmer cursor-default"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #1e40af 0%, #0891b2 50%, #059669 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Effortlessly
              </span>
            </h1>
          </div>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl text-charcoal-600 leading-relaxed max-w-2xl mx-auto px-4">
            Your intelligent research companion that transforms documents, audio, and web sources 
            into navigable knowledge. Chat with your sources, discover insights, and chart your 
            path to understanding.
          </p>
          
          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={handleButtonClick}
              className={`
                relative inline-flex items-center justify-center
                bg-ocean-950 hover:bg-ocean-800 
                text-white font-medium 
                px-8 py-3 rounded-lg 
                shadow-lg hover:shadow-xl 
                transform hover:scale-102 
                transition-all duration-200 ease-out
                focus:outline-none focus:ring-4 focus:ring-ocean-300
                overflow-hidden
                ${
                  isButtonPressed 
                    ? 'after:absolute after:top-1/2 after:left-1/2 after:w-0 after:h-0 after:bg-white after:bg-opacity-25 after:rounded-full after:animate-ripple after:transform after:-translate-x-1/2 after:-translate-y-1/2' 
                    : ''
                }
              `}
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
              Set Sail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;