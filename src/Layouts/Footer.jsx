import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative bg-[#3B2618] text-[#F5F1E8] font-sans overflow-hidden border-t border-[#5A3D2A]">
      {/* Subtle Background Texture & Radial Glow Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4E3423]/40 via-[#3B2618] to-[#2B1B10] pointer-events-none -z-0" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[250px] bg-[#C79A63]/5 blur-[120px] pointer-events-none -z-0" />

      {/* Top Banner Tagline Bar */}
      <div className="border-b border-[#5A3D2A]/60 relative z-10">
        <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16 py-3.5 text-center">
          <p
            className="text-[#C79A63] tracking-[0.35em] uppercase text-[11px] sm:text-xs font-semibold"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            ✦ Built for the Field • Crafted for a Lifetime ✦
          </p>
        </div>
      </div>

      {/* Main Compact Footer Grid */}
      <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16 py-12 lg:py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Col 1: Brand Info & Socials (4 cols on lg) */}
          <div className="lg:col-span-4 max-w-sm">
            <Link to="/" className="inline-block group">
              <h2
                className="text-3xl sm:text-4xl text-[#F5F1E8] tracking-[0.12em] leading-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                RIDGELINE
              </h2>
              <div className="flex items-center gap-2.5 mt-1">
                <span className="w-8 h-[1px] bg-[#C79A63]"></span>
                <span
                  className="uppercase text-[10px] tracking-[0.5em] text-[#C79A63] font-medium"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  LEATHER
                </span>
                <span className="w-8 h-[1px] bg-[#C79A63]"></span>
              </div>
            </Link>

            <p className="mt-4 text-[#D8CFC4]/90 text-xs sm:text-sm leading-relaxed font-light">
              Handcrafted premium leather goods inspired by the outdoors.
              Designed for hunters, travellers and modern adventurers who
              appreciate timeless craftsmanship.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#5A3D2A] bg-[#3B2618]/50 flex items-center justify-center text-[#D8CFC4] hover:text-white hover:bg-[#8B4513] hover:border-[#8B4513] transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
              >
                <FaInstagram size={14} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-[#5A3D2A] bg-[#3B2618]/50 flex items-center justify-center text-[#D8CFC4] hover:text-white hover:bg-[#8B4513] hover:border-[#8B4513] transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
              >
                <FaFacebookF size={13} />
              </a>

              <a
                href="#"
                aria-label="Pinterest"
                className="w-9 h-9 rounded-full border border-[#5A3D2A] bg-[#3B2618]/50 flex items-center justify-center text-[#D8CFC4] hover:text-white hover:bg-[#8B4513] hover:border-[#8B4513] transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
              >
                <FaPinterestP size={13} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-[#5A3D2A] bg-[#3B2618]/50 flex items-center justify-center text-[#D8CFC4] hover:text-white hover:bg-[#8B4513] hover:border-[#8B4513] transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
              >
                <FaYoutube size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Shop Links (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h3
              className="text-lg text-[#F5F1E8] mb-4 font-normal tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Shop
            </h3>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#E9DFD1]/80 font-light">
              <li>
                <Link to="/shop" className="hover:text-[#C79A63] transition-colors duration-200">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#C79A63] transition-colors duration-200">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#C79A63] transition-colors duration-200">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#C79A63] transition-colors duration-200">
                  Hunting Gear
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#C79A63] transition-colors duration-200">
                  Leather Bags
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#C79A63] transition-colors duration-200">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Care (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h3
              className="text-lg text-[#F5F1E8] mb-4 font-normal tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Customer Care
            </h3>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#E9DFD1]/80 font-light">
              <li>
                <Link to="/stores" className="hover:text-[#C79A63] transition-colors duration-200">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C79A63] transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#C79A63] transition-colors duration-200">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C79A63] transition-colors duration-200">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C79A63] transition-colors duration-200">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C79A63] transition-colors duration-200">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter (4 cols on lg) */}
          <div className="lg:col-span-4">
            <h3
              className="text-lg text-[#F5F1E8] mb-2 font-normal tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Join The Ridgeline Club
            </h3>

            <p className="text-xs sm:text-sm text-[#D8CFC4]/90 font-light leading-relaxed mb-4">
              Subscribe for exclusive product launches, field stories and heritage updates.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full h-11 px-4 bg-[#2B1B10]/60 border border-[#5A3D2A] rounded-xl text-xs sm:text-sm text-[#F5F1E8] placeholder:text-[#9A8A7A] focus:outline-none focus:border-[#C79A63] transition-colors shadow-inner"
              />
              <button
                type="submit"
                className="h-11 px-5 bg-[#8B4513] hover:bg-[#A35518] text-[#F5F1E8] rounded-xl transition-all duration-300 text-xs uppercase font-semibold tracking-wider flex items-center justify-center shrink-0 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                aria-label="Subscribe"
              >
                <span>Subscribe</span>
                <FiArrowRight size={14} className="ml-1.5" />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Slim Bottom Footer Bar */}
      <div className="border-t border-[#5A3D2A]/60 bg-[#2B1B10]/40 relative z-10">
        <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#B5A798] font-light">
          
          {/* Copyright */}
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-[#C79A63] font-medium">RIDGELINE LEATHER</span>. All Rights Reserved.
          </p>

          {/* Privacy & Policy Links */}
          <div className="flex flex-wrap justify-center gap-5 sm:gap-6 text-xs text-[#B5A798]">
            <Link to="/privacy-policy" className="hover:text-[#C79A63] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#C79A63] transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/shipping" className="hover:text-[#C79A63] transition-colors">
              Shipping
            </Link>
            <Link to="/returns" className="hover:text-[#C79A63] transition-colors">
              Returns
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;