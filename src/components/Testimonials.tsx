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
      name: "TechNova Solutions",
      industry: "SaaS",
      partnership: "1 year",
      icon: <RocketLaunchIcon className="h-8 w-8 text-blue-600" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Heritage Handicrafts",
      industry: "E-commerce",
      partnership: "3 years",
      icon: <HeartIcon className="h-8 w-8 text-red-600" />,
      gradient: "from-red-500 to-pink-500",
    },
    {
      id: 3,
      name: "MedCare Clinics",
      industry: "Healthcare",
      partnership: "2 years",
      icon: <AcademicCapIcon className="h-8 w-8 text-green-600" />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      name: "EduTech Institute",
      industry: "Education",
      partnership: "2 years",
      icon: <AcademicCapIcon className="h-8 w-8 text-purple-600" />,
      gradient: "from-purple-500 to-violet-500",
    },
    {
      id: 5,
      name: "FinanceFirst",
      industry: "Finance",
      partnership: "31 years",
      icon: <CurrencyDollarIcon className="h-8 w-8 text-yellow-600" />,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      id: 6,
      name: "GreenEarth Organic",
      industry: "Organic Foods",
      partnership: "1 year",
      icon: <SparklesIcon className="h-8 w-8 text-green-600" />,
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: 7,
      name: "AutoMax Dealers",
      industry: "Automotive",
      partnership: "25 years",
      icon: <TruckIcon className="h-8 w-8 text-gray-600" />,
      gradient: "from-gray-500 to-slate-500",
    },
    {
      id: 8,
      name: "BuildRight Construction",
      industry: "Construction",
      partnership: "3 years",
      icon: <WrenchScrewdriverIcon className="h-8 w-8 text-orange-600" />,
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 9,
      name: "FashionForward",
      industry: "Fashion",
      partnership: "1 year",
      icon: <ShoppingBagIcon className="h-8 w-8 text-pink-600" />,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: 10,
      name: "TechRepair Pro",
      industry: "Tech Services",
      partnership: "12 years",
      icon: <WrenchScrewdriverIcon className="h-8 w-8 text-blue-600" />,
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      id: 11,
      name: "FoodieDelight",
      industry: "Food & Beverage",
      partnership: "2 years",
      icon: <ShoppingBagIcon className="h-8 w-8 text-orange-600" />,
      gradient: "from-orange-500 to-amber-500",
    },
    {
      id: 12,
      name: "WellnessHub",
      industry: "Fitness",
      partnership: "2 years",
      icon: <FireIcon className="h-8 w-8 text-red-600" />,
      gradient: "from-red-500 to-orange-500",
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
              Trusted by Industry Leaders
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Across Hyderabad & Beyond
            <br />
            <span className="gradient-text">5 Years of Partnerships</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startups to enterprise, we&apos;ve helped businesses across
            industries achieve remarkable digital transformation and revenue
            growth.
          </p>
        </div>

        {/* Industry Leaders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
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
                  <div className="text-xs text-gray-500">
                    {leader.partnership} partnership
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
              <span className="gradient-text">50+</span> Active Clients
            </h3>
            <p className="text-lg text-gray-600">
              Serving <span className="font-semibold">10+ industries</span> with
              a <span className="font-semibold">98% retention rate</span>
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2 stat-number">
                50+
              </div>
              <div className="text-gray-600">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2 stat-number">
                10+
              </div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2 stat-number">
                98%
              </div>
              <div className="text-gray-600">Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2 stat-number">
                5
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
