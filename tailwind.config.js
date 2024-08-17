/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geistThin: ["Geist Thin", "sans-serif"],
        geistLight: ["Geist Light", "sans-serif"],
        geistRegular: ["Geist Regular", "sans-serif"],
        geistMedium: ["Geist Medium", "sans-serif"],
        geistSemiBold: ["Geist Semibold", "sans-serif"],
        geistBold: ["Geist Bold", "sans-serif"],
        geistBlack: ["Geist Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
