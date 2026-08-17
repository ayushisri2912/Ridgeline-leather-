import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { relatedProductsPDP } from "../../Data/productsData";

const RelatedProductsSection = () => {
  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 px-6 lg:px-12 xl:px-16 border-t border-[#E8DED4]">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#8B5A2B] mb-3 block">
            COMPLEMENTARY GEAR
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#3B2618] tracking-tight mb-4">
            You May Also Like
          </h2>
          <p className="text-[#6B6258] text-base sm:text-lg font-normal leading-relaxed">
            Discover handcrafted accessories and luggage designed to pair effortlessly with your expedition setup.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {relatedProductsPDP.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/product/${item.id}`}
                className="group bg-[#FFFDFC] border border-[#E8DED4] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between block h-full"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full bg-[#F6F2EC] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-[#3B2618]/90 backdrop-blur-md text-[#FAF8F5] text-[9px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-[#FAF8F5]/20 shadow-sm">
                        {item.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-5 flex flex-col justify-between flex-1 bg-[#FFFDFC]">
                  <div>
                    <span className="text-[10px] font-semibold tracking-widest text-[#8B5A2B] uppercase block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl font-normal text-[#3B2618] group-hover:text-[#8B5A2B] transition-colors leading-snug mb-2">
                      {item.name}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-[#E8DED4]/60 flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1">
                      <Star size={13} className="fill-[#C79A63] text-[#C79A63]" />
                      <span className="text-xs font-semibold text-[#3B2618]">
                        {item.rating}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-semibold text-[#3B2618]">
                        ${item.price}
                      </span>
                      {item.oldPrice && (
                        <span className="text-xs text-[#6B6258] line-through">
                          ${item.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <Link
            to="/shop/all-products"
            className="group inline-flex items-center gap-3 bg-[#3B2618] hover:bg-[#8B5A2B] text-[#FAF8F5] px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-md transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore All Leather Goods</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default RelatedProductsSection;
