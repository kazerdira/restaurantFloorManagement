/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'rfp-',  // Scoped prefix to avoid conflicts
  important: '.restaurant-floor-planner',  // Scope to root class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false,  // Disable global CSS reset
  },
  theme: {
    extend: {},
  },
  plugins: [],
}