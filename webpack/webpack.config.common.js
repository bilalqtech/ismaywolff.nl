/* eslint-disable */

var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [path.resolve('./src')],
  },
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules)/,
        loaders: [
          'babel',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.ejs' })
  ]
};
