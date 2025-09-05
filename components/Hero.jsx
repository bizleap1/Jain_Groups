"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const colors = {
    background: "#FCF9F4",
    primary: "#064E3B",
    secondary: "#A3E635",
    text: "#1F2937",
    accent: "#D97706",
  };

  return (
    <section
      className="relative w-full min-h-[92vh] flex items-start justify-center px-6 pt-24 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Floating background circles */}
      <motion.div
        className="absolute top-16 left-10 w-72 h-72 rounded-full bg-green-100 opacity-30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-yellow-100 opacity-20"
        animate={{ scale: [1.1, 0.9, 1.1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero content */}
      <div className="relative text-center max-w-4xl space-y-6 mt-32">
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
    style={{ color: colors.primary }}
  >
    Premium Dal & Pulses
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto"
    style={{ color: colors.text }}
  >
    Sourced directly from <span className="font-semibold text-secondary">Yavatmal, Maharashtra</span>, our dal and pulses are carefully selected for quality, purity, and taste.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="flex flex-col sm:flex-row gap-6 justify-center mt-4"
  >
    <Link
      href="/about"
      className="px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
      style={{ backgroundColor: colors.primary, color: "#fff" }}
    >
      Learn More
    </Link>
    <Link
      href="/products"
      className="px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
      style={{ backgroundColor: colors.secondary, color: "#064E3B" }}
    >
      Our Products
    </Link>
  </motion.div>
</div>

      {/* Bottom subtle indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
