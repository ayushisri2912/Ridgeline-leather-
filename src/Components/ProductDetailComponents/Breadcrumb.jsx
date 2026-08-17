import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({ category = "Leather Travel Bags", productName = "The Explorer Full-Grain Weekender Duffel" }) => {
  return (
    <nav className="w-full bg-[#FAF8F5] pt-6 pb-4 px-6 lg:px-12 xl:px-16 border-b border-[#E8DED4]/60">
      <div className="max-w-[1600px] mx-auto flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8B5A2B]">
        <Link to="/" className="hover:text-[#3B2618] transition-colors">
          Home
        </Link>
        <ChevronRight size={12} className="text-[#E8DED4]" />
        
        <Link to="/shop/all-products" className="hover:text-[#3B2618] transition-colors">
          Shop
        </Link>
        <ChevronRight size={12} className="text-[#E8DED4]" />
        
        <span className="text-[#6B6258]">{category}</span>
        <ChevronRight size={12} className="text-[#E8DED4]" />
        
        <span className="text-[#3B2618] truncate max-w-[200px] sm:max-w-md font-bold">
          {productName}
        </span>
      </div>
    </nav>
  );
};

export default Breadcrumb;
