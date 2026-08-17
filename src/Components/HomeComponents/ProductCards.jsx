import React from "react";
import { FiArrowRight } from "react-icons/fi";

const ProductCard = ({ product, featured = false }) => {
  return (
    <div className="group bg-[#F8F5F0] rounded-2xl overflow-hidden border border-[#E4D8C8] hover:shadow-xl transition-all duration-500">

      {/* Product Image */}
      <div className="relative overflow-hidden">

        {/* Badge */}
        <span className="absolute top-4 left-4 z-10 bg-[#3B2618] text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full">
          {product.badge}
        </span>

        <img
          src={product.image}
          alt={product.title}
        //   className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
        className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
  featured ? "h-[620px]" : "h-[280px]"
}`}
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <p className="text-xs uppercase tracking-[0.25em] text-[#8B5E3C]">
          {product.category}
        </p>

        <h3
          className="mt-3 text-3xl text-[#3B2618]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {product.title}
        </h3>

        <p className="mt-4 text-lg font-medium text-[#3B2618]">
          {product.price}
        </p>

        <button className="mt-6 flex items-center gap-2 text-[#8B4513] uppercase tracking-[0.15em] text-sm hover:gap-4 transition-all duration-300">
          Discover
          <FiArrowRight />
        </button>

      </div>
    </div>
  );
};

export default ProductCard;