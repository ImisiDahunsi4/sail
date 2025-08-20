import React from 'react';

interface LighthouseIconProps {
  className?: string;
}

const LighthouseIcon: React.FC<LighthouseIconProps> = ({ className = "w-7 h-7" }) => {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 28 28" strokeWidth={2}>
      {/* Lighthouse base */}
      <path d="M8 26 L20 26 L18 8 L10 8 Z" strokeWidth="2" strokeLinejoin="round" />
      
      {/* Lighthouse top/lantern room */}
      <rect x="9" y="4" width="10" height="6" rx="1" strokeWidth="1.5" />
      
      {/* Roof */}
      <path d="M8 4 L14 1 L20 4" fill="currentColor" opacity="0.6" strokeWidth="1.5" />
      
      {/* Light beam */}
      <path d="M14 5 L2 2 L4 8 Z" fill="currentColor" opacity="0.2" strokeWidth="1" />
      <path d="M14 5 L26 2 L24 8 Z" fill="currentColor" opacity="0.2" strokeWidth="1" />
      
      {/* Lighthouse stripes */}
      <line x1="10" y1="14" x2="18" y2="14" strokeWidth="1" opacity="0.6" />
      <line x1="10.5" y1="18" x2="17.5" y2="18" strokeWidth="1" opacity="0.6" />
      <line x1="11" y1="22" x2="17" y2="22" strokeWidth="1" opacity="0.6" />
      
      {/* Door */}
      <rect x="12" y="20" width="4" height="6" rx="2" strokeWidth="1.5" fill="none" />
      
      {/* Windows */}
      <circle cx="12" cy="16" r="1" fill="currentColor" opacity="0.7" />
      <circle cx="16" cy="16" r="1" fill="currentColor" opacity="0.7" />
      <rect x="11" y="6" width="6" height="2" fill="currentColor" opacity="0.8" rx="0.5" />
      
      {/* Ground/water line */}
      <path d="M2 26 Q8 24 14 26 T26 26" strokeWidth="1" opacity="0.5" />
      
      {/* Light rays */}
      <line x1="1" y1="3" x2="3" y2="5" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
      <line x1="27" y1="3" x2="25" y2="5" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
      <line x1="0" y1="6" x2="4" y2="6" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      <line x1="28" y1="6" x2="24" y2="6" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
    </svg>
  );
};

export default LighthouseIcon;