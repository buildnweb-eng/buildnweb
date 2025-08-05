'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  StarIcon,
  QuoteIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  UserCircleIcon
} from '@heroicons/react/24/solid';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612e0bb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "TechCraft delivered an exceptional web application that exceeded our expectations. Their attention to detail and modern approach made our project a huge success.",
      service: "Web Application",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder",
      company: "StartupLab",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The Android app they developed for us has been downloaded over 10,000 times. The user experience is incredible and the code quality is top-notch.",
      service: "Android App",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Operations Manager",
      company: "LogiFlow Systems",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Our custom desktop application has streamlined our entire workflow. TechCraft understood our complex requirements and delivered exactly what we needed.",
      service: "Desktop App",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      id: 4,
      name: "David Kumar",
      position: "CS Student",
      company: "University of Technology",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "They helped me with my final year project and guided me through every step. Got an A+ grade and learned so much about modern development practices!",
      service: "College Project",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Marketing Director",
      company: "BrandBoost Agency",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Professional, creative, and incredibly responsive. They built us a beautiful portfolio website that showcases our work perfectly.",
      service: "Web Application",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 6,
      name: "Alex Williams",
      position: "Product Manager",
      company: "InnovateTech",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The cross-platform desktop app they created has become essential to our daily operations. Excellent communication throughout the project.",
      service: "Desktop App",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined' && testimonialsRef.current) {
      // Animate testimonial cards
      gsap.fromTo('.testimonial-card', {
        opacity: 0,
        y: 50,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate stars
      gsap.fromTo('.star-rating', {
        opacity: 0,
        scale: 0
      }, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <section id="testimonials" ref={testimonialsRef} className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <SparklesIcon className="h-4 w-4 mr-2" />
              Client Stories
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients
            <br />
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with TechCraft Agency.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="testimonial-card group hover-lift">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300`}></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-modern">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                      <QuoteIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400 star-rating" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Service Badge */}
                  <div className="mb-4">
                    <span className={`inline-block bg-gradient-to-r ${testimonial.gradient} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {testimonial.service}
                    </span>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=random&color=fff&size=48`;
                      }}
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                      <p className="text-gray-500 text-sm flex items-center">
                        <BuildingOfficeIcon className="h-3 w-3 mr-1" />
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by <span className="gradient-text">200+</span> Clients Worldwide
            </h3>
            <p className="text-lg text-gray-600">
              We're proud to have helped businesses and students achieve their digital goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;