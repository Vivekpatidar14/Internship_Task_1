/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #D4AC54 0%, #FFDEAC 50%, #E3BA5D 100%)', 
      
      },

    },
  },
  plugins: [],
}