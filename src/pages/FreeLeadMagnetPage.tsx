import React from 'react';
import { DownloadCloud } from 'lucide-react'; // Example icon

const FreeLeadMagnetPage: React.FC = () => {
  // Placeholder: Replace with actual download link logic
  const handleDownload = () => {
    console.log('Download button clicked - Implement download logic');
    // Example: window.location.href = '/path/to/your/lead-magnet.pdf';
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center bg-dark-100 p-10 rounded-lg shadow-xl border border-gray-800">
        <DownloadCloud className="h-16 w-16 text-blue-400 mx-auto mb-6" />
        <h1 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">Free Lead Magnet Title</h1>
        <p className="text-lg text-gray-300 mb-8">
          Get your complimentary guide/checklist/resource to [achieve specific benefit]. Enter your email below to download instantly.
        </p>
        {/* Placeholder for an email form or just a direct download button */}
        <button 
          onClick={handleDownload}
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Download Now
        </button>
      </div>
    </div>
  );
};

export default FreeLeadMagnetPage; 