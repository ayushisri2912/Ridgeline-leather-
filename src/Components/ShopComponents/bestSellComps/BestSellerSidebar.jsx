import React from "react";
import { ChevronDown } from "lucide-react";

const BestSellerSidebar = () => {
  return (
    <aside className="sticky top-28 h-fit bg-[#FFFDFC] border border-[#E5D8C8] rounded-2xl p-6 shadow-sm">

      {/* Heading */}

      <h2
        className="text-2xl text-[#3B2618] mb-8"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Refine Selection
      </h2>

      {/* Category */}

      <div className="pb-6 border-b border-[#E5D8C8]">

        <button className="flex items-center justify-between w-full">

          <span className="uppercase tracking-[0.18em] text-xs font-semibold text-[#3B2618]">
            Categories
          </span>

          <ChevronDown size={18} />

        </button>

        <div className="mt-5 space-y-3">

          <label className="flex items-center gap-3">
            <input type="checkbox" />
            <span>Travel Bags</span>
          </label>

          <label className="flex items-center gap-3">
            <input type="checkbox" />
            <span>Messenger Bags</span>
          </label>

          <label className="flex items-center gap-3">
            <input type="checkbox" />
            <span>Wallets</span>
          </label>

          <label className="flex items-center gap-3">
            <input type="checkbox" />
            <span>Accessories</span>
          </label>

        </div>

      </div>

      {/* Price */}

      <div className="py-6 border-b border-[#E5D8C8]">

        <button className="flex items-center justify-between w-full">

          <span className="uppercase tracking-[0.18em] text-xs font-semibold text-[#3B2618]">
            Price
          </span>

          <ChevronDown size={18} />

        </button>

        <div className="mt-5 space-y-3">

          <label className="flex items-center gap-3">
            <input type="radio" name="price" />
            Under $100
          </label>

          <label className="flex items-center gap-3">
            <input type="radio" name="price" />
            $100 - $250
          </label>

          <label className="flex items-center gap-3">
            <input type="radio" name="price" />
            Above $250
          </label>

        </div>

      </div>

      {/* Leather Colors */}

      <div className="py-6 border-b border-[#E5D8C8]">

        <h3 className="uppercase tracking-[0.18em] text-xs font-semibold text-[#3B2618] mb-5">
          Leather Colors
        </h3>

        <div className="flex gap-3">

          <button className="w-8 h-8 rounded-full bg-[#3B2618] border"></button>

          <button className="w-8 h-8 rounded-full bg-[#8B5E3C] border"></button>

          <button className="w-8 h-8 rounded-full bg-[#C79A63] border"></button>

          <button className="w-8 h-8 rounded-full bg-[#1F1F1F] border"></button>

        </div>

      </div>

      {/* Rating */}

      <div className="py-6 border-b border-[#E5D8C8]">

        <h3 className="uppercase tracking-[0.18em] text-xs font-semibold text-[#3B2618] mb-5">
          Customer Rating
        </h3>

        <div className="space-y-3">

          <p>★★★★★</p>
          <p>★★★★☆ & Up</p>
          <p>★★★☆☆ & Up</p>

        </div>

      </div>

      {/* Best For */}

      <div className="pt-6">

        <h3 className="uppercase tracking-[0.18em] text-xs font-semibold text-[#3B2618] mb-5">
          Best For
        </h3>

        <div className="flex flex-wrap gap-2">

          <button className="px-4 py-2 rounded-full border border-[#DCCFBC] hover:bg-[#3B2618] hover:text-white transition">
            Travel
          </button>

          <button className="px-4 py-2 rounded-full border border-[#DCCFBC] hover:bg-[#3B2618] hover:text-white transition">
            Outdoor
          </button>

          <button className="px-4 py-2 rounded-full border border-[#DCCFBC] hover:bg-[#3B2618] hover:text-white transition">
            Work
          </button>

          <button className="px-4 py-2 rounded-full border border-[#DCCFBC] hover:bg-[#3B2618] hover:text-white transition">
            Everyday
          </button>

        </div>

      </div>

    </aside>
  );
};

export default BestSellerSidebar;