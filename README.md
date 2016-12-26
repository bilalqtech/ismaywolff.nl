# ismaywolff.nl

[![Build Status](https://travis-ci.org/ismay/ismaywolff.nl.svg?branch=master)](https://travis-ci.org/ismay/ismaywolff.nl)
[![Coverage Status](https://coveralls.io/repos/github/ismay/ismaywolff.nl/badge.svg?branch=master)](https://coveralls.io/github/ismay/ismaywolff.nl?branch=master)
[![David](https://img.shields.io/david/ismay/ismaywolff.nl.svg)](https://david-dm.org/ismay/ismaywolff.nl)
[![David](https://img.shields.io/david/dev/ismay/ismaywolff.nl.svg)](https://david-dm.org/ismay/ismaywolff.nl?type=dev)

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

# Contentful settings
SPACE_ID=1234
ACCESS_TOKEN=1234
```

## license

[MIT](http://ismay.mit-license.org/)
