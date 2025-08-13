"use client";

import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/90"
        } border-b border-gray-100`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TC</span>
                </div>
                <div className="text-2xl font-bold gradient-text">
                  Buildnweb
                </div>
              </div>
            </div>

            <nav
              className="hidden md:flex space-x-8"
              aria-label="Main navigation"
            >
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group"
                aria-label="Navigate to Home"
              >
                Home
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
                  aria-hidden="true"
                ></span>
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group"
                aria-label="Navigate to About"
              >
                About
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
                  aria-hidden="true"
                ></span>
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group"
                aria-label="Navigate to Services"
              >
                Services
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
                  aria-hidden="true"
                ></span>
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group"
                aria-label="Navigate to Portfolio"
              >
                Portfolio
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
                  aria-hidden="true"
                ></span>
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group"
                aria-label="Navigate to Contact"
              >
                Contact
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
                  aria-hidden="true"
                ></span>
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 animated-btn"
              >
                Get Started
              </a>
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
