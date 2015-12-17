# ismaywolff.nl

> Source for [ismaywolff.nl](https://ismaywolff.nl)

## Requirements

* [io.js](https://iojs.org/en/index.html)
* [imagemagick-native](https://github.com/tomterl/metalsmith-convert#dependencies)

## Getting started

 To use, clone and run `npm install`. After that the main commands are:

* `npm run deploy`: runs build task and deploys the production build from `build` via ftp.
* `npm run develop`: runs the `serve` and `watch` tasks in parallel.

The above tasks alias these subtasks, which can be run separately when necessary:

* `npm run build`: builds a production version to `build`.
* `npm run serve`: builds to `.tmp` and rebuilds on changes.
* `npm run watch`: serves the development version from `.tmp` and refreshes the browser on changes.

## Ftp settings

To use the deploy command you'll need a `./config.js` file that exports settings for `ftpsync`:

```javascript
module.exports = {
  "local": "build/",
  "remote": "/public_html",
  "host": "ftp.yoursite.com",
  "port": 21,
  "user": "login@yoursite.com",
  "pass": "yourpassword",
  "connections": "2",
  "ignore":[]
}
```

## License

[MIT](http://ismay.mit-license.org/)
