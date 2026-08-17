import React from "react";
import { X, Minus, Plus, ShoppingBag, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../Context/CartContext";
import { useToast } from "../../Context/ToastContext";

// Helper image imports for demo items
import duffelImg from "../../assets/Images/baggs.jpg";
import pouchImg from "../../assets/Images/cartridge_pouch.jpg";

const CartDrawer = () => {
  const { showToast } = useToast();
  const {
    cartItems,
    isCartOpen,
    closeCart,
    subtotal,
    freeShippingThreshold,
    shippingProgress,
    removeFromCart,
    updateQuantity,
  } = useCart();

  const resolveItemImage = (img) => {
    if (img === "baggs.jpg") return duffelImg;
    if (img === "cartridge_pouch.jpg") return pouchImg;
    return img || duffelImg;
  };

  const isFreeShipping = subtotal >= freeShippingThreshold;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 bg-[#3B2618]/50 backdrop-blur-sm"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 350, damping: 35 }}
            className="relative w-full max-w-md bg-[#FFFDFC] h-full shadow-2xl flex flex-col justify-between z-10 border-l border-[#E5D8C8]"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between p-6 border-b border-[#E5D8C8]">
                <h2 className="font-serif text-2xl font-normal text-[#3B2618]">
                  Your Cart
                </h2>
                <button
                  onClick={closeCart}
                  aria-label="Close Cart"
                  className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E5D8C8] flex items-center justify-center text-[#3B2618] hover:bg-[#3B2618] hover:text-[#FAF8F5] transition-all cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Free Shipping Announcement Bar (Matching Image 1) */}
              <div className="bg-[#FAF8F5] p-4 border-b border-[#E5D8C8]">
                <p className="text-xs font-semibold text-[#3B2618] text-center mb-2">
                  {isFreeShipping
                    ? "🎉 Your order is eligible for free shipping!"
                    : `Add $${(freeShippingThreshold - subtotal).toFixed(
                        2
                      )} more to qualify for FREE SHIPPING!`}
                </p>
                <div className="w-full bg-[#E5D8C8] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#8B5A2B] h-full transition-all duration-500 rounded-full"
                    style={{ width: `${shippingProgress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 pb-6 border-b border-[#E5D8C8]/60 last:border-none"
                  >
                    {/* Item Image */}
                    <img
                      src={resolveItemImage(item.image)}
                      alt={item.name}
                      className="w-20 h-24 object-cover rounded-xl border border-[#E5D8C8] bg-[#F6F2EC] shrink-0"
                    />

                    {/* Item Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif text-lg font-normal text-[#3B2618] leading-tight">
                            {item.name}
                          </h3>
                          <span className="text-sm font-semibold text-[#3B2618] shrink-0">
                            ${item.price}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#8B5A2B] uppercase tracking-wider font-semibold mt-1">
                          {item.color} {item.size ? `/ ${item.size}` : ""}
                        </p>
                        <span className="inline-block text-[9px] uppercase font-bold tracking-widest text-[#8B5A2B] bg-[#F6F2EC] px-2 py-0.5 rounded-md mt-1">
                          LIMITED EDITION
                        </span>
                      </div>

                      {/* Controls Row: Quantity + Remove */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-[#E5D8C8] rounded-lg bg-[#FAF8F5]">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 text-[#3B2618] hover:text-[#8B5A2B] transition-colors cursor-pointer"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-7 text-center text-xs font-bold text-[#3B2618]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 text-[#3B2618] hover:text-[#8B5A2B] transition-colors cursor-pointer"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-[#6B6258]">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="hover:text-[#3B2618] underline cursor-pointer"
                          >
                            REMOVE
                          </button>
                          <span>|</span>
                          <button className="hover:text-[#8B5A2B] cursor-pointer">
                            SAVE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-16 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#F6F2EC] flex items-center justify-center text-[#8B5A2B] mb-4">
                    <ShoppingBag size={20} />
                  </div>
                  <h3 className="font-serif text-2xl text-[#3B2618] font-normal mb-2">
                    Your Cart is Empty
                  </h3>
                  <p className="text-sm text-[#6B6258] max-w-xs mb-6">
                    Explore our handcrafted leather gear to add items to your cart.
                  </p>
                  <button
                    onClick={closeCart}
                    className="bg-[#3B2618] hover:bg-[#8B5A2B] text-[#FAF8F5] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Start Shopping
                  </button>
                </div>
              )}
            </div>

            {/* Footer Summary & Checkout Button (Matching Image 1) */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-[#E5D8C8] bg-[#FAF8F5]">
                <div className="flex items-center justify-between text-base font-semibold text-[#3B2618] mb-4">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => {
                    showToast(
                      "Proceeding to Secure Luxury Checkout...",
                      "info",
                      "Checkout Initiated"
                    );
                  }}
                  className="w-full py-4 bg-[#3B2618] hover:bg-[#8B5A2B] text-[#FAF8F5] text-xs uppercase font-semibold tracking-[0.2em] rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  SECURE CHECKOUT
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
