import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Truck, Clock, ArrowRight } from "lucide-react";

const WishlistBanner = () => {
  return (
    <section className="bg-[#1F1A17] text-[#FAF8F5] py-16 sm:py-20 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#8B4513]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-6 space-y-4">
            <span
              className="uppercase text-[11px] sm:text-xs tracking-[0.35em] text-[#C79A63] font-semibold block"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              HERITAGE CRAFTSMANSHIP GUARANTEE
            </span>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-[#F5F1E8] font-normal leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Built For The Field.
              <br />
              Crafted For A Lifetime.
            </h2>

            <p className="text-[#D8CFC4] text-sm sm:text-base font-light leading-relaxed max-w-lg">
              Every item in your wishlist is cut from 100% full-grain vegetable-tanned bridle leather and finished with heavy solid brass hardware.
            </p>

            <div className="pt-2">
              <Link
                to="/shop/all-products"
                className="inline-flex items-center gap-3 bg-[#8B5A2B] hover:bg-[#A65318] text-[#FAF8F5] px-8 py-4 rounded-xl text-xs uppercase font-semibold tracking-[0.2em] transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
              >
                <span>Shop Full Catalog</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Feature Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#2A231F] border border-[#C79A63]/30 p-5 rounded-2xl text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#8B5A2B]/20 text-[#C79A63] flex items-center justify-center mb-3">
                <Truck size={20} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F1E8] mb-1">
                Free Field Shipping
              </h4>
              <p className="text-[11px] text-[#A69788] font-light">
                On all US orders over $150
              </p>
            </div>

            <div className="bg-[#2A231F] border border-[#C79A63]/30 p-5 rounded-2xl text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#8B5A2B]/20 text-[#C79A63] flex items-center justify-center mb-3">
                <ShieldCheck size={20} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F1E8] mb-1">
                Lifetime Warranty
              </h4>
              <p className="text-[11px] text-[#A69788] font-light">
                Full repair or replacement policy
              </p>
            </div>

            <div className="bg-[#2A231F] border border-[#C79A63]/30 p-5 rounded-2xl text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#8B5A2B]/20 text-[#C79A63] flex items-center justify-center mb-3">
                <Clock size={20} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F1E8] mb-1">
                Handmade Dispatch
              </h4>
              <p className="text-[11px] text-[#A69788] font-light">
                Dispatched within 24 hours
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WishlistBanner;
