import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css/mousewheel";
import "swiper/css";

import "./FeaturedCategories.css";

import hunting from "../../assets/Images/hunt.avif";
import bags from "../../assets/Images/baggs.jpg";
import travel from "../../assets/Images/boots.jpg";
import accessories from "../../assets/Images/crafteman.avif";
import care from "../../assets/Images/boots.avif";
import wallet from "../../assets/Images/accessory.avif";

const categories = [
  {
    title: "Hunting Gear",
    subtitle: "Outdoor Essentials",
    badge: "HERITAGE COLLECTION",
    desc: "Crafted for hunters and outdoor enthusiasts with unmatched durability.",
    image: hunting,
  },
  {
    title: "Leather Bags",
    subtitle: "Travel Collection",
    badge: "PREMIUM LEATHER",
    desc: "Luxury duffel, messenger and travel bags made for every journey.",
    image: bags,
  },
  {
    title: "Travel Collection",
    subtitle: "Adventure Ready",
    badge: "HERITAGE COLLECTION",
    desc: "Timeless companions built to accompany every expedition.",
    image: travel,
  },
  {
    title: "Accessories",
    subtitle: "Everyday Luxury",
    badge: "HANDCRAFTED",
    desc: "Premium leather accessories designed for everyday elegance.",
    image: accessories,
  },
  {
    title: "Leather Care",
    subtitle: "Protect & Preserve",
    badge: "ESSENTIAL CARE",
    desc: "Maintain the beauty and longevity of your leather products.",
    image: care,
  },
  {
    title: "Belts & Wallets",
    subtitle: "Signature Collection",
    badge: "PREMIUM LEATHER",
    desc: "Classic handcrafted essentials inspired by heritage craftsmanship.",
    image: wallet,
  },
];

const FeaturedCategories = () => {
  return (
    <section className="relative pt-4 md:pt-8 pb-8 md:pb-12 bg-[#FAF8F5] overflow-hidden">

      {/* Animated Soft Background Ambient Lighting Shapes */}
      <motion.div
        className="absolute top-10 left-[-100px] w-[450px] h-[450px] bg-[#E8D7C3]/35 rounded-full blur-[140px] pointer-events-none -z-0"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-[-100px] w-[500px] h-[500px] bg-[#D8C2A8]/30 rounded-full blur-[160px] pointer-events-none -z-0"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        {/* Section Viewport Animation Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Divider Line 1: Top Section Separator Line */}
          <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-10 flex items-center justify-center opacity-70">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#8B4513]/40 to-transparent w-full" />
          </div>

          {/* Divider Line 2: Section Subtitle Badge & Flanking Lines */}
          <div className="flex items-center justify-center gap-3.5 sm:gap-5 mb-4">
            <span className="w-14 sm:w-20 h-[1px] bg-[#8B4513]"></span>
            <span className="text-[#C79A63] text-xs">◆</span>
            <p
              className="uppercase text-[11px] sm:text-xs tracking-[0.45em] text-[#8B4513] font-semibold"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Explore Heritage
            </p>
            <span className="text-[#C79A63] text-xs">◆</span>
            <span className="w-14 sm:w-20 h-[1px] bg-[#8B4513]"></span>
          </div>

          {/* Heading & Subtext */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#3B2618] leading-tight font-normal"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Crafted Collections
            </h2>

            <p className="mt-4 sm:mt-6 text-[#5C5147] text-base sm:text-lg leading-relaxed font-light">
              Discover handcrafted leather collections inspired by timeless
              craftsmanship, outdoor adventure and enduring quality.
            </p>
          </div>
        </motion.div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Mousewheel]}
          loop={true}
          grabCursor={true}
          centeredSlides={false}
          speed={550}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true,
          }}
          spaceBetween={28}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 18,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
            1500: {
              slidesPerView: 3.4,
              spaceBetween: 32,
            },
          }}

//           breakpoints={{
//   0: {
//     slidesPerView: 1,
//     spaceBetween: 18,
//   },

//   640: {
//     slidesPerView: 2,
//     spaceBetween: 24,
//   },

//   1024: {
//     slidesPerView: 3,
//     spaceBetween: 28,
//   },

//   1500: {
//     slidesPerView: 4,
//     spaceBetween: 28,
//   },
// }}
          className="categories-swiper"
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  group
                  relative
                  w-full
                  h-[520px]
                  sm:h-[570px]
                  rounded-[30px]
                  sm:rounded-[32px]
                  overflow-hidden
                  bg-[#3B2618]
                  border
                  border-[#D8C2A8]/60
                  hover:border-[#8B4513]/70
                  shadow-md
                  shadow-[#3B2618]/10
                  hover:shadow-[0_28px_65px_-12px_rgba(59,38,24,0.28)]
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-2.5
                  flex
                  flex-col
                  justify-between
                "
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 overflow-hidden -z-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-108
                    "
                  />
                </div>

                {/* Dark Gradient Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#24170F]/95
                    via-[#24170F]/45
                    to-black/10
                    group-hover:from-[#24170F]
                    group-hover:via-[#24170F]/55
                    transition-colors
                    duration-500
                    -z-0
                  "
                />

                {/* Top Badge */}
                <div className="relative z-10 p-6 sm:p-7">
                  <span className="category-badge-glass inline-flex items-center px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.22em] text-[#8B4513] font-bold">
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 p-6 sm:p-8 text-white">
                  {/* Subtitle */}
                  <p className="uppercase tracking-[0.3em] text-[11px] text-[#C79A63] font-semibold mb-2">
                    {item.subtitle}
                  </p>

                  {/* Title */}
                  <h3
                    className="text-3xl sm:text-4xl text-white leading-tight font-normal"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.title}
                  </h3>

                  {/* Description (2 lines max) */}
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-gray-200/90 font-light line-clamp-2-custom">
                    {item.desc}
                  </p>

                  {/* Editorial Text CTA Button */}
                  <div className="mt-6 pt-2">
                    <button
                      className="
                        inline-flex
                        items-center
                        gap-3
                        uppercase
                        tracking-[0.2em]
                        text-xs
                        font-semibold
                        text-[#FAF8F5]
                        group-hover:text-[#C79A63]
                        transition-colors
                        duration-300
                      "
                    >
                      <span>Explore Collection</span>
                      <span className="w-8 h-[1.5px] bg-[#C79A63] transition-all duration-300 group-hover:w-12" />
                      <FiArrowRight className="text-sm text-[#C79A63] transition-transform duration-300 group-hover:translate-x-2" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default React.memo(FeaturedCategories);
