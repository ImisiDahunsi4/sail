import React from 'react';

interface UploadCloudIconProps {
  className?: string;
}

const UploadCloudIcon: React.FC<UploadCloudIconProps> = ({ className = "h-12 w-12" }) => {
  return (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 48 48"
      strokeWidth={2}
    >
      {/* Cloud shape */}
      <path 
        d="M36 30c3.314 0 6-2.686 6-6 0-3.314-2.686-6-6-6-.342 0-.677.029-1.004.084C33.748 12.696 28.252 8 21.6 8 14.156 8 8.1 14.058 8.1 21.5c0 .367.015.73.044 1.089C5.294 23.26 3 26.38 3 30c0 4.418 3.582 8 8 8h25z" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Upload arrow */}
      <path 
        d="M24 20v12" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M20 24l4-4 4 4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Compass needle overlay */}
      <circle 
        cx="32" 
        cy="16" 
        r="6" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5"
        className="text-teal-950"
      />
      <path 
        d="M32 13l1.5 3-1.5 1.5-1.5-3z" 
        fill="currentColor" 
        className="text-teal-950"
      />
      <circle 
        cx="32" 
        cy="16" 
        r="1" 
        fill="currentColor" 
        className="text-teal-950"
      />
    </svg>
  );
};

export default UploadCloudIcon;