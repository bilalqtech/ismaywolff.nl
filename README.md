# ismaywolff.nl

> Source for [https://ismaywolff.nl](https://ismaywolff.nl)

## requirements

* node
* an editor with editorconfig
* a valid .env file in the root of your project (see below)

## install

* clone and run `npm i`
* create `./.env` with your preferred settings

```bash
# Url parts for production and development
DEV_BASE=http://localhost
DEV_PORT=8888
PROD_BASE=https://ismaywolff.nl
```

## usage

* `npm start` to serve and rebuild on changes
* `npm test` to run unit tests continuously while developing

## other tasks

* `npm run build` to build a production version (to `./dist`)
* `npm run deploy` to deploy the contents of `./dist` to surge
* `npm run test:unit` to run all unit tests with a coverage report
* `npm run test:lint` to lint all `.js` and `.jsx`

## license

[MIT](http://ismay.mit-license.org/)
