import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-white mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-400 mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link 
        to="/" 
        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage; 