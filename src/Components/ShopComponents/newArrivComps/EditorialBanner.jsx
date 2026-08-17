import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../../../assets/Images/pexels-anntarazevich-5963055.jpg";

const EditorialBanner = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] border-t border-[#E5D8C8]">
      <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16">
        <div className="bg-[#FFFDFC] border border-[#E5D8C8] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_4px_24px_-6px_rgba(59,38,24,0.04)] grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <span className="uppercase tracking-[0.25em] text-[#8B5E3C] text-xs font-semibold block mb-3">
              HANDMADE CRAFTSMANSHIP
            </span>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl text-[#3B2618] leading-[1.1] font-normal"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Crafted For
              <br />
              Every Journey.
            </h2>

            <p className="mt-5 text-[#6B6258] text-sm sm:text-base leading-relaxed font-light max-w-lg">
              Every Ridgeline piece is handcrafted using premium full-grain
              leather, combining heritage technique with modern functionality.
              Designed to age beautifully and accompany every adventure.
            </p>

            <div className="mt-8">
              <Link
                to="/craftsmanship"
                className="group relative inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#3B2618] py-1 transition-colors hover:text-[#8B5E3C]"
              >
                <span>Explore Our Craftsmanship</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#3B2618] origin-left scale-x-75 group-hover:scale-x-100 group-hover:bg-[#8B5E3C] transition-all duration-300 ease-out" />
              </Link>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-[#FAF8F5]">
            <img
              src={bannerImage}
              alt="Handcrafted Leather Workshop"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default EditorialBanner;