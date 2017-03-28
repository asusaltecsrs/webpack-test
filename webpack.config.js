var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  context:'/Users/haohailiang/Desktop/webpack-test',
  entry:"./src/app.js",
  output: {
    path: "./dist/",
    filename: 'js/[name].bundle.js'
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel',
        include:path.resolve(__dirname, 'src'),
        exclude:path.resolve(__dirname, 'node_modules'),
        query:{
          "presets": ["es2015"]
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject:'body',
    })]
}