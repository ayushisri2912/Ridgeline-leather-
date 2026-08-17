import React from "react";
import {
  FiFeather,
  FiPenTool,
  FiCompass,
  FiClock,
} from "react-icons/fi";

const standards = [
  {
    id: 1,
    number: "01",
    icon: <FiFeather />,
    title: "Full-Grain Leather",
    description:
      "Premium leather selected for strength, character and lasting beauty.",
  },
  {
    id: 2,
    number: "02",
    icon: <FiPenTool />,
    title: "Handcrafted",
    description:
      "Traditional craftsmanship meets thoughtful modern design in every piece.",
  },
  {
    id: 3,
    number: "03",
    icon: <FiCompass />,
    title: "Built for Adventure",
    description:
      "Designed to accompany you through journeys, trails and everyday life.",
  },
  {
    id: 4,
    number: "04",
    icon: <FiClock />,
    title: "Timeless Design",
    description:
      "Made to age beautifully and remain relevant for years to come.",
  },
];

const RidgelineStandard = () => {
  return (
    <section className="bg-[#FAF8F4] py-24">
      <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
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
             The Ridgeline Standard
          </p>
          <span className="text-[#C79A63] text-xs">◆</span>
          <span className="w-14 sm:w-20 h-[1px] bg-[#8B4513]"></span>
        </div>

          
          

          <h2
            className="mt-4 text-5xl md:text-6xl text-[#3B2618]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Crafted with purpose.
            <br />
            Built to last.
          </h2>

          <p className="mt-5 text-[#6E6257] leading-7">
            We believe great leather goods should become part of your story,
            growing more beautiful with every journey.
          </p>

        </div>

        {/* Standards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-20 border-t border-[#D8C8B8]">

          {standards.map((item) => (
            <div
              key={item.id}
              className="group py-10 px-6 lg:px-8 border-b sm:border-b-0 lg:border-r last:border-r-0 border-[#D8C8B8] hover:bg-[#F5F1E8] transition-colors duration-500"
            >

              {/* Number */}
              <span className="text-xs tracking-[0.2em] text-[#A38A72]">
                {item.number}
              </span>

              {/* Icon */}
              <div className="mt-8 text-[#8B4513] text-2xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="mt-5 text-2xl text-[#3B2618]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-[#6E6257]">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default RidgelineStandard;