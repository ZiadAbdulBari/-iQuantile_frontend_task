module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    // fontFamily: {
    //   'sans':'Open_Sans',
    // }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
