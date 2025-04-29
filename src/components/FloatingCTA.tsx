import React from 'react';
import { MessageSquareMore } from 'lucide-react';

interface FloatingCTAProps {
  onClick?: () => void;
  link?: string;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onClick, link }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      window.open(link, '_blank');
    } else {
      console.log('Floating CTA clicked - No action defined');
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="Contact or Chat"
    >
      <MessageSquareMore className="h-6 w-6" />
    </button>
  );
}; 