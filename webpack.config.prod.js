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
    main: [
      path.join(process.cwd(), '/src/index')
    ]
  },
  output: {
    path: path.join(process.cwd(), '/dist'),
    filename: '[name]-[hash].min.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(process.cwd(), '/src'),
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
    new CleanWebpackPlugin(['dist'], { root: process.cwd(), verbose: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({ template: 'src/index.ejs' }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      filename: '200.html'
    })
  ]
}
