'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  ComputerDesktopIcon,
  AcademicCapIcon,
  CheckIcon,
  SparklesIcon
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
      title: "Web Applications",
      description: "Full-stack web applications built with cutting-edge technologies like React, Next.js, Node.js, and modern databases.",
      features: ["Custom Web Apps", "E-commerce Platforms", "Admin Dashboards", "API Development"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <DevicePhoneMobileIcon className="h-12 w-12 text-green-600" />,
      title: "Android Applications",
      description: "Native and cross-platform mobile apps for Android with intuitive UI/UX and robust functionality.",
      features: ["Native Android", "React Native", "Flutter Development", "App Store Deployment"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <ComputerDesktopIcon className="h-12 w-12 text-purple-600" />,
      title: "Desktop Applications",
      description: "Cross-platform desktop software solutions using Electron, .NET, Java, and other robust frameworks.",
      features: ["Cross-Platform Apps", "Windows Applications", "macOS Applications", "System Integration"],
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: <AcademicCapIcon className="h-12 w-12 text-orange-600" />,
      title: "College Projects",
      description: "Academic project development and guidance for students with complete documentation and presentation support.",
      features: ["Final Year Projects", "Mini Projects", "Research Papers", "Technical Documentation"],
      gradient: "from-orange-500 to-red-500"
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
          <div className="mb-4">
            <span className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <SparklesIcon className="h-4 w-4 mr-2" />
              Our Expertise
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transforming Ideas Into
            <br />
            <span className="gradient-text">Digital Reality</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we deliver comprehensive solutions across all digital platforms
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group service-card cursor-pointer">
              <div className={`relative bg-gradient-to-br ${service.gradient} p-1 rounded-2xl`}>
                <div className="bg-white rounded-2xl p-8 h-full">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient}`}>
                        <div className="text-white">
                          {React.cloneElement(service.icon, { className: "h-8 w-8 text-white" })}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-2 text-sm">
                            <CheckIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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