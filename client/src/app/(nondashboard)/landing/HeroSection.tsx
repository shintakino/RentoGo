"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setFilters } from "@/state";
import { Search, MapPin, Building, Home } from "lucide-react";

const HeroSection = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  const handleLocationSearch = async () => {
    try {
      const trimmedQuery = searchQuery.trim();
      if (!trimmedQuery) return;

      setIsSearching(true);
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          trimmedQuery
        )}.json?access_token=${
          process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
        }&fuzzyMatch=true`
      );
      const data = await response.json();
      
      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].center;
        dispatch(
          setFilters({
            location: trimmedQuery,
            coordinates: [lat, lng],
          })
        );
        const params = new URLSearchParams({
          location: trimmedQuery,
          lat: lat.toString(),
          lng: lng.toString(),
        });
        router.push(`/search?${params.toString()}`);
      }
    } catch (error) {
      console.error("Error searching location:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const quickSearchOptions = [
    { label: "Apartments", icon: Building },
    { label: "Houses", icon: Home },
    { label: "Popular Areas", icon: MapPin },
  ];

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <Image
          src="/landing-splash.jpg"
          alt="Modern living space"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </motion.div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Hero Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Find your dream home today
            </span>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6"
          >
            Discover Your Perfect
            <span className="text-primary-400"> Living Space</span>
          </motion.h1>

          {/* Hero Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-gray-300 mb-12"
          >
            Explore thousands of carefully curated properties designed to match your lifestyle
            and make your dream home a reality.
          </motion.p>

          {/* Search Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex gap-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLocationSearch()}
                  placeholder="Search by city, neighborhood or address"
                  className="w-full h-14 pl-12 pr-4 rounded-xl border-0 bg-white/95 backdrop-blur-sm text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <Button
                onClick={handleLocationSearch}
                disabled={isSearching}
                className="h-14 px-8 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary-600/20"
              >
                {isSearching ? (
                  <span className="flex items-center gap-2">
                    <Search className="w-5 h-5 animate-spin" />
                    Searching...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Search className="w-5 h-5" />
                    Search
                  </span>
                )}
              </Button>
            </div>

            {/* Quick Search Options */}
            <div className="flex justify-center gap-4 mt-6">
              {quickSearchOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white/90 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                    {option.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
