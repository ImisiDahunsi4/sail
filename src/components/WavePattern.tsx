import React from 'react';

const WavePattern: React.FC = () => {
  return (
    <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none overflow-hidden">
      <svg 
        className="absolute bottom-0 right-0 w-full h-full opacity-5"
        viewBox="0 0 1200 800" 
        fill="none" 
        preserveAspectRatio="xMaxYMax slice"
      >
        {/* Subtle wave pattern */}
        <path 
          d="M1200 400C1200 400 1100 350 1000 380C900 410 800 320 700 350C600 380 500 300 400 330C300 360 200 280 100 310C50 325 0 340 0 340V800H1200V400Z" 
          fill="url(#waveGradient)" 
        />
        <path 
          d="M1200 450C1200 450 1100 400 1000 430C900 460 800 370 700 400C600 430 500 350 400 380C300 410 200 330 100 360C50 375 0 390 0 390V800H1200V450Z" 
          fill="url(#waveGradient2)" 
        />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#059669" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#1e40af" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#0891b2" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#1e40af" stopOpacity="0.01" />
          </linearGradient>
        </defs>
        
        {/* Abstract geometric shapes for additional depth */}
        <circle cx="900" cy="200" r="100" fill="url(#waveGradient)" opacity="0.03" />
        <circle cx="1000" cy="300" r="60" fill="url(#waveGradient2)" opacity="0.04" />
        <path 
          d="M800 100L850 150L800 200L750 150Z" 
          fill="url(#waveGradient)" 
          opacity="0.02" 
        />
      </svg>
    </div>
  );
};

export default WavePattern;