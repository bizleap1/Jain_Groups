"use client";
import Hero from "@/components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
    icon: GiPlantSeed,
    iconClass: "w-8 h-8 text-emerald-600",
    title: "Premium Quality Pulses",
    desc: "Carefully selected and hygienically packed for everyday use.",
  },
  {
    icon: GiGrain,
    iconClass: "w-8 h-8 text-lime-600",
    title: "Authentic Taste",
    desc: "Keeping the original flavor intact.",
  },
  {
    icon: BsShieldCheck,
    iconClass: "w-8 h-8 text-amber-500",
    title: "Safe & Reliable",
    desc: "Processed and packed under strict food safety standards.",
  },
  {
    icon: MdOutlineHealthAndSafety,
    iconClass: "w-8 h-8 text-emerald-500",
    title: "Rich in Nutrition",
    desc: "A good source of protein, fiber, vitamins, and minerals.",
  },
  {
    icon: GiSandsOfTime,
    iconClass: "w-8 h-8 text-lime-500",
    title: "Convenient Storage",
    desc: "Long shelf life when stored properly at home.",
  },
  {
    icon: FaLeaf,
    iconClass: "w-8 h-8 text-amber-400",
    title: "Sustainably Packed",
    desc: "Packed responsibly to support better food practices.",
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
            <p className="text-green-800 mb-4 text-lg">
              Jain Group has been a pillar of trust and quality in Maharashtra
              for over three decades. Founded in Yavatmal, we began with a
              mission to provide the finest grains and pulses across India.
            </p>
            <p className="text-green-800 mb-6 text-lg">
              Blending tradition with modern technology, our products ensure
              purity, freshness, and nutrition — empowering farmers and
              communities alike.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-500 transition shadow-md hover:shadow-lg"
            >
              Learn More
              <FaLeaf className="text-white" />
            </Link>
          </motion.div>

          {/* Illustration */}
          <img
            src="/about.png"
            alt="Lentils"
            className="w-full max-w-lg object-contain rounded-lg mx-auto shadow-lg"
          />
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <section className="bg-amber-50 py-24">
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
                icon: <GiPlantSeed className="text-emerald-600 text-5xl" />,
              },
              {
                title: "Freshness Guaranteed",
                desc: "Prepared & stored with care for uncompromised freshness.",
                icon: <FaLeaf className="text-lime-600 text-5xl" />,
              },
              {
                title: "Trusted Network",
                desc: "Supporting 5,00,000+ farmers with a strong supply chain.",
                icon: <FaHandsHelping className="text-amber-500 text-5xl" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-amber-100"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-bold text-green-800 text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-green-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 py-24">
        <motion.h2
          variants={fadeIn}
          className="text-5xl font-bold text-green-900 mb-4 text-center"
        >
          Premium Pulses Collection
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-lg text-green-700 mb-12 text-center max-w-2xl mx-auto"
        >
          Experience the finest quality pulses, carefully selected and processed to perfection for your culinary excellence
        </motion.p>

        {/* Mobile: Enhanced Carousel */}
        <div className="block md:hidden relative">
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            modules={[Autoplay, Pagination]}
            className="pb-20"
          >
            {[
              {
                id: 1,
                name: "Jain Gold Natural Toor Dal",
                description: "Premium quality toor dal with natural flavor and aroma, sourced from the finest farms",
                image: "/Jain_gold.png",
                features: ["Easy to Cook", "Rich in Protein", "High Nutrition", "Great Taste"],
                tag: "Premium"
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
},
            ].map((product) => (
              <SwiperSlide key={product.id}>
                <motion.div
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center bg-gradient-to-br from-white to-amber-50 p-6 rounded-3xl shadow-xl border border-lime-200 relative overflow-hidden"
                >
                  {/* Premium tag */}
                  <div className="absolute top-4 right-4 bg-lime-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    {product.tag}
                  </div>

                  {/* Product image */}
                  <div className="relative w-full h-96 mb-6 flex items-center justify-center"> 
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-lime-50 rounded-2xl -z-10"></div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-80 object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-green-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-green-700 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2 text-sm text-green-800 w-full">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 justify-start bg-amber-50 px-3 py-2 rounded-lg">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: Enhanced Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              name: "Jain Gold Natural Toor Dal",
              description: "Premium quality toor dal with natural flavor and aroma, sourced from the finest farms",
              image: "/Jain_gold.png",
              features: ["Easy to Cook", "High Nutrition", "Premium Quality", "Quick Cooking"],
              tag: "Premium"
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
          ].map((product) => (
            <motion.div
              key={product.id}
              variants={fadeIn}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center text-center bg-gradient-to-br from-white to-amber-50 p-8 rounded-3xl shadow-lg border border-lime-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Premium tag */}
              <div className="absolute top-5 right-5 bg-lime-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {product.tag}
              </div>

              {/* Product image */}
              <div className="relative w-full h-[420px] mb-6 flex items-center justify-center"> 
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-lime-50 rounded-2xl -z-10 group-hover:from-emerald-200 group-hover:to-lime-100 transition-colors"></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-80 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-bold text-green-900 mb-3">
                {product.name}
              </h3>
              <p className="text-green-700 mb-4 text-sm leading-relaxed">
                {product.description}
              </p>
              <ul className="space-y-2 text-sm text-green-800 w-full mb-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 justify-start bg-amber-50 px-3 py-2 rounded-lg group-hover:bg-amber-100 transition-colors">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          variants={fadeIn} 
          className="text-center mt-10"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href="/products/pulsesprotein"
            className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-lime-500 text-white px-10 py-4 rounded-xl hover:from-emerald-500 hover:to-lime-400 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg group"
          >
            Explore Our Full Range
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>

        {/* Custom styles for the carousel */}
        <style jsx global>{`
          .custom-bullet {
            display: inline-block;
            width: 12px;
            height: 12px;
            background: #d1fae5;
            border-radius: 50%;
            margin: 0 6px;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .custom-bullet-active {
            background: #10b981;
            transform: scale(1.4);
            box-shadow: 0 0 5px rgba(16, 185, 129, 0.5);
          }
          .swiper-slide {
            padding: 10px 0 50px;
          }
        `}</style>
      </AnimatedSection>

      {/* Benefits */}
      <section className="py-20 bg-lime-50 relative z-10">
        <div className="max-w-[1920px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-900">
            Benefits of Jain Group Dal
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left side: Benefits in 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all border border-amber-100"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100">
  {/* Render the icon component properly */}
  {(() => {
    const Icon = benefit.icon;
    return <Icon className={benefit.iconClass} />;
  })()}
</div>

                  <div>
                    <h3 className="text-lg font-semibold text-green-800">
                      {benefit.title}
                    </h3>
                    <p className="text-green-700 text-sm">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right side: HUGE Image */}
            <div className="flex justify-center md:justify-end overflow-visible">
              <img
                src="/whyus.png"
                alt="Why Us"
                className="w-[180%] md:w-[150%] object-contain"
              />
            </div>
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
              className="w-40 h-20 bg-white flex items-center justify-center rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-amber-200"
            >
              <span className="text-green-800 font-semibold text-lg">
                {partner}
              </span>
            </div>
          ))}
        </motion.div>
      </AnimatedSection>
    </div>
  );
}