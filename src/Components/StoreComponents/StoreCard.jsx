import React from "react";
import { FiMapPin, FiClock, FiPhone, FiCompass, FiCalendar, FiChevronRight } from "react-icons/fi";

const StoreCard = ({ store, onViewStore, onBookAppointment, isSelected }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${store.name} ${store.address.street} ${store.address.city} ${store.address.state} ${store.address.zip}`
  )}`;

  return (
    <div
      className={`group bg-[#FFFDFC] border rounded-[24px] sm:rounded-[28px] overflow-hidden transition-all duration-300 flex flex-col justify-between ${
        isSelected
          ? "border-[#8B5A2B] ring-2 ring-[#8B5A2B]/20 shadow-md"
          : "border-[#E7DED2] hover:border-[#8B5A2B]/60 hover:shadow-md"
      }`}
    >
      <div>
        {/* Top Card Image & Badges */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#FAF8F5]">
          <img
            src={store.image}
            alt={store.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3B2618]/50 via-transparent to-transparent opacity-60"></div>

          {/* Type Badge */}
          <div className="absolute top-4 left-4 bg-[#FFFDFC]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E7DED2]">
            <span
              className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#3B2618]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {store.type}
            </span>
          </div>

          {/* Distance Badge */}
          <div className="absolute top-4 right-4 bg-[#3B2618]/90 text-[#FAF8F5] px-3.5 py-1.5 rounded-full text-[11px] font-medium backdrop-blur-xs flex items-center gap-1.5">
            <FiCompass size={13} className="text-[#E7DED2]" />
            <span>{store.distance}</span>
          </div>

          {/* Status Badge */}
          <div className="absolute bottom-3 left-4 bg-[#FFFDFC]/95 backdrop-blur-md px-3 py-1 rounded-lg border border-[#E7DED2] flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                store.status === "Open Now" ? "bg-emerald-600" : "bg-amber-600"
              }`}
            ></span>
            <span className="text-[11px] text-[#3B2618] font-medium">
              {store.status} • Closes {store.closingTime}
            </span>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-5 sm:p-7">
          {/* Store Name */}
          <h3
            className="text-2xl sm:text-3xl font-bold text-[#3B2618] leading-tight mb-1 group-hover:text-[#8B5A2B] transition-colors"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {store.name}
          </h3>

          <p className="text-xs text-[#8B5A2B] font-medium mb-4">
            {store.tagline}
          </p>

          {/* Address & Info */}
          <div className="space-y-2.5 text-xs text-[#55463B] mb-6">
            <div className="flex items-start gap-2.5">
              <FiMapPin size={16} className="text-[#8B5A2B] shrink-0 mt-0.5" />
              <span>
                {store.address.street}, {store.address.suite} <br />
                {store.address.city}, {store.address.state} {store.address.zip}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <FiPhone size={15} className="text-[#8B5A2B] shrink-0" />
              <a
                href={`tel:${store.phone.replace(/[^0-9]/g, "")}`}
                className="hover:text-[#8B5A2B] transition-colors"
              >
                {store.phone}
              </a>
            </div>

            <div className="flex items-start gap-2.5">
              <FiClock size={15} className="text-[#8B5A2B] shrink-0 mt-0.5" />
              <div>
                {store.hours.map((h, idx) => (
                  <div key={idx}>
                    <span className="font-semibold text-[#3B2618]">{h.days}:</span> {h.time}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Available Collections Badges */}
          {store.collections && store.collections.length > 0 && (
            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#8B5A2B] mb-2.5">
                Available In-Store Collections
              </p>
              <div className="flex flex-wrap gap-1.5">
                {store.collections.map((col, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#FAF8F5] border border-[#E7DED2] rounded-full text-[11px] text-[#55463B] font-medium"
                  >
                    {col}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-5 sm:px-7 pb-5 sm:pb-7 pt-0 grid grid-cols-2 gap-2.5">
        <button
          onClick={() => onViewStore(store)}
          className="w-full py-3 px-4 bg-[#3B2618] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.15em] rounded-xl hover:bg-[#8B5A2B] transition-colors duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>View Store</span>
          <FiChevronRight size={14} />
        </button>

        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 bg-[#FAF8F5] text-[#3B2618] border border-[#E7DED2] text-xs font-semibold uppercase tracking-[0.15em] rounded-xl hover:border-[#8B5A2B] hover:text-[#8B5A2B] transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer text-center"
        >
          <span>Directions</span>
        </a>
      </div>
    </div>
  );
};

export default StoreCard;
