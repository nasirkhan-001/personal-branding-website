/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        cream: {
          50:  '#fdfcf9',
          100: '#f7f3ec',
          200: '#efe8da',
          300: '#e3d9c9',
          400: '#cfc0ab',
          500: '#b3a08a',
          600: '#8f7d68',
          700: '#6e5f4d',
          800: '#4f4336',
          900: '#342b22',
        },
        bark: {
          50:  '#f5efe8',
          100: '#e6d9ca',
          200: '#ccb69c',
          300: '#b09070',
          400: '#8f6e4a',
          500: '#6e5133',
          600: '#543d25',
          700: '#3d2c1a',
          800: '#281d10',
          900: '#1c1409',
        },
        terra: {
          50:  '#fdf0ea',
          100: '#f9d9c8',
          200: '#f2b49a',
          300: '#e88a67',
          400: '#d9663e',
          500: '#c4512a',
          600: '#a3421f',
          700: '#7e3117',
          800: '#59210e',
          900: '#3a1508',
        },
      },
      animation: {
        'fade-in':          'fadeIn 0.8s ease-out forwards',
        'slide-up':         'slideUp 0.6s ease-out forwards',
        'slide-up-delay':   'slideUp 0.6s ease-out 0.2s forwards',
        'slide-up-delay-2': 'slideUp 0.6s ease-out 0.4s forwards',
        'float':            'float 6s ease-in-out infinite',
        'scale-in':         'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
