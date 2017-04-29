/* eslint-disable global-require */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./webpack.config.client.prod')
} else {
  module.exports = require('./webpack.config.client.dev')
}
