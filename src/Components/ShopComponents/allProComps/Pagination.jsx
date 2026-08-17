import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ currentPage = 1, totalPages = 3, onPageChange }) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-[#E8DFD3]">
      <button
        onClick={() => onPageChange && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 rounded-xl border border-[#D8C2A8] bg-white text-[#3B2618] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center hover:bg-[#8B5E3C] hover:text-white transition shadow-sm"
        aria-label="Previous Page"
      >
        <FiChevronLeft size={16} />
      </button>

      {[1, 2, 3].map((page) => (
        <button
          key={page}
          onClick={() => onPageChange && onPageChange(page)}
          className={`w-9 h-9 rounded-xl text-xs font-semibold transition shadow-sm ${
            currentPage === page
              ? "bg-[#8B5E3C] text-white"
              : "bg-white border border-[#D8C2A8] text-[#3B2618] hover:bg-[#F5F0EA]"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 rounded-xl border border-[#D8C2A8] bg-white text-[#3B2618] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center hover:bg-[#8B5E3C] hover:text-white transition shadow-sm"
        aria-label="Next Page"
      >
        <FiChevronRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
