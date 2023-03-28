module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
      "tela-fundo":"url('/img/teladefundo.jpg')",
    },
    },
    fontFamily: {
      'sans': ['Roboto',],
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
