import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  mockup: React.ReactNode;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  mockup, 
  index 
}) => {
  return (
    <div 
      className="group flex flex-col bg-white p-8 rounded-2xl border border-charcoal-200 shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-1 min-h-[320px]"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Mockup Area - Top 40% */}
      <div className="h-32 md:h-40 bg-gradient-to-br from-ocean-50 to-ocean-100 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
        {mockup}
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-charcoal-950 mb-3">
          {title}
        </h3>
        <p className="text-base text-charcoal-600 max-w-[280px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;