/* eslint-disable */

var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var path = require('path');
var webpack = require('webpack');
var common = require('./webpack.config.common');

// Define two different css extractors
var extractVendor = new ExtractTextPlugin('vendor-[hash].css');
var extractBundle = new ExtractTextPlugin('[name]-[hash].css');

module.exports = merge.smart(common, {
  entry: { main: path.join(process.cwd(), '/src/index') },
  output: {
    path: path.join(process.cwd(), '/dist'),
    filename: '[name]-[hash].min.js',
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: extractVendor.extract(
          'style-loader',
          'css-loader'
        )
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: extractBundle.extract(
          'style-loader',
          'css-loader'
        )
      }
    ],
  },
  plugins: [
    extractVendor,
    extractBundle,
    new CleanWebpackPlugin(['dist'], { root: process.cwd(), verbose: true }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    new webpack.optimize.DedupePlugin()
  ]
});
