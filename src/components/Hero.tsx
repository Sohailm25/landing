import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  videoPlaceholder: React.ReactNode;
  ctaButtonText: string;
  onCtaClick: () => void; // Function to handle CTA click
}

export const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  videoPlaceholder, 
  ctaButtonText,
  onCtaClick
}) => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text leading-tight"
          // Use dangerouslySetInnerHTML only if title must contain HTML, otherwise prefer string
          // dangerouslySetInnerHTML={{ __html: title }} 
        >
          {title} 
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        {/* Video Placeholder Area */}
        <div className="w-full max-w-4xl mx-auto mb-8">
          {videoPlaceholder}
        </div>
        <button 
          onClick={onCtaClick}
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-bounce shadow-lg hover:shadow-blue-500/25"
        >
          {ctaButtonText}
        </button>
      </div>
    </section>
  );
}; 