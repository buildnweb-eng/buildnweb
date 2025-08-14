"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  AcademicCapIcon,
  CheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { ServiceCardSkeleton } from "@/components/ui/Skeleton";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Services = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const services = [
    {
      icon: <CodeBracketIcon className="h-12 w-12 text-blue-600" />,
      title: "SaaS Website Launch",
      description:
        "High-converting SaaS websites with demo booking optimization. Guaranteed 7-day delivery with measurable ROI.",
      features: [
        "Demo booking optimization",
        "Conversion tracking setup",
        "A/B tested components",
        "Analytics dashboard",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <DevicePhoneMobileIcon className="h-12 w-12 text-green-600" />,
      title: "E-commerce Revenue Engine",
      description:
        "Revenue-optimized e-commerce sites with AOV and conversion rate improvements. Built for scalable growth.",
      features: [
        "Cart abandonment recovery",
        "Product recommendations",
        "One-click checkout",
        "Revenue analytics",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <ComputerDesktopIcon className="h-12 w-12 text-purple-600" />,
      title: "Service Business Lead Generator",
      description:
        "Lead generation websites that drive qualified inbound calls and form submissions for service businesses.",
      features: [
        "Contact form optimization",
        "Local SEO setup",
        "Call tracking integration",
        "Appointment booking",
      ],
      gradient: "from-purple-500 to-violet-500",
    },
  ];

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    if (typeof window !== "undefined" && servicesRef.current && !isLoading) {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) {
        // Simple appearance without animations
        gsap.set(Array.from(servicesRef.current.children), { opacity: 1, y: 0 });
        gsap.set(".service-card", { scale: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        Array.from(servicesRef.current.children),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Service cards hover animations
      const serviceCards = document.querySelectorAll(".service-card");
      serviceCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      return () => {
        clearTimeout(timer);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <section
      id="services"
      ref={servicesRef}
      className="section-padding bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <SparklesIcon className="h-4 w-4 mr-2" />
              Our Expertise
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revenue-Driven
            <br />
            <span className="gradient-text">Digital Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized websites engineered for measurable business growth.
            7-day launch guarantee with ROI focus.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {isLoading ? (
            <>
              <ServiceCardSkeleton />
              <ServiceCardSkeleton />
              <ServiceCardSkeleton />
            </>
          ) : (
            services.map((service, index) => (
            <div key={index} className="group service-card cursor-pointer">
              <div
                className={`relative bg-gradient-to-br ${service.gradient} p-1 rounded-2xl`}
              >
                <div className="bg-white rounded-2xl p-8 h-full">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient}`}
                      >
                        <div className="text-white">
                          {React.cloneElement(service.icon, {
                            className: "h-8 w-8 text-white",
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <CheckIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">
                              {feature}
                            </span>
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
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
