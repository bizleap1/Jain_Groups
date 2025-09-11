"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWidgets() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Button - always visible */}
      <a
        href="https://wa.me/your-number" // replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 p-4 rounded-full shadow-xl flex items-center justify-center transition-transform transform hover:scale-110"
      >
        <FaWhatsapp size={28} className="text-white" />
      </a>

      {/* Scroll Down Indicator - mobile only, arrow centered */}
      {!isScrolled && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-bounce md:hidden">
          <div className="w-4 h-4 border-b-2 border-r-2 border-green-700 rotate-45"></div>
        </div>
      )}
    </>
  );
}
