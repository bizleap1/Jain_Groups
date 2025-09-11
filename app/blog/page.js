"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const blogPosts = [
  {
    title: "Empowering Farmers in Vidarbha",
    date: "Aug 15, 2025",
    excerpt: "Learn how Jain Group is connecting thousands of farmers with modern tools and markets to improve their yield and income.",
    fullContent: "Full blog content about empowering farmers with tools, training, and access to markets. Jain Group focuses on sustainability and modern techniques to boost agricultural productivity.Full blog content about empowering farmers with tools, training, and access to markets. Jain Group focuses on sustainability and modern techniques to boost agricultural productivityFull blog content about empowering farmers with tools, training, and access to markets. Jain Group focuses on sustainability and modern techniques to boost agricultural productivityFull blog content about empowering farmers with tools, training, and access to markets. Jain Group focuses on sustainability and modern techniques to boost agricultural productivityFull blog content about empowering farmers with tools, training, and access to markets. Jain Group focuses on sustainability and modern techniques to boost agricultural productivityFull blog content about empowering farmers with tools, training, and access to markets. Jain Group focuses on sustainability and modern techniques to boost agricultural productivityFull blog content about empowering farmers with tools, training, and access to markets. Jain Group focuses on sustainability and modern techniques to boost agricultural productivity",
    image: "/banner1.jpg",
  },
  {
    title: "Innovations in Food Processing",
    date: "Jul 22, 2025",
    excerpt: "Discover the latest innovations in Dal Mills and food processing technologies introduced by Jain Group.",
    fullContent: "Full blog content about the newest food processing innovations, machinery, and methods that improve efficiency and food quality in Dal Mills and other sectors.",
    image: "/banner2.jpg",
  },
  {
    title: "Expanding Our Textile Vertical",
    date: "Jun 10, 2025",
    excerpt: "Jain Cottex & Agro Industries expands into high-quality cotton and textile production with sustainable practices.",
    fullContent: "Full blog content about sustainable cotton production, textile innovations, and ethical manufacturing practices adopted by Jain Cottex & Agro Industries.",
    image: "/banner1.jpg",
  },
  {
    title: "Building Cold Storage Solutions",
    date: "May 05, 2025",
    excerpt: "Modern warehousing and cold storage solutions help farmers store and preserve their agricultural produce efficiently.",
    fullContent: "Full blog content on cold storage infrastructure, technology adoption, and benefits to farmers in reducing post-harvest losses.",
    image: "/banner2.jpg",
  },
];

export default function BlogPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [selectedIndex, setSelectedIndex] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative min-h-screen bg-gray-50">

      {/* Hero Banner */}
      <section className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden z-0">
        <img
          src="/banner1.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-center md:object-top"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold text-center drop-shadow-2xl px-4">
            Our Blogs
          </h1>
        </div>
      </section>

      {/* Heading */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center py-16 px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-6">
          Insights & Stories
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Discover the latest news, innovations, and stories from Jain Group
        </p>
      </motion.section>

      {/* Blog Grid / Single Blog */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        {selectedIndex === null ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                whileHover={{ y: -10 }}
              >
                <div className="w-full h-72 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  />
                  <div className="absolute top-4 right-4 bg-green-700 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {post.date}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">{post.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg flex-1">{post.excerpt}</p>
                  <button
                    onClick={() => setSelectedIndex(idx)}
                    className="mt-auto inline-flex items-center text-red-600 font-bold text-lg hover:text-red-800 transition-colors group"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            key={selectedIndex}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full h-96 relative">
              <img
                src={blogPosts[selectedIndex].image}
                alt={blogPosts[selectedIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 right-6 bg-green-700 text-white text-md font-medium px-4 py-2 rounded-full">
                {blogPosts[selectedIndex].date}
              </div>
            </div>
            <div className="p-10 flex flex-col flex-1">
              <h3 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">{blogPosts[selectedIndex].title}</h3>
              <p className="text-gray-700 mb-8 text-xl leading-relaxed">{blogPosts[selectedIndex].fullContent}</p>
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="inline-flex items-center text-red-600 font-bold text-lg hover:text-red-800 transition-colors group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Blogs
                </button>
                <div className="flex space-x-4">
                  
                  
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.section>
    </div>
  );
}