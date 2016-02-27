# ismay.github.io

[![build status][build-badge]][build-url]

> Source for [https://ismaywolff.nl](https://ismaywolff.nl)

## Requirements

* [node](https://nodejs.org/en/)

## Getting started

 To use, clone and run `npm install`. After that the main commands are:

* `npm run test`: builds production version, lints and takes screenshots.
* `npm run deploy`: builds production version and deploys it.
* `npm run develop`: serves development version of site and rebuilds on changes.

The above tasks alias these subtasks, which can be run separately when necessary:

* `npm run build`: builds a production version to `build`.
* `npm run deploy:push`: runs shell script to push `build` contents to master branch.
* `npm run develop:serve`: builds to `.tmp` and rebuilds on changes.
* `npm run develop:watch`: serves the development version from `.tmp` and refreshes the browser on changes.
* `npm run test:eslint`: lints all js in `src` and `lib`.
* `npm run test:screenshot`: takes screenshots of the results in  `build`, can be found [here](test/README.md).
* `npm run test:stylelint`: lints all css in `src` and `lib`.

## License

[MIT](http://ismay.mit-license.org/)

[build-badge]: https://travis-ci.org/ismay/ismay.github.io.svg
[build-url]: https://travis-ci.org/ismay/ismay.github.io
