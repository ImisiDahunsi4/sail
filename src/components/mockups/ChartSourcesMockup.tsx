import React from 'react';

const ChartSourcesMockup: React.FC = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-4">
      {/* Drag and Drop Zone */}
      <div className="w-24 h-16 bg-white bg-opacity-80 rounded-lg border-2 border-dashed border-ocean-300 flex items-center justify-center relative">
        <svg className="w-6 h-6 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
        </svg>
        
        {/* Floating file type icons */}
        <div className="absolute -top-8 -left-6 animate-float opacity-70">
          <div className="bg-red-100 p-1.5 rounded shadow-sm border border-red-200">
            <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
          </div>
          <div className="text-xs text-center mt-1 font-medium text-red-600">PDF</div>
        </div>
        
        <div className="absolute -top-6 -right-8 animate-float-delayed opacity-70">
          <div className="bg-blue-100 p-1.5 rounded shadow-sm border border-blue-200">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
            </svg>
          </div>
          <div className="text-xs text-center mt-1 font-medium text-blue-600">Audio</div>
        </div>
        
        <div className="absolute -bottom-6 -left-4 animate-float-slow opacity-70">
          <div className="bg-green-100 p-1.5 rounded shadow-sm border border-green-200">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
          </div>
          <div className="text-xs text-center mt-1 font-medium text-green-600">Web</div>
        </div>
        
        <div className="absolute -bottom-8 -right-2 animate-float opacity-70">
          <div className="bg-purple-100 p-1.5 rounded shadow-sm border border-purple-200">
            <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19Z" />
            </svg>
          </div>
          <div className="text-xs text-center mt-1 font-medium text-purple-600">Doc</div>
        </div>
      </div>
      
      {/* Compass needle pointing to center */}
      <div className="absolute top-2 right-2 opacity-50">
        <svg className="w-6 h-6 text-teal-600 animate-spin" style={{animationDuration: '8s'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="1" />
          <path d="M12 6l2 6-2 2-2-6z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default ChartSourcesMockup;