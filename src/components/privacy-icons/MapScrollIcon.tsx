import React from 'react';

interface MapScrollIconProps {
  className?: string;
}

const MapScrollIcon: React.FC<MapScrollIconProps> = ({ className = "w-8 h-8" }) => {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 32 32" strokeWidth={2}>
      {/* Scroll body */}
      <rect x="6" y="8" width="20" height="16" rx="2" ry="2" />
      
      {/* Scroll ends */}
      <line x1="6" y1="6" x2="6" y2="26" strokeWidth="3" strokeLinecap="round" />
      <line x1="26" y1="6" x2="26" y2="26" strokeWidth="3" strokeLinecap="round" />
      
      {/* Map content - coastlines */}
      <path d="M10 12 Q14 10 18 12 T26 12" strokeWidth="1.5" fill="none" opacity="0.7" />
      <path d="M8 16 Q12 14 16 16 Q20 18 24 16" strokeWidth="1.5" fill="none" opacity="0.7" />
      
      {/* Map islands */}
      <circle cx="12" cy="14" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="20" cy="18" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="22" cy="14" r="0.8" fill="currentColor" opacity="0.6" />
      
      {/* Navigation lines */}
      <line x1="10" y1="20" x2="22" y2="20" strokeWidth="1" opacity="0.5" strokeDasharray="2,2" />
      <line x1="14" y1="12" x2="20" y2="18" strokeWidth="1" opacity="0.4" strokeDasharray="1,1" />
      
      {/* Compass rose on map */}
      <g transform="translate(16,16)" opacity="0.6">
        <circle r="2" strokeWidth="0.5" fill="none" />
        <line x1="0" y1="-2" x2="0" y2="-1" strokeWidth="0.5" />
        <line x1="0" y1="1" x2="0" y2="2" strokeWidth="0.5" />
        <line x1="-2" y1="0" x2="-1" y2="0" strokeWidth="0.5" />
        <line x1="1" y1="0" x2="2" y2="0" strokeWidth="0.5" />
      </g>
    </svg>
  );
};

export default MapScrollIcon;