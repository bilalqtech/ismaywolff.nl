/* eslint-disable */

var merge = require('webpack-merge');
var path = require('path');
var webpack = require('webpack');
var common = require('./webpack.config.common');

module.exports = merge.smart(common, {
  entry: {
    main: [
      'webpack-dev-server/client?' + process.env.DEV_BASE + ':' + process.env.DEV_PORT,
      'webpack/hot/only-dev-server',
      './src/index',
    ],
  },
  output: {
    path: path.join(process.cwd(), '/dist'),
    filename: '[name].js',
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: process.env.DEV_PORT
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?sourceMap'
        ],
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
    new webpack.HotModuleReplacementPlugin(),
  ]
});
