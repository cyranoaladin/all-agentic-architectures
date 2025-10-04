/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#0A0A0A',
        'bg-card': '#1C1C1C',
        'text-main': '#F5F5F5',
        'text-muted': '#A0A0A0',
        'accent-1': '#00E5FF',
        'accent-2': '#00BFA5',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 6px 20px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
};
