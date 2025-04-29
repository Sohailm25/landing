import React from 'react';
import { Package, Zap } from 'lucide-react'; // Example icons

const ClientIntakeAcceleratorPage: React.FC = () => {
  // Placeholder: Replace with actual purchase link or checkout process
  const handleBuyNow = () => {
    console.log('Buy Now button clicked - Implement purchase logic/link');
    // Example: window.location.href = 'your-checkout-link-for-49-package';
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center bg-dark-100 p-10 rounded-lg shadow-xl border border-gray-800">
        <Package className="h-16 w-16 text-purple-400 mx-auto mb-6" />
        <h1 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">Client Intake Accelerator Package</h1>
        <p className="text-4xl font-bold mb-6">$49</p>
        <p className="text-lg text-gray-300 mb-4">
          Get the essential automation files, a step-by-step walkthrough video, and an FAQ document to implement our core intake automation yourself.
        </p>
        <ul className="text-left text-gray-400 space-y-2 mb-8 max-w-md mx-auto">
          <li className="flex items-center"><Zap className="h-5 w-5 text-green-400 mr-2" /> Automation Workflow Files</li>
          <li className="flex items-center"><Zap className="h-5 w-5 text-green-400 mr-2" /> Detailed Implementation Video Guide</li>
          <li className="flex items-center"><Zap className="h-5 w-5 text-green-400 mr-2" /> Comprehensive FAQ Document</li>
        </ul>
        <button 
          onClick={handleBuyNow}
          className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Buy Now for $49
        </button>
      </div>
    </div>
  );
};

export default ClientIntakeAcceleratorPage; 