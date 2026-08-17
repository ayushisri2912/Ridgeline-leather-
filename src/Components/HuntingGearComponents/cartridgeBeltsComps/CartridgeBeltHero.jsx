import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "../../../assets/Images/cartridge_belt_hero.jpg";

const CartridgeBeltHero = ({ onExploreClick }) => {
  return (
    <section className="w-full bg-[#FAF8F5] pt-8 pb-16 lg:pt-12 lg:pb-24 px-6 lg:px-12 xl:px-16 border-b border-[#E5D8C8]/60">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start pr-0 lg:pr-8"
          >
            <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#8B5A2B] mb-4 sm:mb-6">
              RIDGELINE HUNTING COLLECTION
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] font-normal text-[#3B2618] tracking-tight mb-6 sm:mb-8">
              Premium Leather <br className="hidden sm:block" />
              <span className="italic font-light">Cartridge Belts</span>
            </h1>

            <p className="text-[#6B6258] text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-[580px] mb-8 sm:mb-10">
              Designed for hunters who value comfort, durability, and timeless craftsmanship. Every cartridge belt is handcrafted from full-grain leather to provide secure performance and refined style.
            </p>

            <button
              onClick={onExploreClick}
              className="group inline-flex items-center gap-3 bg-[#3B2618] text-[#FAF8F5] px-8 py-4 rounded-full text-xs font-medium uppercase tracking-[0.2em] hover:bg-[#8B5A2B] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Collection</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex items-center justify-center"
          >
            <div className="relative w-full bg-[#F6F2EC] p-4 sm:p-6 md:p-8 rounded-[32px] border border-[#E5D8C8] shadow-sm overflow-hidden group">
              <div className="relative overflow-hidden rounded-[24px] aspect-[4/3] w-full">
                <img
                  src={heroImg}
                  alt="Handcrafted Luxury Leather Cartridge Belt"
                  className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2618]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Heritage watermark badge */}
              <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 bg-[#FAF8F5]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#E5D8C8] shadow-sm hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8B5A2B]" />
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#3B2618]">
                  Full-Grain Harness Leather • Solid Brass
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CartridgeBeltHero;
