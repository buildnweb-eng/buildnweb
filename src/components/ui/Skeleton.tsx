'use client';

import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'text',
  width,
  height,
  animation = 'pulse'
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'circular':
        return 'rounded-full';
      case 'rounded':
        return 'rounded-xl';
      case 'rectangular':
        return 'rounded';
      case 'text':
      default:
        return 'rounded h-4';
    }
  };

  const getAnimationClasses = () => {
    switch (animation) {
      case 'wave':
        return 'animate-shimmer';
      case 'pulse':
        return 'animate-pulse';
      case 'none':
      default:
        return '';
    }
  };

  const style: React.CSSProperties = {
    width: width || '100%',
    height: height || (variant === 'text' ? '1rem' : '100%')
  };

  return (
    <div
      className={`bg-gray-200 ${getVariantClasses()} ${getAnimationClasses()} ${className}`}
      style={style}
    />
  );
};

interface CardSkeletonProps {
  showImage?: boolean;
  lines?: number;
}

export const CardSkeleton: React.FC<CardSkeletonProps> = ({ 
  showImage = true, 
  lines = 3 
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      {showImage && (
        <Skeleton variant="rounded" height={200} className="mb-4" />
      )}
      <Skeleton variant="text" width="60%" className="mb-2" />
      <Skeleton variant="text" width="80%" className="mb-4" />
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} variant="text" className="mb-2" />
      ))}
      <div className="flex gap-2 mt-4">
        <Skeleton variant="rounded" width={80} height={30} />
        <Skeleton variant="rounded" width={80} height={30} />
      </div>
    </div>
  );
};

export const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex items-start space-x-6">
        <Skeleton variant="rounded" width={64} height={64} />
        <div className="flex-1">
          <Skeleton variant="text" width="40%" className="mb-3" />
          <Skeleton variant="text" className="mb-2" />
          <Skeleton variant="text" className="mb-2" />
          <Skeleton variant="text" width="90%" className="mb-6" />
          <div className="grid grid-cols-2 gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} variant="text" width="80%" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const TestimonialSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex flex-col items-center">
        <Skeleton variant="circular" width={64} height={64} className="mb-4" />
        <Skeleton variant="text" width="60%" className="mb-2" />
        <Skeleton variant="text" width="40%" className="mb-2" />
        <Skeleton variant="text" width="30%" />
      </div>
    </div>
  );
};