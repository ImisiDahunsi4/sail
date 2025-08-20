import React from 'react';

interface MessageAnchorIconProps {
  className?: string;
}

const MessageAnchorIcon: React.FC<MessageAnchorIconProps> = ({ className = "h-12 w-12" }) => {
  return (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 48 48"
      strokeWidth={2}
    >
      {/* Message bubble */}
      <path 
        d="M42 12H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h8l6 6 6-6h16c1.1 0 2-.9 2-2V14c0-1.1-.9-2-2-2z" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Message lines */}
      <path 
        d="M10 20h20" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path 
        d="M10 26h12" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      
      {/* Anchor symbol */}
      <g className="text-teal-950" stroke="currentColor" fill="none" strokeWidth="1.5">
        {/* Anchor ring */}
        <circle cx="35" cy="18" r="2" />
        {/* Anchor body */}
        <path d="M35 20v8" strokeLinecap="round" />
        {/* Anchor arms */}
        <path d="M32 26l3 2 3-2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Anchor top */}
        <path d="M33 20h4" strokeLinecap="round" />
      </g>
    </svg>
  );
};

export default MessageAnchorIcon;