import React from "react";
import heroImg from "../../assets/Images/showroom_hero.jpg";
import { FiMapPin, FiArrowDown } from "react-icons/fi";

const HeroSection = ({ onExploreClick }) => {
  return (
    <section className="w-full bg-[#FAF8F5] pt-10 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 lg:px-12 xl:px-16">
      <div className="max-w-[1500px] mx-auto">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-16">
          {/* Small Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECE1] border border-[#E7DED2] mb-5">
            <FiMapPin size={13} className="text-[#8B5A2B]" />
            <span
              className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8B5A2B]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Store Locator
            </span>
          </div>

          {/* Large Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#3B2618] tracking-tight leading-[1.08] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Visit Ridgeline Leather
          </h1>

          {/* Short Description */}
          <p className="text-base sm:text-lg text-[#6B5647] font-normal leading-relaxed max-w-2xl mb-8">
            Step into our luxury showrooms to experience full-grain leather craftsmanship, consult with master artisans, and explore exclusive in-store collections tailored for a lifetime of journey.
          </p>

          {/* CTA Button */}
          <button
            onClick={onExploreClick}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#3B2618] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] rounded-full hover:bg-[#8B5A2B] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore Showrooms</span>
            <FiArrowDown size={15} className="group-hover:translate-y-1 transition-transform duration-300 text-[#E7DED2]" />
          </button>
        </div>

        {/* Large Premium Showroom Image Container */}
        <div className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#E7DED2] bg-[#FFFDFC] shadow-sm group">
          <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden relative">
            <img
              src={heroImg}
              alt="Ridgeline Leather Luxury Flagship Showroom Interior"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            {/* Subtle Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3B2618]/40 via-transparent to-transparent opacity-80 pointer-events-none"></div>
          </div>

          {/* Floating Aesthetic Badge */}
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 bg-[#FFFDFC]/95 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-[#E7DED2] shadow-md hidden sm:flex items-center gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-[#8B5A2B] animate-pulse"></div>
            <div>
              <p
                className="text-xs uppercase tracking-[0.18em] font-bold text-[#3B2618]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Austin Flagship Atelier
              </p>
              <p className="text-[11px] text-[#8B5A2B] font-medium">
                1100 S Congress Ave • Monogramming Studio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
