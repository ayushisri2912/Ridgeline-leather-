import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiX, FiClock, FiTrendingUp, FiArrowRight, FiTrash2 } from "react-icons/fi";

import bagImage from "../../assets/Images/baggs.jpg";
import huntImage from "../../assets/Images/rafel.avif";
import accessoryImage from "../../assets/Images/accessory.avif";
import walletImage from "../../assets/Images/shop.avif";
import rifleImage from "../../assets/Images/hunt.avif";
import bootsImage from "../../assets/Images/boots.jpg";

// Dummy Products Database for Live Search
const DUMMY_PRODUCTS = [
  { id: 1, name: "Leather Duffel Bag", category: "Travel Collection", price: "$345", image: bagImage },
  { id: 2, name: "Field Hunting Scabbard", category: "Hunting Gear", price: "$220", image: huntImage },
  { id: 3, name: "Heritage Leather Belt", category: "Accessories", price: "$95", image: accessoryImage },
  { id: 4, name: "Classic Bifold Wallet", category: "Accessories", price: "$85", image: walletImage },
  { id: 5, name: "Outdoor Rifle Sleeve", category: "Hunting Gear", price: "$190", image: rifleImage },
  { id: 6, name: "Crafted Field Boots", category: "Footwear", price: "$410", image: bootsImage },
];

const POPULAR_SEARCHES = [
  "Hunting Gear",
  "Leather Bags",
  "Rifle Scabbards",
  "Wallets",
  "Belts",
  "Travel Bags",
];

const INITIAL_RECENT_SEARCHES = ["Leather Backpack", "Classic Wallet", "Leather Belt"];

const TRENDING_PRODUCTS = [
  { id: 1, name: "Leather Duffel Bag", category: "Travel Collection", price: "$345", image: bagImage },
  { id: 2, name: "Field Hunting Scabbard", category: "Hunting Gear", price: "$220", image: huntImage },
  { id: 4, name: "Classic Bifold Wallet", category: "Accessories", price: "$85", image: walletImage },
];

const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState(INITIAL_RECENT_SEARCHES);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  // Auto Focus on Input when Overlay Opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      setQuery("");
      setSelectedIndex(-1);
    }
  }, [isOpen]);

  // Handle Keyboard Navigation (Escape, ArrowUp, ArrowDown, Enter)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filteredProducts.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredProducts.length - 1));
      } else if (e.key === "Enter" && selectedIndex >= 0) {
        e.preventDefault();
        const selected = filteredProducts[selectedIndex];
        if (selected) {
          handleSelectQuery(selected.name);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, query]);

  // Filtered Live Search Results
  const filteredProducts = query.trim()
    ? DUMMY_PRODUCTS.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelectQuery = (searchTerm) => {
    setQuery(searchTerm);
    if (!recentSearches.includes(searchTerm)) {
      setRecentSearches([searchTerm, ...recentSearches.slice(0, 4)]);
    }
  };

  const handleClearRecent = (itemToRemove, e) => {
    e.stopPropagation();
    setRecentSearches(recentSearches.filter((item) => item !== itemToRemove));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-6 sm:pt-10 md:pt-14 px-4 overflow-y-auto">
          {/* Backdrop Blur & Dimming Layer */}
          <motion.div
            className="fixed inset-0 bg-[#3B2618]/65 backdrop-blur-md -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            onClick={onClose}
          />

          {/* Centered Luxury Search Panel */}
          <motion.div
            ref={panelRef}
            className="w-full max-w-[840px] bg-[#F5F1E8] rounded-[24px] border border-[#D8C2A8] shadow-[0_25px_60px_-15px_rgba(59,38,24,0.35)] p-6 sm:p-8 md:p-10 relative overflow-hidden my-auto"
            initial={{ opacity: 0, y: -45, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header: Brand Name + Close Icon */}
            <div className="flex items-center justify-between pb-6 border-b border-[#E8DFD1]">
              <div className="flex flex-col">
                <span
                  className="text-2xl sm:text-3xl font-normal tracking-[0.14em] text-[#8B4513]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  RIDGELINE
                </span>
                <span
                  className="uppercase text-[9px] sm:text-[10px] tracking-[0.55em] text-[#3B2618] mt-0.5 font-medium"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  LEATHER
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-[#E9DFD1]/60 hover:bg-[#8B4513] text-[#3B2618] hover:text-[#F5F1E8] flex items-center justify-center transition-all duration-300 transform hover:rotate-90 shadow-sm"
                aria-label="Close search overlay"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Search Input Box */}
            <div className="relative mt-6">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-[#8B4513]">
                <FiSearch size={22} />
              </div>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(-1);
                }}
                placeholder="Search leather bags, hunting gear, wallets, belts..."
                className="w-full h-16 pl-14 pr-12 bg-white rounded-2xl border border-[#D8C2A8] text-[#3B2618] placeholder-[#7A685D]/70 text-sm sm:text-base font-medium focus:outline-none focus:border-[#8B4513] focus:ring-4 focus:ring-[#8B4513]/15 transition-all duration-300 shadow-inner"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#7A685D] hover:text-[#8B4513]"
                >
                  <FiX size={18} />
                </button>
              )}
            </div>

            {/* LIVE SEARCH RESULTS DROPDOWN */}
            {query.trim() !== "" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-white rounded-2xl border border-[#D8C2A8] shadow-lg max-h-[380px] overflow-y-auto p-4"
              >
                <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8B4513] px-3 pb-3 border-b border-[#F5F1E8]">
                  Products ({filteredProducts.length})
                </div>

                {filteredProducts.length > 0 ? (
                  <div className="divide-y divide-[#F5F1E8] mt-1">
                    {filteredProducts.map((product, idx) => (
                      <div
                        key={product.id}
                        onClick={() => handleSelectQuery(product.name)}
                        className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                          selectedIndex === idx
                            ? "bg-[#8B4513] text-[#F5F1E8]"
                            : "hover:bg-[#F5F1E8] text-[#3B2618]"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover border border-[#D8C2A8]"
                          />
                          <div>
                            <h4
                              className={`text-sm font-semibold ${
                                selectedIndex === idx ? "text-white" : "text-[#3B2618]"
                              }`}
                            >
                              {product.name}
                            </h4>
                            <p
                              className={`text-xs ${
                                selectedIndex === idx ? "text-[#E9DFD1]" : "text-[#7A685D]"
                              }`}
                            >
                              {product.category}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`text-sm font-bold ${
                            selectedIndex === idx ? "text-[#C79A63]" : "text-[#8B4513]"
                          }`}
                        >
                          {product.price}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-8 text-center text-[#7A685D] text-sm font-light">
                    No results found for "<span className="font-semibold text-[#3B2618]">{query}</span>"
                  </div>
                )}
              </motion.div>
            ) : (
              /* DEFAULT OVERLAY CONTENT: POPULAR SEARCHES, RECENT SEARCHES, TRENDING PRODUCTS */
              <div className="mt-8 space-y-8">
                {/* Popular Searches */}
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#8B4513] mb-3">
                    <FiTrendingUp size={14} />
                    <span>Popular Searches</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {POPULAR_SEARCHES.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectQuery(chip)}
                        className="px-4 py-2 bg-[#E9DFD1]/60 hover:bg-[#8B4513] text-[#3B2618] hover:text-[#F5F1E8] border border-[#D8C2A8]/70 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#8B4513] mb-3">
                      <FiClock size={14} />
                      <span>Recent Searches</span>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {recentSearches.map((item, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleSelectQuery(item)}
                          className="group inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#D8C2A8]/60 hover:border-[#8B4513] rounded-lg text-xs text-[#3B2618] hover:text-[#8B4513] cursor-pointer transition-all duration-200 shadow-sm"
                        >
                          <FiClock size={12} className="text-[#7A685D] group-hover:text-[#8B4513]" />
                          <span className="font-medium">{item}</span>
                          <button
                            onClick={(e) => handleClearRecent(item, e)}
                            className="text-[#7A685D]/60 hover:text-red-600 ml-1"
                            title="Remove from history"
                          >
                            <FiTrash2 size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Trending Products */}
                <div>
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] font-semibold text-[#8B4513] mb-4">
                    <span>Trending Products</span>
                    <span className="text-[10px] text-[#7A685D] lowercase tracking-normal">Handcrafted Classics</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {TRENDING_PRODUCTS.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => handleSelectQuery(product.name)}
                        className="group bg-white rounded-2xl border border-[#D8C2A8]/70 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                      >
                        <div className="overflow-hidden h-36 relative bg-[#FAF8F2]">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                            <span className="text-white text-xs font-medium flex items-center gap-1">
                              View Product <FiArrowRight size={12} />
                            </span>
                          </div>
                        </div>
                        <div className="p-3.5">
                          <p className="text-[10px] uppercase tracking-wider text-[#7A685D] font-medium">
                            {product.category}
                          </p>
                          <h4 className="text-xs sm:text-sm font-semibold text-[#3B2618] mt-0.5 truncate group-hover:text-[#8B4513] transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-xs font-bold text-[#8B4513] mt-1">{product.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
