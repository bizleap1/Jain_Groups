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

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-24">
      {/* Header */}
      <motion.section
        className="text-center mb-20"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-5xl font-bold text-pink-600 mb-4">Get in Touch</h1>
        <p className="text-gray-700 max-w-xl mx-auto text-lg md:text-xl">
          Have questions or want to connect? Fill out the form below or reach us through our contact details.
        </p>
      </motion.section>

      {/* Contact Info */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
      >
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold text-pink-600 mb-2">Email</h3>
          <p className="text-gray-700">info@jaingroup.com</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">Phone</h3>
          <p className="text-gray-700">+91 98765 43210</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold text-green-600 mb-2">Address</h3>
          <p className="text-gray-700">Sardar Chowk, Yavatmal, Maharashtra</p>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="max-w-3xl mx-auto px-6"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-3xl shadow-xl space-y-6"
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-100 text-green-700 p-4 rounded-lg text-center font-semibold"
            >
              Thanks! Your message has been sent.
            </motion.div>
          )}
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            required
            className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-xl text-lg transition"
          >
            Send Message
          </button>
        </form>
      </motion.section>

      {/* Optional Map / Illustration */}
      <motion.section
        className="max-w-6xl mx-auto px-6 mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            title="Jain Group Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123456!2d78.123456!3d20.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1234567890abc%3A0x123456789abcdef0!2sYavatmal%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1693931234567!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.section>
    </div>
  );
}
