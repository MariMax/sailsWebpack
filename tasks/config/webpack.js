
module.exports = function (grunt) {
  var webpack = require("webpack");
  var webpackConfig = require('../../webpack.config');
  grunt.config.set('webpack',{
    options: webpackConfig,
    dev: {
      plugins: webpackConfig.plugins.concat([])
    },
    prod: {
      plugins: webpackConfig.plugins.concat(
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.UglifyJsPlugin()
      )
    }

  });

  grunt.loadNpmTasks('grunt-webpack');
};
