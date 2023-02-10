/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'unbounded': ['Unbounded', 'sans-serif'],
      'mrdafoe': ['Mr Dafoe', 'serif'],
      'poppins': ['Poppins', 'sans-serif']
    }
  },
  plugins:[],
}
