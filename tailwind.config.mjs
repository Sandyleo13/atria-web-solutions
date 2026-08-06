/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E53935',
        'primary-dark': '#C62828',
        'light-red': '#FEECEC',
        background: '#FAFAFA',
        dark: '#111827',
        gray: '#6B7280',
      },
      borderRadius: {
        lg: '12px',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(17,24,39,0.06)',
      },
      maxWidth: {
        'site': '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
