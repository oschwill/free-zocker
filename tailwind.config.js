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
      },
    },
  },
  plugins: [],
};
