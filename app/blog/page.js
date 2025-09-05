"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const blogPosts = [
  {
    title: "Empowering Farmers in Vidarbha",
    date: "Aug 15, 2025",
    excerpt: "Learn how Jain Group is connecting thousands of farmers with modern tools and markets to improve their yield and income.",
    image: "/blog/farmers.jpg",
    link: "#",
  },
  {
    title: "Innovations in Food Processing",
    date: "Jul 22, 2025",
    excerpt: "Discover the latest innovations in Dal Mills and food processing technologies introduced by Jain Group.",
    image: "/blog/dal-mill.jpg",
    link: "#",
  },
  {
    title: "Expanding Our Textile Vertical",
    date: "Jun 10, 2025",
    excerpt: "Jain Cottex & Agro Industries expands into high-quality cotton and textile production with sustainable practices.",
    image: "/blog/textiles.jpg",
    link: "#",
  },
  {
    title: "Building Cold Storage Solutions",
    date: "May 05, 2025",
    excerpt: "Modern warehousing and cold storage solutions help farmers store and preserve their agricultural produce efficiently.",
    image: "/blog/storage.jpg",
    link: "#",
  },
];

export default function BlogPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative min-h-screen bg-gray-50 py-24 px-6">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-4">Our Blog</h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          Insights, stories, and updates from Jain Group’s journey across agriculture, food processing, and textiles.
        </p>
      </motion.section>

      {/* Blog Grid */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {blogPosts.map((post, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105"
          >
            <div className="w-full h-56 relative">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
              <p className="text-gray-700 mb-4 flex-1">{post.excerpt}</p>
              <a
                href={post.link}
                className="mt-auto inline-block bg-green-800 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-green-700 transition"
              >
                Read More
              </a>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
