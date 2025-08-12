'use client';

import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

interface Step {
  id: string;
  name: string;
  description?: string;
}

interface ProgressIndicatorProps {
  steps: Step[];
  currentStep: number;
  variant?: 'linear' | 'circular';
  showLabels?: boolean;
  className?: string;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  steps,
  currentStep,
  variant = 'linear',
  showLabels = true,
  className = ''
}) => {
  if (variant === 'circular') {
    return (
      <CircularProgress 
        steps={steps} 
        currentStep={currentStep} 
        showLabels={showLabels}
        className={className}
      />
    );
  }

  return (
    <LinearProgress 
      steps={steps} 
      currentStep={currentStep} 
      showLabels={showLabels}
      className={className}
    />
  );
};

const LinearProgress: React.FC<ProgressIndicatorProps> = ({
  steps,
  currentStep,
  showLabels = true,
  className = ''
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute left-0 top-5 h-0.5 w-full bg-gray-200">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>
        
        {/* Steps */}
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const isUpcoming = stepNumber > currentStep;
          
          return (
            <div 
              key={step.id} 
              className="flex flex-col items-center relative z-10"
            >
              {/* Step Circle */}
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  transition-all duration-300 transform
                  ${isCompleted 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-100' 
                    : isCurrent 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-110 ring-4 ring-blue-100' 
                      : 'bg-gray-200 scale-100'
                  }
                `}
              >
                {isCompleted ? (
                  <CheckIcon className="w-5 h-5 text-white" />
                ) : (
                  <span className={`text-sm font-semibold ${isCurrent || isCompleted ? 'text-white' : 'text-gray-600'}`}>
                    {stepNumber}
                  </span>
                )}
              </div>
              
              {/* Step Label */}
              {showLabels && (
                <div className="mt-3 text-center">
                  <p className={`text-xs font-medium ${isCurrent ? 'text-blue-600' : isCompleted ? 'text-gray-900' : 'text-gray-500'}`}>
                    {step.name}
                  </p>
                  {step.description && isCurrent && (
                    <p className="text-xs text-gray-500 mt-1 max-w-[100px]">
                      {step.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CircularProgress: React.FC<ProgressIndicatorProps> = ({
  steps,
  currentStep,
  showLabels = true,
  className = ''
}) => {
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative">
        <svg className="w-32 h-32 transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-200"
          />
          {/* Progress circle */}
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">
            {currentStep}/{steps.length}
          </span>
          <span className="text-xs text-gray-600">
            {Math.round(progress)}% Complete
          </span>
        </div>
      </div>
      
      {/* Current step label */}
      {showLabels && (
        <div className="mt-4 text-center">
          <p className="text-sm font-semibold text-gray-900">
            {steps[currentStep - 1]?.name}
          </p>
          {steps[currentStep - 1]?.description && (
            <p className="text-xs text-gray-600 mt-1">
              {steps[currentStep - 1].description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

// Form Progress Bar Component
interface FormProgressBarProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export const FormProgressBar: React.FC<FormProgressBarProps> = ({
  currentStep,
  totalSteps,
  className = ''
}) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-600">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-semibold text-blue-600">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};