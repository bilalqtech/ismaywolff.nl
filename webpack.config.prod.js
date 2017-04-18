var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var InlineChunkManifestHtmlWebpackPlugin = require('inline-chunk-manifest-html-webpack-plugin')
var PreloadWebpackPlugin = require('preload-webpack-plugin')
var WebpackMd5Hash = require('webpack-md5-hash')
var path = require('path')
var webpack = require('webpack')

// Define two different css extractors
var extractBundle = new ExtractTextPlugin('[name]-[chunkhash].css')
var extractVendor = new ExtractTextPlugin('vendor-[chunkhash].css')

module.exports = {
  entry: {
    main: './client/index.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
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

    /**
     * Extract required css to a separate file. Create a vendor and an application bundle.
     */

    extractVendor,
    extractBundle,

    /**
     * Clean dist before building
     */

    new CleanWebpackPlugin(
      path.join(__dirname, 'dist'),
      { verbose: false }
    ),

    /**
     * Copy all static assets to dist
     */

    new CopyWebpackPlugin([{ from: path.join(__dirname, 'static')}]),

    /**
     * Minify the generated js and pass along the sourcemaps
     */

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),

    /**
     * Add all the necessary environment variables
     */

    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'SPACE_ID',
      'CONTENT_DELIVERY_TOKEN',
      'PROD_TRACKING_ID'
    ]),

    /**
     * Generate an index.html referencing all the generated assets
     */

    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client', 'index.ejs'),
      inject: false,
      filename: 'index.html',
      environment: {
        COMMIT: process.env.COMMIT,
        DATE: new Date()
      },
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),

    /**
     * Preload async chunks automatically
     */

    new PreloadWebpackPlugin({
      rel: 'preload'
    }),

    /**
     * Split chunks
     *
     * Splitting passes modules from top to bottom, see also:
     * - https://github.com/webpack/webpack/issues/4638#issuecomment-292702190
     * - http://stackoverflow.com/a/43291641/5918874
     *
     * Extracts:
     *
     * - Vendor chunk
     * - React chunk (react and react-dom)
     * - Manifest chunk (webpack runtime)
     */

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (m) => /node_modules/.test(m.context)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'react',
      minChunks: (m) => /node_modules\/(?:react\/|react-dom\/)/.test(m.context)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),

    /**
     * Enable deterministic builds, to prevent needless cache-busting
     *
     * - Hash module ids so the module identifiers won't change across builds
     * - Hash file contents with md5, so the hashes are based on the actual file contents
     * - Export json that maps chunk ids to their resulting asset files, means that the manifest
     *   doesn't have to change if a chunk changes
     * - Inline the resulting json in the html
     */

    new webpack.HashedModuleIdsPlugin(),
    new WebpackMd5Hash(),
    new ChunkManifestPlugin({
      filename: 'webpackManifest.json',
      manifestVariable: 'webpackManifest'
    }),
    new InlineChunkManifestHtmlWebpackPlugin({
      filename: 'webpackManifest.json',
      manifestVariable: 'webpackManifest'
    })
  ]
}
