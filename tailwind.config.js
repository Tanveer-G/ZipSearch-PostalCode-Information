/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'red-gradient': 'linear-gradient(to right, #FF1E27, #7D141D)',
        'red-gradient-left': 'linear-gradient(to right, #7D141D, #FF1E27)',
        'red-gradient-mid': 'linear-gradient(to right, #7D141D, #FF1E27, #7D141D)',
        'gold-gradient': 'linear-gradient(to right, #B88746, #FDF5A6, #B88746)',
        'silver-gradient': 'linear-gradient(to right, #616161, #E6E7E8, #616161)',
      },
    },
  },
  plugins: [],
}