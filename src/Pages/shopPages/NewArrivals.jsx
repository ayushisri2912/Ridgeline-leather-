import React, { useState, useMemo } from "react";
import ShopHero from "../../Components/ShopComponents/newArrivComps/ShopHero";
import ProductToolbar from "../../Components/ShopComponents/newArrivComps/ProductToolbar";
import FilterSidebar from "../../Components/ShopComponents/newArrivComps/FilterSidebar";
import ProductGrid from "../../Components/ShopComponents/newArrivComps/ProductGrid";
import EditorialBanner from "../../Components/ShopComponents/newArrivComps/EditorialBanner";
import RelatedProducts from "../../Components/ShopComponents/newArrivComps/RelatedProducts";

import { products as allProducts } from "../../Data/productsData";
import { FiX } from "react-icons/fi";

const NewArrivals = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([25, 500]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBestFor, setSelectedBestFor] = useState([]);
  const [sortOption, setSortOption] = useState("Newest");
  const [viewMode, setViewMode] = useState("grid");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter handlers
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleColorChange = (hex) => {
    setSelectedColors((prev) =>
      prev.includes(hex) ? prev.filter((c) => c !== hex) : [...prev, hex]
    );
  };

  const handleBestForChange = (usage) => {
    setSelectedBestFor((prev) =>
      prev.includes(usage) ? prev.filter((u) => u !== usage) : [...prev, usage]
    );
  };

  const handleResetFilters = () => {
    setSelectedCategories([]);
    setPriceRange([25, 500]);
    setSelectedColors([]);
    setSelectedBestFor([]);
  };

  // Filter & Sort New Arrivals (sort by date added or filter)
  const filteredProducts = useMemo(() => {
    // Start with newest products sorted by date
    let result = [...allProducts].sort(
      (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
    );

    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Filter by price
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Filter by colors
    if (selectedColors.length > 0) {
      result = result.filter(
        (p) => p.colors && p.colors.some((hex) => selectedColors.includes(hex))
      );
    }

    // Filter by best for
    if (selectedBestFor.length > 0) {
      result = result.filter(
        (p) =>
          p.bestFor && p.bestFor.some((use) => selectedBestFor.includes(use))
      );
    }

    // Sorting overrides
    if (sortOption === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Best Selling") {
      result.sort((a, b) => (b.badge === "BEST SELLER" ? 1 : -1));
    } else if (sortOption === "Featured") {
      result.sort((a, b) => (b.featured ? 1 : -1));
    }

    return result;
  }, [
    selectedCategories,
    priceRange,
    selectedColors,
    selectedBestFor,
    sortOption,
  ]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#3B2618]">
      {/* Top Shop Hero Banner */}
      <ShopHero />

      {/* Main Content Area - Reduced top whitespace, consistent horizontal breathing room */}
      <main className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16 py-8 lg:py-12">
        {/* Toolbar in light rounded card */}
        <ProductToolbar
          totalProducts={filteredProducts.length}
          sortOption={sortOption}
          onSortChange={setSortOption}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onToggleMobileFilter={() => setIsMobileFilterOpen(true)}
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Desktop Sticky Filter Sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              selectedColors={selectedColors}
              onColorChange={handleColorChange}
              selectedBestFor={selectedBestFor}
              onBestForChange={handleBestForChange}
              onResetFilters={handleResetFilters}
            />
          </div>

          {/* Product Grid Section */}
          <div className="flex-1 w-full">
            <ProductGrid products={filteredProducts} viewMode={viewMode} />
          </div>
        </div>
      </main>

      {/* Editorial Banner */}
      <EditorialBanner />

      {/* Related / Featured Products */}
      <RelatedProducts />

      {/* Mobile Filter Modal Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-[#FAF8F5] h-full shadow-2xl overflow-y-auto p-6 flex flex-col justify-between z-10">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E5D8C8]">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#3B2618]">
                  Filters
                </h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 text-[#3B2618] hover:text-[#8B5E3C]"
                >
                  <FiX size={20} />
                </button>
              </div>

              <FilterSidebar
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
                priceRange={priceRange}
                onPriceChange={setPriceRange}
                selectedColors={selectedColors}
                onColorChange={handleColorChange}
                selectedBestFor={selectedBestFor}
                onBestForChange={handleBestForChange}
                onResetFilters={handleResetFilters}
              />
            </div>

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="mt-6 w-full py-3 bg-[#3B2618] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold rounded-xl hover:bg-[#8B5E3C] transition-colors"
            >
              Show {filteredProducts.length} Products
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewArrivals;
