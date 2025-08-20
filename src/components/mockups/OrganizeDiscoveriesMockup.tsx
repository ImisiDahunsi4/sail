import React from 'react';

const OrganizeDiscoveriesMockup: React.FC = () => {
  return (
    <div className="w-full h-full relative flex flex-col p-2 text-xs">
      {/* Note cards */}
      <div className="space-y-2">
        {/* Note 1 */}
        <div className="bg-white bg-opacity-90 rounded-md p-2 border-l-2 border-ocean-400 relative">
          <div className="flex items-center justify-between mb-1">
            <span className="font-medium text-gray-800 text-xs">Climate Data Trends</span>
            <span className="text-ocean-600 text-xs bg-ocean-100 px-1 rounded">#analysis</span>
          </div>
          <div className="text-gray-600 text-xs leading-tight">
            Key temperature patterns show accelerating warming...
          </div>
          {/* Connection line */}
          <div className="absolute -right-2 top-1/2 w-4 h-0.5 bg-teal-300 opacity-60"></div>
        </div>
        
        {/* Note 2 */}
        <div className="bg-white bg-opacity-90 rounded-md p-2 border-l-2 border-teal-400 relative ml-6">
          <div className="flex items-center justify-between mb-1">
            <span className="font-medium text-gray-800 text-xs">Arctic Research</span>
            <span className="text-teal-600 text-xs bg-teal-100 px-1 rounded">#polar</span>
          </div>
          <div className="text-gray-600 text-xs leading-tight">
            Ice sheet measurements from 2020-2024...
          </div>
          {/* Connection line */}
          <div className="absolute -left-6 top-1/2 w-6 h-0.5 bg-seafoam-300 opacity-60"></div>
        </div>
        
        {/* Note 3 */}
        <div className="bg-white bg-opacity-90 rounded-md p-2 border-l-2 border-seafoam-400 relative">
          <div className="flex items-center justify-between mb-1">
            <span className="font-medium text-gray-800 text-xs">Policy Impact</span>
            <span className="text-seafoam-600 text-xs bg-seafoam-100 px-1 rounded">#policy</span>
          </div>
          <div className="text-gray-600 text-xs leading-tight">
            Carbon reduction strategies effectiveness...
          </div>
        </div>
      </div>
      
      {/* Compass rose overlay */}
      <div className="absolute top-1 right-1 opacity-30">
        <svg className="w-5 h-5 text-teal-600 animate-spin" style={{animationDuration: '12s'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8" strokeWidth="1" />
          <path d="M12 4v2" strokeLinecap="round" />
          <path d="M12 18v2" strokeLinecap="round" />
          <path d="M4 12h2" strokeLinecap="round" />
          <path d="M18 12h2" strokeLinecap="round" />
          <path d="M12 4l1.5 4-1.5 1.5-1.5-4z" fill="currentColor" opacity="0.6" />
        </svg>
      </div>
      
      {/* Animated connection dots */}
      <div className="absolute bottom-2 right-2 flex space-x-1">
        <div className="w-1 h-1 bg-ocean-400 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="w-1 h-1 bg-teal-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="w-1 h-1 bg-seafoam-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};

export default OrganizeDiscoveriesMockup;