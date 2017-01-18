# ismaywolff.nl

[![build status][build-badge]][build-url]
[![coverage status][coverage-badge]][coverage-url]
[![dependency status][dependency-badge]][dependency-url]
[![devDependency status][devDependency-badge]][devDependency-url]

> Source for [https://ismaywolff.nl](https://ismaywolff.nl)

## requirements

* node
* an editor with editorconfig
* a valid .env file in the root of your project (see below)

## install

* clone and run `npm i`
* create `./.env` with your preferred settings

```bash
# Url parts for development
DEV_BASE=http://localhost
DEV_PORT=8080

# Contentful settings
SPACE_ID=1234
CONTENT_DELIVERY_TOKEN=1234
CONTENT_PREVIEW_TOKEN=1234
```

## license

[MIT](http://ismay.mit-license.org/)

[build-badge]: https://img.shields.io/travis/ismay/ismaywolff.nl/master.svg
[build-url]: https://travis-ci.org/ismay/ismaywolff.nl
[coverage-badge]: https://img.shields.io/coveralls/ismay/ismaywolff.nl.svg
[coverage-url]: https://coveralls.io/github/ismay/ismaywolff.nl?branch=master
[dependency-badge]: https://img.shields.io/david/ismay/ismaywolff.nl.svg
[dependency-url]: https://david-dm.org/ismay/ismaywolff.nl
[devDependency-badge]: https://img.shields.io/david/dev/ismay/ismaywolff.nl.svg
[devDependency-url]: https://david-dm.org/ismay/ismaywolff.nl?type=dev
