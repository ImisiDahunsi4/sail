import React from 'react';

interface ShipWheelIconProps {
  className?: string;
}

const ShipWheelIcon: React.FC<ShipWheelIconProps> = ({ className = "w-7 h-7" }) => {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 28 28" strokeWidth={2}>
      {/* Outer wheel rim */}
      <circle cx="14" cy="14" r="12" strokeWidth="2" />
      
      {/* Inner hub */}
      <circle cx="14" cy="14" r="4" strokeWidth="2" fill="currentColor" opacity="0.1" />
      
      {/* Main spokes */}
      <line x1="14" y1="2" x2="14" y2="8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="14" y1="20" x2="14" y2="26" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="2" y1="14" x2="8" y2="14" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="20" y1="14" x2="26" y2="14" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Diagonal spokes */}
      <line x1="5.05" y1="5.05" x2="9.19" y2="9.19" strokeWidth="2" strokeLinecap="round" />
      <line x1="22.95" y1="22.95" x2="18.81" y2="18.81" strokeWidth="2" strokeLinecap="round" />
      <line x1="22.95" y1="5.05" x2="18.81" y2="9.19" strokeWidth="2" strokeLinecap="round" />
      <line x1="5.05" y1="22.95" x2="9.19" y2="18.81" strokeWidth="2" strokeLinecap="round" />
      
      {/* Handles on spokes */}
      <circle cx="14" cy="5" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="14" cy="23" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="5" cy="14" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="23" cy="14" r="1.5" fill="currentColor" opacity="0.7" />
      
      {/* Center pin */}
      <circle cx="14" cy="14" r="1.5" fill="currentColor" />
      
      {/* Rim segments for grip */}
      <path d="M14 2 A12 12 0 0 1 19.8 4.2" strokeWidth="1" opacity="0.4" strokeDasharray="1,1" />
      <path d="M19.8 23.8 A12 12 0 0 1 14 26" strokeWidth="1" opacity="0.4" strokeDasharray="1,1" />
      <path d="M8.2 23.8 A12 12 0 0 1 2 14" strokeWidth="1" opacity="0.4" strokeDasharray="1,1" />
      <path d="M2 14 A12 12 0 0 1 8.2 4.2" strokeWidth="1" opacity="0.4" strokeDasharray="1,1" />
    </svg>
  );
};

export default ShipWheelIcon;