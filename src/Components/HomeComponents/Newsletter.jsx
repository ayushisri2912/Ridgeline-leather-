import React, { useState } from "react";
import { FiMail, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { useToast } from "../../Context/ToastContext";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      showToast(
        "Welcome to The Ridgeline Circle! Your 10% discount code is WELCOME10.",
        "success",
        "Subscribed Successfully"
      );
      setEmail("");
    }, 1000);
  };

  return (
    <section className="bg-[#1F1A17] py-20 sm:py-24 relative overflow-hidden text-white">
      {/* Background Decorative Ambient Lighting Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1650px] h-full opacity-30 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#8B4513]/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-[#C79A63]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        {/* Top Section Separator Line */}
        <div className="w-full max-w-3xl mx-auto mb-10 flex items-center justify-center opacity-40">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C79A63] to-transparent w-full" />
        </div>

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-3.5 sm:gap-5 mb-4">
            <span className="w-12 sm:w-16 h-[1px] bg-[#C79A63]"></span>
            <span className="text-[#C79A63] text-xs">◆</span>
            <p
              className="uppercase text-[11px] sm:text-xs tracking-[0.45em] text-[#C79A63] font-semibold"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Join The Ridgeline Circle
            </p>
            <span className="text-[#C79A63] text-xs">◆</span>
            <span className="w-12 sm:w-16 h-[1px] bg-[#C79A63]"></span>
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-[#F5F1E8] leading-tight font-normal mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Unlock Exclusive Heritage Access
          </h2>

          <p
            className="text-[#D8C7B2] text-base sm:text-lg leading-relaxed font-light"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Subscribe to receive insider access to new handcrafted arrivals, private
            seasonal sales, and stories of traditional leather craftsmanship.
          </p>
        </div>

        {/* Interactive Subscription Form Box */}
        <div className="max-w-2xl mx-auto">
          {isSubscribed ? (
            <div className="bg-[#2A231F] border border-[#C79A63]/40 rounded-2xl p-8 text-center shadow-2xl">
              <div className="w-14 h-14 bg-[#C79A63]/20 text-[#C79A63] rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheckCircle size={30} />
              </div>
              <h3
                className="text-2xl sm:text-3xl text-[#F5F1E8] font-normal mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Welcome To The Circle!
              </h3>
              <p
                className="text-[#D8C7B2] text-sm mb-4 font-light"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                You've successfully subscribed. Use your welcome code at checkout:
              </p>
              <div className="inline-block bg-[#8B4513]/30 border border-[#C79A63]/50 px-6 py-2.5 rounded-xl text-[#F5F1E8] font-bold text-sm tracking-widest uppercase">
                WELCOME10 (10% OFF)
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex flex-col sm:flex-row items-center gap-3 p-2 bg-[#2A231F] border border-[#4A3E36] focus-within:border-[#C79A63] rounded-2xl shadow-2xl transition-all duration-300">
                <div className="relative w-full flex items-center">
                  <FiMail
                    size={20}
                    className="absolute left-4 text-[#C79A63]"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full h-14 pl-12 pr-4 bg-transparent text-[#F5F1E8] text-sm placeholder-[#9A8A7C] focus:outline-none"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto h-13 px-8 bg-[#8B4513] hover:bg-[#A65318] text-white rounded-xl text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 shrink-0 cursor-pointer disabled:opacity-70"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {isSubmitting ? (
                    <span>Subscribing...</span>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <FiArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Disclaimer */}
              <p
                className="text-[11px] text-[#9A8A7C] text-center mt-4 font-light"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                🔒 We respect your privacy. No spam, ever. Unsubscribe anytime with one click.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
