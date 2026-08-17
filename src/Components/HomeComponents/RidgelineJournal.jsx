import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import fieldNotes from "../../assets/Images/shop.avif";
import craftsmanship from "../../assets/Images/pexels-anntarazevich-5963055.jpg";
import leatherCare from "../../assets/Images/pexels-alexeydemidov-10973347.jpg";

const RidgelineJournal = () => {
  return (
    <section className="bg-[#FAF8F4] py-24">
      {/* Section Heading */}
      <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16">

        <div className="text-center mb-14">
          {/* Top Section Separator Line */}
          <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-10 flex items-center justify-center opacity-70">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#8B4513]/40 to-transparent w-full" />
          </div>

          <div className="flex items-center justify-center gap-3.5 sm:gap-5 mb-4">
          <span className="w-14 sm:w-20 h-[1px] bg-[#8B4513]"></span>
          <span className="text-[#C79A63] text-xs">◆</span>
          <p
            className="uppercase text-[11px] sm:text-xs tracking-[0.45em] text-[#8B4513] font-semibold"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
             From The Ridgeline Journal
          </p>
          <span className="text-[#C79A63] text-xs">◆</span>
          <span className="w-14 sm:w-20 h-[1px] bg-[#8B4513]"></span>
        </div>

          <h2
            className="text-[#3B2618] text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Stories of craft, adventure
            <br />
            & heritage.
          </h2>

          <p
            className="max-w-2xl mx-auto mt-5 text-[#665C52] text-sm md:text-base leading-7"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Discover stories from the trail, thoughtful craftsmanship,
            leather care and the adventures that inspire Ridgeline.
          </p>

        </div>


        {/* Journal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-6">

          {/* ================= FEATURED ARTICLE ================= */}

          <article className="group">

            {/* Image */}
            <div className="relative overflow-hidden aspect-[4/3] bg-[#E8DED0]">

              <img
                src={fieldNotes}
                alt="Leather travel bag in the outdoors"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70"></div>

              {/* Category */}
              <div className="absolute top-5 left-5">
                <span className="bg-[#F5F1E8] px-4 py-2 text-[10px] tracking-[0.25em] uppercase text-[#8B4513]">
                  Field Notes
                </span>
              </div>

            </div>


            {/* Content */}
            <div className="pt-6 border-b border-[#D8C7B2] pb-7">

              <p className="text-[10px] tracking-[0.25em] uppercase text-[#9A7651] mb-3">
                Outdoor · 08 August 2026
              </p>

              <h3
                className="text-[#3B2618] text-3xl md:text-4xl leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Into The Wild: The Art of
                <br className="hidden md:block" />
                Outdoor Travel
              </h3>

              <p
                className="text-[#665C52] text-sm leading-6 mt-4 max-w-xl"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Discover the essentials that make every journey memorable,
                from timeless leather companions to the spirit of adventure.
              </p>

              <button
                className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#8B4513] hover:gap-3 transition-all duration-300"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Read Story
                <FiArrowUpRight size={15} />
              </button>

            </div>

          </article>


          {/* ================= SIDE ARTICLES ================= */}

          <div className="flex flex-col gap-8">

            {/* Article 02 */}
            <article className="group">

              <div className="relative overflow-hidden aspect-[4/2.7] bg-[#E8DED0]">

                <img
                  src={craftsmanship}
                  alt="Leather artisan crafting handmade leather"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

              </div>

              <div className="pt-5">

                <p className="text-[10px] tracking-[0.25em] uppercase text-[#9A7651] mb-2">
                  Craftsmanship
                </p>

                <h3
                  className="text-[#3B2618] text-2xl leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Behind The Stitch:
                  <br />
                  The Making of a Ridgeline Piece
                </h3>

                <button
                  className="mt-4 inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#8B4513] hover:gap-3 transition-all duration-300"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Read Story
                  <FiArrowUpRight size={14} />
                </button>

              </div>

            </article>


            {/* Divider */}
            <div className="w-full h-[1px] bg-[#D8C7B2]"></div>


            {/* Article 03 */}
            <article className="group">

              <div className="relative overflow-hidden aspect-[4/2.7] bg-[#E8DED0]">

                <img
                  src={leatherCare}
                  alt="Leather goods care"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

              </div>

              <div className="pt-5">

                <p className="text-[10px] tracking-[0.25em] uppercase text-[#9A7651] mb-2">
                  Leather Care
                </p>

                <h3
                  className="text-[#3B2618] text-2xl leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  The Art of Patina:
                  <br />
                  Caring For Full-Grain Leather
                </h3>

                <button
                  className="mt-4 inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#8B4513] hover:gap-3 transition-all duration-300"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Read Story
                  <FiArrowUpRight size={14} />
                </button>

              </div>

            </article>

          </div>

        </div>


        {/* Explore Journal */}
        <div className="flex justify-center mt-14">

          <button
            className="group inline-flex items-center gap-3 border-b border-[#8B4513] pb-2 text-[11px] tracking-[0.25em] uppercase text-[#8B4513] hover:gap-5 transition-all duration-300"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Explore The Journal

            <FiArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />

          </button>

        </div>

      </div>

    </section>
  );
};

export default RidgelineJournal;