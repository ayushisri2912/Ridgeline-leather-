import React from "react";
import { ArrowRight } from "lucide-react";
import editorImg from "../../../assets/Images/baggs.jpg";
const EditorsChoice = () => {
  return (
    <section className="bg-[#FAF8F5] py-24">
      <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16">

        <div className="rounded-[32px] overflow-hidden bg-[#F6F2EC] grid lg:grid-cols-2">

          {/* Left Image */}

          <div className="relative overflow-hidden">

            <img
              src={editorImg}
              alt="Editor's Choice"
              className="w-full h-[600px] object-cover transition duration-700 hover:scale-105"
            />

          </div>

          {/* Right */}

          <div className="flex flex-col justify-center px-10 lg:px-16 py-16">

            <span className="uppercase tracking-[0.35em] text-[11px] text-[#8B5A2B]">
              Editor's Choice
            </span>

            <h2
              className="mt-5 text-5xl text-[#3B2618] leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Heritage Explorer
              <br />
              Leather Duffel
            </h2>

            <p className="mt-8 text-[#6B6258] leading-8">
              Built from full-grain leather and finished by skilled artisans,
              this timeless duffel is designed to accompany every journey,
              becoming richer with age and every adventure.
            </p>

            <div className="flex gap-10 mt-10">

              <div>
                <h3 className="text-3xl font-semibold text-[#3B2618]">
                  100%
                </h3>

                <p className="text-sm text-[#6B6258] mt-2">
                  Full Grain Leather
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-[#3B2618]">
                  Handmade
                </h3>

                <p className="text-sm text-[#6B6258] mt-2">
                  Crafted by Experts
                </p>
              </div>

            </div>

            <button className="mt-12 w-fit flex items-center gap-3 border-b border-[#3B2618] pb-2 text-[#3B2618] hover:gap-5 transition-all">

              Discover This Piece

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default EditorsChoice;