import React from 'react';

const GeometricAccents: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Compass/Navigation Elements */}
      
      {/* Top Left Compass */}
      <div className="absolute top-10 left-10 opacity-10">
        <svg className="w-16 h-16 text-ocean-600" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M12 2L14 10L12 12L10 10Z" fill="currentColor" />
          <path d="M12 22L10 14L12 12L14 14Z" fill="currentColor" opacity="0.6" />
          <path d="M2 12L10 10L12 12L10 14Z" fill="currentColor" opacity="0.4" />
          <path d="M22 12L14 14L12 12L14 10Z" fill="currentColor" opacity="0.8" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      </div>
      
      {/* Top Right Navigation Star */}
      <div className="absolute top-20 right-20 opacity-10">
        <svg className="w-12 h-12 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
        </svg>
      </div>
      
      {/* Left Side Anchor */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 opacity-8">
        <svg className="w-14 h-14 text-seafoam-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A1.5,1.5 0 0,1 13.5,3.5A1.5,1.5 0 0,1 12,5A1.5,1.5 0 0,1 10.5,3.5A1.5,1.5 0 0,1 12,2M21,9V7H15L13.5,7.5C13.1,7.4 12.6,7.4 12,7.4C11.4,7.4 10.9,7.4 10.5,7.5L9,7H3V9H9L10.5,9.5V11.5L9,12H3V14H9L10.5,14.5V16.5L9,17H3V19H9L10.5,19.5C10.9,19.6 11.4,19.6 12,19.6C12.6,19.6 13.1,19.6 13.5,19.5L15,19H21V17H15L13.5,16.5V14.5L15,14H21V12H15L13.5,11.5V9.5L15,9H21Z" />
        </svg>
      </div>
      
      {/* Right Side Ship Wheel */}
      <div className="absolute top-1/3 right-8 opacity-8">
        <svg className="w-12 h-12 text-ocean-700" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <line x1="12" y1="2" x2="12" y2="6" stroke="currentColor" strokeWidth="2" />
          <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
          <line x1="2" y1="12" x2="6" y2="12" stroke="currentColor" strokeWidth="2" />
          <line x1="18" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" />
          <line x1="4.22" y1="4.22" x2="7.05" y2="7.05" stroke="currentColor" strokeWidth="1" />
          <line x1="16.95" y1="16.95" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="1" />
          <line x1="19.78" y1="4.22" x2="16.95" y2="7.05" stroke="currentColor" strokeWidth="1" />
          <line x1="7.05" y1="16.95" x2="4.22" y2="19.78" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      
      {/* Bottom Left Coordinates */}
      <div className="absolute bottom-20 left-16 opacity-10">
        <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      </div>
      
      {/* Bottom Right Wave Lines */}
      <div className="absolute bottom-16 right-20 opacity-8">
        <svg className="w-16 h-8 text-seafoam-500" fill="none" stroke="currentColor" viewBox="0 0 64 32">
          <path d="M0 16C8 8 16 8 24 16C32 24 40 24 48 16C56 8 64 8 64 16" strokeWidth="2" />
          <path d="M0 20C8 12 16 12 24 20C32 28 40 28 48 20C56 12 64 12 64 20" strokeWidth="1" opacity="0.6" />
          <path d="M0 24C8 16 16 16 24 24C32 32 40 32 48 24C56 16 64 16 64 24" strokeWidth="1" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
};

export default GeometricAccents;