import React, { useState } from "react";
import { Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GunSlingProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={`/product/${product.id}`}
        className="group relative bg-[#FFFDFC] border border-[#E5D8C8] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between block h-full"
      >
        {/* Top Image Container */}
        <div className="relative aspect-[4/3] w-full bg-[#F6F2EC] overflow-hidden cursor-pointer">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
          />

          {/* Small badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-[#3B2618]/90 backdrop-blur-md text-[#FAF8F5] text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-[#FAF8F5]/20 shadow-sm">
              {product.badge || "HANDCRAFTED"}
            </span>
          </div>

          {/* Wishlist Heart Icon */}
          <button
            onClick={handleWishlistClick}
            aria-label="Add to Wishlist"
            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-[#FAF8F5]/90 backdrop-blur-md border border-[#E5D8C8] flex items-center justify-center text-[#3B2618] hover:scale-110 active:scale-95 transition-all shadow-sm cursor-pointer"
          >
            <Heart
              size={16}
              className={`transition-colors ${
                isWishlisted
                  ? "fill-[#8B5A2B] text-[#8B5A2B]"
                  : "text-[#3B2618] hover:text-[#8B5A2B]"
              }`}
            />
          </button>
        </div>

        {/* Bottom Content Area */}
        <div className="p-5 flex flex-col flex-1 justify-between bg-[#FFFDFC]">
          <div>
            {/* Category Subtitle */}
            <div className="flex items-center justify-between text-[11px] font-medium tracking-widest text-[#8B5A2B] uppercase mb-1.5">
              <span>{product.category}</span>
            </div>

            {/* Product Name */}
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#3B2618] group-hover:text-[#8B5A2B] transition-colors leading-snug mb-2">
              {product.name}
            </h3>

            {/* Rating Stars */}
            <div className="flex items-center gap-1.5 mb-3">
              <div className="flex items-center gap-0.5 text-[#C79A63]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className="fill-[#C79A63] text-[#C79A63]"
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#3B2618]">
                {product.rating ? product.rating.toFixed(1) : "5.0"}
              </span>
              <span className="text-[11px] text-[#6B6258]">
                ({product.reviewCount || 45})
              </span>
            </div>
          </div>

          {/* Price Row */}
          <div className="pt-3 border-t border-[#E5D8C8]/60 flex items-center justify-between mt-2">
            <div className="flex items-baseline gap-2">
              <span className="text-lg sm:text-xl font-semibold text-[#3B2618]">
                ${product.price}
              </span>
            </div>
            
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#8B5A2B] group-hover:underline">
              View Details →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default GunSlingProductCard;
