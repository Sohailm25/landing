import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  rating: number; // Assuming 1-5 stars
  text: string;
  authorName: string;
  authorTitle: string;
  authorImage?: string; // Optional image URL
}

interface SocialProofProps {
  title: string;
  testimonials: Testimonial[];
  clientLogoPlaceholders: number; // Number of logo placeholders to show
}

const TestimonialCard: React.FC<Testimonial> = ({ 
  rating, 
  text, 
  authorName, 
  authorTitle, 
  authorImage 
}) => (
  <div className="card-hover rounded-xl p-6 border border-gray-800">
    <div className="flex text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < rating ? 'fill-current' : 'stroke-current'}`} />
      ))}
    </div>
    <p className="text-gray-300 mb-4 leading-relaxed">
      "{text}"
    </p>
    <div className="flex items-center">
      <div className={`w-12 h-12 rounded-full mr-4 ${authorImage ? '' : 'bg-dark-200'}`}>
        {authorImage && <img src={authorImage} alt={authorName} className="w-full h-full rounded-full object-cover" />}
      </div>
      <div>
        <h4 className="font-semibold text-white">{authorName}</h4>
        <p className="text-sm text-gray-400">{authorTitle}</p>
      </div>
    </div>
  </div>
);

export const SocialProof: React.FC<SocialProofProps> = ({ 
  title, 
  testimonials, 
  clientLogoPlaceholders 
}) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gradient">{title}</h2>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Client Logos */}
        <div className="flex justify-center space-x-12 flex-wrap gap-4">
          {[...Array(clientLogoPlaceholders)].map((_, index) => (
            <div key={index} className="w-32 h-12 bg-dark-100 rounded border border-gray-800 opacity-60 flex items-center justify-center text-gray-500 text-xs">
              Client Logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 