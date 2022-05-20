module.exports = {
  content: [
    "../recipe/pages/**/*.{js,ts,jsx,tsx}",
    "../recipe/Components/**/*.{js,ts,jsx,tsx}",
    "./.next/**/*"
  ],
  theme: {
    extend: {
      fontFamily:{
        custom:['Titillium Web', 'sans-serif'],
        frank:['Frank Ruhl Libre', 'serif'],
        rubik:['Rubik', 'sans-serif']
      },
      colors:{
        'primary':'#fa8274',
        'secondary':'#6e483a',
        'tertiary':'#be9c90',
        'last':'#fff5ee'
      }
    },
  },
  plugins: [

  ],

}
