import React, { useState, useMemo } from "react";
import HeroSection from "../Components/StoreComponents/HeroSection";
import StoreSearch from "../Components/StoreComponents/StoreSearch";
import StoreCard from "../Components/StoreComponents/StoreCard";
import StoreMap from "../Components/StoreComponents/StoreMap";
import WhyVisitSection from "../Components/StoreComponents/WhyVisitSection";
import WorkshopBanner from "../Components/StoreComponents/WorkshopBanner";
import StoreDetailModal from "../Components/StoreComponents/StoreDetailModal";
import BookAppointmentModal from "../Components/StoreComponents/BookAppointmentModal";

import { STORES_DATA } from "../Data/storesData";
import { useToast } from "../Context/ToastContext";

const StoreLocator = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeViewMode, setActiveViewMode] = useState("split"); // 'grid', 'split', 'map'
  const [selectedStore, setSelectedStore] = useState(null);
  const [activeModalStore, setActiveModalStore] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialStore, setBookingInitialStore] = useState(null);

  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState("");

  const toastContext = useToast();

  const showNotification = (msg) => {
    if (toastContext && toastContext.addToast) {
      toastContext.addToast(msg, "success");
    } else {
      alert(msg);
    }
  };

  // Search & Category Filtering Logic
  const filteredStores = useMemo(() => {
    return STORES_DATA.filter((store) => {
      const matchesCategory =
        selectedCategory === "All" || store.type === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        store.name.toLowerCase().includes(q) ||
        store.tagline.toLowerCase().includes(q) ||
        store.address.city.toLowerCase().includes(q) ||
        store.address.state.toLowerCase().includes(q) ||
        store.address.zip.toLowerCase().includes(q) ||
        store.address.street.toLowerCase().includes(q) ||
        store.collections.some((c) => c.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Geolocation Handler
  const handleUseCurrentLocation = () => {
    setIsLocating(true);
    setLocationError("");

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setIsLocating(false);
          // Set search query to Austin as closest flagship demo match
          setSearchQuery("Austin");
          showNotification("Location retrieved! Displaying nearest Ridgeline Showroom in Austin, TX.");
        },
        (error) => {
          setIsLocating(false);
          // Fallback simulation for smooth UX
          setSearchQuery("Austin");
          setLocationError("Location permission restricted. Displaying flagship showrooms nearest to your region.");
        },
        { timeout: 6000 }
      );
    } else {
      setIsLocating(false);
      setSearchQuery("Austin");
      setLocationError("Geolocation is not supported by your browser.");
    }
  };

  const handleScrollToSearch = () => {
    const el = document.getElementById("locator-search");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenBooking = (store = null) => {
    setBookingInitialStore(store || STORES_DATA[0]);
    setIsBookingOpen(true);
  };

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen text-[#3B2618]">
      {/* 1. Hero Section */}
      <HeroSection onExploreClick={handleScrollToSearch} />

      {/* 2. Store Locator Search & Controls */}
      <StoreSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        activeViewMode={activeViewMode}
        setActiveViewMode={setActiveViewMode}
        onUseCurrentLocation={handleUseCurrentLocation}
        isLocating={isLocating}
        locationError={locationError}
        totalResults={filteredStores.length}
        onClearSearch={() => setSearchQuery("")}
      />

      {/* 3. Main Store Display Section (Grid / Split / Map View Modes) */}
      <section className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 mb-20">
        {filteredStores.length === 0 ? (
          /* Empty Search Results State */
          <div className="bg-[#FFFDFC] border border-[#E7DED2] rounded-[28px] p-12 text-center my-8">
            <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#E7DED2] flex items-center justify-center text-[#8B5A2B] mx-auto mb-4">
              <span className="text-xl font-bold">?</span>
            </div>
            <h3
              className="text-2xl font-bold text-[#3B2618] mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              No Showrooms Found
            </h3>
            <p className="text-sm text-[#6B5647] max-w-md mx-auto mb-6">
              We couldn't find a showroom matching "<span className="font-semibold text-[#3B2618]">{searchQuery}</span>". Try searching for another city, postal code, or state.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-6 py-3 bg-[#3B2618] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.18em] rounded-full hover:bg-[#8B5A2B] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Active View Layouts */
          <div>
            {/* GRID ONLY VIEW */}
            {activeViewMode === "grid" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredStores.map((store) => (
                  <StoreCard
                    key={store.id}
                    store={store}
                    isSelected={selectedStore?.id === store.id}
                    onViewStore={(st) => setActiveModalStore(st)}
                    onBookAppointment={(st) => handleOpenBooking(st)}
                  />
                ))}
              </div>
            )}

            {/* SPLIT VIEW (Store List Left + Interactive Map Right) */}
            {activeViewMode === "split" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Cards List */}
                <div className="lg:col-span-6 xl:col-span-5 space-y-6 max-h-[900px] overflow-y-auto pr-1 scrollbar-thin">
                  {filteredStores.map((store) => (
                    <StoreCard
                      key={store.id}
                      store={store}
                      isSelected={selectedStore?.id === store.id}
                      onViewStore={(st) => setActiveModalStore(st)}
                      onBookAppointment={(st) => handleOpenBooking(st)}
                    />
                  ))}
                </div>

                {/* Right Column: Sticky Interactive Map */}
                <div className="lg:col-span-6 xl:col-span-7 lg:sticky lg:top-24">
                  <StoreMap
                    stores={filteredStores}
                    selectedStore={selectedStore}
                    onSelectStore={(st) => setSelectedStore(st)}
                    onViewStore={(st) => setActiveModalStore(st)}
                  />
                </div>
              </div>
            )}

            {/* MAP ONLY VIEW */}
            {activeViewMode === "map" && (
              <div className="w-full">
                <StoreMap
                  stores={filteredStores}
                  selectedStore={selectedStore}
                  onSelectStore={(st) => setSelectedStore(st)}
                  onViewStore={(st) => setActiveModalStore(st)}
                />
              </div>
            )}
          </div>
        )}
      </section>

      {/* 4. Why Visit Ridgeline (4 Minimal Feature Cards) */}
      <WhyVisitSection onBookClick={() => handleOpenBooking()} />

      {/* 5. Workshop Banner Section */}
      <WorkshopBanner onBookVisit={() => handleOpenBooking()} />

      {/* Store Detail Modal */}
      {activeModalStore && (
        <StoreDetailModal
          store={activeModalStore}
          onClose={() => setActiveModalStore(null)}
          onBookAppointment={(st) => handleOpenBooking(st)}
        />
      )}

      {/* Book Appointment Modal */}
      {isBookingOpen && (
        <BookAppointmentModal
          initialStore={bookingInitialStore}
          onClose={() => setIsBookingOpen(false)}
          onSuccessToast={(msg) => showNotification(msg)}
        />
      )}
    </div>
  );
};

export default StoreLocator;
