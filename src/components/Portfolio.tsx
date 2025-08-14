"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { CardSkeleton } from "@/components/ui/Skeleton";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Portfolio = () => {
  const portfolioRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  const portfolio = [
    {
      title: "CloudSync SaaS Platform",
      category: "SaaS Website",
      type: "saas",
      tech: ["Next.js", "Stripe", "Analytics", "A/B Testing"],
      description:
        "Conversion-optimized SaaS website that increased demo bookings by 285% and reduced CAC by 40%",
      gradient: "from-blue-500 to-cyan-500",
      icon: <CodeBracketIcon className="h-6 w-6" />,
      image: "https://cdn.dribbble.com/userupload/10924024/file/original-313341b8afc54b7fd55a62e7c05b58b4.png?resize=2048x1536&vertical=center",
      features: ["3x Demo Bookings", "40% Lower CAC", "7-Day Launch", "A/B Tested Components"],
      metrics: "+285% revenue growth",
    },
    {
      title: "DataVault Enterprise",
      category: "B2B SaaS",
      type: "saas",
      tech: ["React", "Lead Scoring", "CRM Integration", "Analytics"],
      description:
        "Enterprise SaaS website with advanced lead qualification that generated 5x qualified leads",
      gradient: "from-green-500 to-emerald-500",
      icon: <CodeBracketIcon className="h-6 w-6" />,
      image: "https://cdn.dribbble.com/userupload/16605258/file/original-36889bf7f1c4a8e4cff085e71ac8d408.png?resize=2048x1536&vertical=center",
      features: ["5x Lead Quality", "Pipeline Optimization", "CRM Integration", "ROI Tracking"],
      metrics: "+420% pipeline value",
    },
    {
      title: "TechFlow Analytics",
      category: "SaaS Landing Page",
      type: "saas",
      tech: ["Next.js", "Conversion Tracking", "Heat Maps", "User Testing"],
      description:
        "High-converting landing page for analytics SaaS that doubled conversion rates in 30 days",
      gradient: "from-purple-500 to-violet-500",
      icon: <ComputerDesktopIcon className="h-6 w-6" />,
      image: "https://cdn.dribbble.com/userupload/37420944/file/original-d2d2ad39ad2d7fba636f8c0c68204dd8.jpg?resize=1504x1128&vertical=center",
      features: ["2x Conversion Rate", "Heat Map Analysis", "User Journey Optimization", "Mobile-First Design"],
      metrics: "+180% ARR growth",
    },
  ];

  const filters = [
    "All",
    "SaaS",
  ];

  const filteredPortfolio =
    activeFilter === "All"
      ? portfolio
      : portfolio.filter((project) => project.type === activeFilter.toLowerCase());

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    if (typeof window !== "undefined" && portfolioRef.current && !isLoading) {
      gsap.fromTo(
        Array.from(portfolioRef.current.children),
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
            trigger: portfolioRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Portfolio cards animations
      const portfolioCards = document.querySelectorAll(".portfolio-card");
      portfolioCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            rotationY: 45,
            transformOrigin: "left center",
          },
          {
            opacity: 1,
            rotationY: 0,
            duration: 1,
            delay: index * 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
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
      id="portfolio"
      ref={portfolioRef}
      className="section-padding bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
              <SparklesIcon className="h-5 w-5 mr-2" />
              SaaS Case Studies
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            SaaS Success
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Real SaaS companies, real revenue growth. See how our conversion-optimized 
            websites drive measurable business results in just 7 days.
          </p>
          
          {/* Stats */}
          <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>3x Average Demo Bookings</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>7-Day Launch Guarantee</span>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {isLoading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            filteredPortfolio.map((project, index) => (
              <div key={index} className="group portfolio-card">
                <div className="relative overflow-hidden h-full">
                  {/* Glowing border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl h-full flex flex-col transform group-hover:scale-[1.02] transition-all duration-500">
                    {/* Project Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index < 3}
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <div className={`bg-gradient-to-r ${project.gradient} px-4 py-2 rounded-full backdrop-blur-sm`}>
                          <div className="flex items-center text-white text-sm font-semibold">
                            {project.icon}
                            <span className="ml-2">{project.category}</span>
                          </div>
                        </div>
                      </div>

                      {/* View project button */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer">
                          <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-800" />
                        </div>
                      </div>

                      {/* Floating particles */}
                      <div className="absolute top-6 right-16 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
                      <div className="absolute bottom-8 left-6 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                        {project.description}
                      </p>
                      
                      {/* Metrics Badge */}
                      {project.metrics && (
                        <div className="mb-4">
                          <div className="inline-flex items-center bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            <span className="text-green-700 font-semibold text-sm">{project.metrics}</span>
                          </div>
                        </div>
                      )}

                      {/* Features list */}
                      <div className="mb-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm">
                          {project.features.slice(0, 4).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-gray-600">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 flex-shrink-0"></div>
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs rounded-full font-medium border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Bottom action area */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span>Revenue Growth</span>
                          </div>
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center space-x-1 group/btn">
                            <span>View Case Study</span>
                            <ArrowTopRightOnSquareIcon className="h-4 w-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your <span className="gradient-text">Project</span>
              ?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your ideas and bring them to life with our
              expertise in modern technologies
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
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
