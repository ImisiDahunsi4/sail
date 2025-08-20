import React from 'react';

const AnchorShieldIcon: React.FC = () => {
  return (
    <div className="relative z-10">
      {/* Background circle with shadow */}
      <div className="w-30 h-30 bg-white rounded-full shadow-xl border-4 border-white flex items-center justify-center">
        {/* Anchor with Shield Overlay */}
        <svg 
          width="120" 
          height="120" 
          viewBox="0 0 120 120" 
          fill="none" 
          className="relative"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="anchorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          
          {/* Main Anchor */}
          <g stroke="url(#anchorGradient)" strokeWidth="3" fill="none">
            {/* Anchor ring */}
            <circle cx="60" cy="35" r="8" />
            {/* Anchor shaft */}
            <line x1="60" y1="43" x2="60" y2="85" strokeLinecap="round" />
            {/* Anchor arms */}
            <path d="M45 75 L60 87 L75 75" strokeLinecap="round" strokeLinejoin="round" />
            {/* Anchor flukes */}
            <path d="M40 70 L50 75 L45 85" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M80 70 L70 75 L75 85" strokeLinecap="round" strokeLinejoin="round" />
            {/* Anchor crossbar */}
            <line x1="52" y1="43" x2="68" y2="43" strokeLinecap="round" />
          </g>
          
          {/* Shield Overlay */}
          <g fill="url(#shieldGradient)" stroke="url(#shieldGradient)" strokeWidth="2">
            <path 
              d="M75 25 C85 25, 95 35, 95 45 C95 65, 85 85, 75 95 C70 90, 65 85, 65 75 C65 65, 70 55, 75 45 C80 35, 85 30, 85 25 Z" 
              opacity="0.8"
            />
            {/* Shield emblem - lock icon */}
            <rect x="78" y="45" width="14" height="10" rx="2" fill="white" opacity="0.9" />
            <path d="M80 45 V42 C80 39, 82 37, 85 37 S90 39, 90 42 V45" 
                  fill="none" stroke="white" strokeWidth="1.5" opacity="0.9" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AnchorShieldIcon;