import React from "react";
import { Heart, Sparkles } from "lucide-react";

const WishlistHero = ({ itemCount = 4 }) => {
  return (
    <section className="relative bg-[#3B2618] text-[#F5F1E8] py-14 sm:py-18 lg:py-20 overflow-hidden border-b border-[#5A3D2A]">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4E3423]/50 via-[#3B2618] to-[#2A1B11] pointer-events-none -z-0" />
      <div className="absolute top-0 right-1/4 w-[450px] h-[220px] bg-[#C79A63]/10 blur-[100px] pointer-events-none -z-0" />

      <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10 text-center">
        {/* Top Tagline */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-10 h-[1px] bg-[#C79A63]" />
          <span
            className="uppercase text-[11px] sm:text-xs tracking-[0.35em] text-[#C79A63] font-semibold flex items-center gap-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <Sparkles size={13} className="text-[#C79A63]" />
            <span>Personal Collection</span>
          </span>
          <span className="w-10 h-[1px] bg-[#C79A63]" />
        </div>

        {/* Large Heading */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl text-[#F5F1E8] font-normal leading-tight tracking-tight mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Your Saved Wishlist
        </h1>

        {/* Description */}
        <p className="text-[#D8CFC4] text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed mb-6">
          Handcrafted full-grain leather goods curated for your upcoming expeditions and everyday journeys.
        </p>

        {/* Saved Items Count Badge */}
        <div className="inline-flex items-center gap-2 bg-[#2B1B10]/80 border border-[#C79A63]/40 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-[#C79A63] shadow-inner">
          <Heart size={14} className="fill-[#C79A63] text-[#C79A63]" />
          <span>{itemCount} {itemCount === 1 ? "Saved Item" : "Saved Items"}</span>
        </div>
      </div>
    </section>
  );
};

export default WishlistHero;
