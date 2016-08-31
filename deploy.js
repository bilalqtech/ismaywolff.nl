var ghpages = require('gh-pages');
var path = require('path');

var options = {
  branch: 'master'
};

ghpages.publish(path.join(__dirname, 'dist'), options);
