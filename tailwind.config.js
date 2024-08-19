module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#F3EDE7', // Tons suaves de areia
          200: '#E1D2BC', // Bege claro
          300: '#C6A87B', // Tons de caramelo
          400: '#A8824E', // Marrom claro
          500: '#8F6835', // Marrom terroso
          600: '#755229', // Tons mais escuros de marrom
          700: '#5B3E1F', // Marrom amadeirado
          800: '#3E2815', // Tons profundos de terra
          900: '#26190D', // Marrom quase preto
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      blackTextColor: '#000000',
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};
