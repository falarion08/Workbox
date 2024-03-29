/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/templates/**/*.html",
    "./app/static/**/*.js"
],
  theme: {
    extend: {
      colors : {
        "bg-theme": "#0284C7",
        "btn-dflt":"#3B82F6",
        "workspace-item-bg": "#F0F9FF",
      }
    },
  },
  plugins: [],
}

