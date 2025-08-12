'use client';

import React, { useEffect, useState, useRef, ReactNode } from 'react';

interface LazyLoadProps {
  children: ReactNode;
  placeholder?: ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
}

const LazyLoad: React.FC<LazyLoadProps> = ({
  children,
  placeholder = <div className="animate-pulse bg-gray-200 rounded-lg h-64" />,
  rootMargin = '50px',
  threshold = 0.01,
  className = ''
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin,
        threshold
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold]);

  return (
    <div ref={containerRef} className={className}>
      {isLoaded ? children : placeholder}
    </div>
  );
};

export default LazyLoad;