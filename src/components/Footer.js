import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#323846] text-gray-400 py-4 px-[5%] md:px-[10%] flex justify-between items-center">
      {/* Copyright Section */}
      <div className="text-sm">
        © {new Date().getFullYear()} Raman's Portfolio. All Rights Reserved.
      </div>

      {/* Scroll to Top */}
      <button
        className="bg-[#07eeff] p-2 rounded-full shadow-md hover:bg-[#07eeffbf] transition"
        onClick={() => window.scrollTo({ top: 0 })}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#20242d"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
