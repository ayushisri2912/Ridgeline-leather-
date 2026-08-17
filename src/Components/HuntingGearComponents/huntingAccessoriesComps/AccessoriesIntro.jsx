import React from "react";
import { motion } from "framer-motion";

const AccessoriesIntro = () => {
  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 px-6 border-b border-[#E5D8C8]/60">
      <div className="max-w-[700px] mx-auto text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#8B5A2B] mb-4"
        >
          THE DETAILS MATTER
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#3B2618] leading-[1.15] mb-6 tracking-tight"
        >
          Small Essentials. <br className="hidden sm:block" />
          Lasting Impressions.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-16 h-[1px] bg-[#8B5A2B]/40 mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[#6B6258] text-base sm:text-lg font-normal leading-relaxed text-center"
        >
          Our handcrafted leather accessories are created to complement every adventure while showcasing exceptional craftsmanship and timeless design.
        </motion.p>
      </div>
    </section>
  );
};

export default AccessoriesIntro;
