import React from 'react';
import { LucideProps } from 'lucide-react'; // Use LucideProps for icon type

interface ValueCardProps {
  icon: React.ReactElement<LucideProps>;
  title: string;
  description: string;
}

interface ValuePropositionProps {
  cards: ValueCardProps[];
}

export const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="card-hover rounded-xl p-6 border border-gray-800">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export const ValueProposition: React.FC<ValuePropositionProps> = ({ cards }) => {
  return (
    <section className="py-20 bg-dark-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <ValueCard 
              key={index} 
              icon={card.icon} 
              title={card.title} 
              description={card.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 