"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
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
    if (typeof window !== "undefined") {
      // Set initial states
      gsap.set(
        [
          heroTextRef.current,
          heroSubtextRef.current,
          heroButtonsRef.current,
          heroStatsRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );
      gsap.set(heroGraphicRef.current, {
        opacity: 0,
        x: 50,
        rotation: -5,
      });

      // Hero animations timeline
      const heroTl = gsap.timeline();

      heroTl
        .to(heroTextRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        })
        .to(
          heroSubtextRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          heroButtonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          heroStatsRef.current ? Array.from(heroStatsRef.current.children) : [],
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          heroGraphicRef.current,
          {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        );

      // Floating animation for hero graphic
      gsap.to(heroGraphicRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      // Stats counter animation
      const statsNumbers = document.querySelectorAll(".stat-number");
      statsNumbers.forEach((stat) => {
        const finalValue = stat.textContent;
        const numericValue = finalValue ? parseInt(finalValue) : 0;

        if (!isNaN(numericValue) && numericValue > 0) {
          gsap.fromTo(
            stat,
            {
              textContent: 0,
            },
            {
              textContent: numericValue,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: stat,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      // Button hover animations
      const buttons = document.querySelectorAll(".animated-btn");
      buttons.forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
          gsap.to(btn, {
            scale: 1.05,
            duration: 0.2,
            ease: "power2.out",
          });
        });

        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
          });
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="pt-20 section-padding bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div ref={heroTextRef}>
              <div className="mb-4">
                <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  🚀 Profit-Generating Digital Systems
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                We Don&apos;t Just Build
                <br />
                <span className="gradient-text">Websites</span>—We Engineer
                <br />
                <span className="text-blue-600">Profit Machines</span>
              </h1>
            </div>
            <div ref={heroSubtextRef}>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed max-w-2xl">
                <strong>Average client sees 340% ROI in first 90 days.</strong>
                We engineer profit-generating systems that work 24/7, turning
                your digital presence into a revenue powerhouse.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  The Business Impact We Deliver
                </p>
                <p className="text-gray-700">
                  Real numbers from real businesses. This is what happens when
                  you work with 50 years of digital mastery.
                </p>
              </div>
            </div>
            <div
              ref={heroButtonsRef}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="btn-primary text-center animated-btn"
              >
                Start Your 7-Day Project
              </a>
              <a
                href="#services"
                className="btn-secondary text-center animated-btn"
              >
                See Our ROI Results
              </a>
            </div>
            <div
              ref={heroStatsRef}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-blue-600 stat-number">
                  340
                </div>
                <div className="text-gray-600 text-sm">% Average ROI</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-purple-600 stat-number">
                  7
                </div>
                <div className="text-gray-600 text-sm">Days Delivery</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-600 stat-number">
                  50
                </div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-gray-600 text-sm">Profit Systems</div>
              </div>
            </div>
          </div>
          <div ref={heroGraphicRef}>
            <div className="relative">
              {/* Main device mockup */}
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-1 shadow-2xl transform rotate-2">
                  <div className="bg-black rounded-3xl p-6">
                    {/* Browser tabs */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-gray-800 rounded-lg px-4 py-1 ml-4">
                        <div className="text-gray-400 text-xs">
                          profit-agency.com
                        </div>
                      </div>
                    </div>

                    {/* Screen content */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="text-xs font-semibold text-gray-700">
                          Profit Agency
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded"></div>
                          <div className="w-2 h-2 bg-purple-500 rounded"></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="w-6 h-6 bg-green-500 rounded mb-2 flex items-center justify-center">
                            <div className="text-white text-xs">💰</div>
                          </div>
                          <div className="text-xs font-medium text-gray-700">
                            Revenue Growth
                          </div>
                          <div className="w-full bg-green-100 rounded-full h-1 mt-1">
                            <div className="bg-green-500 h-1 rounded-full w-4/5"></div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="w-6 h-6 bg-blue-500 rounded mb-2 flex items-center justify-center">
                            <div className="text-white text-xs">📈</div>
                          </div>
                          <div className="text-xs font-medium text-gray-700">
                            ROI Increase
                          </div>
                          <div className="w-full bg-blue-100 rounded-full h-1 mt-1">
                            <div className="bg-blue-500 h-1 rounded-full w-full"></div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="w-6 h-6 bg-purple-500 rounded mb-2 flex items-center justify-center">
                            <div className="text-white text-xs">🎯</div>
                          </div>
                          <div className="text-xs font-medium text-gray-700">
                            Conversion Rate
                          </div>
                          <div className="w-full bg-purple-100 rounded-full h-1 mt-1">
                            <div className="bg-purple-500 h-1 rounded-full w-3/4"></div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="w-6 h-6 bg-orange-500 rounded mb-2 flex items-center justify-center">
                            <div className="text-white text-xs">⚡</div>
                          </div>
                          <div className="text-xs font-medium text-gray-700">
                            7-Day Launch
                          </div>
                          <div className="w-full bg-orange-100 rounded-full h-1 mt-1">
                            <div className="bg-orange-500 h-1 rounded-full w-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-70 animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-50 animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
