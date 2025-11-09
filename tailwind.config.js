/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // WICHTIG: Erweitert um .css und .html, um Kompilierungsfehler zu vermeiden
    './app/**/*.{js,ts,jsx,tsx,mdx,css,html}', 
    './components/**/*.{js,ts,jsx,tsx,mdx,css,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}