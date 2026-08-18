import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import craftsmanHeroImg from "../../assets/Images/editorial_craftsmanship_1787035938664.jpg";
import beginningWorkshopImg from "../../assets/Images/showroom_hero.jpg";
import editorialTableImg from "../../assets/Images/luxury_leather_hero.jpg";

const OurStory = () => {
  return (
    <div className="bg-[#FAF8F5] text-[#2C2C2C] min-h-screen font-sans selection:bg-[#8B4513] selection:text-[#FAF8F5]">
      {/* 1. BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-4">
        <ol className="flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#6B6258] font-medium">
          
         
          <li>
            <span className="text-[#6B6258]">Craftsmanship</span>
          </li>
          <li className="text-[#C5B8AA] font-light">/</li>
          <li className="text-[#3B2618] font-semibold">Our Story</li>
        </ol>
      </nav>

      {/* 2. EDITORIAL HERO SECTION */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 pt-6 pb-14 sm:pb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#8B4513] font-semibold block mb-4">
            Heritage & Craftsmanship
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#3B2618] tracking-[0.03em] leading-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Story
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed mb-12 sm:mb-16 max-w-2xl mx-auto">
            "Every piece we create is rooted in tradition, crafted with intention, and built to accompany generations of adventure."
          </p>
        </div>

        {/* Large Full-Width Lifestyle Hero Image */}
        <div className="relative aspect-[16/9] max-h-[620px] w-full overflow-hidden border border-[#E8DED0]">
          <img
            src={craftsmanHeroImg}
            alt="Ridgeline Leather Artisan working in workshop"
            className="w-full h-full object-cover object-center transform hover:scale-[1.01] transition-transform duration-1000 ease-out"
          />
        </div>
      </section>

      {/* 3. OUR BEGINNING (TWO-COLUMN STORY) */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-t border-[#E8DED0]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Portrait Image */}
          <div className="lg:col-span-6 relative aspect-[4/5] max-h-[600px] w-full overflow-hidden border border-[#E8DED0]">
            <img
              src={beginningWorkshopImg}
              alt="Ridgeline Leather Beginning Workshop"
              className="w-full h-full object-cover object-center transform hover:scale-[1.01] transition-transform duration-1000 ease-out"
            />
          </div>

          {/* Right: Narrative Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8B4513] font-semibold mb-3">
              The Origin
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3B2618] leading-tight tracking-[0.02em] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Where It All Began
            </h2>
            <div className="space-y-5 text-sm sm:text-base text-[#555555] font-light leading-relaxed">
              <p>
                Founded on a passion for rugged outdoor wilderness and timeless craftsmanship, Ridgeline Leather began in a small Texas workshop with a single roll of vegetable-tanned hide and a set of hand tools.
              </p>
              <p>
                We believed then—as we do now—that true luxury is defined by honesty of materials and patience of process. Every hide is individually selected, vegetable-tanned using natural plant tannins, and finished by master artisans who treat leathercraft as an enduring artform.
              </p>
              <p>
                Our goal has never been mass production, but creating heirlooms that age gracefully, taking on a unique patina that tells the story of every journey you undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE BELIEVE (OUR PHILOSOPHY) */}
      <section className="bg-[#F5F1E8]/60 border-y border-[#E8DED0] py-20 sm:py-28">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8B4513] font-semibold block mb-3">
            Core Principles
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3B2618] tracking-[0.03em] mb-16 sm:mb-20"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Philosophy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E8DED0]">
            {/* Value 1 */}
            <div className="px-6 py-6 md:py-4 text-center flex flex-col items-center">
              <h3
                className="text-2xl sm:text-3xl font-normal text-[#3B2618] mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Craftsmanship
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6258] font-light leading-relaxed max-w-xs">
                Every stitch reflects patience, precision, and pride.
              </p>
            </div>

            {/* Value 2 */}
            <div className="px-6 py-6 md:py-4 text-center flex flex-col items-center">
              <h3
                className="text-2xl sm:text-3xl font-normal text-[#3B2618] mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Quality
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6258] font-light leading-relaxed max-w-xs">
                We choose premium materials built to last a lifetime.
              </p>
            </div>

            {/* Value 3 */}
            <div className="px-6 py-6 md:py-4 text-center flex flex-col items-center">
              <h3
                className="text-2xl sm:text-3xl font-normal text-[#3B2618] mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Legacy
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6258] font-light leading-relaxed max-w-xs">
                Our products are designed to be carried, used, and passed down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE JOURNEY (TIMELINE) */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8B4513] font-semibold block mb-3">
            Milestones
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3B2618] tracking-[0.03em]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            The Journey
          </h2>
        </div>

        {/* Minimal Horizontal Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Timeline Node 1 */}
          <div className="flex flex-col items-center text-center p-6 border border-[#E8DED0] bg-[#FAF8F5] relative group hover:border-[#8B4513] transition-colors duration-300">
            <span className="text-3xl sm:text-4xl font-normal text-[#8B4513] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              2018
            </span>
            <span className="w-8 h-[1px] bg-[#D8C2A8] mb-3" />
            <p className="text-xs sm:text-sm text-[#3B2618] font-medium tracking-wide">
              Brand founded in an authentic Texas workshop
            </p>
          </div>

          {/* Timeline Node 2 */}
          <div className="flex flex-col items-center text-center p-6 border border-[#E8DED0] bg-[#FAF8F5] relative group hover:border-[#8B4513] transition-colors duration-300">
            <span className="text-3xl sm:text-4xl font-normal text-[#8B4513] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              2019
            </span>
            <span className="w-8 h-[1px] bg-[#D8C2A8] mb-3" />
            <p className="text-xs sm:text-sm text-[#3B2618] font-medium tracking-wide">
              First handcrafted leather collection released
            </p>
          </div>

          {/* Timeline Node 3 */}
          <div className="flex flex-col items-center text-center p-6 border border-[#E8DED0] bg-[#FAF8F5] relative group hover:border-[#8B4513] transition-colors duration-300">
            <span className="text-3xl sm:text-4xl font-normal text-[#8B4513] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              2021
            </span>
            <span className="w-8 h-[1px] bg-[#D8C2A8] mb-3" />
            <p className="text-xs sm:text-sm text-[#3B2618] font-medium tracking-wide">
              Expanded into travel duffels and hunting gear
            </p>
          </div>

          {/* Timeline Node 4 */}
          <div className="flex flex-col items-center text-center p-6 border border-[#E8DED0] bg-[#FAF8F5] relative group hover:border-[#8B4513] transition-colors duration-300">
            <span className="text-3xl sm:text-4xl font-normal text-[#8B4513] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              2024
            </span>
            <span className="w-8 h-[1px] bg-[#D8C2A8] mb-3" />
            <p className="text-xs sm:text-sm text-[#3B2618] font-medium tracking-wide">
              Premium handcrafted collections delivered worldwide
            </p>
          </div>
        </div>
      </section>

      {/* 6. FEATURED EDITORIAL IMAGE & QUOTE */}
      <section className="relative aspect-[16/9] max-h-[580px] w-full overflow-hidden border-y border-[#E8DED0]">
        <img
          src={editorialTableImg}
          alt="Ridgeline Finished Leather Products on Oak Table"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft Warm Gradient Overlay */}
        <div className="absolute inset-0 bg-[#3B2618]/50 flex items-center justify-center p-6 sm:p-12 text-center">
          <div className="max-w-3xl">
            <blockquote
              className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F5F1E8] tracking-[0.03em] leading-relaxed mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "True craftsmanship is measured not by perfection, but by the character it gains over time."
            </blockquote>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C79A63] font-semibold">
              Ridgeline Leather Atelier
            </span>
          </div>
        </div>
      </section>

      {/* 7. CLOSING SECTION */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8B4513] font-semibold block mb-3">
            An Enduring Heirloom
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3B2618] tracking-[0.03em] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Made to Be Passed Down
          </h2>
          <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed mb-10">
            Every Ridgeline Leather product is built with the understanding that leather is a living material. Over years of daily carry, exposure to rain, sun, and dirt, our hides deepen in shade and soften in feel—becoming an indelible part of your personal legacy.
          </p>

          <div>
            <Link
              to="/shop/all-products"
              className="inline-flex items-center gap-3 px-8 py-3.5 border border-[#3B2618] text-[#3B2618] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#3B2618] hover:text-[#F5F1E8] transition-all duration-300 group"
            >
              <span>Explore Our Craft</span>
              <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
