import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import defaultHeroImg from "../../assets/Images/luxury_leather_hero.jpg";

const OffsetHero = ({
  onExploreClick,
  label = "RIDGELINE LEATHER",
  title = "Heritage Leather Travel Bags",
  description = "Handcrafted from full-grain vegetable-tanned bridle leather, engineered for timeless journeys and effortless elegance.",
  heroImage,
}) => {
  const activeImage = heroImage || defaultHeroImg;

  return (
    <section className="w-full bg-[#FAF8F5] pt-8 pb-16 lg:pt-12 lg:pb-24 px-6 lg:px-12 xl:px-16 border-b border-[#E5D8C8]/60">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center relative">
          
          {/* LEFT SIDE (65%) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[65%] shrink-0"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-[#E5D8C8] shadow-sm bg-[#F6F2EC] aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] group">
              <img
                src={activeImage}
                alt={title}
                className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3B2618]/30 via-transparent to-transparent opacity-40" />
            </div>
          </motion.div>

          {/* RIGHT SIDE (35%) — FLOATING OVERLAPPING CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[42%] lg:-ml-24 mt-6 lg:mt-0 z-20"
          >
            <div className="bg-[#FFFDFC] border border-[#E5D8C8] rounded-[28px] p-8 sm:p-10 lg:p-12 shadow-xl backdrop-blur-md">
              <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#8B5A2B] mb-4">
                {label}
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.1] font-normal text-[#3B2618] tracking-tight mb-5">
                {title}
              </h1>

              <p className="text-[#6B6258] text-base sm:text-lg font-normal leading-relaxed mb-8">
                {description}
              </p>

              <button
                onClick={onExploreClick}
                className="group inline-flex items-center gap-3 bg-[#3B2618] text-[#FAF8F5] px-8 py-4 rounded-full text-xs font-medium uppercase tracking-[0.2em] hover:bg-[#8B5A2B] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Collection</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OffsetHero;
