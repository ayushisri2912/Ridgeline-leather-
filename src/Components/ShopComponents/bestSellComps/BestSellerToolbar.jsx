import React from "react";
import { SlidersHorizontal } from "lucide-react";

const BestSellerToolbar = () => {
  return (
    <section className="bg-[#FAF8F5] py-8">
      <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16">

        <div className="bg-[#FFFDFC] border border-[#E5D8C8] rounded-2xl px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Left */}

          <div>
            <p className="text-[#6B6258] text-sm uppercase tracking-[0.15em]">
              Curated Collection
            </p>

            <h3
              className="text-[#3B2618] text-2xl mt-1"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Showing 12 Best Sellers
            </h3>
          </div>

          {/* Right */}

          <div className="flex items-center gap-5">

            <button className="flex items-center gap-2 border border-[#DCCFBC] rounded-full px-5 py-3 hover:bg-[#F6F2EC] transition">
              <SlidersHorizontal size={18} />
              Filters
            </button>

            <select className="border border-[#DCCFBC] rounded-full px-5 py-3 bg-white outline-none text-[#3B2618]">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BestSellerToolbar;