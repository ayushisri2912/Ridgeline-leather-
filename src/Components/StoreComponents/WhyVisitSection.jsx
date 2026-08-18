import React from "react";
import { WHY_VISIT_FEATURES } from "../../Data/storesData";
import { FiUserCheck, FiShield, FiPackage, FiAward } from "react-icons/fi";

const iconMap = {
  "personal-shopping": FiUserCheck,
  "leather-care": FiShield,
  "in-store-collections": FiPackage,
  "handcrafted-quality": FiAward
};

const WhyVisitSection = ({ onBookClick }) => {
  return (
    <section className="w-full bg-[#FAF8F5] py-20 md:py-28 px-4 sm:px-6 lg:px-12 xl:px-16 border-t border-[#E7DED2]">
      <div className="max-w-[1500px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span
            className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8B5A2B] mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            The In-Store Experience
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B2618] leading-tight mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Why Visit Ridgeline Leather
          </h2>
          <div className="w-12 h-[1px] bg-[#8B5A2B] mb-5"></div>
          <p className="text-sm sm:text-base text-[#6B5647] font-normal leading-relaxed">
            Our showrooms are designed as immersive havens for leather connoisseurs—where heritage craftsmanship meets personalized hospitality.
          </p>
        </div>

        {/* Four Minimal Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_VISIT_FEATURES.map((feature) => {
            const IconComponent = iconMap[feature.id] || FiAward;

            return (
              <div
                key={feature.id}
                className="group bg-[#FFFDFC] border border-[#E7DED2] rounded-[24px] sm:rounded-[28px] p-8 transition-all duration-300 hover:border-[#8B5A2B]/60 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="text-2xl font-bold text-[#D8C2A8] group-hover:text-[#8B5A2B] transition-colors"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {feature.number}
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E7DED2] flex items-center justify-center text-[#8B5A2B] group-hover:bg-[#3B2618] group-hover:text-[#FAF8F5] group-hover:border-[#3B2618] transition-all duration-300">
                      <IconComponent size={22} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold text-[#3B2618] leading-snug mb-2 group-hover:text-[#8B5A2B] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {feature.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs uppercase tracking-[0.14em] font-semibold text-[#8B5A2B] mb-4">
                    {feature.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#6B5647] leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Subtle Bar */}
                <div className="mt-8 pt-4 border-t border-[#E7DED2]/50 flex items-center justify-between text-[11px] text-[#8B5A2B] font-medium">
                  <span>Complimentary Service</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Experience Bottom Note / CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#3B2618] hover:text-[#8B5A2B] transition-colors border-b border-[#3B2618] hover:border-[#8B5A2B] pb-1 cursor-pointer"
          >
            <span>Schedule a Personal Consultation</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyVisitSection;
