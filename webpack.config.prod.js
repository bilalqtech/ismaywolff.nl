var CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

// Define two different css extractors
var extractBundle = new ExtractTextPlugin('[name]-[hash].css')
var extractVendor = new ExtractTextPlugin('vendor-[hash].css')

module.exports = {
  entry: {
    main: './client/index.jsx',
    'vendor-base': [
      'babel-polyfill',
      'isomorphic-fetch',
      'normalize.css',
      'react',
      'react-dom'
    ],
    'vendor-volatile': [
      'normalizr',
      'react-document-title',
      'react-redux',
      'react-router-dom',
      'redux',
      'redux-saga',
      'styled-components'
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: './dist'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      './client',
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: extractVendor.extract({
          fallbackLoader: 'style-loader?sourceMap',
          loader: 'css-loader?sourceMap'
        })
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: extractBundle.extract({
          fallbackLoader: 'style-loader?sourceMap',
          loader: 'css-loader?sourceMap'
        })
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    extractVendor,
    extractBundle,
    new CleanWebpackPlugin('./dist'),
    new CopyWebpackPlugin([{ from: 'static' }]),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        SPACE_ID: JSON.stringify(process.env.SPACE_ID),
        CONTENT_DELIVERY_TOKEN: JSON.stringify(process.env.CONTENT_DELIVERY_TOKEN)
      }
    }),
    new HtmlWebpackPlugin({
      template: 'client/index.ejs',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: [
        'vendor-base',
        'vendor-volatile',
        'manifest'
      ]
    })
  ]
}
