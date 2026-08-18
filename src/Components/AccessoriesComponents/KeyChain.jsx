import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FiChevronDown,
  FiChevronUp,
  FiX,
  FiHeart,
  FiEye,
  FiShoppingBag,
  FiCheck,
  FiSliders,
  FiArrowRight,
  FiStar,
  FiRotateCcw,
} from "react-icons/fi";
import {
  keychainsData,
  keychainFilterCategories,
  keychainSortOptions,
  keychainsCollectionMeta,
  keychainEditorialFeature,
} from "../../Data/keychainsData";
import { useToast } from "../../Context/ToastContext";

const KeyChain = () => {
  const { showToast } = useToast();

  // Active filters state
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    keychainType: [],
    material: [],
    color: [],
    hardware: [],
    price: [],
    availability: [],
  });

  // Accordion open/closed state in sidebar
  const [expandedAccordion, setExpandedAccordion] = useState({
    category: true,
    keychainType: true,
    material: true,
    color: true,
    hardware: true,
    price: true,
    availability: true,
  });

  // Sorting option
  const [sortBy, setSortBy] = useState("featured");

  // Layout UI states
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // User interaction states
  const [wishlist, setWishlist] = useState(new Set());
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Toggle filter option
  const handleFilterToggle = (categoryId, option) => {
    setSelectedFilters((prev) => {
      const current = prev[categoryId] || [];
      const updated = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];
      return { ...prev, [categoryId]: updated };
    });
  };

  // Clear all filters
  const handleClearAllFilters = () => {
    setSelectedFilters({
      category: [],
      keychainType: [],
      material: [],
      color: [],
      hardware: [],
      price: [],
      availability: [],
    });
  };

  // Accordion toggle
  const toggleAccordion = (categoryId) => {
    setExpandedAccordion((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  // Toggle wishlist
  const handleWishlistToggle = (e, product) => {
    e.stopPropagation();
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(product.id)) {
        next.delete(product.id);
        showToast(`Removed "${product.name}" from your wishlist.`, "info", "Wishlist Updated");
      } else {
        next.add(product.id);
        showToast(`Added "${product.name}" to your wishlist.`, "success", "Saved to Wishlist");
      }
      return next;
    });
  };

  // Active filters count
  const activeFiltersCount = useMemo(() => {
    return Object.values(selectedFilters).reduce(
      (count, arr) => count + arr.length,
      0
    );
  }, [selectedFilters]);

  // Filter Products
  const filteredProducts = useMemo(() => {
    return keychainsData.filter((product) => {
      // Category filter
      if (
        selectedFilters.category.length > 0 &&
        !selectedFilters.category.includes(product.category)
      ) {
        return false;
      }

      // Keychain Type filter
      if (
        selectedFilters.keychainType.length > 0 &&
        !selectedFilters.keychainType.includes(product.keychainType)
      ) {
        return false;
      }

      // Material filter
      if (selectedFilters.material.length > 0) {
        const matchesMaterial = selectedFilters.material.some(
          (mat) =>
            product.material.toLowerCase().includes(mat.toLowerCase()) ||
            product.materialShort.toLowerCase().includes(mat.toLowerCase())
        );
        if (!matchesMaterial) return false;
      }

      // Color filter
      if (selectedFilters.color.length > 0) {
        const productColors = [
          product.color,
          ...(product.availableColors || []).map((c) => c.name),
        ].map((c) => c.toLowerCase());
        const matchesColor = selectedFilters.color.some((col) =>
          productColors.some((pc) => pc.includes(col.toLowerCase()))
        );
        if (!matchesColor) return false;
      }

      // Hardware filter
      if (selectedFilters.hardware.length > 0) {
        const matchesHardware = selectedFilters.hardware.some((h) =>
          product.hardware.toLowerCase().includes(h.toLowerCase())
        );
        if (!matchesHardware) return false;
      }

      // Price filter
      if (selectedFilters.price.length > 0) {
        const matchesPrice = selectedFilters.price.some((range) => {
          if (range === "Under $35") return product.price < 35;
          if (range === "$35–$50")
            return product.price >= 35 && product.price <= 50;
          if (range === "$50+") return product.price > 50;
          return true;
        });
        if (!matchesPrice) return false;
      }

      // Availability filter
      if (
        selectedFilters.availability.length > 0 &&
        !selectedFilters.availability.includes(product.availability)
      ) {
        return false;
      }

      return true;
    });
  }, [selectedFilters]);

  // Sorted Products
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === "price-asc") {
      return list.sort((a, b) => a.price - b.price);
    }
    if (sortBy === "price-desc") {
      return list.sort((a, b) => b.price - a.price);
    }
    if (sortBy === "newest") {
      return list.sort((a, b) =>
        a.badge === "NEW ARRIVAL" ? -1 : b.badge === "NEW ARRIVAL" ? 1 : 0
      );
    }
    if (sortBy === "rating") {
      return list.sort((a, b) => b.rating - a.rating);
    }
    return list; // featured
  }, [filteredProducts, sortBy]);

  return (
    <div className="bg-[#FAF8F5] text-[#2C2C2C] min-h-screen font-sans selection:bg-[#8B4513] selection:text-[#FAF8F5]">
      {/* 1. SUBTLE BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-12 pt-6 sm:pt-8 pb-3">
        <ol className="flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#6B6258] font-medium">
          {keychainsCollectionMeta.breadcrumb.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <span className="text-[#C5B8AA] font-light">/</span>}
              <li>
                <Link
                  to={crumb.link}
                  className={`transition-colors duration-300 ${
                    idx === keychainsCollectionMeta.breadcrumb.length - 1
                      ? "text-[#3B2618] font-semibold cursor-default"
                      : "hover:text-[#8B4513]"
                  }`}
                >
                  {crumb.name}
                </Link>
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>

      {/* 2. COLLECTION HEADER */}
      <header className="max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-10 sm:pb-14 text-center border-b border-[#E5D8C8]">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[0.04em] text-[#3B2618] mb-3 sm:mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {keychainsCollectionMeta.title}
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#6B6258] leading-relaxed font-light mb-4 sm:mb-6">
          "{keychainsCollectionMeta.subtitle}"
        </p>
        <div className="inline-flex items-center px-3.5 py-1 rounded-full border border-[#D8C2A8] bg-[#F5F1E8]/70 text-[#8B4513] text-xs uppercase tracking-[0.2em] font-semibold">
          {sortedProducts.length} {sortedProducts.length === 1 ? "Product" : "Products"}
        </div>
      </header>

      {/* 3. PRODUCT TOOLBAR */}
      <div className="sticky top-[68px] sm:top-[76px] z-30 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E5D8C8] transition-all">
        <div className="max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-12 h-14 flex items-center justify-between">
          {/* Left: Filter Toggle & Count */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setIsMobileDrawerOpen(true);
                } else {
                  setIsSidebarOpen(!isSidebarOpen);
                }
              }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#3B2618] hover:text-[#8B4513] transition-colors py-2 group cursor-pointer"
              aria-label="Toggle filters"
            >
              <FiSliders size={16} className="text-[#8B4513] group-hover:rotate-90 transition-transform duration-300" />
              <span>
                {isSidebarOpen ? "Hide Filters" : "Filter"}
              </span>
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#8B4513] text-white text-[10px] flex items-center justify-center font-bold">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            <span className="hidden sm:inline-block text-xs uppercase tracking-[0.15em] text-[#8C8074] font-medium border-l border-[#E5D8C8] pl-4">
              {sortedProducts.length} Products
            </span>
          </div>

          {/* Right: Sort Dropdown */}
          <div className="flex items-center gap-3">
            <div className="relative inline-block text-left">
              <label htmlFor="sort-select-keychains" className="sr-only">
                Sort keychains collection by
              </label>
              <select
                id="sort-select-keychains"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-[#FAF8F5] border border-[#E5D8C8] hover:border-[#8B4513] rounded-none px-3 sm:px-4 py-2 pr-8 text-xs uppercase tracking-[0.14em] font-medium text-[#3B2618] focus:outline-none focus:ring-1 focus:ring-[#8B4513] transition-colors cursor-pointer"
              >
                {keychainSortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <FiChevronDown
                size={14}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8B4513] pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {activeFiltersCount > 0 && (
          <div className="max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-12 py-2.5 bg-[#F5F1E8]/50 border-t border-[#E5D8C8]/60 flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.15em] text-[#8C8074] font-semibold mr-1">
              Active Filters:
            </span>
            {Object.entries(selectedFilters).flatMap(([catId, vals]) =>
              vals.map((val) => (
                <button
                  key={`${catId}-${val}`}
                  onClick={() => handleFilterToggle(catId, val)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#D8C2A8] bg-[#FAF8F5] text-[#3B2618] text-[11px] uppercase tracking-[0.12em] hover:bg-[#8B4513] hover:text-white hover:border-[#8B4513] transition-all group"
                >
                  <span>{val}</span>
                  <FiX size={12} className="text-[#8B4513] group-hover:text-white" />
                </button>
              ))
            )}
            <button
              onClick={handleClearAllFilters}
              className="text-[11px] uppercase tracking-[0.15em] text-[#8B4513] font-semibold hover:underline ml-2 flex items-center gap-1"
            >
              <FiRotateCcw size={11} /> Clear All
            </button>
          </div>
        )}
      </div>

      {/* 4. MAIN COLLECTION LAYOUT */}
      <div className="max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        <div className="flex gap-8 lg:gap-12">
          {/* DESKTOP ACCORDION FILTER SIDEBAR */}
          {isSidebarOpen && (
            <aside className="hidden lg:block w-64 shrink-0 border-r border-[#E5D8C8] pr-8 select-none">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E5D8C8]">
                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#3B2618]">
                  Filter By
                </h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={handleClearAllFilters}
                    className="text-[11px] uppercase tracking-[0.14em] text-[#8B4513] font-medium hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Accordion Groups */}
              <div className="space-y-6">
                {keychainFilterCategories.map((group) => {
                  const isExpanded = expandedAccordion[group.id];
                  const selectedInGroup = selectedFilters[group.id] || [];

                  return (
                    <div key={group.id} className="border-b border-[#E5D8C8]/60 pb-5">
                      <button
                        type="button"
                        onClick={() => toggleAccordion(group.id)}
                        className="w-full flex items-center justify-between text-xs uppercase tracking-[0.18em] font-semibold text-[#3B2618] hover:text-[#8B4513] transition-colors py-1 cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          {group.name}
                          {selectedInGroup.length > 0 && (
                            <span className="w-4 h-4 rounded-full bg-[#8B4513] text-white text-[9px] flex items-center justify-center font-bold">
                              {selectedInGroup.length}
                            </span>
                          )}
                        </span>
                        {isExpanded ? (
                          <FiChevronUp size={14} className="text-[#8B4513]" />
                        ) : (
                          <FiChevronDown size={14} className="text-[#8B4513]" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="mt-3.5 space-y-2.5 pl-0.5">
                          {group.options.map((option) => {
                            const isChecked = selectedInGroup.includes(option);

                            return (
                              <label
                                key={option}
                                className="flex items-center gap-3 cursor-pointer group text-xs text-[#555555] hover:text-[#3B2618] transition-colors"
                              >
                                <div
                                  className={`w-4 h-4 rounded-none border transition-colors flex items-center justify-center ${
                                    isChecked
                                      ? "bg-[#3B2618] border-[#3B2618]"
                                      : "border-[#C5B8AA] bg-[#FAF8F5] group-hover:border-[#8B4513]"
                                  }`}
                                >
                                  {isChecked && (
                                    <FiCheck size={11} className="text-[#FAF8F5]" />
                                  )}
                                </div>
                                <span
                                  className={`tracking-wide transition-colors ${
                                    isChecked ? "font-semibold text-[#3B2618]" : "font-normal"
                                  }`}
                                >
                                  {option}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </aside>
          )}

          {/* MAIN PRODUCT GRID SECTION */}
          <main className="flex-1 min-w-0">
            {sortedProducts.length === 0 ? (
              <div className="py-20 text-center border border-dashed border-[#D8C2A8] bg-[#F5F1E8]/30 px-6">
                <h3
                  className="text-2xl font-normal text-[#3B2618] mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  No Matching Keychains Found
                </h3>
                <p className="text-sm text-[#6B6258] max-w-md mx-auto mb-6">
                  We couldn't find any products matching your selected filter criteria. Try expanding your search or clearing active filters.
                </p>
                <button
                  onClick={handleClearAllFilters}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#3B2618] text-[#F5F1E8] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#8B4513] transition-colors"
                >
                  <FiRotateCcw size={14} /> Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10 sm:gap-y-12">
                {sortedProducts.map((product, index) => {
                  const isWishlisted = wishlist.has(product.id);

                  // Insert Editorial Feature after index 7 (8th product)
                  const shouldRenderEditorial = index === 8;

                  return (
                    <React.Fragment key={product.id}>
                      {/* EDITORIAL FEATURE BANNER */}
                      {shouldRenderEditorial && (
                        <div className="col-span-full my-6 lg:my-10">
                          <div className="relative rounded-none overflow-hidden bg-[#3B2618] text-[#F5F1E8] border border-[#5A3A25] shadow-sm">
                            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] lg:min-h-[440px]">
                              {/* Left / Top Image */}
                              <div className="lg:col-span-7 relative min-h-[260px] lg:min-h-[440px] overflow-hidden">
                                <img
                                  src={keychainEditorialFeature.image}
                                  alt="Ridgeline Keychain Craftsmanship"
                                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3B2618]/20 to-[#3B2618] hidden lg:block" />
                              </div>

                              {/* Right Content */}
                              <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-center bg-[#3B2618]">
                                <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#C79A63] font-semibold mb-3">
                                  Heritage & Craftsmanship
                                </span>
                                <h2
                                  className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-[0.03em] text-[#F5F1E8] mb-4 sm:mb-6"
                                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                  {keychainEditorialFeature.title}
                                </h2>
                                <p className="text-xs sm:text-sm text-[#D8C2A8] leading-relaxed font-light mb-8 max-w-md">
                                  {keychainEditorialFeature.description}
                                </p>
                                <div>
                                  <Link
                                    to={keychainEditorialFeature.buttonLink}
                                    className="inline-flex items-center gap-3 px-7 py-3 border border-[#C79A63] text-[#F5F1E8] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#C79A63] hover:text-[#3B2618] transition-all duration-300 group"
                                  >
                                    <span>{keychainEditorialFeature.buttonText}</span>
                                    <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* PRODUCT CARD */}
                      <div className="group flex flex-col h-full select-none">
                        {/* Image Frame */}
                        <div className="relative aspect-[4/3] bg-[#F5F1E8] border border-[#E8DFD5] overflow-hidden mb-3 sm:mb-4 group">
                          {/* Main & Secondary Image Transition */}
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover object-center absolute inset-0 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:opacity-0"
                          />
                          <img
                            src={product.hoverImage || product.image}
                            alt={`${product.name} alternate view`}
                            className="w-full h-full object-cover object-center absolute inset-0 opacity-0 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:opacity-100"
                          />

                          {/* Badge Tag */}
                          {product.badge && (
                            <div className="absolute top-2.5 left-2.5 z-10">
                              <span className="px-2 py-0.5 bg-[#3B2618]/90 text-[#F5F1E8] text-[9px] sm:text-[10px] uppercase tracking-[0.18em] font-medium backdrop-blur-xs">
                                {product.badge}
                              </span>
                            </div>
                          )}

                          {/* Wishlist Heart Button */}
                          <button
                            onClick={(e) => handleWishlistToggle(e, product)}
                            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                            className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                              isWishlisted
                                ? "bg-[#3B2618] text-[#F5F1E8] shadow-xs"
                                : "bg-[#FAF8F5]/80 text-[#3B2618] hover:bg-[#3B2618] hover:text-[#FAF8F5] opacity-90 group-hover:opacity-100"
                            }`}
                          >
                            <FiHeart
                              size={15}
                              className={isWishlisted ? "fill-current" : ""}
                            />
                          </button>

                          {/* Quick View Button Overlay */}
                          <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#3B2618]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button
                              onClick={() => setQuickViewProduct(product)}
                              className="w-full py-2 bg-[#FAF8F5]/95 text-[#3B2618] hover:bg-[#3B2618] hover:text-[#FAF8F5] text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors duration-300 shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <FiEye size={14} /> Quick View
                            </button>
                          </div>
                        </div>

                        {/* Product Meta */}
                        <div className="flex flex-col flex-1">
                          {/* Material / Type Subtitle */}
                          <span className="text-[10px] uppercase tracking-[0.16em] text-[#8B4513] font-semibold mb-0.5">
                            {product.materialShort}
                          </span>

                          {/* Product Title */}
                          <h3
                            className="text-base sm:text-lg font-normal text-[#3B2618] group-hover:text-[#8B4513] transition-colors leading-snug mb-1"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                          >
                            {product.name}
                          </h3>

                          {/* Price & Hardware */}
                          <div className="mt-auto pt-1 flex items-center justify-between">
                            <span className="text-xs sm:text-sm font-medium tracking-wide text-[#2C2C2C]">
                              ${product.price}
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.14em] text-[#8C8074] font-light">
                              {product.hardware}
                            </span>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* 5. MOBILE FILTER DRAWER */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
          <div
            className="fixed inset-0 bg-[#3B2618]/50 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileDrawerOpen(false)}
          />

          <div className="relative bg-[#FAF8F5] w-full max-h-[85vh] overflow-y-auto rounded-t-2xl shadow-2xl border-t border-[#D8C2A8] p-6 flex flex-col z-10">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E5D8C8]">
              <div className="flex items-center gap-2">
                <FiSliders size={18} className="text-[#8B4513]" />
                <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-[#3B2618]">
                  Filter Keychains ({activeFiltersCount})
                </h3>
              </div>
              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                className="p-2 text-[#3B2618] hover:text-[#8B4513]"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Filter Accordions */}
            <div className="py-4 space-y-5 flex-1">
              {keychainFilterCategories.map((group) => (
                <div key={group.id} className="border-b border-[#E5D8C8]/60 pb-4">
                  <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#3B2618] mb-2.5">
                    {group.name}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {group.options.map((option) => {
                      const isChecked = (
                        selectedFilters[group.id] || []
                      ).includes(option);

                      return (
                        <button
                          key={option}
                          onClick={() => handleFilterToggle(group.id, option)}
                          className={`px-3 py-2 text-left text-xs tracking-wide border transition-all ${
                            isChecked
                              ? "bg-[#3B2618] text-[#F5F1E8] border-[#3B2618] font-medium"
                              : "bg-[#FAF8F5] text-[#555555] border-[#E5D8C8] hover:border-[#8B4513]"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Drawer Actions */}
            <div className="pt-4 border-t border-[#E5D8C8] flex items-center gap-3">
              <button
                onClick={handleClearAllFilters}
                className="w-1/3 py-3 border border-[#E5D8C8] text-xs uppercase tracking-[0.18em] font-semibold text-[#3B2618] hover:bg-[#F5F1E8]"
              >
                Clear All
              </button>
              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                className="w-2/3 py-3 bg-[#3B2618] text-[#F5F1E8] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#8B4513]"
              >
                Show {sortedProducts.length} Products
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. QUICK VIEW MODAL */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
          <div
            className="fixed inset-0 bg-[#3B2618]/60 backdrop-blur-xs transition-opacity"
            onClick={() => setQuickViewProduct(null)}
          />

          <div className="relative bg-[#FAF8F5] border border-[#D8C2A8] w-full max-w-3xl overflow-hidden shadow-2xl z-10 animate-fade-in my-auto max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 z-20 p-2 text-[#3B2618] hover:text-[#8B4513] bg-[#FAF8F5]/80 rounded-full cursor-pointer"
              aria-label="Close modal"
            >
              <FiX size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Gallery */}
              <div className="bg-[#F5F1E8] p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#E5D8C8]">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="max-h-[320px] w-auto object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B4513] font-semibold">
                    {quickViewProduct.materialShort}
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl font-normal text-[#3B2618] mt-1 mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {quickViewProduct.name}
                  </h3>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl font-medium text-[#2C2C2C]">
                      ${quickViewProduct.price} USD
                    </span>
                    <div className="flex items-center gap-1 text-[#8B4513] text-xs">
                      <FiStar className="fill-current" size={12} />
                      <span className="font-semibold">{quickViewProduct.rating}</span>
                      <span className="text-[#8C8074]">({quickViewProduct.reviewsCount})</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light mb-6 border-y border-[#E5D8C8] py-4">
                    {quickViewProduct.description}
                  </p>

                  {/* Specs */}
                  {quickViewProduct.specs && (
                    <div className="space-y-2 mb-6">
                      <h4 className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#3B2618]">
                        Specifications:
                      </h4>
                      {quickViewProduct.specs.map((s, idx) => (
                        <div key={idx} className="flex justify-between text-xs text-[#6B6258]">
                          <span className="font-medium text-[#3B2618]">{s.label}:</span>
                          <span>{s.val}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-4 space-y-3 border-t border-[#E5D8C8]">
                  <button
                    onClick={() => {
                      showToast(`Added "${quickViewProduct.name}" to your shopping bag.`, "success", "Bag Updated");
                      setQuickViewProduct(null);
                    }}
                    className="w-full py-3 bg-[#3B2618] text-[#F5F1E8] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#8B4513] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FiShoppingBag size={16} /> Add to Shopping Bag
                  </button>

                  <Link
                    to={`/product/${quickViewProduct.id}`}
                    className="block text-center text-xs uppercase tracking-[0.16em] text-[#8B4513] font-semibold hover:underline"
                  >
                    View Full Product Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KeyChain;
