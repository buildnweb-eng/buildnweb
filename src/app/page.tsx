'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { StickyBreadcrumb } from '../components/ui/Breadcrumb';
import InteractivePricing from '@/components/InteractivePricing';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');
  const [showBreadcrumb, setShowBreadcrumb] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      // Show breadcrumb after scrolling past hero section
      setShowBreadcrumb(window.scrollY > 400);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBreadcrumbItems = () => {
    const sectionLabels: { [key: string]: string } = {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      testimonials: 'Testimonials',
      contact: 'Contact'
    };

    const items = [];
    if (currentSection !== 'home') {
      items.push({
        label: sectionLabels[currentSection] || currentSection,
        href: `#${currentSection}`
      });
    }
    return items;
  };

  return (
    <div className="min-h-screen">
      <Header />
      {showBreadcrumb && (
        <StickyBreadcrumb 
          items={getBreadcrumbItems()} 
          showHome={true}
        />
      )}
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <InteractivePricing />
      <Footer />
    </div>
  );
}
