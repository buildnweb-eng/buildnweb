'use client';

import React from 'react';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowTopRightOnSquareIcon 
} from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">TC</span>
              </div>
              <div className="text-3xl font-bold gradient-text">TechCraft Agency</div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transforming ideas into powerful digital experiences. We specialize in web applications, 
              mobile apps, desktop software, and college projects with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                <span className="text-sm font-bold">ig</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                <span className="text-sm font-bold">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                <span className="text-sm font-bold">tw</span>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors flex items-center group">
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Web Applications
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400 transition-colors flex items-center group">
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Android Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-purple-400 transition-colors flex items-center group">
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Desktop Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors flex items-center group">
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  College Projects
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Get In Touch</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-blue-400" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-purple-400" />
                <a href="mailto:contact@techcraftagency.com" className="hover:text-white transition-colors">contact@techcraftagency.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-green-400" />
                <span>India (Remote Services)</span>
              </li>
            </ul>
            
            {/* Quick Links */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-gray-400">Quick Links</h5>
              <div className="flex flex-wrap gap-2">
                <a href="#about" className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors">About</a>
                <a href="#portfolio" className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors">Portfolio</a>
                <a href="#contact" className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>&copy; 2025 TechCraft Agency. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 