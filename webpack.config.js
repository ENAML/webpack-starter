var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  cache:true,
  resolve: {
    extensions: ["", ".js"]
  },
  entry: "./static/scripts/entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [

    ]
  },
  plugins: [

  ]
};