import React, { useState, useEffect } from "react";
import WishlistHero from "../Components/WishlistComponents/WishlistHero";
import WishlistGrid from "../Components/WishlistComponents/WishlistGrid";
import RecentlyViewed from "../Components/WishlistComponents/RecentlyViewed";
import WishlistBanner from "../Components/WishlistComponents/WishlistBanner";

// Demo initial wishlist items from catalog
import bag1 from "../assets/Images/baggs.jpg";
import bag2 from "../assets/Images/leather-bag.jpg";
import rifleImg from "../assets/Images/rifle_cover_hero.jpg";
import beltImg from "../assets/Images/cartridge_belt_hero.jpg";

const initialWishlistItems = [
  {
    id: "wl-1",
    name: "The Explorer Weekender Duffel",
    category: "Duffel Bags",
    price: 385,
    oldPrice: 440,
    image: bag1,
    badge: "SAVED",
  },
  {
    id: "wl-2",
    name: "Heritage Scoped Rifle Slip",
    category: "Rifle Covers",
    price: 345,
    oldPrice: 395,
    image: rifleImg,
    badge: "SAVED",
  },
  {
    id: "wl-3",
    name: "The Executive Heritage Briefcase",
    category: "Messenger Bags",
    price: 345,
    oldPrice: 395,
    image: bag2,
    badge: "SAVED",
  },
  {
    id: "wl-4",
    name: "Artisan Cartridge Carrier Belt",
    category: "Cartridge Belts",
    price: 265,
    oldPrice: 300,
    image: beltImg,
    badge: "SAVED",
  },
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleRemoveItem = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#3B2618] selection:bg-[#8B5A2B] selection:text-[#FAF8F5]">
      
      {/* 1. HERO HEADER */}
      <WishlistHero itemCount={wishlistItems.length} />

      {/* 2. WISHLIST PRODUCT GRID */}
      <WishlistGrid items={wishlistItems} onRemoveItem={handleRemoveItem} />

      {/* 3. RECENTLY VIEWED PRODUCTS */}
      <RecentlyViewed />

      {/* 4. WISHLIST EDITORIAL BANNER */}
      <WishlistBanner />

    </div>
  );
};

export default Wishlist;
