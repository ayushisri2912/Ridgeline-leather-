import React from "react";
import { Heart, Star, ShoppingBag } from "lucide-react";

const BestSellerCard = ({ product }) => {
  return (
    <div className="group">

      {/* Image Section */}
      <div className="relative overflow-hidden rounded-2xl bg-[#F6F2EC]">

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 z-20 bg-[#3B2618] text-white text-[10px] uppercase tracking-[0.18em] px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-[#3B2618] hover:text-white transition">
          <Heart size={18} />
        </button>

        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center pb-8">

          <button className="flex items-center gap-2 bg-white text-[#3B2618] px-6 py-3 rounded-full font-medium hover:bg-[#3B2618] hover:text-white transition">

            <ShoppingBag size={18} />

            Quick Add

          </button>

        </div>

      </div>

      {/* Content */}

      <div className="mt-6">

        <p className="uppercase tracking-[0.18em] text-xs text-[#8B5A2B]">
          {product.category}
        </p>

        <h3
          className="text-[30px] text-[#3B2618] mt-2"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {product.name}
        </h3>

        {/* Rating */}

        <div className="flex items-center gap-1 mt-3">

          {[1,2,3,4,5].map((star) => (
            <Star
              key={star}
              size={15}
              fill="#C79A63"
              color="#C79A63"
            />
          ))}

          <span className="text-sm text-[#6B6258] ml-2">
            ({product.rating})
          </span>

        </div>

        {/* Price */}

        <div className="flex items-center gap-3 mt-4">

          <span className="text-xl font-semibold text-[#3B2618]">
            ${product.price}
          </span>

          <span className="line-through text-[#999]">
            ${product.oldPrice}
          </span>

        </div>

        {/* Colors */}

        <div className="flex gap-2 mt-5">

          {product.colors.map((color, index) => (
            <span
              key={index}
              className="w-5 h-5 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            ></span>
          ))}

        </div>

      </div>

    </div>
  );
};

export default BestSellerCard;