"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Calendar, Home, ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const DiscoverSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-primary-600 font-medium mb-4">
            Simple Three-Step Process
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight mb-6">
            Discover Your Perfect
            <span className="text-primary-600"> Living Space</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Finding your dream home shouldn't be complicated. Our streamlined process 
            makes it easy to discover, book, and move into your perfect rental property.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              icon: Search,
              imageSrc: "/landing-icon-wand.png",
              title: "Smart Property Search",
              description: "Browse thousands of verified properties with our intelligent search system. Filter by location, price, amenities, and more to find your perfect match.",
              color: "from-blue-500/20 to-primary-500/20",
              number: "01",
            },
            {
              icon: Calendar,
              imageSrc: "/landing-icon-calendar.png",
              title: "Easy Booking Process",
              description: "Schedule viewings and submit applications with just a few clicks. Our streamlined booking system makes securing your dream home effortless.",
              color: "from-purple-500/20 to-pink-500/20",
              number: "02",
            },
            {
              icon: Home,
              imageSrc: "/landing-icon-heart.png",
              title: "Move-In Ready",
              description: "From approval to move-in, we handle all the details. Get ready to start your new chapter in a home that perfectly suits your lifestyle.",
              color: "from-green-500/20 to-teal-500/20",
              number: "03",
            },
          ].map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <DiscoverCard {...card} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-20"
        >
          <button className="group inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
            Start Your Search Now
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

interface DiscoverCardProps {
  icon: React.ElementType;
  imageSrc: string;
  title: string;
  description: string;
  color: string;
  number: string;
}

const DiscoverCard = ({
  icon: Icon,
  imageSrc,
  title,
  description,
  color,
  number,
}: DiscoverCardProps) => (
  <div className="group relative h-full">
    {/* Number Background */}
    <div className="absolute -right-4 -top-4 text-8xl font-bold text-gray-900/5">
      {number}
    </div>
    
    <div className="relative h-full p-8 rounded-2xl bg-white hover:bg-gray-50 transition-all duration-300 shadow-soft hover:shadow-lg">
      {/* Icon Container */}
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} p-4 mb-6`}>
        <Icon className="w-full h-full text-primary-600" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Hover Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
    </div>
  </div>
);

export default DiscoverSection;
