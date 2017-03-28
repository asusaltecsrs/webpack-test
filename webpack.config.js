module.exports = {
  entry: {
    mainKey:"./src/script/main.js",
    aKey:"./src/script/a.js"
  },
  output: {
    path: "./dist/js",
    filename: '[name]-[hash].bundle.js'
  }
}