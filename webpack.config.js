var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BowerWebpackPlugin = require("bower-webpack-plugin");


module.exports = {
  entry: {
    firstPage:'./assets/js/firstPage.js',
    thirdPage:'./assets/js/thirdPage.js'
  },
  output: {
    // Absolute output directory
    path: __dirname + '/.tmp/public/webpack',

    // Output path from the view of the page
    // Uses webpack-dev-server in development
    publicPath: '/webpack/',

    // Filename for entry points
    // Only adds hash in build mode
    filename: '[name].js',

    // Filename for non-entry points
    // Only adds hash in build mode
    chunkFilename: '[id].[name].[hash].bundle.js'
  },
  module: {
    preLoaders: [],
    loaders: [
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
      {test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")},
      {test: /\.(woff|woff2|svg|ttf|eot|png|jpg)$/, loader: "file-loader?name=[name].[ext]"},
      { test: /[\\\/]bower_components[\\\/]modernizr[\\\/]modernizr\.js$/,
        loader: "imports?this=>window!exports?window.Modernizr" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css']
  },
  plugins: [
    new BowerWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin("common.js"),
    new ExtractTextPlugin("styles.css"),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
};
