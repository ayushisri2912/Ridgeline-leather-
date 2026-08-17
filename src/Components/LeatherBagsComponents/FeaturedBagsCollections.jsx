import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredBagsCollections } from "../../Data/productsData";

const FeaturedBagsCollections = () => {
  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 px-6 lg:px-12 xl:px-16 border-b border-[#E5D8C8]/60">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Centered Heading */}
        <div className="text-center max-w-[700px] mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#8B5A2B] mb-3 block">
            CURATED SELECTION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#3B2618] tracking-tight mb-4">
            Featured Collections
          </h2>
          <p className="text-[#6B6258] text-base sm:text-lg font-normal leading-relaxed">
            Tailored for weekend expeditions, business travel, and everyday elegance.
          </p>
        </div>

        {/* 3 Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBagsCollections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative bg-[#FFFDFC] border border-[#E5D8C8] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Large Image */}
              <div className="relative aspect-[4/3] w-full bg-[#F6F2EC] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2618]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 bg-[#FFFDFC]">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-2xl font-normal text-[#3B2618] group-hover:text-[#8B5A2B] transition-colors">
                      {item.title}
                    </h3>
                    <div className="w-9 h-9 rounded-full bg-[#F6F2EC] group-hover:bg-[#3B2618] group-hover:text-[#FAF8F5] text-[#3B2618] flex items-center justify-center transition-all duration-300 shrink-0">
                      <ArrowUpRight size={18} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6B6258] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#E5D8C8]/60 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8B5A2B] group-hover:underline">
                    Explore Series
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedBagsCollections;
