import React from 'react';

interface TreasureChestIconProps {
  className?: string;
}

const TreasureChestIcon: React.FC<TreasureChestIconProps> = ({ className = "w-7 h-7" }) => {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 28 28" strokeWidth={2}>
      {/* Chest base */}
      <rect x="4" y="14" width="20" height="10" rx="2" strokeWidth="2" />
      
      {/* Chest lid */}
      <path d="M4 14 C4 8, 10 4, 14 4 S24 8, 24 14" strokeWidth="2" strokeLinejoin="round" />
      
      {/* Chest lock */}
      <rect x="12" y="12" width="4" height="4" rx="1" fill="currentColor" opacity="0.3" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="1" fill="none" strokeWidth="1" />
      
      {/* Keyhole */}
      <circle cx="14" cy="13.5" r="0.5" fill="currentColor" />
      <line x1="14" y1="14" x2="14" y2="15" strokeWidth="1" strokeLinecap="round" />
      
      {/* Chest bands */}
      <line x1="4" y1="18" x2="24" y2="18" strokeWidth="1" opacity="0.6" />
      <line x1="4" y1="21" x2="24" y2="21" strokeWidth="1" opacity="0.6" />
      
      {/* Side hinges */}
      <circle cx="6" cy="14" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="22" cy="14" r="1" fill="currentColor" opacity="0.5" />
      
      {/* Treasure glow */}
      <circle cx="8" cy="16" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="20" cy="16" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="14" cy="20" r="1.5" fill="currentColor" opacity="0.3" />
      
      {/* Corner reinforcements */}
      <path d="M4 14 L6 12 L6 14" strokeWidth="1" opacity="0.5" />
      <path d="M24 14 L22 12 L22 14" strokeWidth="1" opacity="0.5" />
      <path d="M4 24 L6 22 L6 24" strokeWidth="1" opacity="0.5" />
      <path d="M24 24 L22 22 L22 24" strokeWidth="1" opacity="0.5" />
      
      {/* Sparkles */}
      <g opacity="0.6">
        <line x1="10" y1="8" x2="10" y2="10" strokeWidth="1" strokeLinecap="round" />
        <line x1="9" y1="9" x2="11" y2="9" strokeWidth="1" strokeLinecap="round" />
      </g>
      <g opacity="0.5">
        <line x1="18" y1="6" x2="18" y2="8" strokeWidth="1" strokeLinecap="round" />
        <line x1="17" y1="7" x2="19" y2="7" strokeWidth="1" strokeLinecap="round" />
      </g>
    </svg>
  );
};

export default TreasureChestIcon;