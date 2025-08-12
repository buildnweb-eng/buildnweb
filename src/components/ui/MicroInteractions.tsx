'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HoverScaleProps {
  children: ReactNode;
  scale?: number;
  className?: string;
}

export const HoverScale: React.FC<HoverScaleProps> = ({ 
  children, 
  scale = 1.05,
  className = '' 
}) => {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.95 }}
      className={className}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
};

interface PulseOnHoverProps {
  children: ReactNode;
  className?: string;
}

export const PulseOnHover: React.FC<PulseOnHoverProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        boxShadow: [
          '0 0 0 0 rgba(59, 130, 246, 0.5)',
          '0 0 0 10px rgba(59, 130, 246, 0)',
          '0 0 0 0 rgba(59, 130, 246, 0)',
        ],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const FadeInView: React.FC<FadeInViewProps> = ({ 
  children, 
  delay = 0,
  className = '' 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerChildren: React.FC<StaggerChildrenProps> = ({ 
  children, 
  className = '',
  staggerDelay = 0.1 
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};