import React from 'react';

const TrustBadges: React.FC = () => {
  const badges = [
    {
      title: "SOC 2",
      subtitle: "Compliant",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "GDPR",
      subtitle: "Adherent",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "End-to-End",
      subtitle: "Encrypted",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      )
    },
    {
      title: "Zero Data",
      subtitle: "Training",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L12 12m6.364 6.364L12 12m0 0L5.636 5.636M12 12l6.364 6.364M12 12L5.636 5.636" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-8">
      {badges.map((badge, index) => (
        <div 
          key={badge.title}
          className="flex items-center space-x-3 bg-white bg-opacity-60 px-4 py-3 rounded-lg border border-charcoal-200 shadow-sm hover:bg-opacity-80 hover:scale-105 transition-all duration-200"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-ocean-700 opacity-80">
            {badge.icon}
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold text-charcoal-800">
              {badge.title}
            </div>
            <div className="text-xs text-charcoal-600 opacity-80">
              {badge.subtitle}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;