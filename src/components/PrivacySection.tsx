import React from 'react';
import AnchorShieldIcon from './privacy-icons/AnchorShieldIcon';
import OrbitingIcons from './OrbitingIcons';
import TrustBadges from './TrustBadges';

const PrivacySection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-charcoal-50 to-white py-20 md:py-25">
      <div className="mx-auto max-w-4xl px-6">
        {/* Content Container */}
        <div className="text-center space-y-8">
          {/* Headlines */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-medium text-ocean-950 tracking-wide">
              Privacy-First Research Platform
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-950 tracking-tight">
              Your Research Stays in Safe Harbor
            </h2>
          </div>
          
          {/* Orbital Animation Container */}
          <div className="relative py-16 md:py-20">
            {/* Central Anchor with Shield */}
            <div className="flex items-center justify-center">
              <AnchorShieldIcon />
            </div>
            
            {/* Orbiting Icons */}
            <OrbitingIcons />
          </div>
          
          {/* Descriptions */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-charcoal-600 leading-relaxed">
              Sail operates with complete data sovereignty. Your uploaded sources, research queries, 
              and generated insights remain entirely private and are never used to train AI models 
              or shared with third parties.
            </p>
            <p className="text-base md:text-lg text-charcoal-500 leading-relaxed">
              Built on encrypted infrastructure with SOC 2 compliance and GDPR adherence, so you can 
              focus on discovery, not data concerns.
            </p>
          </div>
          
          {/* Trust Badges */}
          <TrustBadges />
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;