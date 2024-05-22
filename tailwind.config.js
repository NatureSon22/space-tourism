/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bellefair': ['Bellefair', 'serif'],
        'barlow': ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif']
      },
      colors: {
        'primary': '#ffffff',
        'neutral': '#C3C3C3',
        'neutral-100': '#808080'
      },
      backgroundImage: {
        'home-mobile': 'url(assets/home/background-home-mobile.jpg)',
        'home-desktop': 'url(assets/home/background-home-desktop.jpg)',
        'home-tablet': 'url(assets/home/background-home-tablet.jpg)',
        'destinations-mobile': 'url(assets/destination/background-destination-mobile.jpg)',
        'destinations-desktop': 'url(assets/destination/background-destination-desktop.jpg)',
        'destinations-tablet': 'url(assets/destination/background-destination-tablet.jpg)',
        'crew-mobile': 'url(assets/crew/background-crew-mobile.jpg)',
        'crew-desktop': 'url(assets/crew/background-crew-desktop.jpg)',
        'crew-tablet': 'url(assets/crew/background-crew-tablet.jpg)',
        'technology-mobile': 'url(assets/technology/background-technology-mobile.jpg)',
        'technology-desktop': 'url(assets/technology/background-technology-desktop.jpg)',
        'technology-tablet': 'url(assets/technology/background-technology-tablet.jpg)',

        // Add more background images as needed
      },
      boxShadow: {
        'shadow-custom': '0 4px 30px rgba(0, 0, 0, 0.1)'
      },
      animation: {
        'spin-slow': 'spin 100s linear infinite',
      },
    },
  },
  safelist: [
    {
      pattern: /bg-(home|destinations)-(mobile|tablet|desktop)/,
    },
  ],
  plugins: [],
}
