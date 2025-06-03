module.exports = {
  content: ["./src/**/*.{astro,html,js}"],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"]
      },
      colors: {
        primary: "#1E3A8A",
        secondary: "#3B82F6",
        accent: "#0EA5E9"
      }
    }
  },
  plugins: []
};
