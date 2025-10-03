"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: "Temperature Controlled Storage",
    description: "Advanced climate-controlled facilities maintaining optimal temperatures for various agricultural products.",
    icon: "❄️"
  },
  {
    title: "Modern Warehouse Facilities",
    description: "State-of-the-art storage spaces with proper ventilation and security systems.",
    icon: "🏭"
  },
  {
    title: "Inventory Management",
    description: "Comprehensive stock monitoring and management systems for efficient operations.",
    icon: "📊"
  },
  {
    title: "Quality Preservation",
    description: "Specialized storage conditions to maintain product quality and extend shelf life.",
    icon: "🛡️"
  },
  {
    title: "Logistics Support",
    description: "Integrated logistics and distribution services for seamless supply chain management.",
    icon: "🚚"
  },
  {
    title: "Custom Storage Solutions",
    description: "Tailored storage options based on specific product requirements and duration.",
    icon: "⚙️"
  }
];

const features = [
  {
    title: "Advanced Technology",
    description: "Modern cooling systems and temperature monitoring equipment"
  },
  {
    title: "Hygiene & Safety",
    description: "Regular sanitation and pest control measures"
  },
  {
    title: "24/7 Security",
    description: "Round-the-clock surveillance and access control"
  },
  {
    title: "Strategic Locations",
    description: "Well-connected facilities for easy transportation access"
  }
];

const storageCapabilities = [
  { product: "Grains & Pulses", capacity: "Long-term storage", temperature: "Ambient" },
  { product: "Fresh Produce", capacity: "Short to medium-term", temperature: "2°C - 8°C" },
  { product: "Frozen Goods", capacity: "Long-term storage", temperature: "-18°C to -25°C" },
  { product: "Processed Foods", capacity: "Medium-term storage", temperature: "10°C - 15°C" }
];

const otherServices = [
  { name: "Sourcing and Supplying", path: "/services/sourcingsupplying" },
];

export default function Warehousing() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-sage-50">
      {/* Hero Banner - Reduced height */}
      <section className="relative w-full h-[30vh] md:h-[40vh]">
        <img src="/Warehouse_banner.png" alt="Warehousing Banner" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">Cold Storage & Warehousing Solutions</h1>
        </div>
      </section>

      {/* Description */}
      <div className="text-center max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-forest-800 mb-6">Safe & Modern Storage Facilities for Agri-Products</h2>
        <p className="text-olive-700 text-lg md:text-xl leading-relaxed mb-6">
          Providing state-of-the-art cold storage and warehousing solutions to preserve quality, 
          extend shelf life, and ensure the safe storage of agricultural products throughout the supply chain.
        </p>

      </div>

      {/* About Section with Image */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-forest-800 mb-6">Our Storage Facilities</h2>
              <p className="text-olive-700 text-lg leading-relaxed mb-4">
                We offer comprehensive cold storage and warehousing solutions designed specifically 
                for agricultural products. Our facilities are equipped with advanced temperature 
                control systems and modern infrastructure to ensure your products remain in perfect 
                condition from storage to delivery.
              </p>
              <p className="text-olive-700 text-lg leading-relaxed mb-6">
                With strategically located warehouses and cold storage units, we provide reliable 
                storage solutions that help reduce wastage, maintain quality, and optimize your 
                supply chain operations.
              </p>
              
              <div className="bg-sage-100 rounded-xl p-6 border border-sage-300">
                <h3 className="text-xl font-bold text-forest-800 mb-4">Key Features</h3>
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
<div className="flex justify-center">
  <div className="w-full max-w-sm h-80 flex items-center justify-center">
    <img 
      src="/Warehouse.png" 
      alt="Warehouse" 
      className="w-full h-full object-cover rounded-xl border-2 border-dashed border-sage-400"
    />
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Storage Capabilities */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-forest-800 mb-8 text-center">Storage Capabilities</h2>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-forest-700 text-white">
            <div className="p-4 font-semibold border-r border-forest-600">Product Type</div>
            <div className="p-4 font-semibold border-r border-forest-600">Storage Capacity</div>
            <div className="p-4 font-semibold border-r border-forest-600">Temperature Range</div>
            <div className="p-4 font-semibold">Special Features</div>
          </div>
          {storageCapabilities.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-sage-200 last:border-b-0">
              <div className="p-4 font-semibold text-forest-800 border-r border-sage-200">{item.product}</div>
              <div className="p-4 text-olive-700 border-r border-sage-200">{item.capacity}</div>
              <div className="p-4 text-olive-700 border-r border-sage-200">{item.temperature}</div>
              <div className="p-4">
                <span className="px-3 py-1 bg-sage-200 text-forest-700 rounded-full text-sm">Quality Maintained</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-forest-800 mb-12 text-center">Our Storage Services</h2>
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

      {/* Benefits Section */}
      <section className="bg-sage-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-forest-800 mb-12 text-center">Benefits of Our Storage Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-forest-600 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-forest-800 mb-3">Reduced Wastage</h3>
              <p className="text-olive-700">Minimize product spoilage with proper temperature control</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-forest-600 text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-forest-800 mb-3">Quality Preservation</h3>
              <p className="text-olive-700">Maintain product freshness and nutritional value</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-forest-600 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-forest-800 mb-3">Cost Effective</h3>
              <p className="text-olive-700">Optimize storage costs with efficient space utilization</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}