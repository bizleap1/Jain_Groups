"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

// Product data
const products = [
  {
    id: 1,
    name: "Jain Gold Natural Toor Dal",
    description: "Premium quality toor dal with natural flavor and aroma, sourced from the finest farms in Maharashtra",
    image: "/Jain_gold.png",
    features: ["100% Natural", "Rich in Protein", "No Additives", "Non-GMO"],
    tag: "Premium Pick"
  },
  {
    id: 2,
    name: "Parasmani Toor Dal",
    description: "Finely processed toor dal for perfect cooking results every time",
    image: "/Parasmani_toor.png",
    features: ["Easy to Cook", "High Nutrition", "Premium Quality", "Quick Cooking"],
    tag: "Chef's Choice"
  },
  {
    id: 3,
    name: "Pariwar Toor Dal",
    description: "Family pack of nutritious toor dal for everyday meals and special occasions",
    image: "/pariwar_toor.png",
    features: ["Family Pack", "Economical", "Great Taste", "Versatile"],
    tag: "Family Favorite"
  },
  {
    id: 4,
    name: "Parasmani Chana Dal",
    description: "Finely processed chana dal with exceptional flavor and texture",
    image: "/chana_dal.png",
    features: ["High Nutrition", "Rich in Protein", "Great Taste", "Easy to Digest"],
    tag: "Nutritious"
  },
  {
    id: 5,
    name: "Jain Gold Premium Toor Dal",
    description: "Our premium offering with superior quality and exceptional taste",
    image: "/Jain_premium.png",
    features: ["High Nutrition", "Premium Quality", "Rich in Protein", "Award Winning"],
    tag: "Premium"
  },
  {
    id: 6,
    name: "Parasmani Cotton Seed Oil Cake",
    description: "High-quality cotton seed oil cake, rich in nutrients for cattle feed",
    image: "/Parasmani_cake.png",
    features: ["Rich in Protein", "Nutrient-Dense", "Natural Source", "Boosts Milk Yield"],
    tag: "Cattle Care"
  },
  {
    id: 7,
    name: "Manorma Cotton Seed Oil Cake",
    description: "Premium cotton seed oil cake ensuring excellent livestock nutrition",
    image: "/Manorama_cake.png",
    features: ["Premium Quality", "Protein-Rich", "Supports Growth", "Farm Fresh"],
    tag: "Premium Feed"
  },
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-olive-50">
      {/* 🔹 Hero Banner Section */}
      <section className="relative w-full h-[30vh] md:h-[50vh] overflow-hidden z-0">
        <img
          src="/banner1.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-center md:object-top"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-white text-4xl md:text-6xl font-light text-center drop-shadow-lg">
            Products
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="text-center mb-16 max-w-4xl mx-auto px-4"
      >
        {/* Decorative Accent */}
        <motion.div 
          variants={fadeIn}
          className="inline-block mb-4"
        >
          <div className="w-20 h-1 bg-gradient-to-r from-forest-500 to-olive-600 rounded-full mx-auto"></div>
        </motion.div>

        {/* Subtitle / Tagline */}
        <motion.h2 
          variants={fadeIn}
          className="text-2xl md:text-3xl font-semibold text-forest-700 mb-4"
        >
          Quality you can trust, taste you’ll love
        </motion.h2>

        {/* Description */}
        <motion.p 
          variants={fadeIn}
          className="text-base md:text-lg text-olive-600 max-w-2xl mx-auto leading-relaxed"
        >
          Discover our range of high-quality dals and cattle feed, carefully sourced 
          and crafted with tradition from the heart of Maharashtra’s finest farms.
        </motion.p>
      </motion.section>

      {/* Products Grid */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto" 
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={fadeIn}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Product Tag */}
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1.5 text-xs font-semibold bg-forest-500 text-white rounded-full shadow-md">
                {product.tag}
              </span>
            </div>
            
            {/* Product Image */}
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-sage-50 to-olive-100 flex items-center justify-center p-10">
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
                src={product.image}
                alt={product.name}
                className="max-h-96 object-contain w-full transition-all duration-500 group-hover:drop-shadow-xl"
              />
              
              {/* Quick View Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                onClick={() => setSelectedProduct(product)}
                className="absolute bottom-6 right-6 bg-forest-600 text-white px-4 py-2.5 rounded-full text-sm font-medium shadow-lg hover:bg-forest-700 transition-colors flex items-center gap-2" 
              >
                Quick View
              </motion.button>
            </div>
            
            {/* Product Details */}
            <div className="p-6">
              <motion.h3 
                className="text-xl font-bold text-forest-800 mb-3 group-hover:text-forest-600 transition-colors" 
              >
                {product.name}
              </motion.h3>
              
              <motion.p 
                className="text-olive-600 mb-4 leading-relaxed" 
              >
                {product.description}
              </motion.p>
              
              {/* Features */}
              <ul className="flex flex-wrap gap-2 mb-5"> 
                {product.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center text-xs font-medium text-forest-700 bg-sage-50 px-3 py-1.5 rounded-full border border-sage-200" 
                  >
                    ✔ {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
