'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StarIcon, CheckIcon, PhoneIcon } from '@heroicons/react/24/outline';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && aboutRef.current) {
      gsap.fromTo(Array.from(aboutRef.current.children), {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <section id="about" ref={aboutRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose WebCraft Agency?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in helping startups and gaming companies establish a strong digital presence 
            with our comprehensive web development and digital marketing services.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <StarIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
            <p className="text-gray-600">
              Our experienced developers and marketers specialize in the latest technologies and digital marketing strategies.
            </p>
          </div>
          
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
            <p className="text-gray-600">
              Track record of successful projects with measurable improvements in traffic, conversions, and online presence.
            </p>
          </div>
          
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <PhoneIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
            <p className="text-gray-600">
              Dedicated support team available around the clock to help you with any questions or issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 