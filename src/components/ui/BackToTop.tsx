'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show button when page is scrolled more than 300px
      setIsVisible(scrolled > 300);
      
      // Calculate scroll progress
      const totalScroll = documentHeight - windowHeight;
      const currentProgress = (scrolled / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group animate-fade-in-up"
          aria-label="Back to top"
        >
          <div className="relative">
            {/* Progress circle */}
            <svg className="w-14 h-14 transform -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-gray-300"
              />
              <circle
                cx="28"
                cy="28"
                r="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 24}`}
                strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
                className="text-brand-primary transition-all duration-300"
              />
            </svg>
            
            {/* Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transform transition-all duration-300 group-hover:scale-110">
                <ArrowUpIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          {/* Tooltip */}
          <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Back to top ({Math.round(scrollProgress)}%)
          </span>
        </button>
      )}
    </>
  );
};

export default BackToTop;