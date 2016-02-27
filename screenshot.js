/* eslint-disable */

var del = require('del');
var fs = require('fs');
var glob = require('glob');
var Pageres = require('pageres');

// Take screenshots
var pageres = new Pageres({delay: 2})
  .src('./build/index.html', ['w3counter'], {crop: true})
  .dest('test')
  .run()
  .then(() => {
    glob("*.png", {cwd: './test'}, function (err, files) {
      // Delete old readme
      files.forEach((file) => {
        fs.appendFileSync('./test/README.md', `![${file}](${file})\n`);
      })
    })
  });
