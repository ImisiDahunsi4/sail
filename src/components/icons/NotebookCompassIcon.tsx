import React from 'react';

interface NotebookCompassIconProps {
  className?: string;
}

const NotebookCompassIcon: React.FC<NotebookCompassIconProps> = ({ className = "h-12 w-12" }) => {
  return (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 48 48"
      strokeWidth={2}
    >
      {/* Notebook */}
      <rect 
        x="6" 
        y="8" 
        width="26" 
        height="32" 
        rx="2" 
        ry="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Notebook lines */}
      <path d="M10 16h18" strokeWidth="1" opacity="0.6" />
      <path d="M10 20h18" strokeWidth="1" opacity="0.6" />
      <path d="M10 24h18" strokeWidth="1" opacity="0.6" />
      <path d="M10 28h14" strokeWidth="1" opacity="0.6" />
      
      {/* Spiral binding */}
      <path d="M6 12h4" strokeWidth="1" opacity="0.4" />
      <path d="M6 16h4" strokeWidth="1" opacity="0.4" />
      <path d="M6 20h4" strokeWidth="1" opacity="0.4" />
      <path d="M6 24h4" strokeWidth="1" opacity="0.4" />
      
      {/* Compass rose overlay */}
      <g className="text-teal-950" stroke="currentColor" fill="none" strokeWidth="1.5">
        <circle cx="36" cy="18" r="8" />
        {/* Main directions */}
        <path d="M36 10v2" strokeLinecap="round" />
        <path d="M36 24v2" strokeLinecap="round" />
        <path d="M28 18h2" strokeLinecap="round" />
        <path d="M42 18h2" strokeLinecap="round" />
        {/* Diagonal directions */}
        <path d="M30.5 12.5l1.4 1.4" strokeLinecap="round" strokeWidth="1" />
        <path d="M40.1 22.1l1.4 1.4" strokeLinecap="round" strokeWidth="1" />
        <path d="M40.1 13.9l1.4-1.4" strokeLinecap="round" strokeWidth="1" />
        <path d="M30.5 23.5l1.4-1.4" strokeLinecap="round" strokeWidth="1" />
        {/* Center */}
        <circle cx="36" cy="18" r="1.5" fill="currentColor" />
        {/* North indicator */}
        <path d="M36 10l2 6-2 2-2-6z" fill="currentColor" opacity="0.8" />
      </g>
    </svg>
  );
};

export default NotebookCompassIcon;