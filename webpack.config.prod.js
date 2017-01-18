var CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

// Define two different css extractors
var extractBundle = new ExtractTextPlugin('[name]-[hash].css')
var extractVendor = new ExtractTextPlugin('vendor-[hash].css')

module.exports = {
  entry: {
    main: './src/index.jsx',
    vendor: [
      'react',
      'react-dom',
      'redux',
      'redux-saga'
    ]
  },
  output: {
    filename: '[chunkhash].[name].js',
    path: './dist'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      './src',
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
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: extractBundle.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    extractVendor,
    extractBundle,
    new CleanWebpackPlugin('./dist'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        SPACE_ID: JSON.stringify(process.env.SPACE_ID),
        CONTENT_DELIVERY_TOKEN: JSON.stringify(process.env.CONTENT_DELIVERY_TOKEN)
      }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      filename: '200.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: [
        'vendor',
        'manifest'
      ]
    })
  ]
}
