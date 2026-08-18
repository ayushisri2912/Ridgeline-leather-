import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiShield, FiAnchor } from "react-icons/fi";

import heroBannerImg from "../../assets/Images/workshop_banner.jpg";
import hideSelectionImg from "../../assets/Images/accessory_craftsmanship_detail.jpg";
import tanningImg from "../../assets/Images/craftsmanship_detail.jpg";
import cuttingImg from "../../assets/Images/workshop_banner.jpg";
import stitchingImg from "../../assets/Images/editorial_craftsmanship_1787035938664.jpg";
import burnishingImg from "../../assets/Images/belt_craftsmanship_detail.jpg";
import finalStampingImg from "../../assets/Images/ridge_bifold_open_1787035795961.jpg";
import finishedGoodsImg from "../../assets/Images/luxury_leather_hero.jpg";

const HowItsMade = () => {
  const steps = [
    {
      num: "01",
      title: "Hide Selection & Inspection",
      subtitle: "ONLY THE TOP 5% OF FULL-GRAIN STEERHIDES",
      description:
        "Every Ridgeline product begins with rigorous hand-selection. We use exclusively 100% full-grain steerhides—the strongest, un-sanded outer layer of the skin. Master leatherworkers inspect each hide for density, natural grain structure, and authentic character, rejecting any hides with structural flaws.",
      image: hideSelectionImg,
    },
    {
      num: "02",
      title: "Natural Vegetable Tanning",
      subtitle: "SLOWER PROCESS, RICHER PATINA",
      description:
        "Our hides undergo a traditional 60-day vegetable tanning process using natural tree bark tannins and organic plant extracts. Unlike harsh chrome tanning, vegetable tanning preserves the natural collagen fibers, producing thick, fragrant leather that ages beautifully and develops a deep, rich luster over time.",
      image: tanningImg,
    },
    {
      num: "03",
      title: "Precision Hand-Cutting",
      subtitle: "ALIGNED ALONG NATURAL GRAIN LINES",
      description:
        "Using sharp traditional clicker blades and brass templates, our artisans hand-cut each pattern piece. Crucially, panels are oriented along natural grain stress lines to maximize tensile strength and prevent stretching, ensuring that wallets, belts, and bags maintain their structural form for decades.",
      image: cuttingImg,
    },
    {
      num: "04",
      title: "Traditional Saddle Stitching",
      subtitle: "HAND-STITCHED FOR LIFETIME DURABILITY",
      description:
        "While factory sewing machines create lock-stitches that unravel if one thread breaks, Ridgeline artisans hand-stitch using two needles and heavy waxed polyester thread. Each stitch is manually locked. If a single surface thread is ever cut, the remaining stitch holds firm.",
      image: stitchingImg,
    },
    {
      num: "05",
      title: "Edge Beveling & Wax Burnishing",
      subtitle: "HAND-SMOOTHED WITH NATURAL BEESWAX",
      description:
        "Raw leather edges are carefully bevel-trimmed by hand, sanded smooth with progressively fine grits, and coated with pure natural beeswax. Using hardwood burnishing wheels and canvas cloths, friction creates intense heat that seals the leather edge into a slick, moisture-resistant finish.",
      image: burnishingImg,
    },
    {
      num: "06",
      title: "Final Stamping & Conditioning",
      subtitle: "THE RIDGELINE SEAL OF AUTHENTICITY",
      description:
        "Once assembly is complete, each item is debossed with the heat-stamped Ridgeline logo and thoroughly coated with our natural beeswax and seed-oil conditioning balm. The finished item is buffed to a soft radiant sheen and inspected one last time before packaging.",
      image: finalStampingImg,
    },
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#2C2C2C] min-h-screen font-sans selection:bg-[#8B4513] selection:text-[#FAF8F5]">
      {/* 1. BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-4">
        <ol className="flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#6B6258] font-medium">
          <li>
            <span className="text-[#6B6258]">Craftsmanship</span>
          </li>
          <li className="text-[#C5B8AA] font-light">/</li>
          <li className="text-[#3B2618] font-semibold">How It's Made</li>
        </ol>
      </nav>

      {/* 2. EDITORIAL HERO SECTION */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 pt-6 pb-14 sm:pb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#8B4513] font-semibold block mb-4">
            The Art of Leathercraft
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#3B2618] tracking-[0.03em] leading-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            How It's Made
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed mb-12 sm:mb-16 max-w-2xl mx-auto">
            From raw full-grain hides to hand-burnished wax edges, explore the multi-step traditional process behind every Ridgeline heirloom.
          </p>
        </div>

        {/* Hero Workshop Banner */}
        <div className="relative aspect-[16/9] max-h-[600px] w-full overflow-hidden border border-[#E8DED0]">
          <img
            src={heroBannerImg}
            alt="Ridgeline Leather Craftsmanship Workshop"
            className="w-full h-full object-cover object-center transform hover:scale-[1.01] transition-transform duration-1000 ease-out"
          />
        </div>
      </section>

      {/* 3. STEP-BY-STEP CRAFTSMANSHIP WALKTHROUGH */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-t border-[#E8DED0]">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8B4513] font-semibold block mb-3">
            Step-By-Step Process
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3B2618] tracking-[0.03em]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Six Stages of Craftsmanship
          </h2>
        </div>

        {/* Steps Loop */}
        <div className="space-y-20 sm:space-y-32">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={step.num}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Side */}
                <div
                  className={`lg:col-span-6 relative aspect-[4/3] w-full overflow-hidden border border-[#E8DED0] ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-[#3B2618]/90 text-[#F5F1E8] px-3.5 py-1 text-xs font-mono tracking-widest backdrop-blur-xs">
                    STAGE {step.num}
                  </div>
                </div>

                {/* Content Side */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#8B4513] font-semibold mb-2">
                    {step.subtitle}
                  </span>
                  <h3
                    className="text-3xl sm:text-4xl font-normal text-[#3B2618] leading-tight mb-5"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {step.num}. {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <div className="w-12 h-[1px] bg-[#8B4513]/40" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. MATERIALS & HARDWARE SPOTLIGHT */}
      <section className="bg-[#F5F1E8]/60 border-y border-[#E8DED0] py-20 sm:py-28">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8B4513] font-semibold block mb-3">
              Uncompromising Standards
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3B2618] tracking-[0.03em]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Materials & Hardware
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-[#E8DED0] bg-[#FAF8F5] p-8 sm:p-12 divide-y md:divide-y-0 md:divide-x divide-[#E8DED0]">
            {/* Feature 1 */}
            <div className="pt-6 md:pt-0 md:px-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#F5F1E8] border border-[#D8C2A8] flex items-center justify-center text-[#8B4513] mb-4">
                <FiShield size={20} />
              </div>
              <h3
                className="text-2xl font-normal text-[#3B2618] mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                100% Full-Grain Steerhide
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6258] font-light leading-relaxed">
                The top layer of the hide containing dense fibers. Un-sanded and un-buffed, retaining natural grain, maximum strength, and rich patina potential.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="pt-6 md:pt-0 md:px-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#F5F1E8] border border-[#D8C2A8] flex items-center justify-center text-[#8B4513] mb-4">
                <FiAnchor size={20} />
              </div>
              <h3
                className="text-2xl font-normal text-[#3B2618] mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Solid Marine-Grade Brass
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6258] font-light leading-relaxed">
                Hardware cast from solid brass and antique nickel. Designed to resist corrosion, ocean air, and heavy strain without cracking or flaking.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="pt-6 md:pt-0 md:px-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#F5F1E8] border border-[#D8C2A8] flex items-center justify-center text-[#8B4513] mb-4">
                <FiCheckCircle size={20} />
              </div>
              <h3
                className="text-2xl font-normal text-[#3B2618] mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Waxed Polyester Thread
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6258] font-light leading-relaxed">
                Heavy-gauge German bonded thread pre-waxed to glide through hand-punched holes and lock tightly into place without rotting or fraying over decades.
              </p>
            </div>
          </div>
        </div>
      </section> 
    </div>
  );
};

export default HowItsMade;
