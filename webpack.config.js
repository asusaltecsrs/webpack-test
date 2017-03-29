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
      },
      { 
        test: /\.html$/, 
        loader: "html-loader" 
      },
      { 
        test: /\.tpl$/, 
        loader: "ejs-loader" 
      },
      { 
        test: /\.css$/, 
        loader: "style!css!postcss" 
      },
      { 
        test: /\.less$/, 
        loader: "style!css!postcss!less" 
      },
      { 
        test: /\.scss$/, 
        loader: "style!css!postcss!sass" 
      },
    ]
  },
  postcss:[
    require('autoprefixer')({
      broswers:['last 150 versions']
    })
  ],
  plugins: [new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject:'body',
    })]
}