import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

interface NavbarProps {
  logoPlaceholder: React.ReactNode;
  bookCallButtonText: string;
  bookCallButtonLink?: string; // Placeholder link
}

export const Navbar: React.FC<NavbarProps> = ({ 
  logoPlaceholder, 
  bookCallButtonText, 
  bookCallButtonLink // Use this prop for the link
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookCallClick = () => {
    if (bookCallButtonLink) {
      window.open(bookCallButtonLink, '_blank'); // Open link in new tab
    } else {
      console.log('Book call clicked - Link not configured'); 
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium ${
      isActive ? 'bg-dark-200/50 text-white' : ''
    }`;

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${
      isSticky ? 'bg-dark-100/80 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Area */} 
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="w-[150px] h-[60px] bg-dark-200 rounded-lg flex items-center justify-center overflow-hidden">
              {logoPlaceholder}
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <NavLink to="/" className={navLinkClass}>Home (RAG Bot)</NavLink> */}
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            {/* <NavLink to="/dfy-intake-accelerator" className={navLinkClass}>DFY Intake</NavLink> */}
            <NavLink to="/intake-accelerator" className={navLinkClass}>Intake Accelerator</NavLink>
            <NavLink to="/rag-chatbot" className={navLinkClass}>RAG Chatbot</NavLink>
            <NavLink to="/free-lead-magnet" className={navLinkClass}>Resources</NavLink>
            {/* <NavLink to="/white-glove" className={navLinkClass}>White Glove</NavLink> */}
            <NavLink to="/profile" className={navLinkClass}>About</NavLink>
            <button 
              onClick={handleBookCallClick}
              className="ml-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center group"
            >
              {bookCallButtonText} 
              <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */} 
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="bg-dark-200 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-100/95 backdrop-blur-lg pb-3 pt-2" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* <NavLink to="/" className={navLinkClass + " block"} onClick={toggleMobileMenu}>Home (RAG Bot)</NavLink> */}
            <NavLink to="/" className={navLinkClass + " block"} onClick={toggleMobileMenu} end>Home</NavLink>
            {/* <NavLink to="/dfy-intake-accelerator" className={navLinkClass + " block"} onClick={toggleMobileMenu}>DFY Intake</NavLink> */}
            <NavLink to="/intake-accelerator" className={navLinkClass + " block"} onClick={toggleMobileMenu}>Intake Accelerator</NavLink>
            <NavLink to="/rag-chatbot" className={navLinkClass + " block"} onClick={toggleMobileMenu}>RAG Chatbot</NavLink>
            <NavLink to="/free-lead-magnet" className={navLinkClass + " block"} onClick={toggleMobileMenu}>Resources</NavLink>
            {/* <NavLink to="/white-glove" className={navLinkClass + " block"} onClick={toggleMobileMenu}>White Glove</NavLink> */}
            <NavLink to="/profile" className={navLinkClass + " block"} onClick={toggleMobileMenu}>About</NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <button 
                onClick={() => { handleBookCallClick(); toggleMobileMenu(); }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center group"
              >
                {bookCallButtonText}
                <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}; 