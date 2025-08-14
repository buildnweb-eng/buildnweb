'use client';

import React from 'react';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: 'chevron' | 'slash' | 'arrow' | 'dot';
  className?: string;
  showHome?: boolean;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = 'chevron',
  className = '',
  showHome = true
}) => {
  const getSeparator = () => {
    switch (separator) {
      case 'slash':
        return <span className="mx-2 text-gray-400">/</span>;
      case 'arrow':
        return <span className="mx-2 text-gray-400">→</span>;
      case 'dot':
        return <span className="mx-2 text-gray-400">•</span>;
      case 'chevron':
      default:
        return <ChevronRightIcon className="h-4 w-4 mx-2 text-gray-400" />;
    }
  };

  const allItems = showHome 
    ? [{ label: 'Home', href: '/', icon: <HomeIcon className="h-4 w-4" /> }, ...items]
    : items;

  return (
    <nav aria-label="Breadcrumb" className={`${className}`}>
      <ol className="flex items-center space-x-1">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          
          return (
            <li key={index} className="flex items-center">
              {index > 0 && getSeparator()}
              
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className="flex items-center space-x-1 text-sm text-gray-600 hover:text-brand-primary transition-colors"
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.label}</span>
                </a>
              ) : (
                <span
                  className={`flex items-center space-x-1 text-sm ${
                    isLast ? 'text-brand-primary font-medium' : 'text-gray-600'
                  }`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.label}</span>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

// Sticky Breadcrumb with background
export const StickyBreadcrumb: React.FC<BreadcrumbProps> = (props) => {
  return (
    <div className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <Breadcrumb {...props} />
      </div>
    </div>
  );
};

// Mobile-friendly Breadcrumb
export const MobileBreadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className = ''
}) => {
  if (items.length === 0) return null;
  
  const previousItem = items.length > 1 ? items[items.length - 2] : null;
  const currentItem = items[items.length - 1];
  
  return (
    <nav aria-label="Breadcrumb" className={`${className}`}>
      <div className="flex items-center justify-between">
        {previousItem && (
          <a
            href={previousItem.href}
            className="flex items-center space-x-1 text-sm text-gray-600 hover:text-brand-primary transition-colors"
          >
            <ChevronRightIcon className="h-4 w-4 rotate-180" />
            <span>Back to {previousItem.label}</span>
          </a>
        )}
        <span className="text-sm font-medium text-brand-primary">
          {currentItem.label}
        </span>
      </div>
    </nav>
  );
};