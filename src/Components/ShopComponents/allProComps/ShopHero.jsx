import React from "react";
import heroImg from "../../../assets/Images/luxury_leather_hero.jpg";

const ShopHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F5F0EA] border-b border-[#E8DFD3] min-h-[300px] sm:min-h-[330px] lg:min-h-[360px] flex items-center">
      
      {/* Full-Bleed Right Image Extending to Screen Edge */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none">
        <img
          src={heroImg}
          alt="Leather Collection Workshop"
          className="w-full h-full object-cover object-right-center brightness-[0.88] contrast-[1.05]"
        />
        {/* Soft Blurry Center Transition Blend from Left Background into Image */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#F5F0EA] via-[#F5F0EA]/75 to-transparent z-10 backdrop-blur-[1px]" />
        {/* Subtle Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 z-10" />
      </div>

      {/* Content Container aligned with main grid */}
      <div className="max-w-[1650px] w-full mx-auto px-6 lg:px-12 xl:px-16 relative z-20 py-10 md:py-14">
        <div className="max-w-xl">
          <span className="uppercase tracking-[0.25em] text-[#8B4513] text-xs font-semibold block mb-2">
            PREMIUM LEATHER COLLECTION
          </span>

          <h1
            className="text-4xl sm:text-5xl lg:text-[58px] text-[#3B2618] leading-[1.1] font-normal"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            All Products
          </h1>

          <p className="text-[#5C5147] mt-3.5 text-sm sm:text-base leading-relaxed font-light max-w-md">
            Explore handcrafted leather bags, wallets and accessories designed
            with timeless craftsmanship and premium materials.
          </p>
        </div>
      </div>

    </section>
  );
};

export default ShopHero;