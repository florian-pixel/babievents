/** @type {import('tailwindcss').Config} */
import {withUt} from 'uploadthing/tw'

module.exports = withUt({
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
})

