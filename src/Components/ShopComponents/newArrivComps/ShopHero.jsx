import React from "react";
import { Link } from "react-router-dom";

const ShopHero = () => {
  return (
    <section className="bg-[#FAF8F5] border-b border-[#E5D8C8]">
      <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16 py-10 sm:py-14 lg:py-16 text-center">

        {/* Small Uppercase Label */}
        <span className="block uppercase tracking-[0.25em] text-[11px] sm:text-xs text-[#8B5E3C] font-semibold mb-3">
          RIDGELINE COLLECTION
        </span>

        {/* Main Editorial Heading */}
        <h1
          className="text-4xl sm:text-5xl lg:text-[56px] text-[#3B2618] leading-[1.1] font-normal"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          New Arrivals
        </h1>

        {/* Muted Description with max 600px width */}
        <p className="max-w-[600px] mx-auto mt-4 text-[#6B6258] text-sm sm:text-base leading-relaxed font-light">
          Discover our newest handcrafted leather essentials, thoughtfully
          designed for modern explorers and timeless everyday journeys.
        </p>

        {/* Elegant Text CTA with Thin Underline Animation */}
        <div className="mt-8">
          <Link
            to="/shop"
            className="group relative inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-medium text-[#3B2618] py-1 transition-colors hover:text-[#8B5E3C]"
          >
            <span>Explore The Collection</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#3B2618] origin-left scale-x-75 group-hover:scale-x-100 group-hover:bg-[#8B5E3C] transition-all duration-300 ease-out" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ShopHero;