import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import bannerImg from "../../assets/Images/baggs.jpg";

const LifestyleBanner = () => {
  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 px-6 lg:px-12 xl:px-16 border-t border-[#E5D8C8]/60">
      <div className="max-w-[1600px] mx-auto">
        <div className="relative overflow-hidden rounded-[32px] border border-[#E5D8C8] shadow-lg group bg-[#3B2618]">
          
          {/* Background Image */}
          <img
            src={bannerImg}
            alt="Crafted for Every Journey Lifestyle Banner"
            className="w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] object-cover object-center transform transition-transform duration-1000 group-hover:scale-105 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B2618]/90 via-[#3B2618]/60 to-transparent" />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center p-8 sm:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl text-[#FAF8F5] flex flex-col items-start"
            >
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C79A63] mb-4">
                RIDGELINE LEATHER
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.12] mb-6 tracking-tight">
                Crafted for Every Journey
              </h2>

              <p className="text-[#FAF8F5]/85 text-base sm:text-lg font-normal leading-relaxed mb-8">
                Discover timeless leather craftsmanship designed to travel beautifully through every chapter of life.
              </p>

              <button className="group inline-flex items-center gap-3 bg-[#FAF8F5] text-[#3B2618] px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#8B5A2B] hover:text-[#FAF8F5] transition-all duration-300 shadow-md cursor-pointer">
                <span>Discover More</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LifestyleBanner;
