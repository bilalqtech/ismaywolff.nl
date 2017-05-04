const path = require('path')
const nodeExternals = require('webpack-node-externals')
const SentryPlugin = require('webpack-sentry-plugin')
const webpack = require('webpack')

module.exports = {
  entry: [
    './src/server/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: nodeExternals(),
  devtool: 'source-map',
  plugins: [

    /**
     * Add all the necessary environment variables.
     */

    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'SPACE_ID',
      'CONTENT_DELIVERY_TOKEN',
      'SENTRY_SERVER_KEY',
      'SENTRY_APP',
      'RELEASE',
      'BABEL_ENV'
    ]),

    /**
     * Upload source and sourcemaps to Sentry
     */

    new SentryPlugin({
      organisation: 'ismay',
      project: 'ismaywolff-nl',
      apiKey: process.env.SENTRY_API_KEY,
      release: process.env.RELEASE
    })
  ]
}
