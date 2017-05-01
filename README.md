# ismaywolff.nl

[![build status][build-badge]][build-url]
[![coverage status][coverage-badge]][coverage-url]
[![greenkeeper][greenkeeper-badge]][greenkeeper-url]

> Source for [https://ismaywolff.nl](https://ismaywolff.nl)

## requirements

* [node](https://github.com/nodejs/node)
* [yarn](https://github.com/yarnpkg/yarn)
* a valid .env file in the root of your project (see below)

## install

* clone this repository and run `yarn`
* create `./.env` with your preferred settings:

```bash
# Dev url
DEV_BASE=http://0.0.0.0
DEV_HOST=0.0.0.0
DEV_PORT=8080

# Contentful
SPACE_ID=1234
CONTENT_PREVIEW_TOKEN=1234
CONTENT_DELIVERY_TOKEN=1234

# Google analytics
DEV_TRACKING_ID=UA-XXXXX-Y
PROD_TRACKING_ID=UA-XXXXX-Y
```

## containers

[![docker status][docker-badge]][docker-url]
[![image status][image-badge]][image-url]

Docker containers of this project are built automatically and can be found on [Dockerhub](https://hub.docker.com/r/ismay/ismaywolff.nl/). I run this project on a [CoreOS](https://coreos.com/) server on [Digital Ocean](https://www.digitalocean.com/), with an [Nginx reverse proxy](https://github.com/jwilder/nginx-proxy) and automatically renewing [Let's Encrypt](https://letsencrypt.org/) certificates. All that's needed is [this cloud-config](https://gist.github.com/ismay/da7acd94f07666a5308c4946f4482acb).

## credits

A thank you to [browserstack](https://www.browserstack.com) for the open-source account on which I do my cross-browser testing:

[![browserstack logo][browserstack-logo]][browserstack-url]

## license

[MIT](http://ismay.mit-license.org/)

[build-badge]: https://travis-ci.org/ismay/ismaywolff.nl.svg?branch=develop
[build-url]: https://travis-ci.org/ismay/ismaywolff.nl
[coverage-badge]: https://coveralls.io/repos/github/ismay/ismaywolff.nl/badge.svg?branch=develop
[coverage-url]: https://coveralls.io/github/ismay/ismaywolff.nl?branch=develop
[greenkeeper-badge]: https://badges.greenkeeper.io/ismay/ismaywolff.nl.svg
[greenkeeper-url]: https://greenkeeper.io/
[docker-badge]: https://images.microbadger.com/badges/version/ismay/ismaywolff.nl.svg
[docker-url]: https://hub.docker.com/r/ismay/ismaywolff.nl/
[image-badge]: https://images.microbadger.com/badges/image/ismay/ismaywolff.nl.svg
[image-url]: https://hub.docker.com/r/ismay/ismaywolff.nl/
[browserstack-logo]: https://i.imgur.com/NjXLL0d.png
[browserstack-url]: https://www.browserstack.com
