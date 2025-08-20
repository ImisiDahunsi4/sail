import React from 'react';

interface LifePreserverIconProps {
  className?: string;
}

const LifePreserverIcon: React.FC<LifePreserverIconProps> = ({ className = "w-8 h-8" }) => {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 32 32" strokeWidth={2}>
      {/* Outer ring */}
      <circle cx="16" cy="16" r="13" strokeWidth="2.5" />
      
      {/* Inner ring */}
      <circle cx="16" cy="16" r="6" strokeWidth="2" />
      
      {/* Life preserver sections - alternating pattern */}
      <path d="M16 3 A13 13 0 0 1 27.5 9.5 L22.2 12.8 A6 6 0 0 0 16 10 Z" 
            fill="currentColor" opacity="0.3" />
      <path d="M27.5 22.5 A13 13 0 0 1 16 29 L16 22 A6 6 0 0 0 22.2 19.2 Z" 
            fill="currentColor" opacity="0.3" />
      <path d="M4.5 22.5 A13 13 0 0 1 4.5 9.5 L9.8 12.8 A6 6 0 0 0 9.8 19.2 Z" 
            fill="currentColor" opacity="0.3" />
      
      {/* Connecting lines */}
      <line x1="16" y1="3" x2="16" y2="10" strokeWidth="1.5" />
      <line x1="16" y1="22" x2="16" y2="29" strokeWidth="1.5" />
      <line x1="3" y1="16" x2="10" y2="16" strokeWidth="1.5" />
      <line x1="22" y1="16" x2="29" y2="16" strokeWidth="1.5" />
      
      {/* Diagonal connectors */}
      <line x1="6.8" y1="6.8" x2="11.6" y2="11.6" strokeWidth="1" opacity="0.7" />
      <line x1="25.2" y1="6.8" x2="20.4" y2="11.6" strokeWidth="1" opacity="0.7" />
      <line x1="25.2" y1="25.2" x2="20.4" y2="20.4" strokeWidth="1" opacity="0.7" />
      <line x1="6.8" y1="25.2" x2="11.6" y2="20.4" strokeWidth="1" opacity="0.7" />
      
      {/* Center rope pattern */}
      <circle cx="16" cy="16" r="2" fill="none" strokeWidth="1" opacity="0.6" strokeDasharray="2,1" />
    </svg>
  );
};

export default LifePreserverIcon;