import React, { useState } from "react";
import { Star, Heart, ShoppingBag, Check, ShieldCheck, Truck, Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";

const ProductDetailSection = ({ product, onAddToCart, onBuyNow }) => {
  const images = product.images || [product.image];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : null);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  const handleAddToCart = () => {
    setAddedToast(true);
    if (onAddToCart) {
      onAddToCart({
        ...product,
        selectedColor: selectedColor?.name || "Default",
        selectedSize: selectedSize || "Standard",
        quantity,
      });
    }
    setTimeout(() => setAddedToast(false), 2000);
  };

  return (
    <section className="w-full bg-[#FAF8F5] py-8 sm:py-12 lg:py-16 px-6 lg:px-12 xl:px-16 border-b border-[#E8DED4]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: VERTICAL THUMBNAIL GALLERY (lg:col-span-2) */}
          <div className="order-2 lg:order-1 lg:col-span-2 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {images.map((img, idx) => {
              const isActive = activeImageIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-full lg:h-28 rounded-2xl overflow-hidden bg-[#F6F2EC] border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-2 border-[#8B5A2B] shadow-md ring-2 ring-[#8B5A2B]/20"
                      : "border-[#E8DED4] hover:border-[#8B5A2B]/50 opacity-80 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              );
            })}
          </div>

          {/* CENTER COLUMN: LARGE DISPLAY IMAGE WITH HOVER ZOOM (lg:col-span-5) */}
          <div className="order-1 lg:order-2 lg:col-span-5 w-full">
            <div className="relative aspect-[4/3] sm:aspect-[1/1] w-full bg-[#F6F2EC] border border-[#E8DED4] rounded-2xl overflow-hidden shadow-sm group">
              <motion.img
                key={activeImageIndex}
                initial={{ opacity: 0.8, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={images[activeImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Handcrafted Badge Overlay */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#3B2618]/90 backdrop-blur-md text-[#FAF8F5] text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-[#FAF8F5]/20 shadow-sm">
                  FULL GRAIN HIDE
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PRODUCT INFO & STICKY PURCHASE CONTROLS (lg:col-span-5) */}
          <div className="order-3 lg:col-span-5 sticky top-24 space-y-6">
            
            {/* Category Subtitle */}
            <div className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8B5A2B]">
              {product.category}
            </div>

            {/* Product Name */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#3B2618] leading-[1.08] tracking-tight">
              {product.name}
            </h1>

            {/* Ratings & Price Row */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E8DED4]">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-[#C79A63]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#C79A63] text-[#C79A63]" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#3B2618]">
                  {product.rating}
                </span>
                <span className="text-xs text-[#6B6258]">
                  ({product.reviewCount} Verified Reviews)
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-semibold text-[#3B2618]">
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-[#6B6258] line-through">
                    ${product.oldPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Short Description */}
            <p className="text-[#6B6258] text-base font-normal leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Metadata Badges */}
            <div className="grid grid-cols-2 gap-3 py-2">
              <div className="bg-[#FFFDFC] border border-[#E8DED4] p-3 rounded-xl">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#8B5A2B] block mb-0.5">
                  Leather Type
                </span>
                <span className="text-xs font-medium text-[#3B2618]">
                  {product.leatherType}
                </span>
              </div>
              <div className="bg-[#FFFDFC] border border-[#E8DED4] p-3 rounded-xl">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#8B5A2B] block mb-0.5">
                  Hardware & Finish
                </span>
                <span className="text-xs font-medium text-[#3B2618]">
                  {product.material}
                </span>
              </div>
            </div>

            {/* Color Swatches */}
            {product.colors && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#3B2618]">
                  <span>Leather Color:</span>
                  <span className="text-[#8B5A2B] font-bold">{selectedColor?.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  {product.colors.map((color) => {
                    const isSelected = selectedColor?.hex === color.hex;
                    return (
                      <button
                        key={color.hex}
                        onClick={() => setSelectedColor(color)}
                        className={`group relative w-9 h-9 rounded-full border-2 transition-all cursor-pointer flex items-center justify-center ${
                          isSelected
                            ? "border-[#3B2618] scale-110 shadow-sm"
                            : "border-transparent hover:scale-105"
                        }`}
                      >
                        <span
                          className="w-7 h-7 rounded-full border border-black/15 shadow-inner"
                          style={{ backgroundColor: color.hex }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#3B2618]">
                  <span>Select Size:</span>
                  <span className="text-[#8B5A2B] font-bold">{selectedSize}</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {product.sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 px-4 rounded-xl text-xs font-medium tracking-wider uppercase border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#3B2618] text-[#FAF8F5] border-[#3B2618] shadow-sm font-semibold"
                            : "bg-[#FFFDFC] text-[#6B6258] border-[#E8DED4] hover:border-[#8B5A2B] hover:text-[#3B2618]"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector & Wishlist */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center border border-[#E8DED4] rounded-xl bg-[#FFFDFC] p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-[#3B2618] hover:text-[#8B5A2B] transition-colors cursor-pointer"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm font-bold text-[#3B2618]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-[#3B2618] hover:text-[#8B5A2B] transition-colors cursor-pointer"
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                aria-label="Add to Wishlist"
                className="p-3.5 rounded-xl border border-[#E8DED4] bg-[#FFFDFC] hover:bg-[#F6F2EC] text-[#3B2618] transition-all cursor-pointer shadow-xs"
              >
                <Heart
                  size={20}
                  className={isWishlisted ? "fill-[#8B5A2B] text-[#8B5A2B]" : "text-[#3B2618]"}
                />
              </button>
            </div>

            {/* Stock Availability & Shipping Info */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8B5A2B]">
                <span className="w-2 h-2 rounded-full bg-[#8B5A2B] animate-pulse" />
                <span>{product.availability}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#6B6258]">
                <Truck size={14} className="text-[#8B5A2B]" />
                <span>{product.shippingInfo}</span>
              </div>
            </div>

            {/* Primary & Secondary Buttons */}
            <div className="space-y-3 pt-4">
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 px-6 rounded-full text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-300 shadow-md cursor-pointer ${
                  addedToast
                    ? "bg-[#8B5A2B] text-[#FAF8F5]"
                    : "bg-[#3B2618] hover:bg-[#8B5A2B] text-[#FAF8F5] hover:shadow-lg transform hover:-translate-y-0.5"
                }`}
              >
                {addedToast ? (
                  <>
                    <Check size={16} />
                    <span>Added To Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    <span>Add to Cart — ${product.price * quantity}</span>
                  </>
                )}
              </button>

              <button
                onClick={onBuyNow}
                className="w-full py-4 px-6 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-[#3B2618] border border-[#3B2618] hover:bg-[#F6F2EC] transition-all duration-300 cursor-pointer"
              >
                Buy Now
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetailSection;
