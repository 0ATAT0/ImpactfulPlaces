/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html', // Include public HTML if any direct HTML files use Tailwind
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#004600', // This was #2A3D34 in roadmap, but current config is #004600. Let's keep current.
        'hero-green': '#2A3D34', 
        'brand-accent': '#C09553',
        'brand-blue': '#2B7BCB', // Updated to new blue
        'bg-light': '#F7F7F7',
        'text-primary': '#212529',
        'text-on-dark': '#F7F7F7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  safelist: [
    'text-brand-green',
    'text-brand-accent',
    'text-gray-500',
    'text-on-dark', // Explicitly safelist text-on-dark
    'bg-brand-green', // Safelist active background colors
    'bg-brand-blue',
    'bg-gray-600',
    // inactive text colors are also good to safelist if they are dynamic
    'text-brand-blue', 
  ],
  plugins: [],
};
