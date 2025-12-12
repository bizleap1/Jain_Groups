"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const products = [
  {
  id: 1,
  name: "Jain Gold Natural Toor Dal",
  description: "Premium quality toor dal with authentic flavor and aroma, sourced from trusted farms in Maharashtra",
  image: "/Jain_gold.png",
  features: ["Easy to Cook", "Rich in Protein", "High Nutrition", "Great Taste"],
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
  features: ["High Nutrition", "Premium Quality", "Rich in Protein", "Easy to Cook"],
  tag: "Premium"
}

];

const otherSections = [
  { name: "Seeds and Grains", path: "/products/seedsgrains" },
  { name: "Cotton Bales and Cotton Seed", path: "/products/cottonbales" },
  { name: "Cotton Seed Oil Cake", path: "/products/cottonseedcake" },
];

export default function PulsesProtein() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-sage-50">
      {/* Hero - Reduced height */}
      <section className="relative w-full h-[30vh] md:h-[40vh]">
        <img src="/banner1.jpg" alt="Pulses Banner" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">Pulses and Protein</h1>
        </div>
      </section>

      {/* Description */}
      <div className="text-center max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-forest-800 mb-6">Premium Pulses Collection</h2>
        <p className="text-olive-700 text-lg md:text-xl leading-relaxed">
          Discover our thoughtfully selected range of quality pulses, sourced with care to bring you consistent taste, freshness, and dependable cooking results.
        </p>

        
      </div>

      {/* Products Grid */}
      <section ref={ref} className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
        {products.map(p => (
          <motion.div 
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="relative h-72 flex items-center justify-center p-4 bg-sage-100">
              <img src={p.image} alt={p.name} className="max-h-64 object-contain transition-transform group-hover:scale-105 duration-300"/>
              <span className="absolute top-4 right-4 bg-forest-600 text-white px-3 py-1 rounded-full text-sm font-medium">{p.tag}</span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-forest-800 mb-3">{p.name}</h3>
              <p className="text-olive-700 mb-4 leading-relaxed">{p.description}</p>
              <ul className="flex flex-wrap gap-2 mb-4">
                {p.features.map((f,i) => (
                  <li key={i} className="text-sm px-3 py-1 bg-sage-200 rounded-full border border-sage-300 text-forest-700">
                    ✔ {f}
                  </li>
                ))}
              </ul>
              
            </div>
          </motion.div>
        ))}
        
        {/* Additional placeholder for third product card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-dashed border-sage-300 flex items-center justify-center min-h-[500px]">
          <div className="text-center p-6">
            <div className="text-6xl text-sage-400 mb-4">+</div>
            <h3 className="text-xl font-semibold text-sage-600 mb-2">More Products Coming Soon</h3>
            <p className="text-sage-500">We're constantly expanding our pulses collection</p>
          </div>
        </div>
      </section>
    </div>
  );
}