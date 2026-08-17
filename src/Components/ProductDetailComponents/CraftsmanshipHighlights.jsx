import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Sparkles, Truck } from "lucide-react";

const CraftsmanshipHighlights = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Full Grain Leather",
      desc: "Sourced from premier tanneries, retaining natural character and grain strength.",
    },
    {
      icon: Sparkles,
      title: "Handcrafted",
      desc: "Individually hand-cut, welted, and edge-beveled by master artisans.",
    },
    {
      icon: Award,
      title: "Lifetime Durability",
      desc: "Engineered to age gracefully, acquiring rich patina through decades of travel.",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      desc: "Complimentary express delivery on all domestic orders over $150.",
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] py-12 lg:py-16 px-6 lg:px-12 xl:px-16 border-b border-[#E8DED4]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FFFDFC] border border-[#E8DED4] rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F6F2EC] border border-[#E8DED4] flex items-center justify-center text-[#8B5A2B] mb-4">
                  <IconComponent size={22} />
                </div>
                <h3 className="font-serif text-xl font-normal text-[#3B2618] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6B6258] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipHighlights;
