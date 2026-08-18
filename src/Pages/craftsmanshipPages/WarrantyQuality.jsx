import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiShield,
  FiRotateCcw,
  FiTool,
  FiCheckCircle,
  FiXCircle,
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

import heroBannerImg from "../../assets/Images/workshop_banner.jpg";
import repairDetailImg from "../../assets/Images/belt_craftsmanship_detail.jpg";
import quoteBgImg from "../../assets/Images/luxury_leather_hero.jpg";

const WarrantyQuality = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const pillars = [
    {
      num: "01",
      icon: FiShield,
      title: "Lifetime Craftsmanship Warranty",
      subtitle: "COVERAGE FOR GENERATIONS",
      description:
        "Every Ridgeline Leather creation is guaranteed against defects in materials and craftsmanship for the natural lifetime of the product. If a seam loosens, a solid brass rivet breaks, or a buckle fails, we will repair or replace it free of charge.",
    },
    {
      num: "02",
      icon: FiRotateCcw,
      title: "30-Day Risk-Free Trial",
      subtitle: "TEST IN YOUR DAILY ROUTINE",
      description:
        "We want you to feel complete confidence in your daily carry. Enjoy 30 days to experience your new wallet, belt, or bag. If you are not completely satisfied, return it unused in original packaging for a full refund or exchange.",
    },
    {
      num: "03",
      icon: FiTool,
      title: "Complimentary Workshop Repair",
      subtitle: "TEXAS ATELIER SERVICE",
      description:
        "Leather is an enduring material that occasionally needs maintenance after years of hard use. Our master artisans provide complimentary stitching repairs and hardware adjustments in our Texas workshop—you only cover roundtrip shipping.",
    },
  ];

  const qualityAudits = [
    {
      num: "01",
      title: "Grain Fiber Audit",
      desc: "Inspecting steerhide fiber density and surface orientation along natural stress lines.",
    },
    {
      num: "02",
      title: "50 lb Stitch Pull Test",
      desc: "Every hand-stitched seam is load-tested to withstand heavy daily field strain.",
    },
    {
      num: "03",
      title: "Hardware Stress Check",
      desc: "Solid brass buckles and Chicago screws undergo rigorous torque and snap testing.",
    },
    {
      num: "04",
      title: "Wax Edge Burnish Audit",
      desc: "Beeswax edge seals are visually inspected and friction-tested for moisture seal.",
    },
  ];

  const faqs = [
    {
      q: "How do I submit a warranty or repair request?",
      a: "Simply visit our Customer Service page or email repair@ridgelineleather.com with photos of the issue and your order number. Our atelier team will issue a prepaid repair label within 24 business hours.",
    },
    {
      q: "Does the warranty cover scuffs, scratches, or color shifts?",
      a: "Natural scuffs, shade darkening, and softening over time are authentic characteristics of full-grain vegetable-tanned leather (the patina process) and are not considered defects. However, structural leather tears or seam failures are fully covered.",
    },
    {
      q: "How long does a workshop repair take?",
      a: "Once your item arrives at our Texas workshop, repairs are typically completed and hand-shipped back to you within 5 to 7 business days.",
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
          <li className="text-[#3B2618] font-semibold">Warranty & Quality</li>
        </ol>
      </nav>

      {/* 2. EDITORIAL HERO SECTION */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 pt-6 pb-14 sm:pb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#8B4513] font-semibold block mb-4">
            Our Lifetime Pledge
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#3B2618] tracking-[0.03em] leading-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Warranty & Quality
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed mb-12 sm:mb-16 max-w-2xl mx-auto">
            We stand behind every stitch, rivet, and fold. Every Ridgeline Leather creation is backed by our signature Lifetime Guarantee.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="relative aspect-[16/9] max-h-[600px] w-full overflow-hidden border border-[#E8DED0]">
          <img
            src={heroBannerImg}
            alt="Ridgeline Leather Workshop Quality Assurance"
            className="w-full h-full object-cover object-center transform hover:scale-[1.01] transition-transform duration-1000 ease-out"
          />
        </div>
      </section>

      {/* 3. THE RIDGELINE LIFETIME PLEDGE (3 PILLARS) */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-t border-[#E8DED0]">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8B4513] font-semibold block mb-3">
            Guaranteed Integrity
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3B2618] tracking-[0.03em]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Three Pillars of Quality
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="bg-[#FAF8F5] border border-[#E8DED0] p-8 sm:p-10 flex flex-col justify-between hover:border-[#8B4513] transition-colors duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#F5F1E8] border border-[#D8C2A8] flex items-center justify-center text-[#8B4513] group-hover:bg-[#3B2618] group-hover:text-[#F5F1E8] transition-colors">
                      <Icon size={20} />
                    </div>
                    <span className="text-xs font-mono tracking-widest text-[#8C8074]">
                      {pillar.num}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B4513] font-semibold block mb-2">
                    {pillar.subtitle}
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl font-normal text-[#3B2618] leading-tight mb-4 group-hover:text-[#8B4513] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. WHAT IS COVERED VS WHAT IS PATINA (2 COLUMNS) */}
      <section className="bg-[#F5F1E8]/60 border-y border-[#E8DED0] py-20 sm:py-28">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8B4513] font-semibold block mb-3">
              Clear & Transparent Standards
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3B2618] tracking-[0.03em]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Coverage Guidelines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* What We Cover */}
            <div className="bg-[#FAF8F5] border border-[#E8DED0] p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8DED0]">
                <FiCheckCircle size={22} className="text-[#8B4513]" />
                <h3
                  className="text-2xl font-normal text-[#3B2618]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  What Our Lifetime Warranty Covers
                </h3>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B4513] font-bold mt-0.5">•</span>
                  <span>Unraveling or broken hand-stitched seams and thread locks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B4513] font-bold mt-0.5">•</span>
                  <span>Broken or defective solid brass buckles, snaps, rivets, and D-rings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B4513] font-bold mt-0.5">•</span>
                  <span>Zipper track separation or slide fastener failure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B4513] font-bold mt-0.5">•</span>
                  <span>Unintended structural leather tearing or grain splitting.</span>
                </li>
              </ul>
            </div>

            {/* What Is Natural Patina */}
            <div className="bg-[#FAF8F5] border border-[#E8DED0] p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8DED0]">
                <FiShield size={22} className="text-[#8C8074]" />
                <h3
                  className="text-2xl font-normal text-[#3B2618]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  What Belongs to Natural Patina
                </h3>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#8C8074] font-bold mt-0.5">•</span>
                  <span>Surface scuffs, scratches, and trail marks accumulated during daily carry.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8C8074] font-bold mt-0.5">•</span>
                  <span>Shade darkening from sun exposure, natural hand oils, and weather.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8C8074] font-bold mt-0.5">•</span>
                  <span>Natural grain wrinkles, stretch marks, and softening of the hide.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8C8074] font-bold mt-0.5">•</span>
                  <span>Damage caused by chemical exposure, harsh solvents, or pets.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4-POINT QUALITY INSPECTION AUDIT */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8B4513] font-semibold block mb-3">
            Atelier Quality Assurance
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3B2618] tracking-[0.03em]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            4-Point Quality Audit
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualityAudits.map((audit) => (
            <div
              key={audit.num}
              className="border border-[#E8DED0] bg-[#FAF8F5] p-6 text-center flex flex-col justify-between hover:border-[#8B4513] transition-colors"
            >
              <div>
                <span className="text-xs font-mono tracking-widest text-[#8B4513] block mb-2">
                  AUDIT {audit.num}
                </span>
                <h3
                  className="text-xl font-normal text-[#3B2618] mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {audit.title}
                </h3>
                <p className="text-xs text-[#6B6258] font-light leading-relaxed">
                  {audit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 7. FAQ ACCORDION SECTION */}
      <section className="max-w-[1000px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="text-center mb-12">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8B4513] font-semibold block mb-3">
            Common Questions
          </span>
          <h2
            className="text-3xl sm:text-4xl font-normal text-[#3B2618]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Warranty & Repair FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="border border-[#E8DED0] bg-[#FAF8F5] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-medium text-sm text-[#3B2618] hover:text-[#8B4513] transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  {isOpen ? (
                    <FiChevronUp size={16} className="text-[#8B4513] shrink-0" />
                  ) : (
                    <FiChevronDown size={16} className="text-[#8B4513] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#555555] font-light leading-relaxed border-t border-[#E8DED0]/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. CLOSING SERVICE CTA SECTION */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28 text-center border-t border-[#E8DED0]">
        <div className="max-w-2xl mx-auto">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8B4513] font-semibold block mb-3">
            Atelier Service & Support
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3B2618] tracking-[0.03em] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Need a Repair or Have a Question?
          </h2>
          <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed mb-10">
            Our Texas workshop team is available to service your Ridgeline Leather gear, assist with custom inquiries, or answer care questions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact/customer-service"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#3B2618] text-[#F5F1E8] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#8B4513] transition-all duration-300"
            >
              <span>Submit a Warranty Claim</span>
              <FiArrowRight size={14} />
            </Link>

            <Link
              to="/shop/all-products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 border border-[#3B2618] text-[#3B2618] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#3B2618] hover:text-[#F5F1E8] transition-all duration-300"
            >
              <span>Explore Our Collections</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WarrantyQuality;
