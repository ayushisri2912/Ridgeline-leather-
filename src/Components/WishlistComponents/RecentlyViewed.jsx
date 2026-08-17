import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, ShoppingBag } from "lucide-react";
import { useToast } from "../../Context/ToastContext";

// Sample recently viewed items curated from store catalog
import bag1 from "../../assets/Images/baggs.jpg";
import bag2 from "../../assets/Images/leather-bag.jpg";
import rifleImg from "../../assets/Images/rifle_cover_hero.jpg";
import beltImg from "../../assets/Images/cartridge_belt_hero.jpg";

const recentlyViewedProducts = [
  {
    id: "rv-1",
    name: "The Explorer Weekender Duffel",
    category: "Duffel Bags",
    price: 385,
    image: bag1,
    badge: "POPULAR",
  },
  {
    id: "rv-2",
    name: "Heritage Scoped Rifle Slip",
    category: "Rifle Covers",
    price: 345,
    image: rifleImg,
    badge: "BESTSELLER",
  },
  {
    id: "rv-3",
    name: "The Executive Heritage Briefcase",
    category: "Messenger Bags",
    price: 345,
    image: bag2,
    badge: "FEATURED",
  },
  {
    id: "rv-4",
    name: "Artisan Cartridge Carrier Belt",
    category: "Cartridge Belts",
    price: 265,
    image: beltImg,
    badge: "NEW",
  },
];

const RecentlyViewed = () => {
  const { showToast } = useToast();

  const handleQuickAdd = (product) => {
    showToast(
      `Added ${product.name} to your shopping bag.`,
      "success",
      "Bag Updated"
    );
  };

  return (
    <section className="py-14 sm:py-18 bg-[#F6F2EC] border-t border-b border-[#E8DED4]">
      <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span
              className="text-[11px] uppercase tracking-[0.3em] text-[#8B5A2B] font-semibold block mb-1"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              INSPIRED BY YOUR BROWSING
            </span>
            <h2
              className="text-3xl sm:text-4xl text-[#3B2618] font-normal"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Recently Viewed Items
            </h2>
          </div>

          <Link
            to="/shop/all-products"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#3B2618] hover:text-[#8B5A2B] transition-colors group"
          >
            <span>View All Collections</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4-Column Responsive Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentlyViewedProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#FFFDFC] border border-[#E8DED4] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-[210px] sm:h-[220px] overflow-hidden bg-[#E8DFD3]/40">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#8B5E3C] text-white">
                    {product.badge}
                  </span>
                )}
                
                <Link
                  to={`/product/${product.id}`}
                  className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  <span className="bg-white/90 text-[#3B2618] p-2.5 rounded-full shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye size={18} />
                  </span>
                </Link>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8B5A2B] block mb-1">
                    {product.category}
                  </span>
                  <Link
                    to={`/product/${product.id}`}
                    className="font-serif text-base font-normal text-[#3B2618] hover:text-[#8B5A2B] transition-colors line-clamp-1"
                  >
                    {product.name}
                  </Link>
                </div>

                <div className="flex items-center justify-between mt-4 pt-2 border-t border-[#E8DED4]/60">
                  <span className="text-sm font-bold text-[#3B2618]">
                    ${product.price}.00
                  </span>
                  <button
                    onClick={() => handleQuickAdd(product)}
                    className="p-2 rounded-lg bg-[#3B2618] hover:bg-[#8B5A2B] text-[#FAF8F5] transition-colors cursor-pointer"
                    title="Quick Add to Bag"
                  >
                    <ShoppingBag size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecentlyViewed;
