"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const blogPosts = [
  {
    title: "Health Benefits of Toor Dal & Chana Dal: The Everyday Superfoods",
    date: "Sep 18, 2025",
    excerpt:
      "Discover why Toor Dal and Chana Dal are considered superfoods and how they boost health daily.",
    fullContent:
      "Toor Dal and Chana Dal have been staples in Indian households for centuries, not just for their taste but for their exceptional nutritional value. Packed with protein, fiber, and essential minerals, these pulses support heart health, aid digestion, and help in maintaining stable blood sugar levels. Regular consumption can strengthen immunity and provide sustained energy throughout the day.\n\nThese dals are versatile and can be incorporated into a variety of dishes, from traditional dals and curries to innovative soups and snacks. Rich in antioxidants and low in fat, they are ideal for people of all ages, making them true everyday superfoods. Incorporating them into meals not only enhances taste but also promotes overall wellness.\n\nMoreover, Toor Dal and Chana Dal are known for their plant-based protein content, which is crucial for muscle repair and growth. For vegetarians and vegans, these pulses serve as an important source of high-quality protein, ensuring that dietary needs are met without relying on animal products. Simple, healthy, and delicious, these pulses remain a cornerstone of balanced nutrition.",
    image: "/banner1.jpg",
  },
  
  {
    title: "Why Cotton Seed Oil Cake is Vital for Cattle Feed & Dairy Farmers",
    date: "Sep 18, 2025",
    excerpt:
      "Understand the importance of cotton seed oil cake in improving livestock health and milk productivity.",
    fullContent:
      "Cotton seed oil cake is a highly nutritious byproduct of the cotton oil extraction process. Rich in protein, vitamins, and minerals, it provides essential nutrients required for the growth and development of cattle. Dairy farmers rely on this feed to ensure their livestock remains healthy and productive throughout the year.\n\nIncorporating cotton seed oil cake into cattle diets helps improve milk yield and quality. The balanced nutrient profile supports better digestion, enhances immunity, and contributes to overall animal well-being. Additionally, it serves as a cost-effective feed option, reducing the dependency on other expensive protein supplements.\n\nSourcing high-quality cotton seed oil cake from trusted suppliers like Jain Group ensures consistency, hygiene, and optimal nutrient content. This not only benefits farmers economically but also strengthens the dairy supply chain, enabling better quality milk and dairy products for consumers.",
    image: "/About.jpg",
  },
  {
    title: "The Journey of Cotton: From Seed to Textile Industry",
    date: "Sep 18, 2025",
    excerpt:
      "Explore how cotton travels from the fields to become high-quality fabrics in the textile industry.",
    fullContent:
      "Cotton, one of the most widely cultivated natural fibers, undergoes an intricate journey from the farm to the textile industry. It starts with carefully selected seeds, which are sown in fertile soils under favorable climatic conditions. Farmers use sustainable farming practices to ensure healthy cotton crops that produce long, strong fibers.\n\nOnce harvested, cotton fibers are cleaned and ginned to remove seeds and impurities. These fibers are then spun into yarns of varying thickness and quality. The yarn undergoes weaving or knitting processes to produce fabrics, which are further treated, dyed, and finished to meet market standards. Every step involves precision, technology, and expertise to maintain the integrity and quality of the cotton.\n\nThe modern textile industry relies heavily on such standardized processes to produce high-quality fabrics for clothing, home textiles, and industrial applications. By ensuring proper seed selection, cultivation, and post-harvest handling, suppliers like Jain Cottex & Agro Industries play a crucial role in maintaining consistency, sustainability, and ethical practices within the cotton supply chain.",
    image: "/yarn2.png",
  },
  {
    title: "How Cold Storage & Modern Warehousing Improve Grain & Pulse Quality",
    date: "Sep 18, 2025",
    excerpt:
      "Learn how advanced cold storage and warehousing techniques help maintain the quality of grains and pulses.",
    fullContent:
      "Modern cold storage and warehousing solutions have revolutionized the way grains and pulses are preserved. Temperature-controlled storage reduces spoilage, prevents insect infestation, and maintains the nutritional value of the produce. This ensures that farmers can store their harvest safely until it reaches the market.\n\nAdvanced warehousing facilities employ automated sorting, grading, and packaging systems to maintain hygiene and consistency. Humidity and temperature controls are monitored continuously, providing an optimal environment for sensitive grains and pulses. Such infrastructure minimizes post-harvest losses and extends shelf life, benefiting both producers and consumers.\n\nBy investing in cold storage and modern warehousing, suppliers like Jain Group help stabilize prices, reduce wastage, and deliver high-quality, fresh produce to kitchens across the country. These systems bridge the gap between farm production and market demand, creating a reliable supply chain that prioritizes quality, safety, and efficiency.",
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
    <div className="relative min-h-screen bg-sage-50">
      {/* Hero Banner */}
      <section className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden z-0">
        <img
          src="/banner2.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-center md:object"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-forest-900/60">
          <h1 className="text-sage-50 text-5xl md:text-7xl lg:text-8xl font-bold text-center drop-shadow-2xl px-4">
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
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest-900 mb-6">
          Insights & Stories
        </h2>
        <p className="text-xl md:text-2xl text-sage-600 max-w-3xl mx-auto">
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
                className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl border border-sage-200"
                whileHover={{ y: -10 }}
              >
                <div className="w-full h-72 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-olive-400 text-forest-900 text-sm font-medium px-3 py-1 rounded-full shadow">
                    {post.date}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-forest-800 mb-4 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sage-700 mb-6 text-lg flex-1">
                    {post.excerpt}
                  </p>
                  <button
                    onClick={() => setSelectedIndex(idx)}
                    className="mt-auto inline-flex items-center text-olive-600 font-bold text-lg hover:text-forest-700 transition-colors group"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            key={selectedIndex}
            className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col max-w-4xl mx-auto mb-8 border border-sage-200"
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
              <div className="absolute top-6 right-6 bg-olive-400 text-forest-900 text-md font-medium px-4 py-2 rounded-full shadow">
                {blogPosts[selectedIndex].date}
              </div>
            </div>
            <div className="p-10 flex flex-col flex-1">
              <h3 className="text-4xl font-bold text-forest-900 mb-6 leading-tight">
                {blogPosts[selectedIndex].title}
              </h3>
              <p className="text-sage-800 mb-8 text-xl leading-relaxed">
                {blogPosts[selectedIndex].fullContent}
              </p>
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="inline-flex items-center text-olive-600 font-bold text-lg hover:text-forest-700 transition-colors group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110-2H7.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Back to Blogs
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.section>
    </div>
  );
}
