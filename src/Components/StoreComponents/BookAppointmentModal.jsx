import React, { useState } from "react";
import { FiX, FiCalendar, FiClock, FiMapPin, FiUser, FiCheckCircle, FiShield, FiTag } from "react-icons/fi";
import { STORES_DATA } from "../../Data/storesData";

const BookAppointmentModal = ({ initialStore, onClose, onSuccessToast }) => {
  const [selectedStoreId, setSelectedStoreId] = useState(initialStore ? initialStore.id : STORES_DATA[0].id);
  const [serviceType, setServiceType] = useState("monogramming");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("11:00 AM");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");

  const services = [
    {
      id: "monogramming",
      title: "Hot Foil Monogramming",
      description: "Complimentary custom stamping on purchase or existing Ridgeline goods."
    },
    {
      id: "fitting",
      title: "Bespoke Boot & Belt Fitting",
      description: "One-on-one measurement and sizing session with our master outfitters."
    },
    {
      id: "care",
      title: "Leather Care & Conditioning",
      description: "Bring your leather goods for deep oiling, wax polishing, and brass care."
    },
    {
      id: "vip-tour",
      title: "Private Showroom Viewing",
      description: "Exclusive access to limited in-store collections with complimentary whiskey."
    }
  ];

  const timeSlots = [
    "10:30 AM", "11:30 AM", "01:30 PM", "03:00 PM", "04:30 PM", "06:00 PM"
  ];

  const selectedStore = STORES_DATA.find((s) => s.id === selectedStoreId) || STORES_DATA[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !preferredDate) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const code = `RL-APT-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmationCode(code);
      setIsSubmitting(false);
      setBookingConfirmed(true);
      if (onSuccessToast) {
        onSuccessToast(`Appointment confirmed! Ref Code: ${code}`);
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#3B2618]/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-[#FFFDFC] border border-[#E7DED2] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl my-8 text-[#3B2618]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#FAF8F5] border-b border-[#E7DED2] flex items-center justify-between">
          <div>
            <span
              className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#8B5A2B]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Private Reservation
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#3B2618]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Book a Showroom Visit
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close reservation modal"
            className="w-10 h-10 rounded-full bg-[#FFFDFC] border border-[#E7DED2] text-[#3B2618] hover:bg-[#3B2618] hover:text-[#FAF8F5] transition-all flex items-center justify-center cursor-pointer"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {bookingConfirmed ? (
            /* Confirmation Screen */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 mx-auto flex items-center justify-center">
                <FiCheckCircle size={32} />
              </div>

              <div>
                <h3
                  className="text-3xl font-bold text-[#3B2618] mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Reservation Confirmed
                </h3>
                <p className="text-xs text-[#8B5A2B] font-semibold uppercase tracking-widest mb-1">
                  Reference Code: <span className="text-[#3B2618] font-bold">{confirmationCode}</span>
                </p>
                <p className="text-sm text-[#6B5647] max-w-md mx-auto">
                  We look forward to welcoming you to the <span className="font-semibold text-[#3B2618]">{selectedStore.name}</span>. A confirmation details summary has been dispatched to <span className="font-semibold text-[#3B2618]">{email}</span>.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-5 bg-[#FAF8F5] border border-[#E7DED2] rounded-2xl text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-[#E7DED2]/60 pb-2">
                  <span className="text-[#8B5A2B] font-medium">Showroom:</span>
                  <span className="font-semibold text-[#3B2618]">{selectedStore.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#E7DED2]/60 pb-2">
                  <span className="text-[#8B5A2B] font-medium">Service:</span>
                  <span className="font-semibold text-[#3B2618]">
                    {services.find((s) => s.id === serviceType)?.title}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#E7DED2]/60 pb-2">
                  <span className="text-[#8B5A2B] font-medium">Date & Time:</span>
                  <span className="font-semibold text-[#3B2618]">
                    {preferredDate} at {preferredTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8B5A2B] font-medium">Guest:</span>
                  <span className="font-semibold text-[#3B2618]">{fullName}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-8 py-3.5 bg-[#3B2618] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.18em] rounded-full hover:bg-[#8B5A2B] transition-colors cursor-pointer"
              >
                Return to Showrooms
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Select Store */}
              <div>
                <label className="block text-xs uppercase tracking-[0.14em] font-semibold text-[#8B5A2B] mb-2">
                  1. Select Showroom Location
                </label>
                <select
                  value={selectedStoreId}
                  onChange={(e) => setSelectedStoreId(e.target.value)}
                  className="w-full p-3.5 bg-[#FAF8F5] border border-[#E7DED2] rounded-xl text-xs font-medium text-[#3B2618] focus:outline-none focus:border-[#8B5A2B]"
                >
                  {STORES_DATA.map((store) => (
                    <option key={store.id} value={store.id}>
                      {store.name} ({store.address.city}, {store.address.state})
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Service */}
              <div>
                <label className="block text-xs uppercase tracking-[0.14em] font-semibold text-[#8B5A2B] mb-2.5">
                  2. Select Consultation Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => setServiceType(service.id)}
                      className={`p-3.5 border rounded-2xl cursor-pointer transition-all ${
                        serviceType === service.id
                          ? "bg-[#FAF8F5] border-[#8B5A2B] ring-1 ring-[#8B5A2B]"
                          : "bg-[#FFFDFC] border-[#E7DED2] hover:border-[#8B5A2B]/50"
                      }`}
                    >
                      <p className="text-xs font-bold text-[#3B2618] mb-0.5">{service.title}</p>
                      <p className="text-[11px] text-[#6B5647] leading-relaxed">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date & Time selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] font-semibold text-[#8B5A2B] mb-2">
                    3. Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#E7DED2] rounded-xl text-xs text-[#3B2618] font-medium focus:outline-none focus:border-[#8B5A2B]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] font-semibold text-[#8B5A2B] mb-2">
                    4. Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#E7DED2] rounded-xl text-xs text-[#3B2618] font-medium focus:outline-none focus:border-[#8B5A2B]"
                  >
                    {timeSlots.map((t, idx) => (
                      <option key={idx} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <label className="block text-xs uppercase tracking-[0.14em] font-semibold text-[#8B5A2B] mb-2.5">
                  5. Guest Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#E7DED2] rounded-xl text-xs text-[#3B2618] placeholder-[#9C8A7B] focus:outline-none focus:border-[#8B5A2B]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#E7DED2] rounded-xl text-xs text-[#3B2618] placeholder-[#9C8A7B] focus:outline-none focus:border-[#8B5A2B]"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#E7DED2] rounded-xl text-xs text-[#3B2618] placeholder-[#9C8A7B] focus:outline-none focus:border-[#8B5A2B]"
                  />
                  <input
                    type="text"
                    placeholder="Special Requests / Monogram Text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#E7DED2] rounded-xl text-xs text-[#3B2618] placeholder-[#9C8A7B] focus:outline-none focus:border-[#8B5A2B]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-[#E7DED2] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 text-xs uppercase tracking-[0.14em] font-semibold text-[#6B5647] hover:text-[#3B2618] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 bg-[#3B2618] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.18em] rounded-full hover:bg-[#8B5A2B] transition-colors cursor-pointer shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? "Confirming..." : "Confirm Reservation"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentModal;
