var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var npm_dir = __dirname + '/node_modules'

var config = {

  cache:true,
  addVendor: function(name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp(path));
  },
  cache:true,
  resolve: {
    alias: {
      // added by addVendor function
    },
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
      // added by addVendor function
    ],
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' }
    ]
  },
  plugins: [

  ]
};

config.addVendor('jQuery', npm_dir + "/jquery/dist/jquery.min.js");
config.addVendor('react', npm_dir + "/react/dist/react.min.js");


module.exports = config;