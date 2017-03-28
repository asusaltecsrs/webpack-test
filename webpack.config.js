var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: ["./src/script/main.js","./src/script/a.js"],
  entry:{
    mainKey:"./src/script/main.js",
    aKey:"./src/script/a.js"
  },
  output: {
    path: __dirname + "/dist/js",
    filename: '[name]-[chunkhash][5].bundle.js' //这样名字就不会相互覆盖
  },
  plugins: [new HtmlWebpackPlugin()]
}