"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, ArrowRight, Home } from "lucide-react";

const CallToActionSection = () => {
  return (
    <div className="relative py-32 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <Image
          src="/landing-call-to-action.jpg"
          alt="Modern living space with city view"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Home className="w-4 h-4 text-primary-400" />
                <span className="text-sm font-medium text-white">Find Your Perfect Home</span>
              </span>

              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                Your Dream Home is Just a
                <span className="text-primary-400"> Click Away</span>
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                Discover thousands of rental properties tailored to your lifestyle. 
                From cozy apartments to luxury homes, find the perfect space to 
                call your own.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                {[
                  { number: "10k+", label: "Properties" },
                  { number: "98%", label: "Happy Tenants" },
                  { number: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col gap-4 w-full md:w-auto"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center justify-center gap-3 bg-white hover:bg-primary-50 text-gray-900 rounded-xl px-8 py-4 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
            >
              <Search className="w-5 h-5 text-primary-600" />
              Start Searching
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="/signup"
              scroll={false}
              className="group flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl px-8 py-4 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
            >
              Create Free Account
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="text-center text-sm text-gray-400 mt-2">
              No credit card required • Free 30-day trial
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CallToActionSection;
