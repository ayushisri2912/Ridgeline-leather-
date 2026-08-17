import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCompass } from "react-icons/fi";

import video1 from "../../assets/videos/5963494-hd_1920_1080_25fps.mp4";
import video2 from "../../assets/videos/5963496-hd_1920_1080_25fps.mp4";
import video3 from "../../assets/videos/14727244_2560_1440_30fps.mp4";

const videoList = [video1, video2, video3];

const Craftsmanship = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  // Auto advance video smoothly when current clip ends
  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoList.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentVideoIndex]);

  return (
    <div className="w-full">
      {/* ------------------------------------------------------------- */}
      {/* TOP HEADER SECTION (Center aligned to match New Arrivals & homepage aesthetic) */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-[#FDFBF7] py-12 sm:py-16">
        <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16">
          {/* Top Section Separator Line */}
          <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-10 flex items-center justify-center opacity-70">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#8B4513]/40 to-transparent w-full" />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            {/* Section Subtitle Badge & Flanking Lines */}
            <div className="flex items-center justify-center gap-3.5 sm:gap-5 mb-4">
              <span className="w-14 sm:w-20 h-[1px] bg-[#8B4513]"></span>
              <span className="text-[#C79A63] text-xs">◆</span>
              <p
                className="uppercase text-[11px] sm:text-xs tracking-[0.45em] text-[#8B4513] font-semibold"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Craftsmanship
              </p>
              <span className="text-[#C79A63] text-xs">◆</span>
              <span className="w-14 sm:w-20 h-[1px] bg-[#8B4513]"></span>
            </div>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-[#3B2618] leading-tight font-normal mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Made To Endure. Built To Tell A Story.
            </h2>

            <p
              className="mt-3 text-[#5C5147] text-base sm:text-lg leading-relaxed font-light max-w-2xl mx-auto mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Every Ridgeline piece is thoughtfully crafted from full-grain leather,
              combining traditional artisan techniques with timeless design.
            </p>

            <div className="flex justify-center">
              <button
                className="inline-flex items-center gap-3 px-8 py-3.5 border-2 border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-all duration-300 rounded-xl font-semibold tracking-wider uppercase text-xs sm:text-sm shadow-sm hover:shadow-lg transform active:scale-95 cursor-pointer group"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <span>Discover Our Story</span>
                <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* FULL-WIDTH MOTION VIDEO BANNER WITH ELEGANT FLOATING CARD     */}
      {/* ------------------------------------------------------------- */}
      <section className="relative py-24 sm:py-32 lg:py-36 overflow-hidden bg-[#12100E]">
        
        {/* Top Decorative Wave Divider */}
        <div
          className="absolute left-0 right-0 top-0 w-full overflow-hidden pointer-events-none rotate-180 z-20"
          style={{ height: "50px" }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C360,0 1080,120 1440,40 L1440,120 L0,120 Z"
              fill="#FDFBF7"
            ></path>
          </svg>
        </div>

        {/* Crisp Clear Background Video Player */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            src={videoList[currentVideoIndex]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="w-full h-full object-cover transition-opacity duration-1000"
            style={{ filter: "brightness(0.92) contrast(1.05)" }}
          />
        </div>

        {/* Minimal Soft Vignette & Overlay (Clear and Bright) */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.35) 100%)",
          }}
        />

        {/* Elegant Floating Quote Card (Compact & Premium) */}
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/60 text-center relative overflow-hidden"
          >
            {/* Top Gold Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8B4513] to-transparent opacity-80" />

            {/* Quote Icon */}
            <div className="text-[#8B4513] text-4xl sm:text-5xl font-serif leading-none mb-2 select-none font-bold">
              “
            </div>

            {/* Quote Body */}
            <div>
              <p
                className="text-lg sm:text-xl lg:text-2xl text-[#2C1E14] leading-relaxed mb-6 font-normal italic"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                At Ridgeline, we take immense pride in handcrafting timeless leather products.
                Our commitment to traditional artistry, raw durability, and refined precision
                is what truly defines every piece we create.
              </p>

              {/* Citation Footer */}
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-12 h-0.5 bg-[#8B4513]/40" />
                <cite className="text-[#8B4513] text-xs not-italic uppercase tracking-[0.22em] font-semibold">
                  Ridgeline Master Craftsmen
                </cite>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Decorative Wave Divider */}
        <div
          className="absolute left-0 right-0 bottom-0 w-full overflow-hidden pointer-events-none z-20"
          style={{ height: "50px" }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C360,0 1080,120 1440,40 L1440,120 L0,120 Z"
              fill="#FFFFFF"
            ></path>
          </svg>
        </div>

      </section>
    </div>
  );
};

export default Craftsmanship;

