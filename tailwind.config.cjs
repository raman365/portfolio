/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm editorial dark palette
        bg: "#0b0b0d", // near-black page base
        surface: "#121215", // raised section background
        "surface-2": "#18181c", // cards / alternating sections
        cream: "#f4f1ea", // warm off-white body text
        muted: "#a3a099", // warm gray secondary text
        ink: "#171004", // near-black text on the accent
        accent: "#f5a524", // amber gold
        "accent-dim": "#dd8f0e", // hover amber
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "Inter", "system-ui", "sans-serif"],
        serif: ["'Instrument Serif'", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 50px -12px rgba(245, 165, 36, 0.45)",
        "glow-sm": "0 0 24px -8px rgba(245, 165, 36, 0.5)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        marquee: "marquee 45s linear infinite",
      },
    },
  },
  plugins: [],
};
