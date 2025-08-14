"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CheckIcon,
  SparklesIcon,
  PaperAirplaneIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { FormProgressBar } from "@/components/ui/ProgressIndicator";
import { useToast } from "@/components/ui/Toast";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const contactRef = useRef<HTMLElement>(null);
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();
  const totalSteps = 5;

  useEffect(() => {
    if (typeof window !== "undefined" && contactRef.current) {
      gsap.fromTo(
        Array.from(contactRef.current.children),
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
            trigger: contactRef.current,
            start: "top 80%",
            end: "bottom 20%",
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
    <section id="contact" ref={contactRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center bg-gradient-to-r from-pink-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <ClockIcon className="h-4 w-4 mr-2" />
              Free 30-Min Strategy Session
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Book Your Free
            <br />
            <span className="gradient-text">Strategy Call</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to grow your revenue? Let's discuss your SaaS goals and create
            a conversion-optimized website that drives real results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Cards */}
          <div className="group hover-lift">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-modern">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <PhoneIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Strategy Call
                </h3>
                <p className="text-gray-600 mb-4">
                  30-min revenue growth consultation
                </p>
                <a
                  href="tel:+916281432326"
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          <div className="group hover-lift">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-modern">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <EnvelopeIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Email Us
                </h3>
                <p className="text-gray-600 mb-4">
                  Send us your SaaS details
                </p>
                <a
                  href="mailto:hello@buildnweb.in"
                  className="text-purple-600 font-semibold hover:text-purple-700"
                >
                  hello@buildnweb.in
                </a>
              </div>
            </div>
          </div>

          <div className="group hover-lift">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-modern">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Quick Audit
                </h3>
                <p className="text-gray-600 mb-4">Free 10-min website audit</p>
                <span className="text-green-600 font-semibold">
                  Instant Results
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Why Choose BuildnWeb?
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      ROI Guarantee
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Measurable results or money back
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      SaaS Specialists
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Demo booking optimization experts
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ClockIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      7-Day Launch
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Guaranteed delivery timeline
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Revenue Focus
                    </h4>
                    <p className="text-gray-600 text-sm">Built for business growth</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-modern">
              <h4 className="text-xl font-bold mb-4 text-gray-900">
                Business Hours
              </h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Emergency Only</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-modern">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Book Your Strategy Call
              </h3>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <div className="flex items-center space-x-3">
                  <ClockIcon className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-900">Free 30-Minute Consultation</p>
                    <p className="text-sm text-blue-700">Discuss your SaaS goals and get a custom growth plan</p>
                  </div>
                </div>
              </div>
              <FormProgressBar
                currentStep={formStep}
                totalSteps={totalSteps}
                className="mb-6"
              />
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  setTimeout(() => {
                    setIsSubmitting(false);
                    showToast(
                      "success",
                      "Message Sent!",
                      "We will get back to you within 24 hours."
                    );
                    setFormStep(1);
                  }, 2000);
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                      required
                      onFocus={() => setFormStep(1)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                      required
                      onFocus={() => setFormStep(2)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    placeholder="+91 98765 43210"
                    onFocus={() => setFormStep(3)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    required
                    onFocus={() => setFormStep(4)}
                  >
                    <option value="">Select a service</option>
                    <option>7-Day SaaS Website Launch</option>
                    <option>E-commerce Revenue Engine</option>
                    <option>Service Business Lead Generator</option>
                    <option>Complete Growth Package</option>
                    <option>Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Project Budget
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300">
                    <option value="">Select budget range</option>
                    <option>₹25,000 - ₹50,000</option>
                    <option>₹50,000 - ₹1,00,000</option>
                    <option>₹1,00,000 - ₹2,00,000</option>
                    <option>₹2,00,000+</option>
                    <option>Let&apos;s discuss</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your SaaS: current conversion rates, demo booking challenges, growth goals, and target launch date..."
                    required
                    onFocus={() => setFormStep(5)}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 transform animated-btn flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending...</span>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Book Strategy Call</span>
                      <PaperAirplaneIcon className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
