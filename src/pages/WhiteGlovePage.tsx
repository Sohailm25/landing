import React from 'react';
import { Briefcase, Star } from 'lucide-react'; // Example icons
import { config } from '../config'; // Assuming config holds a sales contact link/method

const WhiteGlovePage: React.FC = () => {
  // Placeholder: Replace with actual contact logic (e.g., mailto, contact form link)
  const handleContactSales = () => {
    console.log('Contact Sales button clicked - Implement contact logic');
    // Example: window.location.href = 'mailto:sales@yourdomain.com?subject=White Glove Inquiry';
    // Or link to a contact form page
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center bg-dark-100 p-10 rounded-lg shadow-xl border border-gray-800">
        <Briefcase className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
        <h1 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">White Glove Enterprise Solution</h1>
        <p className="text-lg text-gray-300 mb-8">
          Our premium, high-touch service for firms requiring comprehensive automation solutions and dedicated support. This package anchors our pricing and offers unparalleled access and customization.
        </p>
        <ul className="text-left text-gray-400 space-y-2 mb-8 max-w-md mx-auto">
          <li className="flex items-center"><Star className="h-5 w-5 text-yellow-400 mr-2" /> Unlimited Automations Audit & Strategy</li>
          <li className="flex items-center"><Star className="h-5 w-5 text-yellow-400 mr-2" /> Priority Support & Dedicated Account Manager</li>
          <li className="flex items-center"><Star className="h-5 w-5 text-yellow-400 mr-2" /> Premium SLA Retainer</li>
          <li className="flex items-center"><Star className="h-5 w-5 text-yellow-400 mr-2" /> One Included Upsell Module (e.g., Onboarding)</li>
          <li className="flex items-center"><Star className="h-5 w-5 text-yellow-400 mr-2" /> Fully Custom Build & Integration</li>
        </ul>
        <p className="text-gray-400 italic mb-8">Contact us for personalized pricing based on your firm's specific needs.</p>
        <button 
          onClick={handleContactSales}
          className="bg-white text-dark hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Contact Sales
        </button>
      </div>
    </div>
  );
};

export default WhiteGlovePage; 