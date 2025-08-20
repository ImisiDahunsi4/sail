import React from 'react';

interface NetworkSailIconProps {
  className?: string;
}

const NetworkSailIcon: React.FC<NetworkSailIconProps> = ({ className = "h-12 w-12" }) => {
  return (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 48 48"
      strokeWidth={2}
    >
      {/* Network nodes */}
      <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
      <circle cx="36" cy="12" r="3" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="3" strokeWidth="1.5" />
      <circle cx="12" cy="36" r="3" strokeWidth="1.5" />
      <circle cx="36" cy="36" r="3" strokeWidth="1.5" />
      
      {/* Connection lines */}
      <path d="M14.6 14.6l6.8 6.8" strokeWidth="1.5" opacity="0.6" />
      <path d="M26.6 21.4l6.8-6.8" strokeWidth="1.5" opacity="0.6" />
      <path d="M21.4 26.6l-6.8 6.8" strokeWidth="1.5" opacity="0.6" />
      <path d="M26.6 26.6l6.8 6.8" strokeWidth="1.5" opacity="0.6" />
      <path d="M15 12h18" strokeWidth="1" opacity="0.4" />
      <path d="M12 15v18" strokeWidth="1" opacity="0.4" />
      
      {/* Sail symbol overlay */}
      <g className="text-teal-950" stroke="currentColor" fill="none" strokeWidth="1.5">
        {/* Sailboat mast */}
        <path d="M30 30v12" strokeLinecap="round" />
        {/* Main sail */}
        <path d="M30 30c0-6 4-10 10-10v10h-10z" fill="currentColor" opacity="0.2" />
        {/* Jib sail */}
        <path d="M30 30c0-4-3-7-6-7v7h6z" fill="currentColor" opacity="0.15" />
        {/* Boat hull */}
        <path d="M22 42c0-2 3.5-3 8-3s8 1 8 3" strokeLinecap="round" />
      </g>
    </svg>
  );
};

export default NetworkSailIcon;