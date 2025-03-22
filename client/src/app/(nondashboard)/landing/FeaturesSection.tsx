"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Search, Star } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface Feature {
  icon: React.ElementType;
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  color: string;
  stats: [string, string];
}

const features: Feature[] = [
  {
    icon: Shield,
    imageSrc: "/landing-search3.png",
    title: "Trustworthy Verified Listings",
    description: "Every property is thoroughly verified by our team. Browse with confidence knowing each listing meets our strict quality standards.",
    linkText: "Explore Verified Homes",
    linkHref: "/explore",
    color: "from-green-500/10 to-emerald-500/10",
    stats: ["100%", "Verified"],
  },
  {
    icon: Search,
    imageSrc: "/landing-search2.png",
    title: "Smart Search Technology",
    description: "Our advanced search algorithms help you find the perfect home matching your exact requirements and preferences.",
    linkText: "Start Searching",
    linkHref: "/search",
    color: "from-blue-500/10 to-primary-500/10",
    stats: ["1000+", "Properties"],
  },
  {
    icon: Star,
    imageSrc: "/landing-search1.png",
    title: "Trusted by Thousands",
    description: "Join thousands of satisfied tenants who found their dream home through our platform. Read reviews from real users.",
    linkText: "Read Reviews",
    linkHref: "/discover",
    color: "from-purple-500/10 to-pink-500/10",
    stats: ["4.9", "Rating"],
  },
];

const FeaturesSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-primary-600 font-medium mb-4">
            Powerful Features
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight mb-6">
            Find Your Perfect Home with
            <span className="text-primary-600"> Smart Search</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our intelligent search system helps you discover the ideal property that matches 
            your lifestyle and preferences, making house hunting a breeze.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({
  icon: Icon,
  imageSrc,
  title,
  description,
  linkText,
  linkHref,
  color,
  stats,
}: Feature) => (
  <div className="group relative bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300">
    {/* Icon and Stats */}
    <div className="flex items-center justify-between mb-8">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} p-3`}>
        <Icon className="w-full h-full text-primary-600" />
      </div>
      <div className="text-right">
        <div className="text-2xl font-bold text-gray-900">{stats[0]}</div>
        <div className="text-sm text-gray-500">{stats[1]}</div>
      </div>
    </div>

    {/* Image */}
    <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gray-100">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/placeholder.jpg';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
    </div>

    {/* Content */}
    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 mb-6 line-clamp-3">
      {description}
    </p>

    {/* Link */}
    <Link
      href={linkHref}
      scroll={false}
      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group/link"
    >
      {linkText}
      <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
    </Link>
  </div>
);

export default FeaturesSection;
