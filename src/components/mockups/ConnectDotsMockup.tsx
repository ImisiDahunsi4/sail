import React from 'react';

const ConnectDotsMockup: React.FC = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-3">
      {/* Network diagram */}
      <div className="relative w-full h-full">
        {/* Central node */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 bg-ocean-500 rounded-full border-2 border-white shadow-md animate-pulse"></div>
          <div className="absolute top-7 left-1/2 transform -translate-x-1/2 text-xs font-medium text-ocean-700 whitespace-nowrap">
            Climate Change
          </div>
        </div>
        
        {/* Connected nodes */}
        {/* Top left - PDF */}
        <div className="absolute top-2 left-2">
          <div className="w-4 h-4 bg-red-400 rounded-full border border-white shadow animate-float"></div>
          <div className="text-xs text-center mt-1 text-red-600 font-medium">PDF</div>
          {/* Connection line to center */}
          <svg className="absolute top-2 left-2 w-16 h-12 pointer-events-none" viewBox="0 0 64 48">
            <path d="M8 8 L32 24" stroke="#0891b2" strokeWidth="1" opacity="0.6" strokeDasharray="2,2" className="animate-pulse" />
          </svg>
        </div>
        
        {/* Top right - Audio */}
        <div className="absolute top-2 right-2">
          <div className="w-4 h-4 bg-blue-400 rounded-full border border-white shadow animate-float-delayed"></div>
          <div className="text-xs text-center mt-1 text-blue-600 font-medium">Audio</div>
          {/* Connection line to center */}
          <svg className="absolute top-2 right-2 w-16 h-12 pointer-events-none" viewBox="0 0 64 48">
            <path d="M56 8 L32 24" stroke="#059669" strokeWidth="1" opacity="0.6" strokeDasharray="2,2" className="animate-pulse" style={{animationDelay: '0.5s'}} />
          </svg>
        </div>
        
        {/* Bottom left - Web */}
        <div className="absolute bottom-4 left-2">
          <div className="w-4 h-4 bg-green-400 rounded-full border border-white shadow animate-float-slow"></div>
          <div className="text-xs text-center mt-1 text-green-600 font-medium">Web</div>
          {/* Connection line to center */}
          <svg className="absolute top-0 left-2 w-16 h-12 pointer-events-none" viewBox="0 0 64 48">
            <path d="M8 40 L32 24" stroke="#1e40af" strokeWidth="1" opacity="0.6" strokeDasharray="2,2" className="animate-pulse" style={{animationDelay: '1s'}} />
          </svg>
        </div>
        
        {/* Bottom right - Documents */}
        <div className="absolute bottom-4 right-2">
          <div className="w-4 h-4 bg-purple-400 rounded-full border border-white shadow animate-float"></div>
          <div className="text-xs text-center mt-1 text-purple-600 font-medium">Docs</div>
          {/* Connection line to center */}
          <svg className="absolute top-0 right-2 w-16 h-12 pointer-events-none" viewBox="0 0 64 48">
            <path d="M56 40 L32 24" stroke="#0891b2" strokeWidth="1" opacity="0.6" strokeDasharray="2,2" className="animate-pulse" style={{animationDelay: '1.5s'}} />
          </svg>
        </div>
      </div>
      
      {/* Sail symbol overlay */}
      <div className="absolute top-1 right-1 opacity-30">
        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Sailboat mast */}
          <path d="M12 4v16" strokeLinecap="round" strokeWidth="1.5" />
          {/* Main sail */}
          <path d="M12 4c0 4 2.5 7 6 7V4h-6z" fill="currentColor" opacity="0.2" />
          {/* Boat hull */}
          <path d="M8 20c0-1 1.5-2 4-2s4 1 4 2" strokeLinecap="round" strokeWidth="1.5" />
        </svg>
      </div>
      
      {/* Insight sparkles */}
      <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60" style={{animationDelay: '0s'}}></div>
      </div>
      <div className="absolute bottom-3 left-1/3">
        <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping opacity-50" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="absolute bottom-6 right-1/3">
        <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping opacity-50" style={{animationDelay: '3s'}}></div>
      </div>
    </div>
  );
};

export default ConnectDotsMockup;