module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./resources/views/**/*.blade.php"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
