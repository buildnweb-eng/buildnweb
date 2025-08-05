'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Portfolio = () => {
  const portfolioRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const portfolio = [
    {
      title: "E-commerce Dashboard",
      category: "Web Application",
      type: "web",
      tech: ["React", "Node.js", "MongoDB"],
      description: "Full-stack e-commerce management system with real-time analytics",
      gradient: "from-blue-500 to-cyan-500",
      icon: <CodeBracketIcon className="h-6 w-6" />
    },
    {
      title: "Task Management App",
      category: "Android Application",
      type: "mobile",
      tech: ["React Native", "Firebase", "Redux"],
      description: "Productivity app with collaborative features and offline sync",
      gradient: "from-green-500 to-emerald-500",
      icon: <DevicePhoneMobileIcon className="h-6 w-6" />
    },
    {
      title: "Inventory System",
      category: "Desktop Application",
      type: "desktop",
      tech: ["Electron", "SQLite", "Chart.js"],
      description: "Cross-platform inventory management with reporting dashboard",
      gradient: "from-purple-500 to-violet-500",
      icon: <ComputerDesktopIcon className="h-6 w-6" />
    },
    {
      title: "Student Portal",
      category: "College Project",
      type: "college",
      tech: ["PHP", "MySQL", "Bootstrap"],
      description: "Complete student management system with grade tracking",
      gradient: "from-orange-500 to-red-500",
      icon: <AcademicCapIcon className="h-6 w-6" />
    },
    {
      title: "Real Estate Platform",
      category: "Web Application",
      type: "web",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      description: "Property listing platform with advanced search and filters",
      gradient: "from-indigo-500 to-purple-500",
      icon: <CodeBracketIcon className="h-6 w-6" />
    },
    {
      title: "Fitness Tracker",
      category: "Android Application",
      type: "mobile",
      tech: ["Flutter", "Dart", "SQLite"],
      description: "Health and fitness tracking app with workout plans",
      gradient: "from-pink-500 to-rose-500",
      icon: <DevicePhoneMobileIcon className="h-6 w-6" />
    }
  ];

  const filters = ['All', 'Web Application', 'Android Application', 'Desktop Application', 'College Project'];

  const filteredPortfolio = activeFilter === 'All' 
    ? portfolio 
    : portfolio.filter(project => project.category === activeFilter);

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
          <div className="mb-4">
            <span className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <SparklesIcon className="h-4 w-4 mr-2" />
              Our Work
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Showcasing Our
            <br />
            <span className="gradient-text">Digital Creations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of web applications, mobile apps, desktop software, and college projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredPortfolio.map((project, index) => (
            <div key={index} className="group portfolio-card">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-modern">
                  {/* Project Header */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                        {project.icon}
                      </div>
                      <div className="text-lg font-semibold">{project.category}</div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your <span className="gradient-text">Project</span>?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and bring them to life with our expertise in modern technologies
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Get Started Today</span>
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 