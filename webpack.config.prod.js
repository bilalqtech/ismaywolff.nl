var PreloadWebpackPlugin = require('preload-webpack-plugin')
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
    main: './client/index.jsx'
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
    new CleanWebpackPlugin(
      path.join(__dirname, 'dist'),
      { verbose: false }
    ),
    new CopyWebpackPlugin([{ from: path.join(__dirname, 'static')}]),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'SPACE_ID',
      'CONTENT_DELIVERY_TOKEN',
      'PROD_TRACKING_ID'
    ]),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client', 'index.ejs'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new PreloadWebpackPlugin({
      rel: 'preload'
    }),
    // split chunks
    // https://github.com/webpack/webpack/issues/4638#issuecomment-292702190
    // http://stackoverflow.com/a/43291641/5918874
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (m) => /node_modules/.test(m.context)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'react',
      minChunks: (m) => /node_modules\/(?:react\/|react-dom\/)/.test(m.context)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    })
  ]
}
