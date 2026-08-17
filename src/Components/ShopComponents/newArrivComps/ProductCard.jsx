import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product, viewMode = "grid" }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (viewMode === "list") {
    return (
      <div className="group bg-[#FFFDFC] border border-[#E5D8C8] rounded-2xl overflow-hidden hover:shadow-[0_16px_36px_-8px_rgba(59,38,24,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row p-4 sm:p-5 gap-6 items-center">
        
        {/* Image ratio container */}
        <div className="relative w-full sm:w-56 aspect-[4/5] rounded-xl overflow-hidden shrink-0 bg-[#FAF8F5]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {product.badge && (
            <span
              className={`absolute top-3 left-3 text-[9px] font-medium uppercase tracking-[0.2em] px-2.5 py-1 rounded-full text-white shadow-xs ${
                product.badgeType === "tan" ? "bg-[#8B5E3C]" : "bg-[#3B2618]"
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between h-full w-full py-1">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#8B5E3C] font-semibold">
                {product.category}
              </span>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="text-[#3B2618] hover:text-[#8B5E3C] transition-transform p-1.5 rounded-full bg-[#FAF8F5] border border-[#E5D8C8] hover:scale-110"
                aria-label="Wishlist"
              >
                {isWishlisted ? (
                  <FaHeart size={15} className="text-[#8B5E3C]" />
                ) : (
                  <FiHeart size={15} className="text-[#3B2618]" />
                )}
              </button>
            </div>

            <h3
              className="text-xl sm:text-2xl font-normal text-[#3B2618] mt-2 group-hover:text-[#8B5E3C] transition-colors"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {product.name}
            </h3>

            <p className="text-xs sm:text-sm text-[#6B6258] mt-2.5 line-clamp-2 font-light leading-relaxed">
              Handcrafted from full-grain leather, combining timeless craftsmanship with rugged heritage.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E5D8C8]/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-base sm:text-lg font-semibold text-[#3B2618]">
                ${product.price}.00
              </span>
              {product.oldPrice && (
                <span className="line-through text-xs text-[#9E9388]">
                  ${product.oldPrice}.00
                </span>
              )}
            </div>

            {/* Color Swatches */}
            {product.colors && (
              <div className="flex items-center gap-1.5">
                {product.colors.map((hex, idx) => (
                  <span
                    key={idx}
                    className="w-3.5 h-3.5 rounded-full border border-[#E5D8C8] shadow-xs"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    );
  }

  return (
    <div className="group bg-[#FFFDFC] border border-[#E5D8C8] rounded-2xl overflow-hidden hover:shadow-[0_16px_36px_-8px_rgba(59,38,24,0.08)] hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between h-full">
      
      {/* Top Image Container - Aspect 4:5 Premium Luxury Ratio */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#FAF8F5]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Top Left Badge */}
        {product.badge && (
          <span
            className={`absolute top-3.5 left-3.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.2em] px-3 py-1 rounded-full text-white shadow-xs backdrop-blur-xs ${
              product.badgeType === "tan" ? "bg-[#8B5E3C]" : "bg-[#3B2618]"
            }`}
          >
            {product.badge}
          </span>
        )}

        {/* Top Right Wishlist */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3.5 right-3.5 text-[#3B2618] hover:text-[#8B5E3C] hover:scale-110 transition-all duration-200 p-2 rounded-full bg-[#FFFDFC]/80 backdrop-blur-md border border-[#E5D8C8]/60 shadow-xs"
          aria-label="Wishlist"
        >
          {isWishlisted ? (
            <FaHeart size={14} className="text-[#8B5E3C]" />
          ) : (
            <FiHeart size={14} />
          )}
        </button>
      </div>

      {/* Card Info Section */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
        <div>
          {/* Category */}
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#8B5E3C] font-semibold block mb-1">
            {product.category}
          </span>

          {/* Title */}
          <h3
            className="text-lg sm:text-xl font-normal text-[#3B2618] group-hover:text-[#8B5E3C] transition-colors leading-snug line-clamp-1"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {product.name}
          </h3>
        </div>

        {/* Price & Colors Aligned */}
        <div className="mt-4 pt-3 border-t border-[#E5D8C8]/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base font-semibold text-[#3B2618]">
              ${product.price}.00
            </span>
            {product.oldPrice && (
              <span className="line-through text-xs text-[#9E9388]">
                ${product.oldPrice}.00
              </span>
            )}
          </div>

          {/* Color Swatch Dots */}
          {product.colors && (
            <div className="flex items-center gap-1.5">
              {product.colors.map((hex, idx) => (
                <span
                  key={idx}
                  className="w-3 h-3 rounded-full border border-[#E5D8C8] shadow-xs inline-block"
                  style={{ backgroundColor: hex }}
                />
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

export default ProductCard;
