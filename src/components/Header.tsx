'use client';

import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold gradient-text">WebCraft Agency</div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">About</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Services</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Pricing</a>
            <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Portfolio</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#contact" className="btn-primary animated-btn">Get Started</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 