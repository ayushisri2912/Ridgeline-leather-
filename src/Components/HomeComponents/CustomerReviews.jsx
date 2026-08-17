import React, { useState } from "react";
import { FiStar, FiCheckCircle, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import reviewImage1 from "../../assets/Images/baggs.jpg";
import reviewImage2 from "../../assets/Images/accessory.avif";
import reviewImage3 from "../../assets/Images/leather-bag.jpg";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Arjun Mehta",
      location: "New Delhi, India",
      role: "Verified Customer",
      product: "The Heritage Duffel",
      image: reviewImage1,
      rating: 5,
      quote:
        "The leather quality is exceptional. It has traveled with me through multiple journeys and only looks richer and more refined with time.",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      location: "Mumbai, India",
      role: "Verified Customer",
      product: "The Trail Messenger",
      image: reviewImage2,
      rating: 5,
      quote:
        "You can feel the artisan craftsmanship the moment you hold it. The full-grain leather and solid hardware are truly top-tier.",
    },
    {
      id: 3,
      name: "Ananya Kapoor",
      location: "Bangalore, India",
      role: "Verified Customer",
      product: "The Classic Weekender",
      image: reviewImage3,
      rating: 5,
      quote:
        "A timeless piece with genuine character. It's rare to find such authentic hand-finished leather with such thoughtful attention to detail.",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#FAF8F4] py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16">
        {/* Top Section Separator Line */}
        <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-10 flex items-center justify-center opacity-70">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#8B4513]/40 to-transparent w-full" />
        </div>

        {/* Section Badge & Heading (Matching New Arrivals & Homepage Styling) */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="flex items-center justify-center gap-3.5 sm:gap-5 mb-4">
            <span className="w-14 sm:w-20 h-[1px] bg-[#8B4513]"></span>
            <span className="text-[#C79A63] text-xs">◆</span>
            <p
              className="uppercase text-[11px] sm:text-xs tracking-[0.45em] text-[#8B4513] font-semibold"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Customer Stories
            </p>
            <span className="text-[#C79A63] text-xs">◆</span>
            <span className="w-14 sm:w-20 h-[1px] bg-[#8B4513]"></span>
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-[#3B2618] leading-tight font-normal mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Stories From Those Who Carry Ridgeline
          </h2>

          <p
            className="text-[#5C5147] text-base sm:text-lg leading-relaxed font-light"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Real experiences from travelers, creators, and leather enthusiasts who take our handcrafted pieces everywhere.
          </p>
        </div>

        {/* Minimal & Elegant 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E8DFD5] shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(139,69,19,0.08)] hover:border-[#8B4513]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Customer Profile & Stars */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F2ECE4]">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#8B4513]/20 shrink-0 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div>
                      <h3
                        className="text-sm font-semibold text-[#3B2618] leading-tight"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {review.name}
                      </h3>
                      <span
                        className="text-[11px] text-[#8B4513] font-medium block mt-0.5"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {review.location}
                      </span>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex text-[#C79A63] text-xs gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>

                {/* Review Quote */}
                <p
                  className="text-[#3B2618] text-lg sm:text-xl italic font-normal leading-relaxed mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  “{review.quote}”
                </p>
              </div>

              {/* Footer: Verified Badge & Product Tag */}
              <div className="pt-4 border-t border-[#F2ECE4] flex items-center justify-between">
                <span
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#7A6B5D]"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <FiCheckCircle size={13} className="text-[#8B4513]" />
                  <span>{review.role}</span>
                </span>

                <span
                  className="text-[11px] font-semibold text-[#8B4513] bg-[#8B4513]/10 px-3 py-1 rounded-md tracking-wide"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {review.product}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Bottom Trust Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left bg-white/70 backdrop-blur-sm border border-[#E8DFD5] rounded-2xl py-4 px-8 max-w-xl mx-auto shadow-sm">
          <div className="flex items-center gap-1 text-[#C79A63] text-sm">
            <span>★★★★★</span>
            <span
              className="text-xs font-bold text-[#3B2618] ml-1.5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              4.9 / 5.0 Rating
            </span>
          </div>
          <span className="hidden sm:inline text-gray-300">|</span>
          <p
            className="text-xs text-[#5C5147] font-medium"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Trusted by 1,200+ customers worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;