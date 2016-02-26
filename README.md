# ismay.github.io

> Source for [https://ismaywolff.nl](https://ismaywolff.nl)

## Requirements

* [node](https://nodejs.org/en/)

## Getting started

 To use, clone and run `npm install`. After that the main commands are:

* `npm run deploy`: runs build task and deploys the production build.
* `npm run develop`: runs the `serve` and `watch` tasks in parallel.

The above tasks alias these subtasks, which can be run separately when necessary:

* `npm run build`: builds a production version to `build`.
* `npm run serve`: builds to `.tmp` and rebuilds on changes.
* `npm run watch`: serves the development version from `.tmp` and refreshes the browser on changes.

## License

[MIT](http://ismay.mit-license.org/)
