import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiSearch,
  FiUser,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiHeart,
  FiMapPin,
  FiChevronDown,
} from "react-icons/fi";

import MegaMenu from "../Components/NavbarComponents/MegaMenu";
import SearchOverlay from "../Components/NavbarComponents/SearchOverlay";

import {
  shopMenu,
  huntingMenu,
  bagsMenu,
  accessoriesMenu,
  craftsmanshipMenu,
  journalMenu,
  contactMenu,
} from "../Data/navbarData";

import shopImage from "../assets/Images/shop.avif";
import huntingImage from "../assets/Images/rafel.avif";
import bagsImage from "../assets/Images/accessory.avif";
import accessoriesImage from "../assets/Images/accessory.avif";
import craftImage from "../assets/Images/accessory.avif";
import journalImage from "../assets/Images/accessory.avif";
import contactImage from "../assets/Images/accessory.avif";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#3B2618] text-[#F5F1E8] border-b border-[#5A3A25] overflow-hidden h-[26px] flex items-center">
        <div className="marquee">
          <div className="marquee-content">
            <span className="marquee-item">Free Shipping on Orders Over $150</span>
            <span className="text-[#C79A63] text-sm select-none">◆</span>
            <span className="marquee-item">Handmade Premium Leather Goods</span>
            <span className="text-[#C79A63] text-sm select-none">◆</span>
            <span className="marquee-item">Built for the Field. Crafted for a Lifetime</span>
            <span className="text-[#C79A63] text-sm select-none">◆</span>
            <span className="marquee-item">Free Shipping on Orders Over $150</span>
            <span className="text-[#C79A63] text-sm select-none">◆</span>
            <span className="marquee-item">Handmade Premium Leather Goods</span>
            <span className="text-[#C79A63] text-sm select-none">◆</span>
            <span className="marquee-item">Built for the Field. Crafted for a Lifetime</span>
            <span className="text-[#C79A63] text-sm select-none">◆</span>
            <span className="marquee-item">Free Shipping on Orders Over $150</span>
            <span className="text-[#C79A63] text-sm select-none">◆</span>
            <span className="marquee-item">Handmade Premium Leather Goods</span>
            <span className="text-[#C79A63] text-sm select-none">◆</span>
            <span className="marquee-item">Built for the Field. Crafted for a Lifetime</span>
          </div>
        </div>
      </div>

      {/* Sticky Main Header (Navbar) */}
      <header className="sticky top-0 z-50 bg-[#FBF8F2]/95 backdrop-blur-md border-b border-[#D8C2A8] shadow-xs">
        
        {/* ROW 1: Responsive Header Layout */}
        <div className="max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 h-[68px] sm:h-[76px] flex items-center justify-between">
          
          {/* LEFT SECTION */}
          <div className="flex items-center justify-start xl:w-1/4">
            {/* Desktop (xl+): Store Near You Link */}
            <div className="hidden xl:flex items-center">
              <Link
                to="/stores"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#3B2618] hover:text-[#8B4513] transition-colors duration-300 group"
              >
                <FiMapPin size={16} className="text-[#8B4513] group-hover:scale-110 transition-transform duration-300" />
                <span>Store Near You</span>
              </Link>
            </div>

            {/* Mobile / Tablet (<xl): Menu Toggle & Cart Icon on the Left */}
            <div className="flex xl:hidden items-center gap-2.5">
              {/* Menubar Icon */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className="text-[#3B2618] hover:text-[#8B4513] p-2 rounded-xl bg-[#FFFDFC] border border-[#E5D8C8] hover:scale-105 transition-all shadow-xs"
              >
                {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>

              {/* Cart Icon on Left */}
              <button
                aria-label="Shopping Bag"
                className="relative text-[#3B2618] hover:text-[#8B4513] p-2 rounded-xl bg-[#FFFDFC] border border-[#E5D8C8] hover:scale-105 transition-all shadow-xs"
              >
                <FiShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#8B4513] text-white text-[10px] font-bold flex items-center justify-center pointer-events-none">
                  2
                </span>
              </button>
            </div>
          </div>

          {/* CENTER SECTION: Centered Logo with Responsive Typography */}
          <div className="flex justify-center items-center flex-1 text-center px-2">
            <Link
              to="/"
              className="flex flex-col items-center leading-none flex-shrink-0 group py-1"
            >
              <h1
                className="text-2xl sm:text-3xl xl:text-[42px] font-bold leading-none tracking-[0.12em] sm:tracking-[0.14em] text-[#8B4513] transition-colors duration-300"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                RIDGELINE
              </h1>

              <div className="flex items-center justify-between w-full mt-1 sm:mt-1.5 gap-1">
                <span className="flex-1 h-[1px] sm:h-[1.2px] bg-[#8B4513]"></span>
                <span
                  className="uppercase text-[8px] sm:text-[10px] xl:text-[11px] tracking-[0.35em] sm:tracking-[0.45em] text-[#3B2618] font-bold shrink-0 px-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  LEATHER
                </span>
                <span className="flex-1 h-[1px] sm:h-[1.2px] bg-[#8B4513]"></span>
              </div>
            </Link>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center justify-end xl:w-1/4">
            {/* Desktop Icons (Search, Wishlist, Account, Cart) */}
            <div className="hidden xl:flex items-center gap-5 xl:gap-6">
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search"
                className="text-[#4B4B4B] hover:text-[#8B4513] hover:scale-110 transition-all duration-300 cursor-pointer p-1"
              >
                <FiSearch size={20} />
              </button>

              {/* Wishlist / Like Icon */}
              <Link
                to="/wishlist"
                aria-label="Wishlist"
                className="text-[#4B4B4B] hover:text-[#8B4513] hover:scale-110 transition-all duration-300 cursor-pointer p-1"
              >
                <FiHeart size={20} />
              </Link>

              {/* Account Icon */}
              <button
                aria-label="User Account"
                className="text-[#4B4B4B] hover:text-[#8B4513] hover:scale-110 transition-all duration-300 cursor-pointer p-1"
              >
                <FiUser size={20} />
              </button>

              {/* Cart Icon */}
              <button
                aria-label="Shopping Bag"
                className="relative text-[#4B4B4B] hover:text-[#8B4513] hover:scale-110 transition-all duration-300 cursor-pointer p-1"
              >
                <FiShoppingBag size={20} />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#8B4513] text-white text-[10px] flex items-center justify-center pointer-events-none">
                  2
                </span>
              </button>
            </div>


            {/* Mobile / Tablet (<xl): Balanced Right Side Filler */}
            <div className="flex xl:hidden w-[72px] justify-end">
              <Link
                to="/stores"
                title="Store Location"
                className="text-[#8B4513] p-2 rounded-xl bg-[#FFFDFC] border border-[#E5D8C8] flex items-center justify-center hover:scale-105 transition-all shadow-xs"
              >
                <FiMapPin size={18} />
              </Link>
            </div>
          </div>

        </div>

        {/* ROW 2: Navigation Links (Desktop Only) */}
        <div className="hidden xl:block border-t border-[#D8C2A8]/50 bg-[#FBF8F2]/60">
          <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16 h-[44px] flex items-center justify-center">
            
            <nav className="flex items-center gap-8 xl:gap-10 2xl:gap-12">
              <NavItem to="/">HOME</NavItem>

              <MegaMenu
                title="SHOP"
                items={shopMenu}
                image={shopImage}
                heading="New Collection"
                description="Explore handcrafted leather essentials designed for timeless journeys."
                buttonText="Shop Collection"
                buttonLink="/shop"
                activePath="/shop"
              />

              <MegaMenu
                title="HUNTING GEAR"
                items={huntingMenu}
                image={huntingImage}
                heading="Built For The Field"
                description="Professional hunting gear handcrafted with premium leather."
                buttonText="Explore Gear"
                buttonLink="/shop"
                activePath="/hunting-gear"
              />

              <MegaMenu
                title="LEATHER BAGS"
                items={bagsMenu}
                image={bagsImage}
                heading="Travel In Style"
                description="Luxury duffel, messenger and travel bags crafted to last."
                buttonText="View Bags"
                buttonLink="/shop"
                activePath="/leather-bags"
              />

              <MegaMenu
                title="ACCESSORIES"
                items={accessoriesMenu}
                image={accessoriesImage}
                heading="Everyday Essentials"
                description="Premium wallets, belts and leather accessories for everyday elegance."
                buttonText="Explore Accessories"
                buttonLink="/shop"
                activePath="/accessories"
              />

              <MegaMenu
                title="CRAFTSMANSHIP"
                items={craftsmanshipMenu}
                image={craftImage}
                heading="The Art Of Leather"
                description="Discover how every Ridgeline product is handcrafted with precision."
                buttonText="Our Story"
                buttonLink="/about"
                activePath="/about"
              />

              <MegaMenu
                title="JOURNAL"
                items={journalMenu}
                image={journalImage}
                heading="Outdoor Journal"
                description="Stories, buying guides and leather care insights from our experts."
                buttonText="Read Journal"
                buttonLink="/journal"
                activePath="/journal"
              />

              <MegaMenu
                title="CONTACT"
                items={contactMenu}
                image={contactImage}
                heading="Get In Touch"
                description="Have questions or need assistance? Our team is here to help."
                buttonText="Contact Us"
                buttonLink="/contact"
                activePath="/contact"
              />
            </nav>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-[#FFFDFC] border-t border-[#E5D8C8] px-6 py-6 space-y-4 shadow-xl transition-all">
            
            {/* Search Option Inside Menu Drawer */}
            <button
              onClick={() => {
                setIsSearchOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-[#FAF8F5] border border-[#E5D8C8] rounded-xl px-4 py-2.5 flex items-center gap-3 text-[#6B6258] hover:border-[#8B4513] hover:text-[#3B2618] transition-colors"
            >
              <FiSearch size={18} className="text-[#8B4513]" />
              <span className="text-xs uppercase tracking-wider font-medium">Search Collection...</span>
            </button>

            {/* Quick Actions Row: Wishlist (Like) & Profile (Account) Inside Drawer */}
            <div className="grid grid-cols-2 gap-3 pb-3 border-b border-[#E5D8C8]">
              {/* Wishlist / Like Option */}
              <Link
                to="/wishlist"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#E5D8C8] text-[#3B2618] hover:border-[#8B4513] hover:text-[#8B4513] transition-colors"
              >
                <FiHeart size={18} className="text-[#8B4513]" />
                <span className="text-xs uppercase font-semibold tracking-wider">Wishlist</span>
              </Link>

              {/* Profile / Account Option */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#E5D8C8] text-[#3B2618] hover:border-[#8B4513] hover:text-[#8B4513] transition-colors"
              >
                <FiUser size={18} className="text-[#8B4513]" />
                <span className="text-xs uppercase font-semibold tracking-wider">Account</span>
              </button>
            </div>

            {/* Nav Links with Expandable Submenus */}
            <div className="flex flex-col space-y-1">
              <MobileNavItem title="Home" to="/" onClose={() => setIsMobileMenuOpen(false)} />
              <MobileNavItem title="Shop" items={shopMenu} onClose={() => setIsMobileMenuOpen(false)} />
              <MobileNavItem title="Hunting Gear" items={huntingMenu} onClose={() => setIsMobileMenuOpen(false)} />
              <MobileNavItem title="Leather Bags" items={bagsMenu} onClose={() => setIsMobileMenuOpen(false)} />
              <MobileNavItem title="Accessories" items={accessoriesMenu} onClose={() => setIsMobileMenuOpen(false)} />
              <MobileNavItem title="Craftsmanship" items={craftsmanshipMenu} onClose={() => setIsMobileMenuOpen(false)} />
              <MobileNavItem title="Journal" items={journalMenu} onClose={() => setIsMobileMenuOpen(false)} />
              <MobileNavItem title="Contact" items={contactMenu} onClose={() => setIsMobileMenuOpen(false)} />
            </div>
          </div>
        )}
      </header>

      {/* Search Overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group relative uppercase text-[13px] tracking-[0.15em] transition-colors duration-300 ${
          isActive
            ? "text-[#8B4513]"
            : "text-[#2C2C2C] hover:text-[#8B4513]"
        }`
      }
      style={{
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 500,
      }}
    >
      {({ isActive }) => (
        <>
          {children}

          <span
            className={`
              absolute
              left-1/2
              -translate-x-1/2
              -bottom-1
              h-[1.5px]
              rounded-full
              bg-[#8B4513]
              transition-all
              duration-300
              ease-out
              ${
                isActive
                  ? "w-[75%]"
                  : "w-0 group-hover:w-[75%]"
              }
            `}
          ></span>
        </>
      )}
    </NavLink>
  );
}

function MobileNavItem({ title, to, items, onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenu = items && items.length > 0;

  return (
    <div className="border-b border-[#E5D8C8]/50 py-2">
      <div className="flex items-center justify-between">
        {to && !hasSubmenu ? (
          <NavLink
            to={to}
            onClick={onClose}
            className="text-[13px] uppercase tracking-[0.15em] text-[#2C2C2C] hover:text-[#8B4513] font-medium block w-full py-1"
          >
            {title}
          </NavLink>
        ) : (
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between text-[13px] uppercase tracking-[0.15em] text-[#2C2C2C] hover:text-[#8B4513] font-medium py-1 text-left cursor-pointer"
          >
            <span>{title}</span>
            <FiChevronDown
              size={18}
              className={`text-[#8B4513] transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>

      {hasSubmenu && isOpen && (
        <div className="mt-2 pl-4 flex flex-col space-y-2 border-l-2 border-[#8B4513]/30 py-1 transition-all">
          {items.map((subItem, index) => (
            <NavLink
              key={index}
              to={subItem.path}
              onClick={onClose}
              className="text-xs uppercase tracking-[0.12em] text-[#555555] hover:text-[#8B4513] py-1 font-medium transition-colors"
            >
              {subItem.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
