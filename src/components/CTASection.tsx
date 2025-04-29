import React from 'react';
import { ArrowRight, CheckCircle2, Clock, MessageSquareMore, LucideProps } from 'lucide-react';

interface BenefitItem {
  icon: React.ReactElement<LucideProps>;
  text: string;
}

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink?: string; // Optional link
  benefits: BenefitItem[];
}

export const CTASection: React.FC<CTASectionProps> = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink, 
  benefits 
}) => {
  const handleButtonClick = () => {
    if (buttonLink) {
      window.open(buttonLink, '_blank');
    } else {
      console.log('CTA button clicked - Link not provided');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900/50 to-purple-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">{title}</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
          {subtitle}
        </p>
        <button 
          onClick={handleButtonClick}
          className="bg-white text-dark hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group"
        >
          {buttonText}
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </button>
        
        <div className="mt-12 flex justify-center space-x-8 flex-wrap gap-4">
          {benefits.map((item, index) => (
            <div key={index} className="flex items-center text-gray-300">
              {React.cloneElement(item.icon, { className: 'h-6 w-6' })}
              <span className="ml-2">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 