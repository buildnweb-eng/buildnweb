"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  StarIcon,
  CheckIcon,
  PhoneIcon,
  CodeBracketIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);

  const processSteps = [
    {
      step: "Step 1",
      days: "Day 1-2",
      title: "SaaS Audit & Strategy",
      description:
        "Deep dive into your current conversion funnel and demo booking process",
      icon: <MagnifyingGlassIcon className="h-8 w-8 text-brand-primary" />,
      whatWeDo: [
        "Free conversion audit call",
        "SaaS competitor analysis",
        "Demo booking funnel audit",
        "ICP & messaging optimization",
      ],
      deliverable: "SaaS growth strategy document",
      gradient: "from-brand-primary to-brand-secondary",
    },
    {
      step: "Step 2",
      days: "Day 3-4",
      title: "Conversion Blueprint",
      description:
        "Custom conversion strategy based on proven SaaS growth frameworks",
      icon: (
        <ClipboardDocumentListIcon className="h-8 w-8 text-brand-secondary" />
      ),
      whatWeDo: [
        "Demo booking optimization strategy",
        "Conversion funnel wireframes",
        "A/B testing plan setup",
        "Analytics & tracking blueprint",
      ],
      deliverable: "Conversion-optimized wireframes",
      gradient: "from-brand-secondary to-brand-primary",
    },
    {
      step: "Step 3",
      days: "Day 5-6",
      title: "Revenue-Focused Build",
      description: "High-converting SaaS website built for demo bookings",
      icon: <ComputerDesktopIcon className="h-8 w-8 text-brand-accent" />,
      whatWeDo: [
        "Conversion-optimized design",
        "Demo booking forms & CTAs",
        "Lead scoring integration",
        "Analytics & heat map setup",
      ],
      deliverable: "Demo-ready SaaS website",
      gradient: "from-brand-accent to-brand-primary",
    },
    {
      step: "Step 4",
      days: "Day 7",
      title: "Launch & Guarantee",
      description:
        "Go live with ROI guarantee and immediate conversion tracking",
      icon: <RocketLaunchIcon className="h-8 w-8 text-brand-warning" />,
      whatWeDo: [
        "Demo booking testing",
        "Conversion tracking setup",
        "ROI measurement baseline",
        "Guarantee activation",
      ],
      deliverable: "Live SaaS site with ROI tracking",
      gradient: "from-orange-500 to-red-500",
    },
    {
      step: "Step 5",
      days: "30-Day",
      title: "ROI Validation",
      description: "Measure and optimize for guaranteed revenue growth",
      icon: <ChartBarIcon className="h-8 w-8 text-brand-secondary" />,
      whatWeDo: [
        "Demo booking optimization",
        "A/B testing & conversion optimization",
        "Content marketing & social media management",
        "Paid advertising campaign management",
      ],
      deliverable: "Monthly performance reports & growth strategies",
      gradient: "from-brand-secondary to-brand-warning",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined" && aboutRef.current) {
      gsap.fromTo(
        Array.from(aboutRef.current.children),
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
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate process steps
      gsap.fromTo(
        ".process-step",
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 60%",
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
    <section id="about" ref={aboutRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Proven Process Section */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center bg-gradient-to-r from-brand-accent to-brand-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
              <SparklesIcon className="h-4 w-4 mr-2" />
              Our Proven Process
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            From Idea to Success in
            <br />
            <span className="gradient-text">7 Days</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our battle-tested process, refined over 5 decades and 5,000+
            projects. No surprises, just results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step group hover-lift">
              <div className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${step.gradient} rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300`}
                ></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-modern">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                      <div className="flex items-center space-x-4 mb-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-xl flex items-center justify-center`}
                        >
                          <div className="text-white">
                            {React.cloneElement(step.icon, {
                              className: "h-8 w-8 text-white",
                            })}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-500">
                            {step.step}
                          </div>
                          <div className="text-lg font-bold text-gray-900">
                            {step.days}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="lg:w-2/3">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">
                            What We Do
                          </h4>
                          <ul className="space-y-2">
                            {step.whatWeDo.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-center space-x-2 text-sm"
                              >
                                <CheckIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">
                            You Get
                          </h4>
                          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4">
                            <div className="text-sm font-semibold text-gray-600 mb-1">
                              Deliverable
                            </div>
                            <div className="text-gray-900 font-medium">
                              {step.deliverable}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 7-Day Delivery Guarantee */}
        <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-3xl p-12 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">ROI Guarantee</span>
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              We guarantee measurable revenue growth within 30 days, or we&apos;ll
              refund your investment and optimize for free until you see
              results.
            </p>
            <div className="bg-white rounded-xl p-6 border border-green-200 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <ShieldCheckIcon className="h-6 w-6 text-green-600" />
                <span className="font-bold text-green-800">
                  Money-Back Guarantee Terms
                </span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 7-day launch or full refund</li>
                <li>• 30-day ROI measurement period</li>
                <li>• Free optimization until results achieved</li>
                <li>• No hidden fees or long-term contracts</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">3x</div>
                <div className="text-gray-600">Demo Bookings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-primary mb-2">
                  7 Days
                </div>
                <div className="text-gray-600">Launch Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-secondary mb-2">
                  30 Days
                </div>
                <div className="text-gray-600">ROI Validation</div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center bg-gradient-to-r from-brand-secondary to-brand-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
              <SparklesIcon className="h-4 w-4 mr-2" />
              SaaS Growth Specialists
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Building Tomorrow&apos;s
            <br />
            <span className="gradient-text">Profit Machines</span> Today
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We&apos;re a passionate team of digital strategists and developers
            dedicated to transforming businesses into revenue-generating
            powerhouses. From conversion-optimized websites to complete sales
            ecosystems, we bring your profit vision to life with precision and
            proven results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="group hover-lift">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-info rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-modern">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-info rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CodeBracketIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Revenue Engineering
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every line of code is written with profit in mind, creating
                  systems that generate revenue 24/7.
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
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Conversion Focused
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Data-driven strategies that turn visitors into customers and
                  customers into repeat buyers.
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
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Proven Results
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Average 340% ROI in first 90 days with our battle-tested
                  methodologies and strategies.
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
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  7-Day Guarantee
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your project launches in 7 days or you don&apos;t pay.
                  That&apos;s our iron-clad guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-20 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 rounded-3xl p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Mission</span>
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              To transform every business into a profit-generating machine
              through strategic digital solutions. We believe in the power of
              data-driven decisions, conversion optimization, and relentless
              focus on ROI. Your success is our success.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-2">
                  50+
                </div>
                <div className="text-gray-600">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-secondary mb-2">
                  340%
                </div>
                <div className="text-gray-600">Average Client ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-accent mb-2">
                  7 Days
                </div>
                <div className="text-gray-600">Delivery Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
