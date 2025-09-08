"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right bg-cover"
        style={{ backgroundImage: "url('/Pulses.jpg')" }}
      ></div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/10"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start px-6 sm:px-12 py-12 md:py-24">

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6 md:pr-12">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight"
          >
            Premium Dal & Pulses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white max-w-md mx-auto md:mx-0"
          >
            Sourced directly from{" "}
            <span className="font-semibold text-amber-400">Yavatmal, Maharashtra</span>, our dal and pulses are carefully selected for quality, purity, and taste.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start"
          >
            <Link
              href="/about"
              className="px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 bg-white text-black"
            >
              Learn More
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 bg-amber-400 text-black"
            >
              Our Products
            </Link>
          </motion.div>
        </div>

        {/* Optional empty space for desktop to keep text left */}
        <div className="hidden md:block flex-1"></div>
      </div>

      {/* Bottom arrow indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white/70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      <style jsx>{`
        section {
          min-height: 50vh; /* mobile: image + text fits nicely */
        }
        @media (min-width: 768px) {
          section {
            min-height: 70vh; /* desktop: leave 30% gap at bottom */
          }
        }
      `}</style>
    </section>
  );
}
