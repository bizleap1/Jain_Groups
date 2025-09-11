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

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
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
    <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mx-auto"></div>
  </motion.div>

  {/* Subtitle / Tagline */}
  <motion.h2 
    variants={fadeIn}
    className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4"
  >
    Quality you can trust, taste you’ll love
  </motion.h2>

  {/* Description */}
  <motion.p 
    variants={fadeIn}
    className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
  >
    Discover our range of high-quality dals, carefully sourced and crafted with 
    tradition from the heart of Maharashtra’s finest farms.
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
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            variants={fadeIn}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Product Tag */}
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1.5 text-xs font-semibold bg-amber-500 text-white rounded-full shadow-md">
                {product.tag}
              </span>
            </div>
            
            {/* Product Image */}
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-amber-50 to-slate-100 flex items-center justify-center p-10">
  <motion.img
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.08 }}
    transition={{ duration: 0.5 }}
    src={product.image}
    alt={product.name}
    className="max-h-80 object-contain w-full transition-all duration-500 group-hover:drop-shadow-xl"
  />

              
              {/* Quick View Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                onClick={() => setSelectedProduct(product)}
                className="absolute bottom-6 right-6 bg-amber-600 text-white px-4 py-2.5 rounded-full text-sm font-medium shadow-lg hover:bg-amber-700 transition-colors flex items-center gap-2" 
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                Quick View
              </motion.button>
            </div>
            
            {/* Product Details */}
            <div className="p-6">
              <motion.h3 
                className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-700 transition-colors" 
              >
                {product.name}
              </motion.h3>
              
              <motion.p 
                className="text-slate-600 mb-4 leading-relaxed" 
              >
                {product.description}
              </motion.p>
              
              {/* Features */}
              <ul className="flex flex-wrap gap-2 mb-5"> 
                {product.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center text-xs font-medium text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100" 
                  >
                    <svg className="w-3 h-3 text-amber-600 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              {/* Brand Tag */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="text-sm text-slate-500 flex items-center">
                  <svg className="w-4 h-4 mr-1.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  Sourced from Maharashtra
                </div>
                
                
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto mt-24 text-center"
      >
        
      </motion.section>

      {/* Product Modal */}
      {selectedProduct && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-slate-100 transition-colors"
              >
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center justify-center bg-gradient-to-br from-amber-50 to-slate-100 rounded-2xl p-10" 
                >
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="max-h-80 object-contain w-full" 
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="py-4"
                >
                  <div className="mb-2">
                    <span className="px-3 py-1 text-xs font-semibold bg-amber-500 text-white rounded-full">
                      {selectedProduct.tag}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{selectedProduct.name}</h2> 
                  <p className="text-slate-600 mb-6 leading-relaxed">{selectedProduct.description}</p> 
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {selectedProduct.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="flex items-center text-slate-700" 
                        >
                          <svg className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.div 
                    className="bg-amber-50 p-6 rounded-xl border border-amber-100" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="font-semibold text-amber-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Quality Assurance
                    </h3>
                    <p className="text-amber-700">All our products undergo rigorous quality checks to ensure you receive only the best agricultural products, sourced directly from trusted farmers.</p>
                  </motion.div>
                  
                  <div className="mt-8 flex gap-4">
                    <button className="flex-1 bg-amber-600 text-white py-3 rounded-xl font-semibold hover:bg-amber-700 transition-colors shadow-md">
                      Add to Cart
                    </button>
                    <button className="flex-1 border border-amber-600 text-amber-700 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-colors">
                      Buy Now
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}