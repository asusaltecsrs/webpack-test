var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    mainKey:"./src/script/main.js",
    aKey:"./src/script/a.js",
    bKey:"./src/script/b.js",
    cKey:"./src/script/c.js"
  },
  output: {
    path: "./dist/",
    filename: 'js/[name]-[chunkhash].bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
      filename: 'a.html',
      template: 'index.html',
      title:'this is a file',
      inject:false,
    }),
  new HtmlWebpackPlugin({
      filename: 'b.html',
      template: 'index.html',
      title:'this is b file',
      inject:false,
    }),
  new HtmlWebpackPlugin({
      filename: 'c.html',
      template: 'index.html',
      title:'this is c file',
      inject:false,
    })]
}