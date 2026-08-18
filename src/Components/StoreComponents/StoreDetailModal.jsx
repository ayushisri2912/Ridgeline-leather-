import React, { useState } from "react";
import {
  FiX,
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiCheckCircle,
  FiCalendar,
  FiCompass,
  FiUser
} from "react-icons/fi";

const StoreDetailModal = ({ store, onClose, onBookAppointment }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!store) return null;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${store.name} ${store.address.street} ${store.address.city} ${store.address.state} ${store.address.zip}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#3B2618]/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-[#FFFDFC] border border-[#E7DED2] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl my-8 text-[#3B2618]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          aria-label="Close store details"
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#FFFDFC]/90 border border-[#E7DED2] text-[#3B2618] hover:bg-[#3B2618] hover:text-[#FAF8F5] transition-all flex items-center justify-center shadow-xs cursor-pointer"
        >
          <FiX size={20} />
        </button>

        {/* Modal Gallery & Top Header */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-[#FAF8F5]">
          <img
            src={store.gallery ? store.gallery[activeImageIndex] : store.image}
            alt={store.name}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3B2618]/70 via-transparent to-transparent"></div>

          {/* Store Title & Type inside Header */}
          <div className="absolute bottom-6 left-6 right-6 text-[#FAF8F5]">
            <span
              className="px-3.5 py-1 bg-[#FAF8F5]/20 backdrop-blur-md rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold text-[#E7DED2] border border-[#FAF8F5]/30 inline-block mb-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {store.type}
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {store.name}
            </h2>
            <p className="text-xs text-[#E7DED2] font-medium">{store.tagline}</p>
          </div>

          {/* Gallery Thumbnails if available */}
          {store.gallery && store.gallery.length > 1 && (
            <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-2">
              {store.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx ? "border-[#C79A63] scale-105" : "border-[#FFFDFC]/40 opacity-70"
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[#FAF8F5] border border-[#E7DED2] rounded-2xl">
            {/* Address */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#8B5A2B]">
                <FiMapPin size={15} />
                <span>Location</span>
              </div>
              <p className="text-sm font-medium text-[#3B2618]">
                {store.address.street}, {store.address.suite} <br />
                {store.address.city}, {store.address.state} {store.address.zip}
              </p>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#8B5A2B] font-semibold hover:underline inline-flex items-center gap-1 mt-1"
              >
                <span>Get Driving Directions</span>
                <span>→</span>
              </a>
            </div>

            {/* Hours & Contact */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#8B5A2B]">
                <FiClock size={15} />
                <span>Showroom Hours</span>
              </div>
              <div className="text-xs text-[#55463B] space-y-1">
                {store.hours.map((h, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span className="font-semibold text-[#3B2618]">{h.days}:</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 flex items-center gap-4 text-xs text-[#3B2618]">
                <a href={`tel:${store.phone}`} className="flex items-center gap-1.5 hover:text-[#8B5A2B]">
                  <FiPhone size={13} className="text-[#8B5A2B]" />
                  <span>{store.phone}</span>
                </a>
                <a href={`mailto:${store.email}`} className="flex items-center gap-1.5 hover:text-[#8B5A2B]">
                  <FiMail size={13} className="text-[#8B5A2B]" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Store Manager Welcome */}
          {store.manager && (
            <div className="flex items-center gap-4 p-4 bg-[#FFFDFC] border border-[#E7DED2] rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-[#F3ECE1] border border-[#E7DED2] flex items-center justify-center text-[#8B5A2B] font-semibold">
                <FiUser size={20} />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#8B5A2B]">
                  Showroom Concierge
                </p>
                <p className="text-sm font-semibold text-[#3B2618]">{store.manager}</p>
                <p className="text-xs text-[#6B5647]">Available for custom fitting, sizing & private viewings.</p>
              </div>
            </div>
          )}

          {/* In-Store Services & Amenities */}
          {store.services && store.services.length > 0 && (
            <div>
              <h3
                className="text-2xl font-bold text-[#3B2618] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Exclusive In-Store Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {store.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#FAF8F5] border border-[#E7DED2] rounded-xl flex items-center gap-3 text-xs text-[#3B2618] font-medium"
                  >
                    <FiCheckCircle size={16} className="text-[#8B5A2B] shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Available Collections */}
          {store.collections && store.collections.length > 0 && (
            <div>
              <h3
                className="text-2xl font-bold text-[#3B2618] mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                In-Store Product Collections
              </h3>
              <div className="flex flex-wrap gap-2">
                {store.collections.map((col, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-[#FAF8F5] border border-[#E7DED2] rounded-full text-xs font-semibold text-[#8B5A2B]"
                  >
                    {col}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 sm:p-8 bg-[#FAF8F5] border-t border-[#E7DED2] flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-[#FFFDFC] border border-[#E7DED2] text-[#3B2618] text-xs font-semibold uppercase tracking-[0.16em] rounded-xl hover:border-[#8B5A2B] hover:text-[#8B5A2B] transition-all text-center cursor-pointer"
          >
            Open in Maps
          </a>

          <button
            onClick={() => {
              onClose();
              onBookAppointment(store);
            }}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#3B2618] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.18em] rounded-xl hover:bg-[#8B5A2B] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <FiCalendar size={16} />
            <span>Book Private Visit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreDetailModal;
