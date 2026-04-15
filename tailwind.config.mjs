export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#f9ede7',
          500: '#6e8894',
          600: '#5e7681',
        },
        neutral: {
          50: '#ceeddb',
          100: '#544e61',
          200: '#e7e5e4',
          400: '#a8a29e',
          700: '#44403c',
          900: '#1c1917',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        script: ['"Le Jour Script"', 'cursive'],
      },
      maxWidth: {
        content: '1200px',
      },
      aspectRatio: {
        project: '4 / 3',
      },
      boxShadow: {
        card: '0 12px 30px rgba(28, 25, 23, 0.08)',
      },
      backgroundImage: {
        'paper-glow':
          'radial-gradient(circle at top, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0) 45%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
