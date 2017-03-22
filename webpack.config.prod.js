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
      'load-script',
      'normalize.css',
      'normalizr',
      'react',
      'react-document-title',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'redux',
      'redux-thunk'
    ],
    'vendor-volatile': [
      'react-measure',
      'styled-components'
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, 'dist')
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
          fallback: 'style-loader?sourceMap',
          use: 'css-loader?sourceMap'
        })
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: extractBundle.extract({
          fallback: 'style-loader?sourceMap',
          use: 'css-loader?sourceMap'
        })
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    extractVendor,
    extractBundle,
    new CleanWebpackPlugin(path.join(__dirname, 'dist')),
    new CopyWebpackPlugin([{ from: path.join(__dirname, 'static')}]),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'SPACE_ID',
      'CONTENT_DELIVERY_TOKEN'
    ]),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client', 'index.ejs'),
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
