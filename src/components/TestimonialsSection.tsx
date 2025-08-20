import React, { useRef, useEffect } from 'react';
import CompassRoseIcon from './icons/CompassRoseIcon';

interface Testimonial {
  id: number;
  quote: string;
  source: string;
  author?: string;
  context?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Sail transformed how I approach literature reviews. Instead of drowning in papers, I can navigate through complex research with intelligent insights and perfect citations.",
    source: "Research Methods Quarterly",
    author: "Dr. Sarah Chen",
    context: "Research Methodology"
  },
  {
    id: 2,
    quote: "Finally, a research tool that understands how students actually work. Sail makes sense of my chaotic source collection and helps me find the connections I was missing.",
    source: "Higher Education Today",
    context: "Student Success Story"
  },
  {
    id: 3,
    quote: "The most intuitive research platform we've tested. Sail's ability to synthesize information from multiple formats while maintaining source integrity is remarkable.",
    source: "TechReview Pro",
    author: "Marcus Rodriguez",
    context: "Senior Analyst"
  },
  {
    id: 4,
    quote: "Sail has revolutionized our graduate students' research process. The maritime metaphor isn't just clever branding—it genuinely helps users think about navigating information.",
    source: "University Innovation Report",
    context: "Stanford Research Department"
  },
  {
    id: 5,
    quote: "Where other tools feel overwhelming, Sail provides clarity. It's the difference between drowning in data and sailing smoothly through insights.",
    source: "Knowledge Management Weekly"
  },
  {
    id: 6,
    quote: "Sail bridges the gap between AI capability and research practicality. It's built for how researchers actually think and work.",
    source: "Digital Research Forum",
    context: "Community Review"
  }
];

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <article 
      className="testimonial-card bg-white border border-charcoal-200 rounded-2xl p-8 min-h-[220px] w-[380px] md:w-[380px] sm:w-[300px] flex-shrink-0 shadow-md hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-2 hover:border-2 hover:border-transparent hover:bg-gradient-to-br hover:from-white hover:via-white hover:to-blue-50 group relative overflow-hidden scroll-snap-align-start"
      tabIndex={0}
      role="article"
      aria-label={`Testimonial from ${testimonial.source}`}
    >
      {/* Wave pattern watermark - only visible on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
          fill="none"
        >
          <path 
            d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" 
            fill="currentColor" 
            className="text-teal-400"
          />
        </svg>
      </div>
      
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-ocean-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" 
           style={{ padding: '2px' }}>
        <div className="w-full h-full bg-white rounded-2xl"></div>
      </div>
      
      {/* Quote mark styled as compass point */}
      <div className="relative z-10">
        <div className="text-teal-600 text-4xl font-bold leading-none mb-4 font-serif">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="transform -rotate-12">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.2.916c-4.39.954-8.183 4.077-8.183 9.693v7.391h-1z"/>
            <path d="M6.017 21v-7.391c0-5.704 3.748-9.57 9-10.609l.2.916c-4.389.954-8.2 4.077-8.2 9.693v7.391h-1z"/>
          </svg>
        </div>
        
        <blockquote className="text-charcoal-700 text-base leading-relaxed italic mb-6 font-normal">
          {testimonial.quote}
        </blockquote>
        
        <footer className="space-y-1">
          <div className="text-ocean-700 font-semibold text-sm">
            {testimonial.source}
          </div>
          {(testimonial.author || testimonial.context) && (
            <div className="text-charcoal-500 text-xs">
              {testimonial.author && testimonial.context ? 
                `${testimonial.author}, ${testimonial.context}` : 
                testimonial.author || testimonial.context
              }
            </div>
          )}
        </footer>
      </div>
    </article>
  );
};

const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = React.useState(false);

  // Create duplicated testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.code === 'Space') {
      event.preventDefault();
      setIsPaused(!isPaused);
    }
  };

  useEffect(() => {
    // Reset animation when component mounts
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'running';
    }
  }, []);

  return (
    <section 
      className="w-full bg-gradient-to-b from-charcoal-50 to-charcoal-100 py-20 md:py-24 overflow-hidden"
      role="region"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <CompassRoseIcon size={16} className="text-teal-600" />
            <h2 
              id="testimonials-heading"
              className="text-4xl md:text-5xl font-bold text-charcoal-950 tracking-tight"
            >
              Trusted by Research Navigators
            </h2>
          </div>
          <p className="text-lg md:text-xl text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
            See how researchers are charting new territories with Sail
          </p>
        </div>
        
        {/* Testimonials Container */}
        <div className="relative">
          {/* Edge fade effects */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-charcoal-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-charcoal-100 to-transparent z-10 pointer-events-none"></div>
          
          {/* Skip link for accessibility */}
          <a 
            href="#after-testimonials" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-4 py-2 rounded-md border-2 border-ocean-600 text-ocean-600 font-semibold z-20"
          >
            Skip testimonials animation
          </a>
          
          {/* Scrolling container */}
          <div 
            className="testimonials-container overflow-hidden" 
            aria-label="Customer testimonials"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
          >
            <div 
              ref={scrollRef}
              className={`testimonials-scroll flex gap-6 w-fit ${
                isPaused ? 'animation-paused' : ''
              }`}
              style={{
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={`${testimonial.id}-${index}`} 
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Instructions for keyboard users */}
        <div className="text-center mt-8">
          <p className="text-sm text-charcoal-500">
            Use spacebar to pause/resume • Hover to pause • Tab to navigate individual testimonials
          </p>
        </div>
      </div>
      
      {/* Anchor for skip link */}
      <div id="after-testimonials" className="sr-only">End of testimonials section</div>
    </section>
  );
};

export default TestimonialsSection;