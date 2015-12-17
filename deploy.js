/**
 * Dependencies
 */
var config = require('./config');
var ftpsync = require('ftpsync');

/**
 * Load settings
 */
ftpsync.settings = config;

/**
 * Deploy
 */
ftpsync.run(function(err) {
  if (err) {
    console.log(err);
  }

  process.exit();
});
