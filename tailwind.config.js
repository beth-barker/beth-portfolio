/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'lig': '#CAD2C5',
        'lime': '#84A98C',
        'med': '#52796F',
        'dg': '#354F52',
        'dark-g': '#2F3E46'
      },
      fontFamily: {
        body: ['Roboto'],
        logo: ['Tektur']
      },
      backgroundImage: {
        'leaf': "url('https://images.unsplash.com/photo-1532024802178-20dbc87a312a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
      }
    },
  },
  plugins: [],
}

