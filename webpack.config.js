var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    mainKey:"./src/script/main.js",
    aKey:"./src/script/a.js"
  },
  output: {
    path: "./dist/",
    filename: 'js/[name]-[chunkhash].bundle.js',
    publicPath: "http://www.helloan.cn"
  },
  plugins: [new HtmlWebpackPlugin({
      filename: 'index-[hash].html',
      template: 'index.html',
      title:'webpack haohailiaing diy name',
      inject:false,
      date:new Date(),
    })]
}