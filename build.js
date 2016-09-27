/**
 * Dependencies
 */

var argv = require('yargs').argv;
var assets = require('metalsmith-assets');
var cloudinary = require('metalsmith-cloudinary');
var collections = require('metalsmith-collections');
var define = require('metalsmith-define');
var excerpts = require('metalsmith-better-excerpts');
var filenames = require('metalsmith-filenames');
var inPlace = require('metalsmith-in-place');
var metalsmith = require('metalsmith');
var robots = require('metalsmith-robots');
var sitemap = require('metalsmith-mapsite');
var watch = require('metalsmith-watch');
var when = require('metalsmith-if');

/**
 * Build environment settings
 */

// Assign command line arguments
var development = argv.development;
var production = !development;

// Set build directory
var destination = development ? '.tmp' : 'dist';

// Import env and keys
var metadata = require('./metadata');
var keys = require('./keys');

/**
 * Build
 */

metalsmith(__dirname)
  .destination(destination)
  .metadata(metadata)
  .use(define({
    development: development,
    production: production
  }))

  // Process assets
  .use(when(production, assets({
    source: 'lib/assets'
  })))

  // Process templates
  .use(filenames())
  .use(collections({
    works: {
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(excerpts({
    pruneLength: 140,
    pattern: '**/*.swig'
  }))
  .use(cloudinary(keys))
  .use(inPlace())

  // Generate search engine specific files
  .use(when(production, sitemap({
    hostname: metadata.host.remote,
    lastmod: new Date()
  })))
  .use(when(production, robots({
    sitemap: metadata.host.remote + 'sitemap.xml',
  })))

  // Watch for changes
  .use(when(development, watch({
    paths: {
      '${source}/**/*.swig': true,
      'lib/**/*.swig': '**/*.swig'
    }
  })))

  // Build site
  .build(function(err){
    if (err) throw err;
  });
