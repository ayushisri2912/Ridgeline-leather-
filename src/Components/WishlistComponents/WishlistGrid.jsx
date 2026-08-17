import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Trash2, Check, ArrowRight, Heart } from "lucide-react";
import { useToast } from "../../Context/ToastContext";

const WishlistGrid = ({ items, onRemoveItem }) => {
  const { showToast } = useToast();

  const handleAddToCart = (product) => {
    showToast(
      `Added ${product.name} to your shopping bag.`,
      "success",
      "Bag Updated"
    );
  };

  const handleRemove = (product) => {
    onRemoveItem(product.id);
    showToast(
      `Removed ${product.name} from your Wishlist.`,
      "info",
      "Wishlist Updated"
    );
  };

  if (!items || items.length === 0) {
    return (
      <section className="py-20 px-6 max-w-[1650px] mx-auto text-center">
        <div className="bg-[#FFFDFC] border border-[#E8DED4] rounded-3xl p-12 sm:p-16 max-w-2xl mx-auto shadow-sm flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#F6F2EC] flex items-center justify-center text-[#8B5A2B] mb-5 border border-[#E8DED4]">
            <Heart size={28} className="text-[#8B5A2B]" />
          </div>
          <h3
            className="text-3xl text-[#3B2618] font-normal mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Your Wishlist Is Empty
          </h3>
          <p className="text-[#6B6258] text-sm leading-relaxed max-w-md mb-8 font-light">
            You haven't saved any handcrafted leather goods yet. Explore our latest arrivals and field gear to build your personal wishlist.
          </p>
          <Link
            to="/shop/all-products"
            className="inline-flex items-center gap-3 bg-[#3B2618] hover:bg-[#8B5A2B] text-[#FAF8F5] px-8 py-4 rounded-xl text-xs uppercase font-semibold tracking-[0.2em] shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Explore All Products</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 lg:py-16 max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16">
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E8DED4]">
        <div>
          <h2
            className="text-2xl sm:text-3xl text-[#3B2618] font-normal"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Saved Items ({items.length})
          </h2>
          <p className="text-xs text-[#6B6258] mt-1 font-light">
            All prices include lifetime craftsmanship guarantee and complimentary field shipping.
          </p>
        </div>
      </div>

      {/* Grid of Wishlist Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {items.map((product) => (
          <div
            key={product.id}
            className="group bg-[#FFFDFC] border border-[#E8DED4] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
          >
            {/* Top Remove Icon Button */}
            <button
              onClick={() => handleRemove(product)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-[#E8DED4] text-[#6B6258] hover:text-red-600 hover:bg-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
              title="Remove from Wishlist"
              aria-label="Remove item"
            >
              <Trash2 size={16} />
            </button>

            {/* Product Image Link */}
            <Link to={`/product/${product.id}`} className="block relative w-full h-[240px] sm:h-[260px] overflow-hidden bg-[#F6F2EC]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-[#3B2618] text-[#FAF8F5] shadow-xs">
                  {product.badge}
                </span>
              )}
            </Link>

            {/* Card Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#8B5A2B] block mb-1">
                  {product.category || "Leather Goods"}
                </span>

                <Link
                  to={`/product/${product.id}`}
                  className="font-serif text-lg font-normal text-[#3B2618] hover:text-[#8B5A2B] transition-colors line-clamp-1 block mb-2"
                >
                  {product.name}
                </Link>

                <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#E8DED4]/60">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-[#3B2618]">
                      ${product.price}.00
                    </span>
                    {product.oldPrice && (
                      <span className="text-xs text-[#9A8A7C] line-through font-light">
                        ${product.oldPrice}.00
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-semibold text-[#8B5A2B] flex items-center gap-1">
                    <Check size={12} />
                    In Stock
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-[#E8DED4]/60 flex gap-2">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#3B2618] hover:bg-[#8B5A2B] text-[#FAF8F5] text-xs uppercase font-semibold tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all duration-300 cursor-pointer"
                >
                  <ShoppingBag size={14} />
                  <span>Add To Bag</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WishlistGrid;
