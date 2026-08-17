import React, { useState } from "react";
import { X, Star, ShoppingBag, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

const QuickAddModal = () => {
  const { quickAddProduct, closeQuickAdd, addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  if (!quickAddProduct) return null;

  const colors = quickAddProduct.colors || [
    { name: "Dark Walnut", hex: "#3B2618" },
    { name: "Saddle Tan", hex: "#8B5A2B" },
    { name: "Cognac", hex: "#C79A63" },
  ];

  const sizes = quickAddProduct.sizes || ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"];

  const activeColor = selectedColor || (typeof colors[0] === "string" ? { name: "Default", hex: colors[0] } : colors[0]);
  const activeSize = selectedSize || sizes[0];

  const handleAddToCart = () => {
    addToCart(quickAddProduct, activeColor, activeSize, 1);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeQuickAdd}
          className="fixed inset-0 bg-[#3B2618]/50 backdrop-blur-sm"
        />

        {/* Tecovas Quick Add Popover Card (Matching Image 2) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="relative w-full max-w-sm bg-[#FFFDFC] rounded-2xl overflow-hidden shadow-2xl border border-[#E5D8C8] p-6 z-10"
        >
          {/* Close Button */}
          <button
            onClick={closeQuickAdd}
            aria-label="Close"
            className="absolute top-4 right-4 text-[#3B2618] hover:text-[#8B5A2B] transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Product Image Thumbnail */}
          <div className="relative aspect-[4/3] w-full bg-[#F6F2EC] rounded-xl overflow-hidden mb-4 border border-[#E5D8C8]">
            <img
              src={quickAddProduct.image || quickAddProduct.mainImage}
              alt={quickAddProduct.name || quickAddProduct.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Title, Subtitle, Price */}
          <div className="mb-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#8B5A2B] block mb-0.5">
              {quickAddProduct.category || "RIDGELINE COLLECTION"}
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#3B2618] leading-tight mb-1">
              {quickAddProduct.name || quickAddProduct.title}
            </h3>
            <div className="flex items-center justify-between mt-1">
              <span className="text-lg font-bold text-[#3B2618]">
                ${quickAddProduct.price}
              </span>
              <div className="flex items-center gap-1 text-xs text-[#C79A63]">
                <Star size={13} className="fill-[#C79A63]" />
                <span className="font-semibold text-[#3B2618]">
                  {quickAddProduct.rating || 5.0}
                </span>
              </div>
            </div>
          </div>

          {/* Color Selection Swatches (Image 2) */}
          <div className="mb-4">
            <span className="text-[11px] uppercase font-semibold tracking-wider text-[#3B2618] block mb-2">
              Color: <span className="text-[#8B5A2B] font-bold">{activeColor.name || "Default"}</span>
            </span>
            <div className="flex items-center gap-2">
              {colors.map((c, idx) => {
                const colorObj = typeof c === "string" ? { name: `Option ${idx + 1}`, hex: c } : c;
                const isSelected = activeColor.hex === colorObj.hex;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(colorObj)}
                    className={`w-6 h-6 rounded-full border transition-all cursor-pointer ${
                      isSelected
                        ? "ring-2 ring-[#3B2618] ring-offset-1 scale-110"
                        : "hover:scale-105 border-[#E5D8C8]"
                    }`}
                    style={{ backgroundColor: colorObj.hex }}
                  />
                );
              })}
            </div>
          </div>

          {/* Size Selection Grid (Image 2) */}
          <div className="mb-5">
            <span className="text-[11px] uppercase font-semibold tracking-wider text-[#3B2618] block mb-2">
              Select Size:
            </span>
            <div className="grid grid-cols-4 gap-2">
              {sizes.slice(0, 8).map((sz) => {
                const isSelected = activeSize === sz;
                return (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#3B2618] text-[#FAF8F5] border-[#3B2618]"
                        : "bg-[#FAF8F5] text-[#3B2618] border-[#E5D8C8] hover:border-[#8B5A2B]"
                    }`}
                  >
                    {sz}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Primary Action Button: ADD TO CART (Matching Image 2) */}
          <button
            onClick={handleAddToCart}
            className="w-full py-3.5 bg-[#3B2618] hover:bg-[#8B5A2B] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 mb-3 cursor-pointer"
          >
            <ShoppingBag size={14} />
            <span>ADD TO CART</span>
          </button>

          {/* View Full Details Link (Matching Image 2) */}
          <div className="text-center">
            <Link
              to={`/product/${quickAddProduct.id}`}
              onClick={closeQuickAdd}
              className="text-[11px] uppercase font-bold tracking-widest text-[#8B5A2B] hover:text-[#3B2618] underline cursor-pointer"
            >
              VIEW FULL DETAILS
            </Link>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default QuickAddModal;
