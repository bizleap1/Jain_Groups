"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

// Product data
const products = [
  {
    id: 1,
    name: "Jain Gold Natural Toor Dal",
    description: "Premium quality toor dal with natural flavor and aroma",
    image: "/Jain_gold.png",
    features: ["100% Natural", "Rich in Protein", "No Additives"]
  },
  {
    id: 2,
    name: "Parasmani Toor Dal",
    description: "Finely processed toor dal for perfect cooking results",
    image: "/Parasmani_toor.png",
    features: ["Easy to Cook", "High Nutrition", "Premium Quality"]
  },
  {
    id: 3,
    name: "Pariwar Toor Dal",
    description: "Family pack of nutritious toor dal for everyday meals",
    image: "/pariwar_toor.png",
    features: ["Family Pack", "Economical", "Great Taste"]
  },
  {
    id: 4,
    name: "Parasmani Chana Dal",
    description: "Nutritious cattle feed for healthy livestock",
    image: "/chana_dal.png",
    features: ["High Nutrition", "Rich in Protein", "Great Taste"]
  },
  {
    id: 5,
    name: "Jain Gold Premium Toor Dal",
    description: "Premium cattle feed for enhanced milk production",
    image: "/Jain_premium.png",
    features: ["High Nutrition", "Premium Quality", "Rich in Protein"]
  },
  
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="text-center mb-16"
      >
        <motion.h1 
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-pink-600 mb-4"
        >
          Our Products
        </motion.h1>
        <motion.p 
          variants={fadeIn}
          className="text-lg text-gray-700 max-w-2xl mx-auto"
        >
          Discover our range of high-quality agricultural products, crafted with care and tradition from the heart of Maharashtra.
        </motion.p>
      </motion.section>

      {/* Products Grid - No Cards */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto" 
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            variants={fadeIn}
            className="group relative"
          >
            {/* Product Image with subtle hover effect - LARGER SIZE */}
            <div className="relative overflow-hidden rounded-lg bg-gray-50 p-10 flex items-center justify-center mb-6"> {/* Increased padding */}
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.08 }} 
                transition={{ duration: 0.5 }}
                src={product.image}
                alt={product.name}
                className="max-h-96 md:max-h-[28rem] object-contain w-full"  
              />
              
              {/* Quick View Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                onClick={() => setSelectedProduct(product)}
                className="absolute bottom-6 right-6 bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md" 
              >
                Quick View
              </motion.button>
            </div>
            
            {/* Product Details */}
            <div className="text-center">
              <motion.h3 
                className="text-2xl font-semibold text-gray-800 mb-3" 
              >
                {product.name}
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-4 text-lg" 
              >
                {product.description}
              </motion.p>
              
              {/* Features */}
              <ul className="flex flex-wrap justify-center gap-3 mb-4"> 
                {product.features.map((feature, i) => (
                  <li 
                    key={i}
                    className="inline-flex items-center text-sm text-pink-600 bg-pink-50 px-3 py-1.5 rounded-full" 
                  >
                    <svg className="w-4 h-4 text-pink-500 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Brand Tag */}
              <div className="text-sm text-gray-500"> 
                Jain Group Product
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Product Modal */}
      {selectedProduct && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center justify-center bg-gray-100 rounded-xl p-10" 
                >
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="max-h-96 object-contain w-full" 
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedProduct.name}</h2> 
                  <p className="text-gray-600 mb-6 text-lg">{selectedProduct.description}</p> 
                  
                  <div className="mb-8"> {/* Increased margin */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Features</h3>
                    <ul className="space-y-3"> {/* Increased spacing */}
                      {selectedProduct.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="flex items-center text-lg" 
                        >
                          <svg className="w-6 h-6 text-pink-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.div 
                    className="bg-pink-50 p-6 rounded-xl" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="font-semibold text-pink-700 mb-3 text-lg">Quality Assurance</h3> 
                    <p className="text-pink-600 text-md">All our products undergo rigorous quality checks to ensure you receive only the best.</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Brand Story Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto mt-20 px-4"
      >
        <motion.h2 
          variants={fadeIn}
          className="text-3xl font-bold text-center text-blue-700 mb-8"
        >
          Our Commitment to Quality
        </motion.h2>
        
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div 
            variants={fadeIn}
            className="p-6 rounded-2xl text-center"
          >
            <div className="inline-block p-3 rounded-full bg-pink-100 mb-4">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Assurance</h3>
            <p className="text-gray-600">Rigorous quality checks at every stage of production</p>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl text-center"
          >
            <div className="inline-block p-3 rounded-full bg-green-100 mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Farmer First</h3>
            <p className="text-gray-600">Direct relationships with farmers for the best produce</p>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-2xl text-center"
          >
            <div className="inline-block p-3 rounded-full bg-blue-100 mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainable Practices</h3>
            <p className="text-gray-600">Environmentally responsible processing methods</p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}