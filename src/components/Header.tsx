import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/auth');
  };

  return (
    <header className="relative z-10 px-6 py-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/sail-logo.png" 
            alt="Sail Logo" 
            className="h-8 w-auto" 
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-charcoal-600 hover:text-ocean-700 transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-charcoal-600 hover:text-ocean-700 transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-charcoal-600 hover:text-ocean-700 transition-colors">
            About
          </a>
          <button 
            onClick={handleSignInClick}
            className="bg-ocean-950 text-white px-4 py-2 rounded-lg hover:bg-ocean-800 transition-colors"
          >
            Sign In
          </button>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden p-2">
          <svg className="w-6 h-6 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;