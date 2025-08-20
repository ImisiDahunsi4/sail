import React from 'react';

interface HarborIconProps {
  className?: string;
}

const HarborIcon: React.FC<HarborIconProps> = ({ className = "w-7 h-7" }) => {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 28 28" strokeWidth={2}>
      {/* Water line */}
      <path d="M2 20 Q7 18 14 20 T26 20" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 23 Q9 21 16 23 T26 23" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
      
      {/* Harbor wall/pier */}
      <rect x="2" y="12" width="24" height="8" fill="none" strokeWidth="2" />
      <line x1="2" y1="16" x2="26" y2="16" strokeWidth="1" opacity="0.5" />
      
      {/* Pier posts */}
      <line x1="6" y1="12" x2="6" y2="20" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="12" x2="14" y2="20" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="12" x2="22" y2="20" strokeWidth="2" strokeLinecap="round" />
      
      {/* Small boats */}
      <ellipse cx="8" cy="18" rx="3" ry="1" strokeWidth="1.5" />
      <line x1="8" y1="14" x2="8" y2="17" strokeWidth="1" />
      <path d="M8 14 L6 16 L10 16 Z" fill="currentColor" opacity="0.3" strokeWidth="1" />
      
      <ellipse cx="20" cy="19" rx="2.5" ry="0.8" strokeWidth="1.5" />
      <line x1="20" y1="16" x2="20" y2="18" strokeWidth="1" />
      <path d="M20 16 L18.5 17.5 L21.5 17.5 Z" fill="currentColor" opacity="0.3" strokeWidth="1" />
      
      {/* Harbor buildings/structures */}
      <rect x="4" y="6" width="4" height="6" strokeWidth="1.5" fill="none" />
      <polygon points="4,6 6,4 8,6" fill="currentColor" opacity="0.4" strokeWidth="1" />
      
      <rect x="12" y="4" width="6" height="8" strokeWidth="1.5" fill="none" />
      <polygon points="12,4 15,2 18,4" fill="currentColor" opacity="0.4" strokeWidth="1" />
      
      {/* Windows */}
      <rect x="5" y="8" width="1" height="1" fill="currentColor" opacity="0.6" />
      <rect x="6.5" y="8" width="1" height="1" fill="currentColor" opacity="0.6" />
      <rect x="13.5" y="6" width="1" height="1" fill="currentColor" opacity="0.6" />
      <rect x="15.5" y="6" width="1" height="1" fill="currentColor" opacity="0.6" />
      
      {/* Seagulls */}
      <path d="M24 8 Q25 7 26 8" strokeWidth="1" fill="none" opacity="0.7" strokeLinecap="round" />
      <path d="M25 8 Q26 7 27 8" strokeWidth="1" fill="none" opacity="0.7" strokeLinecap="round" />
      
      <path d="M20 6 Q21 5 22 6" strokeWidth="1" fill="none" opacity="0.5" strokeLinecap="round" />
      <path d="M21 6 Q22 5 23 6" strokeWidth="1" fill="none" opacity="0.5" strokeLinecap="round" />
    </svg>
  );
};

export default HarborIcon;