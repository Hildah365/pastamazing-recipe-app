/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF3E8",        // warm kitchen wall
        terracotta: "#C4674D",   // tomato sauce tone
        sage: "#8FAF8F",         // fresh herbs
        butter: "#F4C95D",       // soft golden pasta
        cocoa: "#5A3E36",        // warm brown text
        linen: "#FDF6EC",        // card background
      },

      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },

      boxShadow: {
        cozy: "0 10px 25px rgba(0, 0, 0, 0.08)",
      },

      borderRadius: {
        cozy: "1.5rem",
      }
    },
  },
  plugins: [],
}
