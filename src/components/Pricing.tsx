'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckIcon } from '@heroicons/react/24/outline';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Pricing = () => {
  const pricingRef = useRef<HTMLElement>(null);

  const pricingPlans = [
    {
      name: "Starter Package",
      price: "₹25,000",
      period: "one-time",
      description: "Perfect for small businesses and startups",
      features: [
        "5-10 page responsive website",
        "Social media setup (Instagram, Facebook)",
        "Basic SEO optimization",
        "3 months maintenance included",
        "Mobile-responsive design",
        "Contact form integration"
      ],
      popular: false
    },
    {
      name: "Growth Package",
      price: "₹75,000",
      period: "one-time",
      description: "Ideal for growing businesses",
      features: [
        "Custom website with advanced features",
        "Complete social media strategy",
        "Monthly SEO services (6 months)",
        "Instagram ads setup and management",
        "6 months maintenance included",
        "Analytics and reporting",
        "Content management system",
        "E-commerce functionality"
      ],
      popular: true
    },
    {
      name: "Enterprise Package",
      price: "₹2,00,000+",
      period: "custom",
      description: "For large businesses and enterprises",
      features: [
        "Custom web application",
        "Comprehensive digital marketing strategy",
        "Advanced SEO and content marketing",
        "Ongoing social media management",
        "Advanced analytics and reporting",
        "Priority support",
        "Custom integrations",
        "Scalable architecture"
      ],
      popular: false
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined' && pricingRef.current) {
      gsap.fromTo(Array.from(pricingRef.current.children), {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: pricingRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Pricing cards animations
      const pricingCards = document.querySelectorAll('.pricing-card');
      pricingCards.forEach((card, index) => {
        gsap.fromTo(card, {
          opacity: 0,
          y: 50,
          scale: 0.9
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <section id="pricing" ref={pricingRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Package</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible pricing options designed to fit businesses of all sizes
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`card p-8 relative pricing-card ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {plan.price}
                  <span className="text-lg text-gray-600 font-normal">/{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 animated-btn ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 