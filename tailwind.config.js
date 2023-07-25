/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gray: '#7B8C98',
      white: '#FFFFFF',
      black: '#011016',
      imdb_color: '#FF9B39',
      rotten_color: '#F93A1E',
    },
  },
  plugins: [],
};
