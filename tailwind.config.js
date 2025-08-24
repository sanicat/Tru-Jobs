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
          DEFAULT: '#0A66C2',
          hover: '#084d92',
          disabled: '#CEE0F5',
        },
        text: {
          DEFAULT: '#1F2937',
          secondary: '#6B7280',
          light: '#FFFFFF',
        },
        border: {
          DEFAULT: '#E5E7EB',
        },
        social: {
          linkedin: '#0A66C2',
          google: {
            yellow: '#FBBC05',
            blue: '#4285F4',
            green: '#34A853',
            red: '#EA4335',
          },
        },
        overlay: {
          dark: 'rgba(0, 0, 0, 0.6)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'gradient-overlay': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
      },
    },
  },
  plugins: [],
}