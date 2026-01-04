import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const ContactUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Message sent!");
        e.target.reset();
    }
  return (
    <section className="bg-blue-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <div className="text-center mb-16">
            <motion.h1
          className="text-accent font-bold text-3xl text-center pt-4 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          Contact US
        </motion.h1>
          <p data-aos="fade-right" className="max-w-3xl mx-auto text-lg text-accent mb-8">
            Have questions, feedback, or partnership ideas? We’d love to hear
            from you — drop us a message anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-orange-400 text-xl">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-accent">
                  Email
                </h4>
                <p className="text-accent">support@luxtrip.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 text-orange-400 text-xl">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-accent">
                  Phone
                </h4>
                <p className="text-accent">+880 1700-000000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 text-orange-400 text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-accent">
                  Location
                </h4>
                <p className="text-accent">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-accent">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-lg border border-gray-300 dark:text-primary px-4 py-3 focus:ring-2 focus:ring-orange-200 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-accent">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 dark:text-primary px-4 py-3 focus:ring-2 focus:ring-orange-200 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-accent">
                  Message
                </label>
                <textarea
                  rows="5"
                  required
                  placeholder="Write your message here..."
                  className="w-full rounded-lg border border-gray-300 dark:text-primary  px-4 py-3 focus:ring-2 focus:ring-orange-200 outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-orange-500 to-orange-300 font-semibold text-white hover:text-lg py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
