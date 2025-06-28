'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Portfolio = () => {
  const portfolioRef = useRef<HTMLElement>(null);

  const portfolio = [
    {
      title: "Gaming Studio Website",
      category: "Gaming Industry",
      image: "/api/placeholder/400/300",
      description: "Modern website for indie game development studio"
    },
    {
      title: "E-commerce Platform",
      category: "Retail",
      image: "/api/placeholder/400/300",
      description: "Full-featured online store with payment integration"
    },
    {
      title: "Tech Startup Landing",
      category: "Technology",
      image: "/api/placeholder/400/300",
      description: "Conversion-optimized landing page for SaaS product"
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined' && portfolioRef.current) {
      gsap.fromTo(Array.from(portfolioRef.current.children), {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Portfolio cards animations
      const portfolioCards = document.querySelectorAll('.portfolio-card');
      portfolioCards.forEach((card, index) => {
        gsap.fromTo(card, {
          opacity: 0,
          rotationY: 45,
          transformOrigin: "left center"
        }, {
          opacity: 1,
          rotationY: 0,
          duration: 1,
          delay: index * 0.3,
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
    <section id="portfolio" ref={portfolioRef} className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent projects and success stories
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {portfolio.map((project, index) => (
            <div key={index} className="card overflow-hidden portfolio-card cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative overflow-hidden">
                <div className="text-white text-lg font-semibold">Project Image</div>
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 