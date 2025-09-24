"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/Hero2.jpg",
    title: "Healthy Pulses from Farms",
    description: "",
    mobilePosition: { top: "10%", left: "50%", transform: "translateX(-50%)" },
    pcPosition: { top: "10%", left: "50%", transform: "translateX(-50%)" },
    titleColor: "text-orange-500",
    descColor: "text-yellow-600",
  },
  {
    id: 2,
    image: "/Hero4.jpg",
    title: "100% Natural & Pure",
    description: "",
    mobilePosition: { top: "10%", left: "50%", transform: "translateX(-50%)" },
    pcPosition: { top: "10%", left: "50%", transform: "translateX(-50%)" },
    titleColor: "text-yellow-900",
    descColor: "text-white",
  },
  {
    id: 3,
    image: "/Hero2.jpg",
    title: "Farm Fresh Quality",
    description: "",
    mobilePosition: { top: "10%", left: "50%", transform: "translateX(-50%)" },
    pcPosition: { top: "10%", left: "50%", transform: "translateX(-50%)" },
    titleColor: "text-orange-500",
    descColor: "text-white",
  },
  {
    id: 4,
    image: "/Hero4.jpg",
    title: "Traditional Goodness",
    description: "",
    mobilePosition: { top: "10%", left: "50%", transform: "translateX(-50%)" },
    pcPosition: { top: "10%", left: "50%", transform: "translateX(-50%)" },
    titleColor: "text-yellow-900",
    descColor: "text-gray-200",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative w-full">
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full"
          >
            {/* Image */}
            <div className="w-full md:h-[90vh]">
              <img
                src={currentSlideData.image}
                alt=""
                className="w-full h-full object-cover object-bottom sm:object-cover"
              />
            </div>

            {/* Mobile Text - no wrapping */}
            <div
              className="absolute z-10 p-4 sm:hidden"
              style={currentSlideData.mobilePosition}
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                // keep text on single line and allow horizontal scroll on tiny screens
                className={`text-2xl font-extrabold mb-2 ${currentSlideData.titleColor} whitespace-nowrap`}
                style={{ display: "inline-block" }}
              >
                {currentSlideData.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`${currentSlideData.descColor} whitespace-nowrap`}
                style={{ display: "inline-block" }}
              >
                {currentSlideData.description}
              </motion.p>
            </div>

            {/* PC Text - no wrapping */}
            <div
              className="absolute z-10 p-6 hidden sm:block"
              style={currentSlideData.pcPosition}
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`text-4xl md:text-5xl font-extrabold mb-3 ${currentSlideData.titleColor} whitespace-nowrap`}
                style={{ display: "inline-block" }}
              >
                {currentSlideData.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`text-xl md:text-2xl ${currentSlideData.descColor} whitespace-nowrap`}
                style={{ display: "inline-block" }}
              >
                {currentSlideData.description}
              </motion.p>
            </div>

            {/* Mobile Arrows */}
            <div
              className="sm:hidden absolute top-1/2 left-2 transform -translate-y-1/2 z-20 cursor-pointer text-white text-2xl bg-black/30 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={prevSlide}
            >
              &#10094;
            </div>
            <div
              className="sm:hidden absolute top-1/2 right-2 transform -translate-y-1/2 z-20 cursor-pointer text-white text-2xl bg-black/30 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={nextSlide}
            >
              &#10095;
            </div>

            {/* PC Arrows */}
            <div
              className="hidden sm:flex absolute top-1/2 left-4 transform -translate-y-1/2 z-20 cursor-pointer text-white text-3xl bg-black/30 rounded-full w-12 h-12 items-center justify-center hover:bg-black/50 transition-all"
              onClick={prevSlide}
            >
              &#10094;
            </div>
            <div
              className="hidden sm:flex absolute top-1/2 right-4 transform -translate-y-1/2 z-20 cursor-pointer text-white text-3xl bg-black/30 rounded-full w-12 h-12 items-center justify-center hover:bg-black/50 transition-all"
              onClick={nextSlide}
            >
              &#10095;
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
