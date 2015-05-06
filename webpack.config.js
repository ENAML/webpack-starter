var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var npm_dir = __dirname + '/node_modules'

var config = {
  cache:true,
  addVendor: function(name, path) {
    this.resolve.alias[name] = path;
    // this.module.noParse.push(new RegExp(path)); //this should work but bottom is better
    this.module.noParse.push(path);
  },
  cache:true,
  resolve: {
    alias: {
      // added by addVendor function
    },
    extensions: ["", ".js"]
  },
  entry: {
    app: ["./static/scripts/main.js"],
    vendors: ['jQuery']
  },
  output: {
    path: process.env.NODE_ENV === 'production' ? './dist' : __dirname,
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
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};

config.addVendor('jQuery', npm_dir + "/jquery/dist/jquery.min.js");

module.exports = config;