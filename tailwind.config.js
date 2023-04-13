module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
      "tela-fundo":"linear-gradient(to  bottom, rgba(26, 102, 101, 0.9), rgba(0, 128, 128, 0.0)), url('/img/teladefundo.jpg')"
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
