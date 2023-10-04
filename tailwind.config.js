/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'triangles_image' : "url('../public/studium-bg.png')",
        'hero_image' : "url('../public/coworking.png')",
        'hero_image_mobile' : "url('../public/coworking-mobile.png')",
      },
    },
  },
  plugins: [],
}
