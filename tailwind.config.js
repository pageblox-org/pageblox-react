/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  important: true,
  corePlugins: {
    preflight: false,
  },
  plugins: [],
  prefix: "tw-",
};
