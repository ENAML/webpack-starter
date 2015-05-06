var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var npm_dir = __dirname + '/node_modules'

module.exports = {
  cache:true,
  resolve: {
    'jQuery' : npm_dir + "/jquery/dist/jquery.min.js",
    extensions: ["", ".js"]
  },
  entry: "./static/scripts/main.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    noParse: [npm_dir + "/jquery/dist/jquery.min.js"],
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' }
    ]
  },
  plugins: [

  ]
};