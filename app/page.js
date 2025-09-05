"use client";
import Hero from "@/components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GiPlantSeed,
  GiFarmer,
  GiWheat,
  GiThermometerCold,
  GiDeliveryDrone,
  GiGrain,
  GiSandsOfTime,
} from "react-icons/gi";
import {
  FaLeaf,
  FaTractor,
  FaHandsHelping,
  FaIndustry,
} from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Animated wrapper
const AnimatedSection = ({ children, className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function HomePage() {
  const benefits = [
    {
      icon: <GiPlantSeed className="w-8 h-8 text-green-700" />,
      title: "Farm-Fresh Pulses",
      desc: "Directly sourced from farmers, ensuring natural quality.",
    },
    {
      icon: <GiThermometerCold className="w-8 h-8 text-red-500" />,
      title: "No Cold Chain Storage",
      desc: "Naturally stored without artificial refrigeration.",
    },
    {
      icon: <GiDeliveryDrone className="w-8 h-8 text-green-500" />,
      title: "Quick Delivery",
      desc: "Reaches your kitchen fresh and on time.",
    },
    {
      icon: <GiGrain className="w-8 h-8 text-yellow-600" />,
      title: "Unpolished & Natural",
      desc: "No polishing, preserving authentic taste & texture.",
    },
    {
      icon: <BsShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Retains Original Size",
      desc: "No powdering or processing — just pure dal.",
    },
    {
      icon: <MdOutlineHealthAndSafety className="w-8 h-8 text-red-600" />,
      title: "Nutrient-Rich",
      desc: "Packed with protein, vitamins & minerals.",
    },
    {
      icon: <GiSandsOfTime className="w-8 h-8 text-purple-600" />,
      title: "Longer Shelf Life",
      desc: "Stays fresh longer without preservatives.",
    },
    {
      icon: <FaLeaf className="w-8 h-8 text-green-600" />,
      title: "Natural Produce",
      desc: "Grown responsibly, supporting sustainable farming.",
    },
  ];

  return (
    <div className="bg-[url('/grain-texture.png')] bg-fixed bg-cover bg-white overflow-hidden">
      {/* Hero */}
      <Hero />

      {/* About Section */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeIn}>
            <h2 className="text-4xl font-bold text-green-900 mb-6">
              About Jain Group
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              Jain Group has been a pillar of trust and quality in Maharashtra
              for over three decades. Founded in Yavatmal, we began with a
              mission to provide the finest grains and pulses across India.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              Blending tradition with modern technology, our products ensure
              purity, freshness, and nutrition — empowering farmers and
              communities alike.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition shadow-md"
            >
              Learn More
              <FaLeaf className="text-white" />
            </Link>
          </motion.div>

          {/* Illustration */}
          <motion.div
            variants={fadeIn}
            className="w-full h-80 md:h-96 bg-green-50 rounded-lg flex items-center justify-center"
          >
            image here
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <section className="bg-green-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-green-900 text-center mb-16"
          >
            Why Choose Jain Group
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Products",
                desc: "Natural foods cultivated without chemicals or antibiotics.",
                icon: <GiPlantSeed className="text-green-600 text-5xl" />,
              },
              {
                title: "Freshness Guaranteed",
                desc: "Prepared & stored with care for uncompromised freshness.",
                icon: <FaLeaf className="text-green-600 text-5xl" />,
              },
              {
                title: "Trusted Network",
                desc: "Supporting 5,00,000+ farmers with a strong supply chain.",
                icon: <FaHandsHelping className="text-green-600 text-5xl" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-bold text-green-800 text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
            {/* Products */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 py-24">
  <motion.h2
    variants={fadeIn}
    className="text-4xl font-bold text-green-900 mb-16 text-center"
  >
    Our Products
  </motion.h2>

  <div className="grid md:grid-cols-3 gap-16">
    {[
      {
        id: 1,
        name: "Jain Gold Natural Toor Dal",
        description: "Premium quality toor dal with natural flavor and aroma",
        image: "/jain_gold.png",
        features: ["100% Natural", "Rich in Protein", "No Additives"],
      },
      {
        id: 2,
        name: "Parasmani Toor Dal",
        description: "Finely processed toor dal for perfect cooking results",
        image: "/Parasmani_toor.png",
        features: ["Easy to Cook", "High Nutrition", "Premium Quality"],
      },
      {
        id: 3,
        name: "Pariwar Toor Dal",
        description: "Family pack of nutritious toor dal for everyday meals",
        image: "/pariwar_toor.png",
        features: ["Family Pack", "Economical", "Great Taste"],
      },
    ].map((product) => (
      <motion.div
        key={product.id}
        variants={fadeIn}
        className="flex flex-col items-center text-center"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-82 md:h-80 object-contain mb-6"
        />
        <h3 className="text-xl font-bold text-green-800 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
        <ul className="space-y-2 text-sm text-gray-700">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 justify-center">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>

  <motion.div variants={fadeIn} className="text-center mt-16">
    <Link
      href="/products"
      className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-500 transition-all duration-300 transform hover:-translate-y-1 shadow-md font-semibold"
    >
      View All Products
    </Link>
  </motion.div>
</AnimatedSection>



      {/* Benefits */}
      <section className="py-20 bg-[#FCF9F4] relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-900">
           Benefits of Jain Group Dal
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 py-24">
        <motion.h2
          variants={fadeIn}
          className="text-4xl font-bold text-green-900 mb-16 text-center"
        >
          Our Partners
        </motion.h2>
        <motion.div
          variants={fadeIn}
          className="flex flex-wrap justify-center items-center gap-12"
        >
          {["Partner1", "Partner 2", "partner 3"].map((partner) => (
            <div
              key={partner}
              className="w-40 h-20 bg-white flex items-center justify-center rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4"
            >
              <span className="text-gray-700 font-semibold text-lg">
                {partner}
              </span>
            </div>
          ))}
        </motion.div>
      </AnimatedSection>
    </div>
  );
}
