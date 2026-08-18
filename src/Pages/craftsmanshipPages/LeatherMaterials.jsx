import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiShield, FiSun, FiFeather, FiCheck } from "react-icons/fi";

import heroTextureImg from "../../assets/Images/craftsmanship_detail.jpg";
import vegTanImg from "../../assets/Images/accessory_craftsmanship_detail.jpg";
import hardwareDetailImg from "../../assets/Images/belt_craftsmanship_detail.jpg";
import finishedQuoteImg from "../../assets/Images/luxury_leather_hero.jpg";

const LeatherMaterials = () => {
  const leatherGrades = [
    {
      title: "100% Full-Grain Steerhide",
      subtitle: "THE UN-TOUCHED TOP LAYER",
      description:
        "Full-grain leather is the highest grade of leather available. Unlike genuine or top-grain leather, full-grain is left completely un-sanded and un-buffed. It retains the tightest fiber density of the hide, making it virtually indestructible while allowing it to absorb natural oils and develop a rich, glowing patina over years of use.",
      highlights: ["Un-sanded natural surface", "Highest fiber density & tensile strength", "Develops rich personal patina"],
    },
    {
      title: "English Bridle Leather",
      subtitle: "SMOOTH, FIRM & WAX-FINISHED",
      description:
        "Historically crafted for equestrian saddlery, English Bridle leather is drum-dyed and heavily stuffed with natural tallows and beeswax. The result is a smooth, firm leather with a slick finish on both the grain and flesh sides, offering superior weather resistance and refined structure for dress belts and executive bags.",
      highlights: ["Stuffed with natural tallows", "Weather & sweat resistant", "Slick, polished hand-feel"],
    },
    {
      title: "Oiled Harness & Crazy Horse",
      subtitle: "RUGGED TRAIL PATINA",
      description:
        "Treated with hot oils and natural waxes during tanning, Crazy Horse and Harness leathers feature a unique 'pull-up' effect. When folded or scratched, the waxes shift beneath the surface, revealing lighter undertones that give every item a distinct vintage trail aesthetic that heals as it is rubbed.",
      highlights: ["Hot oil & wax impregnation", "Self-healing pull-up effect", "Rugged outdoor character"],
    },
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#2C2C2C] min-h-screen font-sans selection:bg-[#8B4513] selection:text-[#FAF8F5]">
      {/* 1. BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-4">
        <ol className="flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#6B6258] font-medium">
          <li>
            <Link to="/" className="hover:text-[#8B4513] transition-colors">
              Home
            </Link>
          </li>
          <li className="text-[#C5B8AA] font-light">/</li>
          <li>
            <span className="text-[#6B6258]">Craftsmanship</span>
          </li>
          <li className="text-[#C5B8AA] font-light">/</li>
          <li className="text-[#3B2618] font-semibold">Leather & Materials</li>
        </ol>
      </nav>

      {/* 2. EDITORIAL HERO SECTION */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 pt-6 pb-14 sm:pb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#8B4513] font-semibold block mb-4">
            Uncompromising Materiel
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#3B2618] tracking-[0.03em] leading-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Leather & Materials
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed mb-12 sm:mb-16 max-w-2xl mx-auto">
            Discover the finest full-grain hides, natural vegetable tannins, and solid marine-grade metals that define the longevity of Ridgeline Leather.
          </p>
        </div>

        {/* Hero Texture Banner */}
        <div className="relative aspect-[16/9] max-h-[600px] w-full overflow-hidden border border-[#E8DED0]">
          <img
            src={heroTextureImg}
            alt="Ridgeline Full-Grain Hides Texture"
            className="w-full h-full object-cover object-center transform hover:scale-[1.01] transition-transform duration-1000 ease-out"
          />
        </div>
      </section>

      {/* 3. LEATHER GRADES BREAKDOWN */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-t border-[#E8DED0]">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8B4513] font-semibold block mb-3">
            Our Signature Hides
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3B2618] tracking-[0.03em]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            The Three Grades We Craft
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leatherGrades.map((grade, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] border border-[#E8DED0] p-8 sm:p-10 flex flex-col justify-between hover:border-[#8B4513] transition-colors duration-300 group"
            >
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B4513] font-semibold block mb-2">
                  {grade.subtitle}
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-normal text-[#3B2618] leading-tight mb-4 group-hover:text-[#8B4513] transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {grade.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed mb-6">
                  {grade.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#E8DED0] space-y-2">
                {grade.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#3B2618]">
                    <FiCheck size={14} className="text-[#8B4513] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VEGETABLE TANNING VS CHROME TANNING (2-COLUMN EDITORIAL) */}
      <section className="bg-[#F5F1E8]/60 border-y border-[#E8DED0] py-20 sm:py-28">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6 relative aspect-[4/5] max-h-[580px] w-full overflow-hidden border border-[#E8DED0]">
              <img
                src={vegTanImg}
                alt="Vegetable Tanned Leather Process"
                className="w-full h-full object-cover object-center transform hover:scale-[1.01] transition-transform duration-1000 ease-out"
              />
            </div>

            {/* Right Text Story */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8B4513] font-semibold mb-3">
                Ancient Tannage Process
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3B2618] leading-tight tracking-[0.02em] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Why We Choose 100% Vegetable Tanning
              </h2>
              <div className="space-y-5 text-sm sm:text-base text-[#555555] font-light leading-relaxed">
                <p>
                  Today, over 90% of global leather goods are tanned in under 24 hours using synthetic chromium salts—a fast, industrial process that leaves leather cold, uniform, and prone to flaking.
                </p>
                <p>
                  At Ridgeline Leather, we refuse shortcut tanning. Our hides are immersed for 60 days in oak pits filled with natural mimosa, chestnut, and quebracho bark extracts.
                </p>
                <p>
                  Vegetable tanning preserves the natural organic structure of the hide, yielding earthy aroma, deep rich hues, and leather that actually strengthens and improves with age rather than deteriorating.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#E8DED0] pt-6">
                <div>
                  <span className="text-xl font-normal text-[#3B2618] block" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    60 Days
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#8C8074]">Slow Bark Tannage</span>
                </div>
                <div>
                  <span className="text-xl font-normal text-[#3B2618] block" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    0% Chrome
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#8C8074]">100% Plant Extracts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HARDWARE, THREAD & LININGS SPOTLIGHT */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8B4513] font-semibold block mb-3">
            Hardware & Components
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3B2618] tracking-[0.03em]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Built Beyond the Leather
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hardware */}
          <div className="border border-[#E8DED0] bg-[#FAF8F5] p-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#F5F1E8] border border-[#D8C2A8] flex items-center justify-center text-[#8B4513] mb-4">
              <FiShield size={20} />
            </div>
            <h3
              className="text-2xl font-normal text-[#3B2618] mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Solid Brass & Antique Nickel
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6258] font-light leading-relaxed">
              We never use hollow zinc or plated alloy hardware. Every buckle, rivet, snap, and D-ring is cast from solid marine-grade brass or nickel that will never chip, flake, or rust under field exposure.
            </p>
          </div>

          {/* Thread */}
          <div className="border border-[#E8DED0] bg-[#FAF8F5] p-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#F5F1E8] border border-[#D8C2A8] flex items-center justify-center text-[#8B4513] mb-4">
              <FiSun size={20} />
            </div>
            <h3
              className="text-2xl font-normal text-[#3B2618] mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              German Waxed Thread
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6258] font-light leading-relaxed">
              Stitched with heavy-gauge German bonded polyester thread pre-lubricated with beeswax. Highly resistant to UV degradation, saltwater, friction, and rot over decades of daily carry.
            </p>
          </div>

          {/* Linings */}
          <div className="border border-[#E8DED0] bg-[#FAF8F5] p-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#F5F1E8] border border-[#D8C2A8] flex items-center justify-center text-[#8B4513] mb-4">
              <FiFeather size={20} />
            </div>
            <h3
              className="text-2xl font-normal text-[#3B2618] mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              12 oz Canvas & Pigskin Suede
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6258] font-light leading-relaxed">
              Interior compartments are lined with heavyweight 12 oz weather-waxed duck canvas or velvety soft pigskin suede, protecting laptops, gear, and daily essentials from abrasion.
            </p>
          </div>
        </div>
      </section>

      {/* 6. EDITORIAL QUOTE BANNER */}
      <section className="relative aspect-[16/9] max-h-[560px] w-full overflow-hidden border-y border-[#E8DED0]">
        <img
          src={finishedQuoteImg}
          alt="Ridgeline Leather Finished Products"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#3B2618]/55 flex items-center justify-center p-6 sm:p-12 text-center">
          <div className="max-w-3xl">
            <blockquote
              className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F5F1E8] tracking-[0.03em] leading-relaxed mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "Full-grain leather is not perfect—it is authentic. Every scratch, grain variation, and shade shift tells the story of your journeys."
            </blockquote>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C79A63] font-semibold">
              The Authenticity Promise
            </span>
          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA SECTION */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8B4513] font-semibold block mb-3">
            Handcrafted Excellence
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3B2618] tracking-[0.03em] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Experience the Difference
          </h2>
          <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed mb-10">
            Explore our complete range of handcrafted full-grain leather wallets, belts, travel bags, and hunting accessories designed to last a lifetime.
          </p>

          <div>
            <Link
              to="/shop/all-products"
              className="inline-flex items-center gap-3 px-8 py-3.5 border border-[#3B2618] text-[#3B2618] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#3B2618] hover:text-[#F5F1E8] transition-all duration-300 group"
            >
              <span>Explore Our Collections</span>
              <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeatherMaterials;
