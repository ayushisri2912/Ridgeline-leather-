import React, { useState, useMemo, useRef } from "react";
import { X, Check, ShoppingBag, SlidersHorizontal } from "lucide-react";
import RifleHero from "../../Components/HuntingGearComponents/rifleCoverComps/RifleHero";
import RifleIntro from "../../Components/HuntingGearComponents/rifleCoverComps/RifleIntro";
import RifleToolbar from "../../Components/HuntingGearComponents/rifleCoverComps/RifleToolbar";
import RifleFilterSidebar from "../../Components/HuntingGearComponents/rifleCoverComps/RifleFilterSidebar";
import RifleProductCard from "../../Components/HuntingGearComponents/rifleCoverComps/RifleProductCard";
import RifleCraftsmanship from "../../Components/HuntingGearComponents/rifleCoverComps/RifleCraftsmanship";
import CompleteCollection from "../../Components/HuntingGearComponents/rifleCoverComps/CompleteCollection";
import { rifleCoverProducts } from "../../Data/productsData";

const RifleCoversPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([200, 500]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBestFor, setSelectedBestFor] = useState([]);
  const [sortOption, setSortOption] = useState("Featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [cartToast, setCartToast] = useState(null);

  const productGridRef = useRef(null);

  const scrollToProducts = () => {
    if (productGridRef.current) {
      productGridRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Filter Handlers
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
    setPriceRange([200, 500]);
    setSelectedColors([]);
    setSelectedBestFor([]);
  };

  const handleQuickAdd = (product, color) => {
    setCartToast({
      title: product.name,
      price: product.price,
      image: product.image,
    });
    setTimeout(() => {
      setCartToast(null);
    }, 4000);
  };

  // Calculate Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    let result = [...rifleCoverProducts];

    // Category Filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Price Filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Color Filter
    if (selectedColors.length > 0) {
      result = result.filter(
        (p) => p.colors && p.colors.some((hex) => selectedColors.includes(hex))
      );
    }

    // Best For Filter
    if (selectedBestFor.length > 0) {
      result = result.filter(
        (p) =>
          p.bestFor && p.bestFor.some((use) => selectedBestFor.includes(use))
      );
    }

    // Sorting
    if (sortOption === "Price Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Newest") {
      result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
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

  const activeFilterCount =
    selectedCategories.length +
    selectedColors.length +
    selectedBestFor.length +
    (priceRange[0] > 200 || priceRange[1] < 500 ? 1 : 0);

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#3B2618] selection:bg-[#8B5A2B] selection:text-[#FAF8F5]">
      
      {/* SECTION 1: HERO SECTION */}
      <RifleHero onExploreClick={scrollToProducts} />

      {/* SECTION 2: COLLECTION INTRO */}
      <RifleIntro />

      {/* MAIN SHOPPING CONTAINER */}
      <div ref={productGridRef} className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16 py-12">
        
        {/* SECTION 3: TOOLBAR */}
        <RifleToolbar
          totalProducts={filteredProducts.length}
          sortOption={sortOption}
          onSortChange={setSortOption}
          onToggleMobileFilter={() => setIsMobileFilterOpen(true)}
          activeFilterCount={activeFilterCount}
        />

        {/* SECTION 4: MAIN SHOPPING LAYOUT (2-COLUMNS) */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* LEFT: STICKY FILTER SIDEBAR (Desktop) */}
          <div className="hidden lg:block shrink-0">
            <RifleFilterSidebar
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

          {/* RIGHT: PRODUCT GRID (3-Column Desktop) */}
          <div className="flex-1 w-full">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProducts.map((product) => (
                  <RifleProductCard
                    key={product.id}
                    product={product}
                    onQuickAdd={handleQuickAdd}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-[#FFFDFC] border border-[#E5D8C8] rounded-2xl p-12 text-center my-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#F6F2EC] flex items-center justify-center text-[#8B5A2B] mb-4">
                  <SlidersHorizontal size={20} />
                </div>
                <h3 className="font-serif text-2xl text-[#3B2618] font-normal mb-2">
                  No Rifle Covers Match Selected Filters
                </h3>
                <p className="text-[#6B6258] text-sm max-w-md mb-6">
                  Try adjusting your price range, color preference, or category filters to explore the full collection.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="bg-[#3B2618] hover:bg-[#8B5A2B] text-[#FAF8F5] px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* SECTION 5: CRAFTSMANSHIP SECTION */}
      <RifleCraftsmanship />

      {/* SECTION 6: COMPLETE THE COLLECTION */}
      <CompleteCollection onQuickAdd={handleQuickAdd} />

      {/* MOBILE FILTER DRAWER MODAL */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex">
          <div
            className="fixed inset-0 bg-[#3B2618]/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-[#FAF8F5] h-full shadow-2xl overflow-y-auto p-6 flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E5D8C8]">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal size={16} className="text-[#8B5A2B]" />
                  <h3 className="font-serif text-xl font-normal text-[#3B2618]">
                    Filter Rifle Covers
                  </h3>
                </div>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-2 text-[#3B2618] hover:text-[#8B5A2B] transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <RifleFilterSidebar
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
              className="mt-8 w-full py-4 bg-[#3B2618] hover:bg-[#8B5A2B] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Apply Filters ({filteredProducts.length})
            </button>
          </div>
        </div>
      )}

      {/* QUICK ADD TOAST NOTIFICATION */}
      {cartToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#FFFDFC] border border-[#E5D8C8] shadow-2xl rounded-2xl p-4 flex items-center gap-4 animate-in slide-in-from-bottom duration-300 max-w-md">
          <img
            src={cartToast.image}
            alt={cartToast.title}
            className="w-14 h-14 rounded-xl object-cover border border-[#E5D8C8]"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 text-[#8B5A2B] text-[11px] font-bold uppercase tracking-wider mb-0.5">
              <Check size={12} />
              <span>Added To Bag</span>
            </div>
            <h4 className="font-serif text-sm font-normal text-[#3B2618] truncate">
              {cartToast.title}
            </h4>
            <span className="text-xs font-semibold text-[#3B2618]">
              ${cartToast.price}
            </span>
          </div>
          <button
            onClick={() => setCartToast(null)}
            className="text-[#6B6258] hover:text-[#3B2618] p-1 cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>
      )}

    </div>
  );
};

export default RifleCoversPage;
