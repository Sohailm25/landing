import React from 'react';

interface Module {
  tag: string;
  title: string;
  problem: string;
  solution: string;
  benefit: string;
  price: string;
  monthly: string;
  learnMoreLink?: string; // Optional link
}

interface ExpansionModulesProps {
  title: string;
  subtitle: string;
  requirementText: string;
  modules: Module[];
}

const ModuleCard: React.FC<Module & { index: number }> = ({ 
  tag, 
  title, 
  problem, 
  solution, 
  benefit, 
  price, 
  monthly, 
  learnMoreLink 
}) => (
  <div className="card-hover rounded-xl overflow-hidden border border-gray-800">
    <div className="bg-emerald-600 text-white py-2 px-4 text-center">
      {tag}
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-red-400 font-semibold mb-2">The Problem:</h4>
          <p className="text-gray-300">{problem}</p>
        </div>
        
        <div>
          <h4 className="text-green-400 font-semibold mb-2">The Solution:</h4>
          <p className="text-gray-300">{solution}</p>
        </div>
        
        <div>
          <h4 className="text-blue-400 font-semibold mb-2">The Benefit:</h4>
          <p className="text-gray-300">{benefit}</p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div>
          <h4 className="text-gray-400 text-sm mb-1">Add-on Investment:</h4>
          <div className="text-2xl font-bold">
            {price} <span className="text-gray-400 text-base">+ {monthly}/month</span>
          </div>
        </div>
        <button 
          onClick={() => learnMoreLink && window.open(learnMoreLink, '_blank')} 
          disabled={!learnMoreLink}
          className={`bg-transparent border-2 border-emerald-500 text-emerald-500 px-4 py-2 rounded-lg transition-all duration-300 ${
            learnMoreLink ? 'hover:bg-emerald-500 hover:text-white cursor-pointer' : 'opacity-50 cursor-not-allowed'
          }`}
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
);

export const ExpansionModules: React.FC<ExpansionModulesProps> = ({
  title,
  subtitle,
  requirementText,
  modules,
}) => {
  return (
    <section className="py-20 bg-dark-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">{title}</h2>
          <p className="text-xl text-gray-300">
            {subtitle}
          </p>
          <p className="text-gray-400 mt-2">
            {requirementText}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <ModuleCard key={index} {...module} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}; 