import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useToast } from "../../../Context/ToastContext";

const ProductCard = ({ product, viewMode = "grid" }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { showToast } = useToast();

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const nextState = !isWishlisted;
    setIsWishlisted(nextState);
    showToast(
      nextState
        ? `Added ${product.name} to your Wishlist.`
        : `Removed ${product.name} from your Wishlist.`,
      "wishlist",
      nextState ? "Saved to Wishlist" : "Wishlist Updated"
    );
  };

  if (viewMode === "list") {
    return (
      <Link
        to={`/product/${product.id}`}
        className="group bg-[#F5F0EA] border border-[#E8DFD3] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row p-4 gap-5 items-center block cursor-pointer"
      >
        {/* Image */}
        <div className="relative w-full sm:w-48 h-48 rounded-xl overflow-hidden shrink-0 bg-[#E8DFD3]/40">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.badge && (
            <span
              className={`absolute top-3 left-3 text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full text-white ${
                product.badgeType === "tan" ? "bg-[#8B5E3C]" : "bg-[#3A2A22]"
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between h-full w-full">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[#8B5E3C] font-semibold">
                {product.category}
              </span>
              <button
                onClick={handleWishlistClick}
                className="text-[#3B2618] hover:text-[#8B5E3C] transition p-1 cursor-pointer"
                aria-label="Wishlist"
              >
                {isWishlisted ? (
                  <FaHeart size={18} className="text-[#8B5E3C]" />
                ) : (
                  <FiHeart size={18} />
                )}
              </button>
            </div>

            <h3 className="text-lg font-bold text-[#2B1D14] mt-1 group-hover:text-[#8B4513] transition-colors">
              {product.name}
            </h3>

            <p className="text-xs text-[#5C5147] mt-2 line-clamp-2 font-light">
              Handcrafted with full-grain leather, built for extreme durability and timeless style.
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-[#6C5E55]">
                ${product.price}.00
              </span>
            </div>
            
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#8B5A2B] group-hover:underline">
              View Details →
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-[#F5F0EA] border border-[#E8DFD3] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between block cursor-pointer h-full"
    >
      {/* Top Image Section */}
      <div className="relative w-full h-[210px] sm:h-[230px] overflow-hidden bg-[#E8DFD3]/40">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Left Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full text-white shadow-sm ${
              product.badgeType === "tan" ? "bg-[#8B5E3C]" : "bg-[#3A2A22]"
            }`}
          >
            {product.badge}
          </span>
        )}

        {/* Top Right Heart Wishlist Icon */}
        <button
          onClick={handleWishlistClick}
          className="absolute top-3 right-3 text-[#3B2618] hover:text-[#8B5E3C] hover:scale-110 transition p-1.5 rounded-full bg-white/40 hover:bg-white/90 backdrop-blur-sm shadow-sm cursor-pointer"
          aria-label="Wishlist"
        >
          {isWishlisted ? (
            <FaHeart size={15} className="text-[#8B5A2B]" />
          ) : (
            <FiHeart size={15} />
          )}
        </button>
      </div>

      {/* Card Footer Section */}
      <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xs sm:text-sm font-semibold text-[#2B1D14] group-hover:text-[#8B5A2B] transition-colors line-clamp-1">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#E8DFD3]/60">
          <p className="text-xs font-bold text-[#6C5E55]">
            ${product.price}.00
          </p>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#8B5A2B] group-hover:underline">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;