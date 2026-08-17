import React from "react";
import heroImage from "../../../assets/Images/baggs.jpg";
import { ArrowRight } from "lucide-react";

const BestSellerHero = () => {
  return (
    <section className="bg-[#F6F2EC]">
      <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16 py-20 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <div>

            <p className="uppercase tracking-[0.35em] text-[12px] text-[#8B5A2B] mb-5">
              Customer Favorites
            </p>

            <h1
              className="text-[#3B2618] text-5xl lg:text-6xl leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Best Sellers
            </h1>

            <p className="mt-8 text-[#6B6258] text-lg leading-9 max-w-lg">
              Discover our most loved handcrafted leather pieces,
              trusted by travelers, professionals, and outdoor
              enthusiasts for timeless quality and everyday luxury.
            </p>

            <div className="mt-10 flex items-center gap-6">

              <button className="bg-[#3B2618] text-white px-8 py-4 rounded-full hover:bg-[#5A3A24] transition duration-300">
                Shop Best Sellers
              </button>

              <button className="flex items-center gap-2 text-[#3B2618] hover:gap-3 transition-all duration-300">
                Explore Collection
                <ArrowRight size={18} />
              </button>

            </div>

            <div className="flex items-center gap-8 mt-12">

              <div>
                <h3 className="text-3xl text-[#3B2618] font-semibold">
                  4.9★
                </h3>

                <p className="text-[#7A6D61] text-sm">
                  Customer Rating
                </p>
              </div>

              <div className="w-px h-12 bg-[#D8C9B8]"></div>

              <div>
                <h3 className="text-3xl text-[#3B2618] font-semibold">
                  5K+
                </h3>

                <p className="text-[#7A6D61] text-sm">
                  Happy Customers
                </p>
              </div>

            </div>

          </div>

          {/* Right Image */}

          <div className="relative">

            <img
              src={heroImage}
              alt="Best Sellers"
              className="w-full h-[620px] object-cover rounded-[28px]"
            />

            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-5">

              <p className="uppercase tracking-[0.2em] text-xs text-[#8B5A2B]">
                Editor's Pick
              </p>

              <h3
                className="text-2xl text-[#3B2618] mt-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Heritage Explorer Duffel
              </h3>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BestSellerHero;