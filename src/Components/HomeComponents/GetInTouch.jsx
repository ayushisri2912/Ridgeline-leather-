import React, { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiMessageSquare,
  FiArrowRight,
  FiUser,
  FiTag,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Custom Order Inquiry",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "Custom Order Inquiry",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section className="bg-[#FAF8F4] py-20 sm:py-24 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      {/* Top Separator Line */}
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16">
        <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-10 flex items-center justify-center opacity-70">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#8B4513]/40 to-transparent w-full" />
        </div>

        {/* Section Badge & Title (Matching New Arrivals Font & Style) */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3.5 sm:gap-5 mb-4">
            <span className="w-14 sm:w-20 h-[1px] bg-[#8B4513]"></span>
            <span className="text-[#C79A63] text-xs">◆</span>
            <p
              className="uppercase text-[11px] sm:text-xs tracking-[0.45em] text-[#8B4513] font-semibold"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Get In Touch With Us
            </p>
            <span className="text-[#C79A63] text-xs">◆</span>
            <span className="w-14 sm:w-20 h-[1px] bg-[#8B4513]"></span>
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-[#3B2618] leading-tight font-normal mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Reach Out To Ridgeline Leather
          </h2>

          <p
            className="text-[#5C5147] text-base sm:text-lg leading-relaxed font-light"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Have questions about our handcrafted leather goods, custom orders,
            or shipping? We’d love to hear from you. Contact our team or visit
            our artisan workshop.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ================= LEFT COLUMN: CONTACT INFORMATION CARDS ================= */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Banner */}
            <div className="bg-[#2C2C2C] rounded-2xl p-7 sm:p-8 text-white shadow-xl relative overflow-hidden group">
              {/* Subtle background glow accent */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#8B4513]/20 rounded-full blur-2xl group-hover:bg-[#8B4513]/30 transition-all duration-500" />

              <span
                className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#C79A63] font-semibold block mb-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                ARTISAN WORKSHOP & SUPPORT
              </span>
              <h3
                className="text-2xl sm:text-3xl text-[#F5F1E8] font-normal mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                We're Here For You
              </h3>
              <p
                className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-light"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Whether you need assistance choosing the perfect leather piece or
                want to track a bespoke handcrafted order, our customer care team
                is at your service.
              </p>

              {/* Quick Action Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366]/15 text-[#25D366] text-xs font-medium hover:bg-[#25D366]/25 transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <FaWhatsapp size={14} />
                  <span>WhatsApp Chat</span>
                </a>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 text-gray-200 text-xs font-medium hover:bg-white/20 transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <FiPhone size={13} />
                  <span>Call Us Now</span>
                </a>
              </div>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Card */}
              <div className="bg-white rounded-xl p-5 border border-[#E8DFD5] shadow-sm hover:border-[#8B4513]/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#8B4513]/10 text-[#8B4513] flex items-center justify-center mb-3">
                  <FiPhone size={18} />
                </div>
                <span
                  className="text-[11px] text-[#9A7651] uppercase tracking-wider font-semibold block mb-1"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Phone & WhatsApp
                </span>
                <a
                  href="tel:+919876543210"
                  className="text-sm font-semibold text-[#3B2618] hover:text-[#8B4513] transition-colors block"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  +91 98765 43210
                </a>
                <span
                  className="text-[11px] text-gray-500 block mt-1"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Mon-Sat: 10 AM - 7 PM
                </span>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-xl p-5 border border-[#E8DFD5] shadow-sm hover:border-[#8B4513]/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#8B4513]/10 text-[#8B4513] flex items-center justify-center mb-3">
                  <FiMail size={18} />
                </div>
                <span
                  className="text-[11px] text-[#9A7651] uppercase tracking-wider font-semibold block mb-1"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Email Us
                </span>
                <a
                  href="mailto:support@ridgelineleather.com"
                  className="text-sm font-semibold text-[#3B2618] hover:text-[#8B4513] transition-colors block truncate"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  support@ridgeline.com
                </a>
                <span
                  className="text-[11px] text-gray-500 block mt-1"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  24/7 Fast Assistance
                </span>
              </div>
            </div>

            {/* Address & Workshop Card */}
            <div className="bg-white rounded-xl p-6 border border-[#E8DFD5] shadow-sm hover:border-[#8B4513]/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#8B4513]/10 text-[#8B4513] flex items-center justify-center shrink-0 mt-0.5">
                  <FiMapPin size={19} />
                </div>
                <div>
                  <span
                    className="text-[11px] text-[#9A7651] uppercase tracking-wider font-semibold block mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Flagship Store & Workshop
                  </span>
                  <h4
                    className="text-base font-semibold text-[#3B2618] mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Ridgeline Leather Studio
                  </h4>
                  <p
                    className="text-xs sm:text-sm text-[#5C5147] leading-relaxed mb-3"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    124 Heritage Lane, Leather Artisan District, <br />
                    New Delhi, India - 110001
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#8B4513] font-semibold hover:text-[#6D4420] transition-colors"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    <span>View Directions on Map</span>
                    <FiArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE CONTACT FORM ================= */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-7 sm:p-10 border border-[#E8DFD5] shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              <div className="mb-6 sm:mb-8 border-b border-[#E8DFD5] pb-5">
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8B4513] block mb-1"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  SEND US A MESSAGE
                </span>
                <h3
                  className="text-2xl sm:text-3xl text-[#3B2618] font-normal"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  How Can We Help You?
                </h3>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center bg-[#FAF8F4] rounded-xl border border-[#8B4513]/20 px-6">
                  <div className="w-14 h-14 bg-[#8B4513]/10 text-[#8B4513] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCheckCircle size={30} />
                  </div>
                  <h4
                    className="text-2xl text-[#3B2618] font-semibold mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Message Sent Successfully!
                  </h4>
                  <p
                    className="text-sm text-[#5C5147] max-w-md mx-auto"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Thank you for contacting Ridgeline Leather. Our team will review
                    your inquiry and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-[#3B2618] uppercase tracking-wider mb-2"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        Full Name <span className="text-[#8B4513]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full h-12 px-4 pl-10 rounded-lg border border-[#E8DFD5] bg-[#FAF8F4]/50 text-sm text-[#3B2618] placeholder-gray-400 focus:bg-white focus:outline-none focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513] transition-all"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        />
                        <FiUser
                          size={16}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-[#3B2618] uppercase tracking-wider mb-2"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        Phone Number <span className="text-[#8B4513]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full h-12 px-4 pl-10 rounded-lg border border-[#E8DFD5] bg-[#FAF8F4]/50 text-sm text-[#3B2618] placeholder-gray-400 focus:bg-white focus:outline-none focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513] transition-all"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        />
                        <FiPhone
                          size={16}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-[#3B2618] uppercase tracking-wider mb-2"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        Email Address <span className="text-[#8B4513]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@example.com"
                          className="w-full h-12 px-4 pl-10 rounded-lg border border-[#E8DFD5] bg-[#FAF8F4]/50 text-sm text-[#3B2618] placeholder-gray-400 focus:bg-white focus:outline-none focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513] transition-all"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        />
                        <FiMail
                          size={16}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                      </div>
                    </div>

                    {/* Inquiry Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-semibold text-[#3B2618] uppercase tracking-wider mb-2"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        Inquiry Category
                      </label>
                      <div className="relative">
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 pl-10 rounded-lg border border-[#E8DFD5] bg-[#FAF8F4]/50 text-sm text-[#3B2618] focus:bg-white focus:outline-none focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513] transition-all appearance-none cursor-pointer"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                          <option value="Custom Order Inquiry">
                            Custom Bespoke Order
                          </option>
                          <option value="Product Details & Sizing">
                            Product Details & Sizing
                          </option>
                          <option value="Order Status & Shipping">
                            Order Status & Shipping
                          </option>
                          <option value="Corporate Gifting & Bulk">
                            Corporate Gifting & Bulk
                          </option>
                          <option value="General Support">General Inquiry</option>
                        </select>
                        <FiTag
                          size={16}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-[#3B2618] uppercase tracking-wider mb-2"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      Your Message <span className="text-[#8B4513]">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your inquiry or requirements..."
                        className="w-full p-4 pl-10 rounded-lg border border-[#E8DFD5] bg-[#FAF8F4]/50 text-sm text-[#3B2618] placeholder-gray-400 focus:bg-white focus:outline-none focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513] transition-all resize-none"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      />
                      <FiMessageSquare
                        size={16}
                        className="absolute left-3.5 top-4 text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-13 mt-4 bg-[#8B4513] hover:bg-[#6D4420] text-white rounded-lg text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FiSend size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
