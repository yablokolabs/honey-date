'use client';

import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import Gallery from '../components/Gallery';
import CoupleGallery from '../components/CoupleGallery';
import EventInfo from '../components/EventInfo';
import Footer from '../components/Footer';
import CupidAnimation from '../components/CupidAnimation';
import { motion } from 'framer-motion';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'couples', 'gallery', 'events', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth' as ScrollBehavior
      });
    }
  };

  return (
    <div className="relative w-full max-w-full overflow-x-hidden">
      {/* Navigation Dots - Hidden on mobile */}
      <div className="fixed right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col space-y-4">
          {['home', 'couples', 'gallery', 'events', 'contact'].map((section) => (
            <motion.div
              key={section}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <button
                onClick={() => scrollToSection(section)}
                className={`w-3 h-3 rounded-full border-2 border-white ${
                  activeSection === section ? 'bg-white' : 'bg-transparent'
                }`}
                aria-label={`Go to ${section} section`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center w-full max-w-full overflow-x-hidden">
        <HeroSection />
      </section>

      {/* Couple Gallery Section */}
      <section id="couples" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-rose-50 py-6 sm:py-8 w-full max-w-full overflow-x-hidden">
        <CupidAnimation density="medium" />
        <div className="w-full max-w-full relative z-10">
          <CoupleGallery />
        </div>
      </section>

      {/* Features Gallery Section */}
      <section id="gallery" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-rose-50 to-pink-100 py-6 sm:py-8 w-full max-w-full overflow-x-hidden">
        <CupidAnimation density="medium" />
        <div className="w-full max-w-full relative z-10">
          <Gallery />
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 to-pink-200 py-6 sm:py-8 w-full max-w-full overflow-x-hidden">
        <CupidAnimation density="low" />
        <div className="w-full max-w-full relative z-10">
          <EventInfo />
        </div>
      </section>

      {/* Contact/Footer Section (no min-h-screen so footer sizes naturally) */}
      <section id="contact" className="relative w-full max-w-full bg-gradient-to-b from-pink-200 to-pink-300 py-12 sm:py-16 overflow-x-hidden">
        <CupidAnimation density="medium" />
        <div className="w-full max-w-full relative z-10">
          <Footer />
        </div>
      </section>
    </div>
  );
}