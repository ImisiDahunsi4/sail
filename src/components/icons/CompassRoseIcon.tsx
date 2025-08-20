import React from 'react';

interface CompassRoseIconProps {
  className?: string;
  size?: number;
}

const CompassRoseIcon: React.FC<CompassRoseIconProps> = ({ className = '', size = 16 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      role="img"
      aria-label="Compass rose"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M12 2L14 10L12 12L10 10L12 2Z"
        fill="currentColor"
        className="text-teal-600"
      />
      <path
        d="M22 12L14 14L12 12L14 10L22 12Z"
        fill="currentColor"
        className="text-ocean-600"
      />
      <path
        d="M12 22L10 14L12 12L14 14L12 22Z"
        fill="currentColor"
        className="text-teal-500"
      />
      <path
        d="M2 12L10 10L12 12L10 14L2 12Z"
        fill="currentColor"
        className="text-ocean-500"
      />
      <circle
        cx="12"
        cy="12"
        r="2"
        fill="currentColor"
        className="text-charcoal-700"
      />
    </svg>
  );
};

export default CompassRoseIcon;