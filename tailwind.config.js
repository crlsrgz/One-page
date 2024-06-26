/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./pages/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yeseva: ["Yeseva", "serif"],
        urbanistMedium: ["Urbanist-Medium", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "bounce-slow": "bounce 1.5s linear infinite",
      },
      cursor: {
        hand: "url('./src/assets/cursor/hand-svgrepo-com.cur'), pointer",
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "9rem" }],
        "12xl": ["12rem", { lineHeight: "10rem" }],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
