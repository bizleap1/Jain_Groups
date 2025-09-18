"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef, useEffect, useState } from 'react';

// Custom hook for handling sequential animations
const useSequentialAnimation = (totalItems, options = {}) => {
  const [animatedItems, setAnimatedItems] = useState(0);
  const { triggerOnce = true, threshold = 0.2 } = options;
  const [ref, inView] = useInView({ triggerOnce, threshold });

  useEffect(() => {
    if (inView) {
      // Animate items one by one with a delay
      const timer = setInterval(() => {
        setAnimatedItems(prev => {
          if (prev >= totalItems) {
            clearInterval(timer);
            return prev;
          }
          return prev + 1;
        });
      }, 200); // Delay between each item animation

      return () => clearInterval(timer);
    }
  }, [inView, totalItems]);

  return [ref, animatedItems];
};

export default function AboutPage() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // For intro section
  const [introRef, introInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // For timeline sections
  const timelineItems = 8; // Number of timeline entries
  const [timelineRef, animatedTimelineItems] = useSequentialAnimation(timelineItems);

  // For stats section
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-gradient-to-b from-sage-50 to-sage-100 min-h-screen overflow-hidden">
      
      {/* 🔹 Hero Banner Section */}
      <section className="relative w-full h-[30vh] md:h-[50vh] overflow-hidden z-0">
        <img
          src="/banner2.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-center md:object"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-white text-4xl md:text-6xl font-light text-center drop-shadow-lg">
            About Us
          </h1>
        </div>
      </section>

      {/* 🔹 Animated background elements (behind everything) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-sage-200 opacity-20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-olive-200 opacity-20"
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>


      {/* Intro */}
      <motion.section 
        ref={introRef}
        initial="hidden"
        animate={introInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="relative max-w-4xl mx-auto px-6 py-16 text-center"
      >
        <motion.div variants={fadeIn} className="mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block p-2 rounded-full bg-sage-100 mb-4"
          >
            <div className="w-16 h-16 rounded-full bg-sage-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </motion.div>
          
          <motion.p 
            variants={fadeIn}
            className="text-lg md:text-xl text-forest-700 max-w-2xl mx-auto"
          >
            Our story is rooted in <span className="font-semibold text-sage-600">Yavatmal, Maharashtra</span> – where trust, quality, and growth shaped our legacy.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="mt-12"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-forest-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Timeline */}
      <motion.section 
        ref={timelineRef}
        className="relative max-w-6xl mx-auto px-6 py-12"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={animatedTimelineItems > 0 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-forest-700 mb-12 text-center"
        >
          The Journey of Jain Group
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-sage-400 to-forest-400 transform -translate-x-1/2"></div>
          
          <div className="space-y-16 pl-10 md:pl-0">
            {/* 1990 - Left side for desktop */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={animatedTimelineItems >= 1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-sage-600">1990 – The Beginning</h3>
                </div>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-sage-500 border-4 border-white transform -translate-x-1/2 shadow-lg"></div>
                <div className="md:w-1/2 md:pl-12">
                  <ul className="bg-white p-6 rounded-xl shadow-lg space-y-2">
                    <li className="text-forest-700">Founded Jain Trading Company in Sardar Chowk, Yavatmal</li>
                    <li className="text-forest-700">Started trading all kinds of grains & seeds</li>
                    <li className="text-forest-700">Built a reputation as a reliable local grain shop</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* 2000 - Right side for desktop */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={animatedTimelineItems >= 2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="md:flex items-center flex-row-reverse">
                <div className="md:w-1/2 md:pl-12 md:text-left mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-sage-600">2000 – Expanding Horizons</h3>
                </div>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-olive-500 border-4 border-white transform -translate-x-1/2 shadow-lg"></div>
                <div className="md:w-1/2 md:pr-12">
                  <ul className="bg-white p-6 rounded-xl shadow-lg space-y-2">
                    <li className="text-forest-700">Established Jain Brokers – our B2B brokerage firm</li>
                    <li className="text-forest-700">Started supplying to big markets & direct companies across India</li>
                    <li className="text-forest-700">Entered into bulk trading & distribution</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* 2010 - Left side for desktop */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={animatedTimelineItems >= 3 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-sage-600">2010 – Adding Value</h3>
                </div>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-forest-500 border-4 border-white transform -translate-x-1/2 shadow-lg"></div>
                <div className="md:w-1/2 md:pl-12">
                  <ul className="bg-white p-6 rounded-xl shadow-lg space-y-2">
                    <li className="text-forest-700">Launched Jain Industries, our first filter plant</li>
                    <li className="text-forest-700">Focused on cleaning & grading grains/seeds for Yavatmal consumers</li>
                    <li className="text-forest-700">Earned reputation for top-notch quality & consumer trust</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* 2012 - Right side for desktop */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={animatedTimelineItems >= 4 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="md:flex items-center flex-row-reverse">
                <div className="md:w-1/2 md:pl-12 md:text-left mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-sage-600">2012 – Stepping into Food Processing</h3>
                </div>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-sage-600 border-4 border-white transform -translate-x-1/2 shadow-lg"></div>
                <div className="md:w-1/2 md:pr-12">
                  <ul className="bg-white p-6 rounded-xl shadow-lg space-y-2">
                    <li className="text-forest-700">Established Jain Food Products – our first Dal Mill</li>
                    <li className="text-forest-700">Introduced 5 flagship brands in Toor Dal & Chana Dal</li>
                    <li className="text-forest-700">Consumers gave us our tagline: "Shudh Ahar, Swasth Pariwar"</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* 2016 - Left side for desktop */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={animatedTimelineItems >= 5 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-sage-600">2016 – Diversifying into Textiles & Cattle Feed</h3>
                </div>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-olive-600 border-4 border-white transform -translate-x-1/2 shadow-lg"></div>
                <div className="md:w-1/2 md:pl-12">
                  <ul className="bg-white p-6 rounded-xl shadow-lg space-y-2">
                    <li className="text-forest-700">Started Jain Cottex & Agro Industries Pvt. Ltd.</li>
                    <li className="text-forest-700">Businesses: Textiles → Cotton Bales, Cattle Feed → Cotton Seed Oil Cake</li>
                    <li className="text-forest-700">Recognition: "Jain Group = Quality"</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* 2020 - Right side for desktop */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={animatedTimelineItems >= 6 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.0 }}
            >
              <div className="md:flex items-center flex-row-reverse">
                <div className="md:w-1/2 md:pl-12 md:text-left mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-sage-600">2020 – Supporting Farmers</h3>
                </div>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-forest-600 border-4 border-white transform -translate-x-1/2 shadow-lg"></div>
                <div className="md:w-1/2 md:pr-12">
                  <ul className="bg-white p-6 rounded-xl shadow-lg space-y-2">
                    <li className="text-forest-700">Founded Cotton City Agro Pvt. Ltd., a Private Market Yard</li>
                    <li className="text-forest-700">Enabled direct transactions between farmers & buyers</li>
                    <li className="text-forest-700">Strengthened farmer relationships across Vidarbha</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* 2023 - Left side for desktop */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={animatedTimelineItems >= 7 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-sage-600">2023 – Scaling Food Business</h3>
                </div>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-sage-700 border-4 border-white transform -translate-x-1/2 shadow-lg"></div>
                <div className="md:w-1/2 md:pl-12">
                  <ul className="bg-white p-6 rounded-xl shadow-lg space-y-2">
                    <li className="text-forest-700">Launched Manorama Industries, our new Dal Mill</li>
                    <li className="text-forest-700">Expanded production to meet rising Toor Dal demand</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* 2024 - Right side for desktop */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={animatedTimelineItems >= 8 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.4 }}
            >
              <div className="md:flex items-center flex-row-reverse">
                <div className="md:w-1/2 md:pl-12 md:text-left mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-sage-600">2024 – Infrastructure Expansion</h3>
                </div>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-olive-700 border-4 border-white transform -translate-x-1/2 shadow-lg"></div>
                <div className="md:w-1/2 md:pr-12">
                  <ul className="bg-white p-6 rounded-xl shadow-lg space-y-2">
                    <li className="text-forest-700">Entered into Cold Storage & Warehousing Solutions</li>
                    <li className="text-forest-700">Providing safe & modern storage facilities for agri-products</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Today / Stats */}
      <motion.section 
        ref={statsRef}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="relative bg-gradient-to-r from-sage-100 to-olive-100 py-16 mt-16"
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-forest-800"
          >
            Today – Jain Group at a Glance
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="inline-block p-3 rounded-full bg-sage-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <motion.h3 
                initial={{ scale: 0 }}
                animate={statsInView ? { scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="text-3xl font-extrabold text-sage-600 mb-2"
              >
                30+
              </motion.h3>
              <p className="text-forest-700">Years of Legacy</p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="inline-block p-3 rounded-full bg-olive-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <motion.h3 
                initial={{ scale: 0 }}
                animate={statsInView ? { scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                className="text-3xl font-extrabold text-olive-600 mb-2"
              >
                5,00,000+
              </motion.h3>
              <p className="text-forest-700">Farmers Connected</p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="inline-block p-3 rounded-full bg-forest-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <motion.h3 
                initial={{ scale: 0 }}
                animate={statsInView ? { scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
                className="text-3xl font-extrabold text-forest-600 mb-2"
              >
                7+
              </motion.h3>
              <p className="text-forest-700">Business Verticals</p>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={slideInFromRight}
            className="bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto"
          >
            <h3 className="font-semibold text-lg text-center mb-4 text-forest-800">Our Businesses Include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sage-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-forest-700">Grains & Seeds Trading</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sage-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-forest-700">B2B Brokerage</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sage-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-forest-700">Dal Mills (Toor & Chana)</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sage-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-forest-700">Textiles (Cotton Bales)</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sage-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-forest-700">Cattle Feed (Oil Cake)</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sage-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-forest-700">Private Market Yard</span>
              </div>
              <div className="flex items-center col-span-1 md:col-span-2 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sage-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-forest-700">Cold Storage & Warehousing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}