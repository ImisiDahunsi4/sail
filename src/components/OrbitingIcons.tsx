import React from 'react';
import CompassIcon from './privacy-icons/CompassIcon';
import TelescopeIcon from './privacy-icons/TelescopeIcon';
import MapScrollIcon from './privacy-icons/MapScrollIcon';
import LifePreserverIcon from './privacy-icons/LifePreserverIcon';
import LighthouseIcon from './privacy-icons/LighthouseIcon';
import ShipWheelIcon from './privacy-icons/ShipWheelIcon';
import TreasureChestIcon from './privacy-icons/TreasureChestIcon';
import HarborIcon from './privacy-icons/HarborIcon';

const OrbitingIcons: React.FC = () => {
  return (
    <>
      {/* Inner Ring - Clockwise, 200px radius, 60s */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-96 h-96 animate-rotate-clockwise">
          {/* Top */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="p-2 bg-white bg-opacity-70 rounded-full shadow-md hover:bg-opacity-100 hover:scale-110 transition-all duration-300">
              <CompassIcon className="w-8 h-8 text-ocean-950 opacity-70 hover:opacity-100" />
            </div>
          </div>
          
          {/* Right */}
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
            <div className="p-2 bg-white bg-opacity-70 rounded-full shadow-md hover:bg-opacity-100 hover:scale-110 transition-all duration-300">
              <TelescopeIcon className="w-8 h-8 text-ocean-950 opacity-70 hover:opacity-100" />
            </div>
          </div>
          
          {/* Bottom */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="p-2 bg-white bg-opacity-70 rounded-full shadow-md hover:bg-opacity-100 hover:scale-110 transition-all duration-300">
              <MapScrollIcon className="w-8 h-8 text-ocean-950 opacity-70 hover:opacity-100" />
            </div>
          </div>
          
          {/* Left */}
          <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
            <div className="p-2 bg-white bg-opacity-70 rounded-full shadow-md hover:bg-opacity-100 hover:scale-110 transition-all duration-300">
              <LifePreserverIcon className="w-8 h-8 text-ocean-950 opacity-70 hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Outer Ring - Counter-clockwise, 280px radius, 80s */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[35rem] h-[35rem] animate-rotate-counter">
          {/* Top Right */}
          <div className="absolute top-8 right-8 transform">
            <div className="p-1.5 bg-white bg-opacity-60 rounded-full shadow-md hover:bg-opacity-100 hover:scale-110 transition-all duration-300">
              <LighthouseIcon className="w-7 h-7 text-teal-950 opacity-70 hover:opacity-100" />
            </div>
          </div>
          
          {/* Bottom Right */}
          <div className="absolute bottom-8 right-8 transform">
            <div className="p-1.5 bg-white bg-opacity-60 rounded-full shadow-md hover:bg-opacity-100 hover:scale-110 transition-all duration-300">
              <ShipWheelIcon className="w-7 h-7 text-teal-950 opacity-70 hover:opacity-100" />
            </div>
          </div>
          
          {/* Bottom Left */}
          <div className="absolute bottom-8 left-8 transform">
            <div className="p-1.5 bg-white bg-opacity-60 rounded-full shadow-md hover:bg-opacity-100 hover:scale-110 transition-all duration-300">
              <TreasureChestIcon className="w-7 h-7 text-teal-950 opacity-70 hover:opacity-100" />
            </div>
          </div>
          
          {/* Top Left */}
          <div className="absolute top-8 left-8 transform">
            <div className="p-1.5 bg-white bg-opacity-60 rounded-full shadow-md hover:bg-opacity-100 hover:scale-110 transition-all duration-300">
              <HarborIcon className="w-7 h-7 text-teal-950 opacity-70 hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrbitingIcons;