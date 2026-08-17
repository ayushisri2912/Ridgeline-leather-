import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import heroImage from "../../assets/Images/luxury_leather_hero.jpg";
import "./HeroSection.css";

const HeroSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageSlideIn = {
    hidden: { opacity: 0, x: 70, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
    },
  };

  const floatingBadge = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 4.8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const ambientGlowPulse = {
    animate: {
      scale: [1, 1.15, 1],
      opacity: [0.45, 0.75, 0.45],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const scrollIndicatorBounce = {
    animate: {
      y: [0, 8, 0],
      transition: {
        duration: 2.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden hero-luxury-bg font-sans-luxury text-[#3B2A20] py-8 lg:py-12 pb-2 lg:pb-4">
      
      {/* Dynamic Animated Topographic Line SVG Background */}
      <div className="topographic-lines-svg">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M-100 200 C 300 150, 700 350, 1540 250"
            stroke="#8B5E3C"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            opacity="0.25"
            animate={{ opacity: [0.15, 0.35, 0.15], y: [0, 10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M-100 450 C 400 300, 800 600, 1540 400"
            stroke="#8B5E3C"
            strokeWidth="1"
            opacity="0.18"
            animate={{ opacity: [0.1, 0.28, 0.1], y: [0, -10, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M-100 700 C 500 550, 900 800, 1540 650"
            stroke="#8B5E3C"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.2"
            animate={{ opacity: [0.12, 0.3, 0.12], y: [0, 8, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Animated Soft Radial Ambient Lighting Behind Image */}
      <motion.div
        className="glow-ambient-1 absolute top-1/2 right-12 -translate-y-1/2 w-[480px] h-[480px] rounded-full blur-[110px] pointer-events-none -z-0"
        variants={ambientGlowPulse}
        animate="animate"
      />
      <div className="glow-ambient-2 absolute bottom-5 left-10 w-[350px] h-[350px] rounded-full blur-[90px] pointer-events-none -z-0" />

      {/* Main Container - Max Width 1650px matching Navbar */}
      <div className="max-w-[1650px] w-full mx-auto px-6 lg:px-12 xl:px-16 flex-1 flex items-center relative z-10">
        <div className="grid lg:grid-cols-12 items-center gap-12 lg:gap-16 w-full py-6 lg:py-10">
          
          {/* LEFT CONTENT COLUMN (7 cols on lg) */}
          <motion.div
            className="lg:col-span-7 max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Small Label with Line */}
            <motion.div variants={fadeInUp} className="inline-block">
              <span className="uppercase tracking-[0.35em] text-[#8B5E3C] text-xs sm:text-sm font-semibold block">
                PREMIUM OUTDOOR HERITAGE
              </span>
              <div className="w-14 h-[2px] bg-[#8B5E3C] mt-2.5 rounded-full opacity-85" />
            </motion.div>

            {/* Large Serif Heading */}
            <motion.h1
              variants={fadeInUp}
              className="font-serif-luxury text-4xl sm:text-6xl lg:text-[76px] leading-[1.06] text-[#3B2A20] font-normal tracking-tight mt-6 sm:mt-8"
            >
              Crafted For
              <br />
              The Wild.
              <br />
              Built To{" "}
              <span className="text-[#8B5E3C] italic font-normal">Last.</span>
            </motion.h1>

            {/* Short Description */}
            <motion.p
              variants={fadeInUp}
              className="mt-6 sm:mt-8 text-[#5A4A40] text-base sm:text-lg leading-relaxed max-w-lg font-light"
            >
              Discover handcrafted premium leather goods inspired by outdoor
              adventures, timeless craftsmanship and heritage traditions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              {/* Primary Button */}
              <a
                href="#shop"
                className="group relative inline-flex items-center justify-center gap-3 bg-[#8B5E3C] text-[#FAF8F5] px-8 py-4 sm:px-9 sm:py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] btn-primary-glow hover:bg-[#3B2A20] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Shop Collection</span>
                <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>

              {/* Secondary Button */}
              <a
                href="#craftsmanship"
                className="inline-flex items-center justify-center border border-[#8B5E3C]/35 hover:border-[#8B5E3C] bg-white/40 hover:bg-[#F5F0EA] text-[#3B2A20] px-8 py-4 sm:px-9 sm:py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                Discover Craftsmanship
              </a>
            </motion.div>

            {/* 3 Premium Features Below Buttons */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 sm:mt-16 pt-8 border-t border-[#8B5E3C]/15 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 items-center"
            >
              {/* Feature 1 */}
              <div className="flex items-center gap-3.5 sm:pr-2">
                <div className="w-10 h-10 rounded-full bg-[#F5F0EA] border border-[#8B5E3C]/25 flex items-center justify-center text-[#8B5E3C] shrink-0 shadow-sm">
                  {/* Handmade Icon */}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3B2A20]">
                    Handmade
                  </h4>
                  <p className="text-xs text-[#7A685D] mt-0.5">With Passion</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3.5 sm:border-l sm:border-[#8B5E3C]/15 sm:pl-6 sm:pr-2">
                <div className="w-10 h-10 rounded-full bg-[#F5F0EA] border border-[#8B5E3C]/25 flex items-center justify-center text-[#8B5E3C] shrink-0 shadow-sm">
                  {/* Leather Hide Icon */}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                      d="M9 3v2m6-2v2M4 9h16M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3B2A20]">
                    Full Grain
                  </h4>
                  <p className="text-xs text-[#7A685D] mt-0.5">
                    Premium Leather
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3.5 sm:border-l sm:border-[#8B5E3C]/15 sm:pl-6">
                <div className="w-10 h-10 rounded-full bg-[#F5F0EA] border border-[#8B5E3C]/25 flex items-center justify-center text-[#8B5E3C] shrink-0 shadow-sm">
                  {/* Built To Last Shield Icon */}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3B2A20]">
                    Built To Last
                  </h4>
                  <p className="text-xs text-[#7A685D] mt-0.5">
                    Lifetime Quality
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE COLUMN (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0">
            
            {/* Matrix Dot Accent Pattern Behind Image Right Side */}
            <div className="absolute -right-5 bottom-10 w-28 h-40 dot-matrix-pattern-large opacity-35 rounded-lg pointer-events-none hidden sm:block z-0" />

            {/* Warm Glow directly behind Image Container */}
            <motion.div
              className="absolute -left-8 top-1/3 w-72 h-72 bg-[#C88A58]/30 rounded-full blur-3xl pointer-events-none -z-0"
              variants={ambientGlowPulse}
              animate="animate"
            />

            {/* Main Image Container */}
            <motion.div
              className="relative group max-w-md lg:max-w-none w-full z-10"
              variants={imageSlideIn}
              initial="hidden"
              animate="visible"
            >
              {/* Image Frame with Large Rounded Corners */}
              <div className="overflow-hidden rounded-[36px] sm:rounded-[44px] shadow-2xl shadow-[#3B2A20]/25 border border-[#8B5E3C]/15 bg-[#F5F0EA]">
                <img
                  src={heroImage}
                  alt="Crafted Leather Boots & Bag"
                  className="w-full h-[480px] sm:h-[580px] lg:h-[640px] object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Floating Glass Card Badge */}
              <motion.div
                className="glass-badge-luxury absolute -top-4 right-2 sm:top-8 sm:-right-8 rounded-2xl p-4 sm:p-5 w-44 sm:w-48 text-center pointer-events-auto z-20"
                variants={floatingBadge}
                animate="animate"
              >
                {/* Mountain Peak Heritage Emblem SVG */}
                <div className="flex justify-center text-[#8B5E3C]">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 3l4 8 5-5 5 11H2L8 3z" />
                    <path d="M4.1 14.5L7 10l3 5" />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#3B2A20] uppercase mt-2">
                  EST. 1985
                </h3>
                <p className="text-[10px] sm:text-xs text-[#7A685D] mt-1 font-light leading-tight">
                  Premium Leather Heritage
                </p>
                <div className="w-7 h-[2px] bg-[#8B5E3C]/40 mx-auto mt-2.5 rounded-full" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;