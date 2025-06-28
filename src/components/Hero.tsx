'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroSubtextRef = useRef<HTMLDivElement>(null);
  const heroButtonsRef = useRef<HTMLDivElement>(null);
  const heroStatsRef = useRef<HTMLDivElement>(null);
  const heroGraphicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set initial states
      gsap.set([heroTextRef.current, heroSubtextRef.current, heroButtonsRef.current, heroStatsRef.current], {
        opacity: 0,
        y: 30
      });
      gsap.set(heroGraphicRef.current, {
        opacity: 0,
        x: 50,
        rotation: -5
      });

      // Hero animations timeline
      const heroTl = gsap.timeline();
      
      heroTl
        .to(heroTextRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        })
        .to(heroSubtextRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.5")
        .to(heroButtonsRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.3")
        .to(heroStatsRef.current ? Array.from(heroStatsRef.current.children) : [], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out"
        }, "-=0.3")
        .to(heroGraphicRef.current, {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.2,
          ease: "power3.out"
        }, "-=0.8");

      // Floating animation for hero graphic
      gsap.to(heroGraphicRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      // Stats counter animation
      const statsNumbers = document.querySelectorAll('.stat-number');
      statsNumbers.forEach((stat) => {
        const finalValue = stat.textContent;
        const numericValue = finalValue ? parseInt(finalValue) : 0;
        
        if (!isNaN(numericValue) && numericValue > 0) {
          gsap.fromTo(stat, {
            textContent: 0
          }, {
            textContent: numericValue,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          });
        }
      });

      // Button hover animations
      const buttons = document.querySelectorAll('.animated-btn');
      buttons.forEach((btn) => {
        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, {
            scale: 1.05,
            duration: 0.2,
            ease: "power2.out"
          });
        });
        
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, {
            scale: 1,
            duration: 0.2,
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
    <section id="home" ref={heroRef} className="pt-20 section-padding bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div ref={heroTextRef}>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Build Your Digital <span className="gradient-text">Presence</span> Today
              </h1>
            </div>
            <div ref={heroSubtextRef}>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We help startups and gaming companies create stunning websites, boost their SEO rankings, 
                and grow their social media presence with our comprehensive digital solutions.
              </p>
            </div>
            <div ref={heroButtonsRef} className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-center animated-btn">Start Your Project</a>
              <a href="#portfolio" className="btn-secondary text-center animated-btn">View Our Work</a>
            </div>
            <div ref={heroStatsRef} className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 stat-number">50</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 stat-number">95</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>

          </div>
          <div ref={heroGraphicRef}>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 transform rotate-3 shadow-2xl">
                <div className="bg-white rounded-lg p-6 transform -rotate-3">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                      <div className="h-4 bg-blue-200 rounded w-1/2 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded animate-pulse"></div>
                        <div className="h-16 bg-gradient-to-r from-purple-100 to-purple-200 rounded animate-pulse"></div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      );
  };
  
  export default Hero; 