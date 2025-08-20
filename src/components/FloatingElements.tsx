import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* PDF Document Icon - Top Left */}
      <div className="absolute top-20 left-8 md:top-32 md:left-16 animate-float opacity-20">
        <svg className="w-12 h-12 md:w-16 md:h-16 text-charcoal-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
          <text x="12" y="16" textAnchor="middle" className="text-xs fill-current">PDF</text>
        </svg>
      </div>
      
      {/* Audio Wave Icon - Top Right */}
      <div className="absolute top-24 right-8 md:top-40 md:right-20 animate-float-delayed opacity-20">
        <svg className="w-12 h-12 md:w-16 md:h-16 text-charcoal-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
          <rect x="2" y="8" width="1" height="8" className="animate-pulse" />
          <rect x="4" y="6" width="1" height="12" className="animate-pulse" style={{animationDelay: '0.2s'}} />
          <rect x="6" y="4" width="1" height="16" className="animate-pulse" style={{animationDelay: '0.4s'}} />
          <rect x="17" y="4" width="1" height="16" className="animate-pulse" style={{animationDelay: '0.6s'}} />
          <rect x="19" y="6" width="1" height="12" className="animate-pulse" style={{animationDelay: '0.8s'}} />
          <rect x="21" y="8" width="1" height="8" className="animate-pulse" style={{animationDelay: '1s'}} />
        </svg>
      </div>
      
      {/* Web Link Icon - Bottom Left */}
      <div className="absolute bottom-32 left-12 md:bottom-40 md:left-24 animate-float-slow opacity-20">
        <svg className="w-10 h-10 md:w-14 md:h-14 text-charcoal-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>
      </div>
      
      {/* Research Document Icon - Bottom Right */}
      <div className="absolute bottom-28 right-16 md:bottom-36 md:right-32 animate-float opacity-20">
        <svg className="w-10 h-10 md:w-12 md:h-12 text-charcoal-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
          <circle cx="9" cy="13" r="1" className="animate-pulse" />
          <circle cx="11" cy="15" r="1" className="animate-pulse" style={{animationDelay: '0.5s'}} />
        </svg>
      </div>
    </div>
  );
};

export default FloatingElements;