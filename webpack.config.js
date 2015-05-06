var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var npm_dir = __dirname + '/node_modules'

var config = {
  cache:true,
  resolve: {
    'jQuery' : npm_dir + "/jquery/dist/jquery.min.js",
    'react' : npm_dir + "/react/dist/react.min.js",
    extensions: ["", ".js"]
  },
  entry: "./static/scripts/main.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    noParse: [
      // doesn't re-minify code (adds a few KBs of size but much faster reload speed)
      npm_dir + "/jquery/dist/jquery.min.js",
      npm_dir + "/react/dist/react.min.js"
    ],
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' }
    ]
  },
  plugins: [

  ]
};

module.exports = config;