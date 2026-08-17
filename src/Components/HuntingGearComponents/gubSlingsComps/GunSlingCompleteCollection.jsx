import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { gunSlingCollectionItems } from "../../../Data/productsData";

const GunSlingCompleteCollection = ({ onQuickAdd }) => {
  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 px-6 lg:px-12 xl:px-16 border-t border-[#E5D8C8]/60">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Centered Heading */}
        <div className="text-center max-w-[700px] mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#8B5A2B] mb-3 block">
            HUNTING ESSENTIALS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#3B2618] tracking-tight mb-4">
            Complete Your Hunting Collection
          </h2>
          <p className="text-[#6B6258] text-base sm:text-lg font-normal leading-relaxed">
            Pair your gun sling with matching full-grain leather equipment designed for a lifetime in the field.
          </p>
        </div>

        {/* 3 Related Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {gunSlingCollectionItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-[#FFFDFC] border border-[#E5D8C8] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] w-full bg-[#F6F2EC] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#3B2618]/90 backdrop-blur-md text-[#FAF8F5] text-[9px] font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-[#FAF8F5]/20">
                    {item.badge}
                  </span>
                </div>

                {/* Quick Add Overlay */}
                <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <button
                    onClick={() => onQuickAdd && onQuickAdd(item)}
                    className="w-full py-2.5 bg-[#3B2618] hover:bg-[#8B5A2B] text-[#FAF8F5] rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                  >
                    <ShoppingBag size={14} />
                    <span>Quick Add • ${item.price}</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-semibold tracking-widest text-[#8B5A2B] uppercase block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-[#3B2618] group-hover:text-[#8B5A2B] transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#6B6258] line-clamp-2 mb-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5D8C8]/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Star size={13} className="fill-[#C79A63] text-[#C79A63]" />
                    <span className="text-xs font-semibold text-[#3B2618]">
                      {item.rating}
                    </span>
                  </div>
                  <span className="text-base font-semibold text-[#3B2618]">
                    ${item.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Hunting Gear CTA Button */}
        <div className="flex justify-center">
          <Link
            to="/shop/all-products"
            className="group inline-flex items-center gap-3 bg-transparent text-[#3B2618] border-2 border-[#3B2618] hover:bg-[#3B2618] hover:text-[#FAF8F5] px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer shadow-sm"
          >
            <span>View All Hunting Gear</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default GunSlingCompleteCollection;
