import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Award } from "lucide-react";
import craftImg from "../../../assets/Images/belt_craftsmanship_detail.jpg";

const CartridgeBeltCraftsmanship = () => {
  const stats = [
    {
      icon: ShieldCheck,
      stat: "100%",
      label: "Full Grain Leather",
      desc: "Vegetable-tanned harness leather hand-selected for resilience and rich patina.",
    },
    {
      icon: Sparkles,
      stat: "Hand",
      label: "Finished",
      desc: "Edges hand-beveled, burnished with beeswax, and reinforced with brass hardware.",
    },
    {
      icon: Award,
      stat: "Lifetime",
      label: "Craftsmanship",
      desc: "Backed by Ridgeline's lifetime repair warranty against field wear and tear.",
    },
  ];

  return (
    <section className="w-full bg-[#F6F2EC] py-16 sm:py-20 lg:py-28 px-6 lg:px-12 xl:px-16 my-12 border-y border-[#E5D8C8]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Close-up leather belt craftsmanship image */}
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
                alt="Artisan Cartridge Belt Edge Burnishing & Stitching"
                className="w-full aspect-[4/3] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B2618]/30 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-[#FAF8F5]/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#E5D8C8] shadow-sm">
                <p className="font-serif italic text-[#3B2618] text-sm sm:text-base leading-snug">
                  "Every stitch on a cartridge belt carries the weight of precision and reliability."
                </p>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#8B5A2B] mt-2 block">
                  — Ridgeline Master Saddler
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Content & Three Premium Stats */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-start pl-0 lg:pl-4"
          >
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#8B5A2B] mb-4">
              ARTISAN EXCELLENCE
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#3B2618] leading-[1.12] mb-6 tracking-tight">
              Handcrafted Without Compromise
            </h2>

            <p className="text-[#6B6258] text-base sm:text-lg font-normal leading-relaxed mb-8 sm:mb-10">
              Each cartridge belt is built from premium vegetable-tanned leather and carefully finished by hand, ensuring durability, comfort, and timeless elegance for every journey.
            </p>

            {/* Three Premium Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-6 border-t border-[#E5D8C8]">
              {stats.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E5D8C8] flex items-center justify-center text-[#8B5A2B] mb-3 shadow-xs">
                      <IconComponent size={20} />
                    </div>
                    <div className="font-serif text-2xl font-normal text-[#3B2618] mb-0.5">
                      {item.stat}
                    </div>
                    <h4 className="font-serif text-base font-normal text-[#3B2618] leading-tight mb-1.5">
                      {item.label}
                    </h4>
                    <p className="text-xs text-[#6B6258] leading-relaxed">
                      {item.desc}
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

export default CartridgeBeltCraftsmanship;
