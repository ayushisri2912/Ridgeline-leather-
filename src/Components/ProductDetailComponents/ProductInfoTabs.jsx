import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShieldCheck, Sparkles, Truck } from "lucide-react";

const ProductInfoTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = ["Description", "Specifications", "Leather Care", "Shipping & Returns"];

  return (
    <section className="w-full bg-[#FAF8F5] py-12 sm:py-16 lg:py-20 px-6 lg:px-12 xl:px-16 border-b border-[#E8DED4]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Tab Header Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 border-b border-[#E8DED4] pb-px mb-8 sm:mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 sm:px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] transition-all cursor-pointer ${
                  isActive
                    ? "text-[#3B2618]"
                    : "text-[#6B6258] hover:text-[#3B2618]"
                }`}
              >
                <span>{tab}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B5A2B]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Container */}
        <div className="bg-[#FFFDFC] border border-[#E8DED4] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs min-h-[300px]">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: DESCRIPTION */}
            {activeTab === "Description" && (
              <motion.div
                key="Description"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-[#6B6258] text-base leading-relaxed"
              >
                <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2618] font-normal mb-4">
                  The Art of Refined Travel
                </h3>
                <p>
                  Handcrafted from 100% full-grain vegetable-tanned bridle leather, {product.name} is engineered to accompany you through every chapter of life. Sourced exclusively from premier European tanneries, each hide retains natural grain variations that absorb oils and age into a rich, lustrous patina over time.
                </p>
                <p>
                  Inside, the spacious main compartment is lined with soft scratch-resistant suede and fitted with three zippered organizer pockets to keep passports, notebooks, and travel essentials neatly secured.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#E8DED4]/60">
                  <div className="flex items-start gap-3">
                    <Check size={18} className="text-[#8B5A2B] shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm text-[#3B2618]">ICAO Carry-On size compliant for international flights.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={18} className="text-[#8B5A2B] shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm text-[#3B2618]">Reinforced double-stitched leather handles with brass rivets.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={18} className="text-[#8B5A2B] shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm text-[#3B2618]">Removable padded shoulder strap with solid brass roller buckles.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={18} className="text-[#8B5A2B] shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm text-[#3B2618]">Heavy-duty solid brass YKK Excella #8 zippers.</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: SPECIFICATIONS */}
            {activeTab === "Specifications" && (
              <motion.div
                key="Specifications"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2618] font-normal mb-6">
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specifications?.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-[#FAF8F5] border border-[#E8DED4] rounded-xl text-xs sm:text-sm"
                    >
                      <span className="font-bold text-[#8B5A2B] uppercase tracking-wider">{spec.label}</span>
                      <span className="font-medium text-[#3B2618] text-right">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 3: LEATHER CARE */}
            {activeTab === "Leather Care" && (
              <motion.div
                key="Leather Care"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-[#6B6258] text-base leading-relaxed"
              >
                <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2618] font-normal mb-4">
                  Preserving Your Full-Grain Leather
                </h3>
                <p>{product.leatherCare}</p>
                <div className="bg-[#FAF8F5] border border-[#E8DED4] p-6 rounded-xl space-y-3">
                  <h4 className="font-serif text-lg text-[#3B2618] font-medium">Care Guidelines</h4>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B]" />
                      <span>Condition with natural beeswax or mink oil balm twice a year.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B]" />
                      <span>Wipe spills immediately with a clean, dry microfiber cloth.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B]" />
                      <span>Always store in a cool, dry place inside the breathable dust bag.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* TAB 4: SHIPPING & RETURNS */}
            {activeTab === "Shipping & Returns" && (
              <motion.div
                key="Shipping & Returns"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-[#6B6258] text-base leading-relaxed"
              >
                <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2618] font-normal mb-4">
                  Shipping, Returns & Lifetime Guarantee
                </h3>
                <p>{product.shippingReturns}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E8DED4]">
                  <div className="p-4 bg-[#FAF8F5] border border-[#E8DED4] rounded-xl">
                    <span className="text-xs font-bold text-[#8B5A2B] uppercase tracking-wider block mb-1">Shipping</span>
                    <span className="text-xs text-[#3B2618]">Free Express on orders $150+. Delivered in 2–4 business days.</span>
                  </div>
                  <div className="p-4 bg-[#FAF8F5] border border-[#E8DED4] rounded-xl">
                    <span className="text-xs font-bold text-[#8B5A2B] uppercase tracking-wider block mb-1">Returns</span>
                    <span className="text-xs text-[#3B2618]">30-Day hassle-free return policy with pre-paid return labels.</span>
                  </div>
                  <div className="p-4 bg-[#FAF8F5] border border-[#E8DED4] rounded-xl">
                    <span className="text-xs font-bold text-[#8B5A2B] uppercase tracking-wider block mb-1">Warranty</span>
                    <span className="text-xs text-[#3B2618]">Lifetime warranty covering brass hardware & stitching craftsmanship.</span>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProductInfoTabs;
