import React from 'react';

const NavigateAIMockup: React.FC = () => {
  return (
    <div className="w-full h-full relative flex flex-col p-3 text-xs">
      {/* Chat Interface */}
      <div className="bg-white bg-opacity-90 rounded-lg p-3 space-y-2 flex-1">
        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-ocean-100 text-ocean-800 px-2 py-1 rounded-lg max-w-[70%] text-xs">
            What are the key findings about climate change?
          </div>
        </div>
        
        {/* AI response */}
        <div className="flex justify-start">
          <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded-lg max-w-[80%] text-xs leading-relaxed">
            Based on your research papers, three key findings emerge:
            <div className="mt-1 space-y-1">
              <div className="flex items-center text-xs">
                <span className="w-1 h-1 bg-teal-500 rounded-full mr-1"></span>
                <span>Temperature rise of 1.1°C since 1880</span>
                <span className="ml-1 text-ocean-600 font-medium">[1]</span>
              </div>
              <div className="flex items-center text-xs">
                <span className="w-1 h-1 bg-teal-500 rounded-full mr-1"></span>
                <span>Arctic ice declining 13% per decade</span>
                <span className="ml-1 text-ocean-600 font-medium">[2]</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Typing indicator */}
        <div className="flex justify-start">
          <div className="bg-gray-100 px-2 py-1 rounded-lg">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Anchor symbol overlay */}
      <div className="absolute top-1 right-1 opacity-40">
        <svg className="w-4 h-4 text-teal-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="2" />
          <path d="M12 10v8" strokeLinecap="round" />
          <path d="M9 16l3 2 3-2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 10h4" strokeLinecap="round" />
        </svg>
      </div>
      
      {/* Citation indicators */}
      <div className="absolute bottom-1 left-1 flex space-x-1">
        <div className="w-2 h-2 bg-ocean-300 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="w-2 h-2 bg-teal-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="w-2 h-2 bg-seafoam-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};

export default NavigateAIMockup;