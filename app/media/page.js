"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const mediaItems = [
  { type: "image", src: "/media/photo1.jpg", alt: "Event 1" },
  { type: "image", src: "/media/photo2.jpg", alt: "Event 2" },
  { type: "image", src: "/media/photo3.jpg", alt: "Event 3" },
  { type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", alt: "Interview" },
  { type: "image", src: "/media/photo4.jpg", alt: "Event 4" },
  { type: "image", src: "/media/photo5.jpg", alt: "Press Release" },
];

export default function MediaPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sage-50 to-olive-50">
      
      {/* 🔹 Hero Banner Section */}
      <section className="relative w-full h-[30vh] md:h-[50vh] overflow-hidden z-0">
        <img
          src="/Hero1.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-center md:object"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-white text-4xl md:text-6xl font-light text-center drop-shadow-lg">
            Media & Gallery
          </h1>
        </div>
      </section>

      {/* 🔹 Intro Text */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center py-12 px-6"
      >
        <p className="text-forest-700 text-lg md:text-xl max-w-2xl mx-auto">
          Explore our latest events, press coverage, and highlights of Jain Group’s journey.
        </p>
      </motion.section>

      {/* 🔹 Media Grid */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6"
      >
        {mediaItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-3xl shadow-xl bg-white border border-sage-200 hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover rounded-3xl"
              />
            ) : (
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={item.src}
                  title={item.alt}
                  className="absolute top-0 left-0 w-full h-full rounded-3xl"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>
            )}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-forest-700">{item.alt}</h3>
            </div>
          </motion.div>
        ))}
      </motion.section>

      
    </div>
  );
}
