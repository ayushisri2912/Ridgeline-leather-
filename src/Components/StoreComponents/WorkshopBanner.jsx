import React from "react";
import workshopImg from "../../assets/Images/workshop_banner.jpg";
import { FiCalendar, FiArrowRight } from "react-icons/fi";

const WorkshopBanner = ({ onBookVisit }) => {
  return (
    <section className="w-full bg-[#FAF8F5] py-12 md:py-20 px-4 sm:px-6 lg:px-12 xl:px-16">
      <div className="max-w-[1500px] mx-auto">
        {/* Full-width Lifestyle Card Container */}
        <div className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#E7DED2] bg-[#3B2618] text-[#FAF8F5] shadow-lg group">
          
          {/* Background Lifestyle Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={workshopImg}
              alt="Master Leather Craftsmanship Workshop"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out opacity-40 mix-blend-luminosity"
            />
            {/* Rich Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B2618] via-[#3B2618]/90 to-transparent"></div>
          </div>

          {/* Content Layer */}
          <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-20 max-w-2xl">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5]/10 border border-[#FAF8F5]/20 backdrop-blur-md mb-6">
              <FiCalendar size={13} className="text-[#C79A63]" />
              <span
                className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#E7DED2]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Craftsmanship & Consultation
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAF8F5] leading-[1.1] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Experience the Art of Handcrafted Leather
            </h2>

            {/* Message */}
            <p className="text-sm sm:text-base md:text-lg text-[#E7DED2] font-normal leading-relaxed mb-8">
              Every Ridgeline creation begins with full-grain vegetable-tanned hides, hand-cut and saddle-stitched by master artisans. Reserve a private appointment to explore bespoke customization, tour our workshop, or consult on your next heirlooms.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onBookVisit}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FAF8F5] text-[#3B2618] text-xs font-semibold uppercase tracking-[0.2em] rounded-full hover:bg-[#C79A63] hover:text-[#FAF8F5] transition-all duration-300 shadow-md cursor-pointer"
              >
                <span>Book a Visit</span>
                <FiArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <span className="text-xs text-[#C79A63] font-medium tracking-wide">
                • Complimentary Monogramming Included
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopBanner;
