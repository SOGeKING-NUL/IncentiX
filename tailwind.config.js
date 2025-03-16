/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths based on your project structure
    "./public/index.html",              // If you're using an HTML file in public directory
  ],
  theme: {
    extend: {}, // Add custom configurations here if needed
  },
  plugins: [],
};
