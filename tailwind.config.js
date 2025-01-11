/** @type {import('tailwindcss').Config} */
const tailwindScrollbar = require('tailwind-scrollbar');
const tailwindScrollbarHide = require('tailwind-scrollbar-hide');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        AvatarColor: '#E9E9E9',
        customgray: "#FAFAFA",
        customGreen: '#028643',
        Herocolor: '#03081F',
        Mainccolor: '#FBFBFB',
        gradient1: '#03081F',
        gradient2: '#03081F',
        Categories: '#F5F5F5',
        Restaurant: '#FC8A06',
        Customgray1: '#EEEEEE',
        Customgray2: '#E0E1DC',
        Custombutton: '#03081F',
        Aboutcolor: '#D9D9D9',
        Footercolor: '#03081F',
        Mackdonaldcolor: '#F4F4F4',
        offerColor: '#F3F3F3',
        PRodecDetailcolor: '#FDFDFD',
        Admincolor: '#1E1E1E',
      },
      width: {
        '820': '32rem',
        '850': '850px',
        '750': '750px',
        '700': '700px',
        '600': '600px',
        '650': '650px',
        '550': '550px',
        '500': '500px',
        '400': '400px',
        '450': '450px',
      },
      height: {
        '500': '32rem',
        '651': '651px',
        '550': '550px',
        '450': '450px',
        '400': '400px',
        '350': '350px',
      },
      spacing: {
        '100px': '100px',
        '120px': '120px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      transitionDelay: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [
    tailwindScrollbar,
    tailwindScrollbarHide,
  ],
}
