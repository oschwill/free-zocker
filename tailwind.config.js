/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBackgroundColor: '#040F14',
        boxBackgroundColor: '#102130',
        buttonBackgroundColor: '#FF4654',
        mainFontColor: '#fff',
        inputBackgroundColor: '#375470',
        borderColorWhite: '#FFFFFF75',
      },
      backgroundImage: {
        'main-header-bg': "url('/images/homeHeaderImage.png')",
        'main-all-games-bg': "url('/images/AllGamesHeaderImage.png')",
        'main-recently-bg': "url('/images/RecentlyHeaderImage.png')",
      },
      spacing: {
        583: '583px',
        '50vh': '50vh',
        '75vh': '75vh',
        '90vh': '90vh',
        '90%': '90%',
        '87%': '87%',
        '84%': '84%',
      },
    },
    fontSize: {
      '1rem': '1rem',
      '1.5rem': '1.5rem',
      '2rem': '2rem',
      '2.5rem': '2.5rem',
      '3rem': '3rem',
      '3.5rem': '3.5rem',
      '4rem': '4rem',
      '4.5rem': '4.5rem',
      '5rem': '5rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1600px',
    },
  },
  plugins: [],
};
