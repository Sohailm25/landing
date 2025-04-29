import React, { useState, useEffect } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      // Avoid division by zero if height is 0 (e.g., content fits viewport)
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0; 
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial calculation in case the page loads scrolled
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
      style={{ width: `${scrollProgress}%` }}
      aria-label="Scroll progress"
    />
  );
}; 