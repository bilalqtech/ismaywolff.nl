# ismay.github.io

> Source for [https://ismaywolff.nl](https://ismaywolff.nl)

## Requirements

* [node](https://nodejs.org/en/)

## Getting started

 To use, clone and run `npm install`. After that the main commands are:

* `npm run test`: lints all css and js and takes screenshots of build.
* `npm run deploy`: runs build task and deploys the production build.
* `npm run develop`: runs the `serve` and `watch` tasks in parallel.

The above tasks alias these subtasks, which can be run separately when necessary:

* `npm run deploy:build`: builds a production version to `build`.
* `npm run deploy:push`: runs shell script to push `build` contents to master branch.
* `npm run develop:serve`: builds to `.tmp` and rebuilds on changes.
* `npm run develop:watch`: serves the development version from `.tmp` and refreshes the browser on changes.
* `npm run test:eslint`: lints all js in `src` and `lib`.
* `npm run test:screenshot`: takes screenshots of the results in  `build`.
* `npm run test:stylelint`: lints all css in `src` and `lib`.

## License

[MIT](http://ismay.mit-license.org/)
