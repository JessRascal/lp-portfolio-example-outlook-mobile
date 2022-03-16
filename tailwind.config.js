module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
      },
      minHeight: {
        screen80: '80vh',
        screen85: '85vh',
        screen90: '90vh',
      },
      colors: {
        outlook: {
          dark: '#005A9F',
          light: '#0078D4',
        },
        dark: {
          high: 'rgba(0, 0, 0, 0.87)',
          medium: 'rgba(0, 0, 0, 0.6)',
          disabled: 'rgba(0, 0, 0, 0.38)',
        },
        light: {
          high: 'rgba(255, 255, 255, 1)',
          medium: 'rgba(255, 255, 255, 0.6)',
          disabled: 'rgba(255, 255, 255, 0.38)',
        },
      },
    },
  },
  plugins: [],
};
