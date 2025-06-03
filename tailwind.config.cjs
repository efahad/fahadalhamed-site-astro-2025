module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["'Cairo'", "sans-serif"]
      },
      colors: {
        primary: {
          light: "#60a5fa",
          DEFAULT: "#2563eb",
          dark: "#1e40af"
        }
      }
    }
  },
  plugins: []
}