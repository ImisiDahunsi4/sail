import React from 'react';
import FeatureCard from './FeatureCard';
import { featuresData } from './featuresData';

const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-charcoal-50 to-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-950 mb-4">
            Chart Your Research Course
          </h2>
          <p className="text-lg md:text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Sail provides a powerful, integrated toolkit to navigate the entire research lifecycle, 
            from initial discovery to final synthesis.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard 
              key={feature.title} 
              {...feature} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;