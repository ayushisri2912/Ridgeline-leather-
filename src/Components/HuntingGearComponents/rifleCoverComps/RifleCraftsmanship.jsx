import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Hammer } from "lucide-react";
import craftImg from "../../../assets/Images/craftsmanship_detail.jpg";

const RifleCraftsmanship = () => {
  const stats = [
    {
      icon: ShieldCheck,
      title: "100% Full Grain Leather",
      desc: "Sourced exclusively from premium tanneries, retaining natural strength and developing rich patina.",
    },
    {
      icon: Hammer,
      title: "Handcrafted",
      desc: "Saddle-stitched by hand with waxed thread for unyielding tensile strength in rugged conditions.",
    },
    {
      icon: Award,
      title: "Lifetime Quality",
      desc: "Guaranteed against manufacturing defects. Engineered for generations of continuous field service.",
    },
  ];

  return (
    <section className="w-full bg-[#F6F2EC] py-16 sm:py-20 lg:py-28 px-6 lg:px-12 xl:px-16 my-12 border-y border-[#E5D8C8]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Close-up leather craftsmanship image */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-[#E5D8C8] shadow-lg group">
              <img
                src={craftImg}
                alt="Artisan Leather Craftsmanship Close Up"
                className="w-full aspect-[4/3] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B2618]/30 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-[#FAF8F5]/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#E5D8C8] shadow-sm">
                <p className="font-serif italic text-[#3B2618] text-sm sm:text-base leading-snug">
                  "True luxury is measured in decades of service, not seasons of style."
                </p>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#8B5A2B] mt-2 block">
                  — Ridgeline Master Leathercrafter
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Editorial Content & 3 Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-start pl-0 lg:pl-4"
          >
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#8B5A2B] mb-4">
              ARTISAN HERITAGE
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#3B2618] leading-[1.12] mb-6 tracking-tight">
              Crafted For Every Expedition
            </h2>

            <p className="text-[#6B6258] text-base sm:text-lg font-normal leading-relaxed mb-8 sm:mb-10">
              Each rifle cover undergoes over 30 precision hand steps—from hide selection and oil tanning to brass hardware setting and edge beveling. Designed to absorb field impacts while shielding your rifle against harsh weather elements.
            </p>

            {/* Three small statistics / feature pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-6 border-t border-[#E5D8C8]">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div key={idx} className="flex flex-col items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E5D8C8] flex items-center justify-center text-[#8B5A2B] mb-3 shadow-xs">
                      <IconComponent size={20} />
                    </div>
                    <h4 className="font-serif text-lg font-normal text-[#3B2618] leading-tight mb-1.5">
                      {stat.title}
                    </h4>
                    <p className="text-xs text-[#6B6258] leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default RifleCraftsmanship;
