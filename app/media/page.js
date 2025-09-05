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
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-24 px-6">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-pink-600 mb-4">Media & Gallery</h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          Explore our latest events, press coverage, and highlights of Jain Group’s journey.
        </p>
      </motion.section>

      {/* Media Grid */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {mediaItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-3xl shadow-xl bg-white hover:scale-105 transition-transform"
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
              <h3 className="text-lg font-semibold text-gray-800">{item.alt}</h3>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Optional CTA */}
      <motion.section
        className="text-center mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">Want More?</h2>
        <p className="text-gray-700 mb-6">
          Follow us on our social channels for the latest updates and media coverage.
        </p>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">Facebook</a>
          <a href="#" className="text-pink-600 hover:text-pink-800 text-2xl">Instagram</a>
          <a href="#" className="text-blue-400 hover:text-blue-600 text-2xl">Twitter</a>
        </div>
      </motion.section>
    </div>
  );
}
