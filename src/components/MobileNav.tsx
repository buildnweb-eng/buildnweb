'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HomeIcon, 
  UserGroupIcon, 
  BriefcaseIcon, 
  FolderIcon, 
  PhoneIcon,
  XMarkIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { href: '#home', label: 'Home', icon: HomeIcon },
    { href: '#about', label: 'About', icon: UserGroupIcon },
    { href: '#services', label: 'Services', icon: BriefcaseIcon },
    { href: '#portfolio', label: 'Portfolio', icon: FolderIcon },
    { href: '#pricing', label: 'Pricing', icon: SparklesIcon },
    { href: '#contact', label: 'Contact', icon: PhoneIcon }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleItemClick = () => {
    setTimeout(onClose, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden"
            aria-label="Mobile navigation menu"
            role="navigation"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TC</span>
                </div>
                <span className="font-bold text-lg gradient-text">Menu</span>
              </div>
              
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close mobile menu"
              >
                <XMarkIcon className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <nav className="px-4 py-6">
              <ul className="space-y-2">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={item.href}
                        onClick={handleItemClick}
                        className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-colors group"
                        aria-label={`Navigate to ${item.label}`}
                      >
                        <Icon className="h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                        <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                          {item.label}
                        </span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 px-4"
              >
                <a
                  href="#contact"
                  onClick={handleItemClick}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                  aria-label="Get started with our services"
                >
                  Get Started
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 px-4 py-4 bg-gray-50 rounded-xl mx-4"
              >
                <p className="text-sm text-gray-600 text-center">
                  Ready to transform your ideas?
                </p>
                <p className="text-xs text-gray-500 text-center mt-1">
                  Let&apos;s build something amazing together
                </p>
              </motion.div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;