"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function ContactPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeMap, setActiveMap] = useState(0);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactUnits = [
    {
      unit: "JAIN INDUSTRIES",
      address: "Yavatmal, Maharashtra",
      phone: "08644 – 223060",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.123456789012!2d78.12345678901234!3d20.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c123456789ab%3A0x123456789abcdef!2sYavatmal%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
      lat: 20.123456,
      lng: 78.123456
    },
    {
      unit: "JAIN FOOD PRODUCTS",
      address: "Yavatmal, Maharashtra",
      phone: "08644 – 239963",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.234567890123!2d78.23456789012345!3d20.234567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c234567890bc%3A0x234567890abcdef!2sYavatmal%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890124!5m2!1sen!2sin",
      lat: 20.234567,
      lng: 78.234567
    },
    {
      unit: "JAIN COTTEX AND AGRO INDUSTRIES",
      address: "Yavatmal, Maharashtra",
      phone: "08644 – 239964",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.345678901234!2d78.34567890123456!3d20.345678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c345678901cd%3A0x34567890abcdef!2sYavatmal%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890125!5m2!1sen!2sin",
      lat: 20.345678,
      lng: 78.345678
    },
    {
      unit: "MANORAMA INDUSTRIES",
      address: "Yavatmal, Maharashtra",
      phone: "+91 9866239688",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.456789012345!2d78.45678901234567!3d20.456789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c456789012de%3A0x4567890abcdef!2sYavatmal%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890126!5m2!1sen!2sin",
      lat: 20.456789,
      lng: 78.456789
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full h-[30vh] md:h-[50vh] overflow-hidden z-0">
        <img
          src="/banner1.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-center md:object-top"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-white text-4xl md:text-6xl font-light text-center drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main Content - Redesigned Layout */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Introduction Section */}
        <motion.section
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Get in Touch with Jain Groups
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-4">
            We're here to help you with any inquiries about our products and services. 
            Reach out to any of our units or send us a message directly.
          </p>
          <div className="flex justify-center items-center mt-8">
            <div className="w-24 h-1 bg-yellow-500 rounded-full"></div>
          </div>
        </motion.section>

        {/* Contact Form & All Units Section - MOVED ABOVE LOCATIONS */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-r from-green-700 to-green-900 rounded-t-2xl p-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send us a Message
                </h3>
                <p className="text-green-100 mt-2">We'll get back to you within 24 hours</p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-b-2xl shadow-xl space-y-6"
              >
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-green-100 border border-green-400 text-green-700 p-4 rounded-lg text-center font-semibold"
                  >
                    ✅ Thanks! Your message has been sent successfully.
                  </motion.div>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* All Units Grid */}
            <div>
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-t-2xl p-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  All Our Units
                </h3>
                <p className="text-yellow-100 mt-2">Complete contact information for all locations</p>
              </div>
              <div className="bg-white p-6 rounded-b-2xl shadow-xl">
                <div className="grid md:grid-cols-2 gap-6">
                  {contactUnits.map((unit, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-xl p-5 hover:border-green-300 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start mb-3">
                        <div className="bg-green-100 p-2 rounded-lg mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-green-700">{unit.unit}</h4>
                        </div>
                      </div>
                      <div className="flex items-start mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-gray-700">{unit.address}</p>
                      </div>
                      <div className="flex items-center text-gray-900 font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>{unit.phone}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Interactive Map & Contact Cards Section - NOW BELOW FORM/UNITS */}
        <motion.section
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Interactive Map */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                <div className="p-6 bg-gradient-to-r from-green-700 to-green-900">
                  <h3 className="text-2xl font-bold text-white">
                    {contactUnits[activeMap].unit} - Location
                  </h3>
                  <p className="text-green-100 mt-2">{contactUnits[activeMap].address}</p>
                </div>
                <div className="h-[400px] md:h-[500px] relative">
                  <iframe
                    src={contactUnits[activeMap].mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${contactUnits[activeMap].unit}`}
                    className="absolute inset-0"
                  ></iframe>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <p className="text-sm font-semibold text-gray-800">
                      📍 {contactUnits[activeMap].address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Unit Selector & Quick Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h4 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Our Units
                </h4>
                <div className="space-y-4">
                  {contactUnits.map((unit, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveMap(idx)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${activeMap === idx ? 'bg-green-50 border-l-4 border-yellow-500 shadow-md' : 'bg-gray-50 hover:bg-gray-100'}`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-bold text-green-700">{unit.unit}</h5>
                          <p className="text-sm text-gray-600 mt-1">{unit.phone}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${activeMap === idx ? 'text-yellow-500' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Contact Info */}
              <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl shadow-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Quick Contact
                </h4>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">Current Unit:</span>
                    {contactUnits[activeMap].phone}
                  </p>
                  <p className="text-green-100 text-sm mt-4">
                    Click on any unit to view its location on the map
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}