import React from 'react';

interface TelescopeIconProps {
  className?: string;
}

const TelescopeIcon: React.FC<TelescopeIconProps> = ({ className = "w-8 h-8" }) => {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 32 32" strokeWidth={2}>
      {/* Main telescope body */}
      <ellipse cx="20" cy="12" rx="8" ry="3" transform="rotate(20 20 12)" />
      
      {/* Telescope lens */}
      <circle cx="26" cy="8" r="2" strokeWidth="1.5" />
      
      {/* Telescope eyepiece */}
      <circle cx="12" cy="18" r="1.5" strokeWidth="1.5" />
      
      {/* Telescope body segments */}
      <line x1="14" y1="16" x2="24" y2="10" strokeWidth="3" strokeLinecap="round" />
      <line x1="16" y1="17" x2="20" y2="14" strokeWidth="1" opacity="0.6" />
      <line x1="18" y1="18" x2="22" y2="15" strokeWidth="1" opacity="0.6" />
      
      {/* Tripod legs */}
      <line x1="12" y1="18" x2="6" y2="28" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="18" x2="18" y2="28" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="18" x2="8" y2="30" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Stars in view */}
      <circle cx="28" cy="5" r="0.5" fill="currentColor" opacity="0.7" />
      <circle cx="25" cy="4" r="0.5" fill="currentColor" opacity="0.5" />
      <circle cx="30" cy="7" r="0.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
};

export default TelescopeIcon;