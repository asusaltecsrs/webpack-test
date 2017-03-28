var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    mainKey:"./src/script/main.js",
    aKey:"./src/script/a.js"
  },
  output: {
    path: "./dist/js",
    filename: '[name]-[chunkhash].bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
}