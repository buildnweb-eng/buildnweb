'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  StarIcon, 
  CheckIcon, 
  PhoneIcon, 
  CodeBracketIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

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
          <div className="mb-4">
            <span className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <SparklesIcon className="h-4 w-4 mr-2" />
              About TechCraft
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Building Tomorrow's
            <br />
            <span className="gradient-text">Digital Solutions</span> Today
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're a passionate team of developers and designers dedicated to transforming ideas into 
            powerful digital experiences. From cutting-edge web applications to innovative mobile and 
            desktop solutions, we bring your vision to life with precision and creativity.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="group hover-lift">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-modern">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CodeBracketIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Expert Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Cutting-edge technologies and modern frameworks to build scalable, high-performance applications.
                </p>
              </div>
            </div>
          </div>
          
          <div className="group hover-lift">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-modern">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <LightBulbIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Innovation Focused</h3>
                <p className="text-gray-600 leading-relaxed">
                  Creative solutions that push boundaries and deliver exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
          
          <div className="group hover-lift">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-modern">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Quality Assured</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rigorous testing and quality control to ensure flawless performance across all platforms.
                </p>
              </div>
            </div>
          </div>
          
          <div className="group hover-lift">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-modern">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ShieldCheckIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Reliable Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Continuous support and maintenance to keep your applications running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional content section */}
        <div className="mt-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Mission</span>
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              To empower businesses, students, and entrepreneurs with innovative digital solutions that 
              drive growth, enhance productivity, and create meaningful connections. We believe in the 
              power of technology to transform ideas into reality and make a positive impact on the world.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 