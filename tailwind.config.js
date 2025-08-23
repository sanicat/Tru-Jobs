/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0067BF',
          light: '#0A65CC',
          lighter: '#CEE0F5',
          bg: '#F2F9FF',
        },
        text: {
          primary: '#18191C',
          secondary: '#5E6670',
          tertiary: '#767F8C',
          muted: '#474C54',
        },
        border: {
          DEFAULT: '#E4E5E8',
          checkbox: '#9DC1EB',
        },
        social: {
          linkedin: '#0073B6',
          google: {
            yellow: '#FBBB00',
            blue: '#518EF8',
            green: '#28B446',
            red: '#F14336',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '35': ['35px', { lineHeight: '1.2' }],
        '32': ['32px', { lineHeight: '1.25' }],
        '17': ['17.5px', { lineHeight: '1.6' }],
        '16': ['16px', { lineHeight: '1.5' }],
        '14': ['14px', { lineHeight: '1.43' }],
        '12': ['12.3px', { lineHeight: '1.43' }],
      },
      spacing: {
        '465': '465px',
        '312': '312px',
        '208': '208px',
        '54': '54px',
      },
      borderRadius: {
        '5': '5px',
        '7': '7px',
      },
    },
  },
  plugins: [],
}