import React from 'react';

interface CompassIconProps {
  className?: string;
}

const CompassIcon: React.FC<CompassIconProps> = ({ className = "w-8 h-8" }) => {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 32 32" strokeWidth={2}>
      {/* Outer compass circle */}
      <circle cx="16" cy="16" r="14" strokeWidth="2" />
      
      {/* Cardinal directions */}
      <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
      <line x1="16" y1="26" x2="16" y2="30" strokeLinecap="round" />
      <line x1="2" y1="16" x2="6" y2="16" strokeLinecap="round" />
      <line x1="26" y1="16" x2="30" y2="16" strokeLinecap="round" />
      
      {/* Intermediate directions */}
      <line x1="6.34" y1="6.34" x2="8.76" y2="8.76" strokeLinecap="round" strokeWidth="1.5" />
      <line x1="23.24" y1="23.24" x2="25.66" y2="25.66" strokeLinecap="round" strokeWidth="1.5" />
      <line x1="25.66" y1="6.34" x2="23.24" y2="8.76" strokeLinecap="round" strokeWidth="1.5" />
      <line x1="8.76" y1="23.24" x2="6.34" y2="25.66" strokeLinecap="round" strokeWidth="1.5" />
      
      {/* Center circle */}
      <circle cx="16" cy="16" r="3" fill="currentColor" />
      
      {/* North pointer */}
      <path d="M16 2 L18 10 L16 13 L14 10 Z" fill="currentColor" opacity="0.8" />
      
      {/* Direction letters */}
      <text x="16" y="7" textAnchor="middle" className="text-xs font-bold fill-current">N</text>
    </svg>
  );
};

export default CompassIcon;