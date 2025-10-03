"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: "Cotton & Yarn Sourcing",
    description: "End-to-end sourcing solutions from verified suppliers with quality assurance and reliable delivery.",
    icon: "🌾"
  },
  {
    title: "Organic Cotton Supply",
    description: "Certified organic cotton meeting international standards and sustainability requirements.",
    icon: "🌱"
  },
  {
    title: "Price Discovery",
    description: "Market analysis and competitive pricing to ensure you get the best value for your investment.",
    icon: "💰"
  },
  {
    title: "Quality Verification",
    description: "Comprehensive testing and verification against industry standards and specifications.",
    icon: "✅"
  },
  {
    title: "Transaction Support",
    description: "End-to-end support including negotiations, contracts, and payment facilitation.",
    icon: "🤝"
  },
  {
    title: "Export Documentation",
    description: "Complete handling of export documentation, customs clearance, and logistics support.",
    icon: "📦"
  }
];

const features = [
  {
    title: "Quality Assurance",
    description: "Rigorous quality checks at every stage of sourcing and supply chain"
  },
  {
    title: "Global Network",
    description: "Extensive connections with suppliers worldwide including Vietnam, China, and Bangladesh"
  },
  {
    title: "Industry Expertise",
    description: "Deep knowledge of cotton bales and yarn markets with years of experience"
  },
  {
    title: "Trusted Partnerships",
    description: "Building long-term relationships based on trust and exceptional service"
  }
];

const otherServices = [
  { name: "Warehousing and Cold Storage Solutions", path: "/services/warehousing" },
];

export default function SourcingSupplying() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-sage-50">
      {/* Hero Banner - Reduced height */}
      <section className="relative w-full h-[30vh] md:h-[40vh]">
        <img src="/Warehouse_banner.png" alt="Sourcing Banner" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">Sourcing and Supplying</h1>
        </div>
      </section>

      {/* Description */}
      <div className="text-center max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-forest-800 mb-6">Jain Brokers: Trusted Cotton Bales & Yarn Experts</h2>
        <p className="text-olive-700 text-lg md:text-xl leading-relaxed mb-6">
          Connecting spinning mills, traders & exporters with reliable suppliers worldwide. 
          Quality assurance, competitive pricing, and seamless transactions guaranteed.
        </p>

        
      </div>

      {/* About Section with Image */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-forest-800 mb-6">About Jain Brokers</h2>
              <p className="text-olive-700 text-lg leading-relaxed mb-4">
                Jain Brokers is a trusted name in cotton and yarn sourcing with extensive industry experience. 
                We connect spinning mills, traders, and exporters with reliable suppliers, ensuring fair pricing, 
                quality assurance, and smooth transactions.
              </p>
              <p className="text-olive-700 text-lg leading-relaxed mb-6">
                Our expertise lies in cotton bales and yarn, serving both domestic and international markets 
                including Vietnam, China, and Bangladesh. We pride ourselves on building long-term relationships 
                based on trust and exceptional service.
              </p>
              
              <div className="bg-sage-100 rounded-xl p-6 border border-sage-300">
                <h3 className="text-xl font-bold text-forest-800 mb-4">Why Choose Jain Brokers?</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-forest-600 mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-forest-800">{feature.title}</h4>
                        <p className="text-olive-700 text-sm">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Right side image */}
            {/* Right side image */}
<div className="flex justify-center">
  <div className="w-full max-w-sm h-80 flex items-center justify-center">
    <img 
      src="/Source_supplying2.png" 
      alt="Warehouse" 
      className="w-full h-full object-cover rounded-xl border-2 border-dashed border-sage-400"
    />
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-forest-800 mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-sage-200"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-forest-800 mb-3">{service.title}</h3>
              <p className="text-olive-700 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Info Section with Image */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side image */}
<div className="flex justify-center order-2 md:order-1">
  <div className="w-full max-w-sm h-80 flex items-center justify-center">
    <img 
      src="/Source_supplying.png" 
      alt="Trusted Partnerships" 
      className="w-full h-full object-cover rounded-xl border-2 border-dashed border-sage-400"
    />
  </div>
</div>

            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-forest-800 mb-6">Our Global Reach</h2>
              <p className="text-olive-700 text-lg leading-relaxed mb-4">
                With established networks across major cotton-producing regions and international markets, 
                we facilitate seamless trade between suppliers and buyers. Our expertise spans across 
                quality assessment, market analysis, and trade facilitation.
              </p>
              <p className="text-olive-700 text-lg leading-relaxed mb-6">
                We understand the nuances of international trade and provide comprehensive support 
                from initial sourcing to final delivery, ensuring complete satisfaction for all parties involved.
              </p>
              
              
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}