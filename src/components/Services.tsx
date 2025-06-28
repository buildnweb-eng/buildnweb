'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  CodeBracketIcon, 
  MagnifyingGlassIcon, 
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Services = () => {
  const servicesRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: <CodeBracketIcon className="h-12 w-12 text-blue-600" />,
      title: "Website Development",
      description: "Custom websites built with modern technologies like React, Next.js, and responsive design principles.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Mobile-First"]
    },
    {
      icon: <MagnifyingGlassIcon className="h-12 w-12 text-blue-600" />,
      title: "SEO Services",
      description: "Comprehensive SEO strategies to improve your search engine rankings and drive organic traffic.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Content Strategy"]
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-12 w-12 text-blue-600" />,
      title: "Social Media Management",
      description: "Professional social media setup and management for Instagram, Facebook, and other platforms.",
      features: ["Content Creation", "Post Scheduling", "Community Management", "Analytics"]
    },
    {
      icon: <ChartBarIcon className="h-12 w-12 text-blue-600" />,
      title: "Instagram Advertising",
      description: "Targeted Instagram ad campaigns to reach your ideal customers and grow your business.",
      features: ["Ad Creation", "Audience Targeting", "Campaign Management", "Performance Tracking"]
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined' && servicesRef.current) {
      gsap.fromTo(Array.from(servicesRef.current.children), {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Service cards hover animations
      const serviceCards = document.querySelectorAll('.service-card');
      serviceCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <section id="services" ref={servicesRef} className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business grow online
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card p-8 service-card cursor-pointer">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 