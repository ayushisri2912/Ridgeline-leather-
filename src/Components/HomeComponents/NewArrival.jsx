import React, { useState, useEffect } from "react";
import products from "./products";
import ProductCard from "./ProductCards";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiHeart,
  FiStar,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { newArrivalsProducts, bestSellersProducts } from "./tecovasData";

import luxuryHero from "../../assets/Images/luxury_leather_hero.jpg";
import heritageBoots from "../../assets/Images/luxury_heritage_boots.jpg";
import heroBoots from "../../assets/Images/hero_leather_boots.jpg";
import luxuryBoots from "../../assets/Images/luxury_heritage_boots.jpg";
import rideledBag from "../../assets/Images/rideled.jpg";

const slides = [
  {
    id: 1,
    image: luxuryHero,
    badge: "HERITAGE COLLECTION",
    title: "Handcrafted Leather Essentials",
    subtitle: "Designed for timeless adventures and everyday luxury.",
    buttonText: "Shop Collection",
    link: "/shop",
  },
  {
    id: 2,
    image: heritageBoots,
    badge: "FIELD EXPLORER",
    title: "Built For The Rugged Outdoors",
    subtitle: "Unmatched craftsmanship & full-grain durability.",
    buttonText: "Explore Field Gear",
    link: "/shop",
  },
  {
    id: 3,
    image: rideledBag,
    badge: "TRAVEL COLLECTION",
    title: "Timeless Travel Companions",
    subtitle: "Luxury duffel bags & travel accessories made to last.",
    buttonText: "View Travel Bags",
    link: "/shop",
  },
];

const NewArrivals = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("new-arrivals"); // 'new-arrivals' | 'best-sellers'
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProductColors, setActiveProductColors] = useState({});
  const [wishlistedProducts, setWishlistedProducts] = useState({});

  const categories = ["All", "Boots", "Leather Bags", "Wallets & Accessories"];

  const handleSelectTab = (tab) => {
    setActiveTab(tab);
    setSelectedCategory("All");
    const section = document.getElementById("shop-collection-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleColorSelect = (productId, colorObj) => {
    setActiveProductColors((prev) => ({
      ...prev,
      [productId]: colorObj,
    }));
  };

  const toggleWishlist = (productId) => {
    setWishlistedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const currentProductsList =
    activeTab === "new-arrivals" ? newArrivalsProducts : bestSellersProducts;

  const filteredProducts =
    selectedCategory === "All"
      ? currentProductsList
      : currentProductsList.filter((p) => p.category === selectedCategory);

  // Auto-play slider changing every 3 seconds (3000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="bg-[#FAF8F4] pt-8 md:pt-10 pb-8 sm:pb-10">
      {/* Section Heading */}
      <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16">
        {/* Top Section Separator Line between Featured Categories and New Arrivals */}
        <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-10 flex items-center justify-center opacity-70">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#8B4513]/40 to-transparent w-full" />
        </div>

        {/* Section Subtitle Badge & Flanking Lines */}
        <div className="flex items-center justify-center gap-3.5 sm:gap-5 mb-4">
          <span className="w-14 sm:w-20 h-[1px] bg-[#8B4513]"></span>
          <span className="text-[#C79A63] text-xs">◆</span>
          <p
            className="uppercase text-[11px] sm:text-xs tracking-[0.45em] text-[#8B4513] font-semibold"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            New Arrivals
          </p>
          <span className="text-[#C79A63] text-xs">◆</span>
          <span className="w-14 sm:w-20 h-[1px] bg-[#8B4513]"></span>
        </div>

        {/* Heading & Subtext */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#3B2618] leading-tight font-normal"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Crafted For Modern Explorers
          </h2>

          <p className="mt-4 sm:mt-6 text-[#5C5147] text-base sm:text-lg leading-relaxed font-light">
            Discover our latest handcrafted leather essentials designed for
            timeless adventures and everyday luxury.
          </p>
        </div>
      </div>

      {/* FULL-WIDTH HERO SLIDER CAROUSEL */}
      <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[540px] overflow-hidden bg-[#2A1B12]">
        {/* Slides Images */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center brightness-90 contrast-[1.05]"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

            {/* Slide Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
              <span className="uppercase tracking-[0.4em] text-xs sm:text-sm text-[#E7D7B9] font-bold mb-3">
                {slide.badge}
              </span>

              <h3
                className="text-3xl sm:text-5xl lg:text-6xl text-white font-normal max-w-3xl leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {slide.title}
              </h3>

              <p className="text-gray-200 text-sm sm:text-base mt-4 max-w-lg font-light">
                {slide.subtitle}
              </p>

              <Link
                to={slide.link}
                className="mt-8 inline-flex items-center gap-3 bg-[#8B5E3C] hover:bg-[#6D4420] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg"
              >
                <span>{slide.buttonText}</span>
                <FiArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/20 hover:bg-white/90 text-white hover:text-[#3B2618] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
        >
          <FiChevronLeft size={22} />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/20 hover:bg-white/90 text-white hover:text-[#3B2618] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
        >
          <FiChevronRight size={22} />
        </button>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                idx === currentSlide
                  ? "w-8 bg-[#8B5E3C]"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* WHAT'S NEW SECTION BELOW SLIDER */}
      <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16">
        <div className="flex flex-col items-center justify-center pt-14 sm:pt-16 pb-4 text-center">
          <span className="w-12 h-[1px] bg-[#8B4513] mb-3"></span>
          <p
            className="uppercase tracking-[0.45em] text-xs sm:text-sm text-[#8B5E3C] font-bold"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What's New
          </p>
        </div>

        {/* 1. DUAL SPLIT BANNER SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 my-8 md:my-12">
          
          {/* LEFT SPLIT SECTION: NEW ARRIVALS */}
          <div
            onClick={() => handleSelectTab("new-arrivals")}
            className="group relative h-[420px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-[#E8DFC8]"
          >
            <img
              src={heroBoots}
              alt="New Arrivals Collection"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.88] contrast-[1.05]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15 group-hover:from-black/90 transition-all duration-500" />

            <div className="absolute inset-0 p-8 sm:p-10 lg:p-12 flex flex-col justify-between z-10">
              <div className="flex justify-start">
                <span className="bg-[#8B5E3C] text-white text-[11px] font-bold uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-md">
                  NEW SEASON COLLECTION
                </span>
              </div>

              <div>
                <h3
                  className="text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  NEW ARRIVALS
                </h3>
                <p className="text-gray-200 text-sm sm:text-base mt-3 max-w-md font-light leading-relaxed">
                  Fresh off the line. Discover our newest handcrafted leather boots, duffels & outdoor accessories.
                </p>

                <Link
                  to="/shop/new-arrivals"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-6 inline-flex items-center gap-3 bg-white hover:bg-[#8B5E3C] text-[#3B2618] hover:text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 transform group-hover:translate-x-1 shadow-lg"
                >
                  <span>Shop New Arrivals</span>
                  <FiArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SPLIT SECTION: BEST SELLERS */}
          <div
            onClick={() => handleSelectTab("best-sellers")}
            className="group relative h-[420px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-[#E8DFC8]"
          >
            <img
              src={luxuryBoots}
              alt="Best Sellers Collection"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.88] contrast-[1.05]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15 group-hover:from-black/90 transition-all duration-500" />

            <div className="absolute inset-0 p-8 sm:p-10 lg:p-12 flex flex-col justify-between z-10">
              <div className="flex justify-start">
                <span className="bg-[#3B2618] text-[#E7D7B9] text-[11px] font-bold uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-md border border-[#8B5E3C]/40">
                  TOP RATED FAVORITES
                </span>
              </div>

              <div>
                <h3
                  className="text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  BEST SELLERS
                </h3>
                <p className="text-gray-200 text-sm sm:text-base mt-3 max-w-md font-light leading-relaxed">
                  Tried, tested, and customer loved. Explore iconic boots, wallets & timeless everyday essentials.
                </p>

                <Link
                  to="/shop/best-sellers"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-6 inline-flex items-center gap-3 bg-white hover:bg-[#3B2618] text-[#3B2618] hover:text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 transform group-hover:translate-x-1 shadow-lg"
                >
                  <span>Shop Best Sellers</span>
                  <FiArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* 2. INTERACTIVE SHOP PRODUCT SHOWCASE SECTION */}
        <div id="shop-collection-section" className="pt-10 pb-16">
          
          {/* Section Header & Tab Switcher */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 border-b border-[#E4D8C8] pb-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#8B5E3C] font-semibold">
                CURATED SELECTION
              </span>
              <h3
                className="text-3xl sm:text-4xl md:text-5xl text-[#3B2618] mt-1 font-normal"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {activeTab === "new-arrivals" ? "Shop New Arrivals" : "Shop Best Sellers"}
              </h3>
            </div>

            {/* Main Section Tab Switcher */}
            <div className="inline-flex p-1.5 rounded-full bg-[#EFE9DF] border border-[#DCD0C0]">
              <button
                onClick={() => setActiveTab("new-arrivals")}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer ${
                  activeTab === "new-arrivals"
                    ? "bg-[#8B5E3C] text-white shadow-md"
                    : "text-[#5C5147] hover:text-[#3B2618]"
                }`}
              >
                New Arrivals
              </button>

              <button
                onClick={() => setActiveTab("best-sellers")}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer ${
                  activeTab === "best-sellers"
                    ? "bg-[#8B5E3C] text-white shadow-md"
                    : "text-[#5C5147] hover:text-[#3B2618]"
                }`}
              >
                Best Sellers
              </button>
            </div>
          </div>

          {/* Sub-Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#3B2618] text-[#EFE9DF]"
                    : "bg-[#F3EDE2] text-[#6B5B4E] hover:bg-[#E8DFC8] border border-[#E0D4C2]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => {
              const selectedColor = activeProductColors[product.id] || product.colors[0];
              const displayImage = selectedColor?.img || product.mainImage;
              const isWishlisted = wishlistedProducts[product.id];

              return (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E6DCCF] hover:border-[#8B5E3C]/40 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between block h-full"
                >
                  {/* Product Image & Badges Container */}
                  <div className="relative overflow-hidden aspect-[4/5] bg-[#F7F4EF]">
                    
                    {/* Top Tag Badge */}
                    <span className="absolute top-3.5 left-3.5 z-20 bg-[#3B2618] text-white text-[10px] uppercase font-bold tracking-[0.18em] px-3 py-1 rounded-full shadow-sm">
                      {product.badge}
                    </span>

                    {/* Wishlist Heart Icon */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                      aria-label="Add to Wishlist"
                      className={`absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer ${
                        isWishlisted
                          ? "bg-red-50 text-red-600"
                          : "bg-white/80 hover:bg-white text-[#5C5147] hover:text-red-500 backdrop-blur-sm"
                      }`}
                    >
                      <FiHeart size={16} fill={isWishlisted ? "currentColor" : "none"} />
                    </button>

                    {/* Image with Hover Alternate View */}
                    <img
                      src={displayImage}
                      alt={product.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Secondary Hover Image overlay effect */}
                    {product.hoverImage && (
                      <img
                        src={product.hoverImage}
                        alt={`${product.title} Alternate View`}
                        className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      />
                    )}
                  </div>

                  {/* Product Details Section */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Color Variant Swatches */}
                      <div className="flex items-center gap-2 mb-3">
                        {product.colors.map((color, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleColorSelect(product.id, color);
                            }}
                            title={color.name}
                            className={`w-4 h-4 rounded-full border transition-all cursor-pointer ${
                              selectedColor.name === color.name
                                ? "ring-2 ring-[#8B5E3C] ring-offset-2 scale-110 border-transparent"
                                : "border-gray-300 hover:scale-105"
                            }`}
                            style={{ backgroundColor: color.hex }}
                          />
                        ))}
                        <span className="text-[11px] text-[#7C6E63] ml-1 font-light">
                          {selectedColor.name}
                        </span>
                      </div>

                      {/* Title */}
                      <h4
                        className="text-2xl text-[#3B2618] font-normal leading-snug group-hover:text-[#8B5E3C] transition-colors"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {product.title}
                      </h4>

                      {/* Subtitle / Material */}
                      <p className="text-xs text-[#7C6E63] mt-1 line-clamp-1 font-light">
                        {product.subtitle}
                      </p>
                    </div>

                    {/* Rating & Price */}
                    <div className="mt-4 pt-3 border-t border-[#F0E8DC] flex items-center justify-between">
                      {/* Rating */}
                      <div className="flex items-center gap-1">
                        <FiStar size={13} className="text-[#C79A63] fill-[#C79A63]" />
                        <span className="text-xs font-semibold text-[#3B2618]">
                          {product.rating}
                        </span>
                        <span className="text-[11px] text-gray-400">
                          ({product.reviewsCount})
                        </span>
                      </div>

                      {/* Price */}
                      <span className="text-base font-bold text-[#3B2618]">
                        {product.price}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom Shop All CTA Button */}
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              to="/shop/all-products"
              className="inline-flex items-center gap-3 bg-[#3B2618] hover:bg-[#8B5E3C] text-white px-9 py-4 rounded-full text-xs font-bold uppercase tracking-[0.25em] shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Shop Now</span>
              <FiArrowRight size={16} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default NewArrivals;