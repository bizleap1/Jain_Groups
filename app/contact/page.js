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

  const contactUnits = [
    {
      unit: "Unit 1",
      address: "Jain Groups, Yavatmal, Maharashtra",
      phone: "08644 – 223060",
    },
    {
      unit: "Unit 2",
      address: "Jain Groups, Yavatmal, Maharashtra",
      phone: "08644 – 239963",
    },
    {
      unit: "Unit 3",
      address: "Jain Groups, Yavatmal, Maharashtra",
      phone: "08644 – 239964",
    },
    {
      unit: "Unit 4",
      address: "Jain Groups, Yavatmal, Maharashtra",
      phone: "+91 9866239688",
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

      {/* Header */}
      <motion.section
        className="text-center mb-16 mt-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        
        <h2 className="text-3xl font-semibold text-green-700 mb-6">Jain Groups</h2>
        <p className="text-gray-700 max-w-xl mx-auto text-lg md:text-xl">
          Reach us through our
          contact details.
        </p>
      </motion.section>

      {/* Contact Units + Form */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        className="max-w-7xl mx-auto px-6 mb-20"
      >
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Side - 2x2 Address Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
            {contactUnits.map((unit, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-between hover:scale-105 transition-transform h-full"
              >
                <div>
                  <div className="flex items-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z"
                      />
                    </svg>
                    <h3 className="text-xl font-bold text-green-700">{unit.unit}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{unit.address}</p>
                </div>
                <div className="flex items-center text-gray-900 font-semibold mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5h2l2 7-2 2v3h3l2 2 3-3 2 2h3v-3l-2-2 2-7h2"
                    />
                  </svg>
                  <span>Ph: {unit.phone}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex-1">
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
                  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                required
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 rounded-xl text-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
