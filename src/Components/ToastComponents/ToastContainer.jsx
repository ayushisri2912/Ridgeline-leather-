import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Info, AlertTriangle, Heart, X, Zap } from "lucide-react";
import { useToast } from "../../Context/ToastContext";

const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircle2 className="w-5 h-5 text-[#C79A63] shrink-0" />;
      case "info":
        return <Zap className="w-5 h-5 text-[#C79A63] shrink-0" />;
      case "wishlist":
        return <Heart className="w-5 h-5 text-red-400 fill-red-400 shrink-0" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />;
      default:
        return <Info className="w-5 h-5 text-[#C79A63] shrink-0" />;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="pointer-events-auto bg-[#3B2618] text-[#FAF8F5] p-4 rounded-2xl border border-[#C79A63]/50 shadow-2xl backdrop-blur-md relative overflow-hidden flex items-start gap-3.5 group"
          >
            {/* Left Icon */}
            <div className="mt-0.5">{getIcon(toast.type)}</div>

            {/* Content */}
            <div className="flex-1 pr-4">
              <h4 className="font-serif text-lg font-normal leading-none text-[#F5F1E8] mb-1">
                {toast.title}
              </h4>
              <p className="text-xs text-[#D8CFC4] font-light leading-relaxed">
                {toast.message}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => removeToast(toast.id)}
              className="text-[#D8CFC4] hover:text-[#FAF8F5] p-1 transition-colors cursor-pointer shrink-0"
              aria-label="Close Notification"
            >
              <X size={14} />
            </button>

            {/* Progress line animation */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 4, ease: "linear" }}
              className="absolute bottom-0 left-0 h-0.5 bg-[#C79A63]"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;
