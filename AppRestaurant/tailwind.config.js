/** @type {import('tailwindcss').Config} */
export default {
  content: [
    //Explica en que archivos abra codigo de tailwindcss
    "./index.html",
    "./src/**/*.{js,jsx}" //todo lo que este en src y sean JS JSX
  ],
  theme: {
    extend: {
      colors:{

        'azul':{
          50:'#B6D1D9',
          100:'#79b3c3',
          200:'#4984a7',
          300:'#24588a'
        },

        'gris':{
          100:'#d9d9d9'
        },

        'amarillo':{
          100:'#f1c84b'
        },

      },
    },
  },
  plugins: [],
}

