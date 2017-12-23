var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
//入口文件
  entry: {
    index: './src/page/index/index.js'/*,
    page2: './src/js/entry2.js',
    page3: './src/js/entry3.js',
    'vendor': ['./src/js/components/foo.js']*/
  },
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name].js'
  },
  externals: {
    'jQuery': "window.jQuery"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  //提取公共chuck的name
  plugins: [
/*    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/abeng.js'
    }),*/
    new ExtractTextPlugin("style.css")
  ]
}