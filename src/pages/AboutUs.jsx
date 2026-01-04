import React from "react";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-blue-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-accent font-bold text-3xl text-center pt-4 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          About US
        </motion.h1>
        <p data-aos="fade-right" className="max-w-3xl mx-auto text-lg text-accent mb-8">
          We build meaningful digital experiences that help people travel
          smarter, explore more, and create unforgettable memories.
        </p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Mission */}
          <div className="group bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-2xl group-hover:scale-110 transition">
              <FaBullseye className="text-orange-400 w-10 h-10"/>
            </div>
            <h3 className="text-xl font-semibold text-accent mb-2">
              Our Mission
            </h3>
            <p className="text-primary">
              {" "}
              To simplify travel planning through smart technology and make
              every journey smooth, affordable, and stress-free.
            </p>
          </div>

          {/* Vision */}
          <div className="group bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-pink-100 text-pink-500 text-2xl group-hover:scale-110 transition">
              <FaEye className="text-orange-400 w-10 h-10"/>
            </div>
            <h3 className="text-xl font-semibold text-accent mb-2">
              Our Vision
            </h3>
            <p className="text-primary">
              {" "}
              To become the most loved digital travel companion trusted by
              explorers across the world.ee.
            </p>
          </div>

          {/* Values */}
          <div className="group bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-2xl group-hover:scale-110 transition">
              <FaHeart className="text-orange-400 w-10 h-10" />
            </div>
               <h3 className="text-xl font-semibold text-accent mb-2">
              Our Values
            </h3>
              <p className="text-primary">
              {" "}
               We believe in integrity, user-first design, innovation, and
              building products that truly help people.
            </p>
           
          </div>
        </div>

        {/* Optional Call to Action */}
        {/* <div className="mt-16">
          <p className="text-gray-700 mb-4 text-lg">
            Want to know more about our journey?
          </p>
          <button className="px-8 py-3 rounded-full bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 transition">
            Contact Us
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default AboutUs;
