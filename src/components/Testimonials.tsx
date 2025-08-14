"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  StarIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  UserCircleIcon,
  RocketLaunchIcon,
  HeartIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  ShoppingBagIcon,
  FireIcon,
} from "@heroicons/react/24/solid";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLElement>(null);

  const industryLeaders = [
    {
      id: 1,
      name: "CloudSync SaaS",
      industry: "SaaS",
      partnership: "3x demo bookings",
      metric: "+285% revenue",
      icon: <RocketLaunchIcon className="h-8 w-8 text-blue-600" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "TechFlow Analytics",
      industry: "B2B SaaS",
      partnership: "2x conversion rate",
      metric: "+180% ARR",
      icon: <HeartIcon className="h-8 w-8 text-red-600" />,
      gradient: "from-red-500 to-pink-500",
    },
    {
      id: 3,
      name: "DataVault Pro",
      industry: "Enterprise SaaS",
      partnership: "5x lead quality",
      metric: "+420% pipeline",
      icon: <AcademicCapIcon className="h-8 w-8 text-green-600" />,
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined" && testimonialsRef.current) {
      // Animate industry leader cards
      gsap.fromTo(
        ".industry-card",
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
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
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate stats
      gsap.fromTo(
        ".stat-number",
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <section
      id="testimonials"
      ref={testimonialsRef}
      className="section-padding bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <SparklesIcon className="h-4 w-4 mr-2" />
              Proven SaaS Growth Results
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real SaaS Companies,
            <br />
            <span className="gradient-text">Real Revenue Growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our SaaS clients achieved 3x demo bookings and measurable revenue growth
            with our conversion-optimized websites.
          </p>
        </div>

        {/* Industry Leaders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industryLeaders.map((leader, index) => (
            <div key={leader.id} className="industry-card group hover-lift">
              <div className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${leader.gradient} rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300`}
                ></div>
                <div className="relative bg-white rounded-xl p-6 shadow-modern text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${leader.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <div className="text-white">
                      {React.cloneElement(leader.icon, {
                        className: "h-8 w-8 text-white",
                      })}
                    </div>
                  </div>

                  <h4 className="font-bold text-gray-900 mb-2">
                    {leader.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    {leader.industry}
                  </p>
                  <div className="text-sm font-semibold text-blue-600 mb-1">
                    {leader.partnership}
                  </div>
                  <div className="text-xs text-green-600 font-medium">
                    {leader.metric}
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
              <span className="gradient-text">SaaS Growth</span> Specialists
            </h3>
            <p className="text-lg text-gray-600">
              Focusing on <span className="font-semibold">revenue-driven results</span> with
              a <span className="font-semibold">7-day launch guarantee</span>
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2 stat-number">
                3x
              </div>
              <div className="text-gray-600">Demo Bookings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2 stat-number">
                285%
              </div>
              <div className="text-gray-600">Avg Revenue Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2 stat-number">
                7
              </div>
              <div className="text-gray-600">Day Launch</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2 stat-number">
                100%
              </div>
              <div className="text-gray-600">ROI Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
