# ismaywolff.nl

[![build status][build-badge]][build-url]
[![coverage status][coverage-badge]][coverage-url]
[![greenkeeper][greenkeeper-badge]][greenkeeper-url]
[![docker status][docker-badge]][docker-url]
[![image status][image-badge]][image-url]
[![nsp status][nsp-badge]][nsp-url]

> Source for [https://ismaywolff.nl](https://ismaywolff.nl)

I use this project to test anything I might find interesting as a developer. It is a
[universal javascript](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) application
based on [React](https://facebook.github.io/react/). A quick rundown of the most interesting parts:

### structure

The application's organization is by function, not by type, as I've found that to be a much more
maintainable structure in the long run. I've based the approach mainly on these two articles:

* [Three Rules For Structuring (Redux) Applications](https://jaysoo.ca/2016/02/28/organizing-redux-application/) by Jack Hsu
* [How to better organize your React applications?](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1) by Alexis Mangin

They're definitely worth your time if you're looking for an efficient way to organize a React
codebase.

### browser support

As a frontend developer you'll always have to keep browser support in mind when writing code. I've
automated checking browser support for my code as much as possible:

* [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) checks the browser
compatibility for my javascript
* [stylelint-no-unsupported-browser-features](https://github.com/ismay/stylelint-no-unsupported-browser-features)
does the same for my css
* [babel-preset-env](https://github.com/babel/babel-preset-env) compiles only what needs to be
compiled, meaning I'm always shipping javascript that's as modern as possible

The browsers that I want to support are defined in [.browserslistrc](.browserslistrc). Browserslist
documentation can be found [here](https://github.com/ai/browserslist).

### linting

As far as linting goes, I'm using a pretty elaborate setup:

* [eslint](http://eslint.org/) with the [airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
shareable config for my javascript.
* [stylelint](https://stylelint.io/) with the [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
preset for my css.
* [lint-staged](https://github.com/okonet/lint-staged) to lint staged files automatically before
each commit.
* [lint-spaces](https://www.npmjs.com/package/lintspaces) to enforce my editorconfig settings.
* [prettier](https://github.com/prettier/prettier) to automatically format my javascript to a
consistent style.

### bundling

I use [Webpack 2](https://webpack.js.org/) to bundle my app. I split my bundles into several chunks
and am using deterministic hashes (which isn't enabled by default). Check out [webpack.config.client.prod.js](webpack.config.client.prod.js)
for more details.

### polyfilling

As far as polyfilling goes: I don't include any polyfills in my bundle, so modern browsers don't
have to download any unnecessary polyfills. Instead I'm testing for the features I need, and
downloading polyfills on demand with [Polyfill.io](https://polyfill.io/v2/docs/) and [load-script](https://www.npmjs.com/package/load-script).
The approach was largely based on this article: [Loading polyfills only when needed](https://philipwalton.com/articles/loading-polyfills-only-when-needed/).
See [the clientside entry point for more details](src/client/index.jsx).

### analytics

I'm using a custom Google Analytics script, which was largely based on this article:
[The google analytics setup I use on every site I build](https://philipwalton.com/articles/the-google-analytics-setup-i-use-on-every-site-i-build/).
To track errors I'm using [Sentry.io](https://sentry.io/welcome/) which has great error reporting,
including stacktraces and sourcemaps.
 
### routing & styling

I'm using [React Router 4](https://reacttraining.com/react-router/) as my clientside router. Works
great, also with serverside rendering.

For styling I've used several approaches and I'm currently using [styled-components v2](https://www.styled-components.com/),
which is wonderful. It works both on the client and on the server, and when combined with [stylelint-processor-styled-components](https://github.com/styled-components/stylelint-processor-styled-components)
it even allows me to lint my styles with stylelint. It's a great way to make your css truly modular,
without any scoping issues.

### external testing

I'm using a couple of services to do some manual testing:

* [Loader.io](https://loader.io/) for the occasional load test, just to see how it performs.
* [Pingdom.com](https://www.pingdom.com/) to monitor performance automatically.
* [Webpagetest.com](https://www.webpagetest.org/) for in-depth performance testing.
* [Browserstack](https://www.browserstack.com/) to do cross-browser testing.

### ci

I use [Travis](https://travis-ci.org/) to run my tests and linters for each push. Coverage is
reported by [Coveralls](https://coveralls.io/) and my npm dependencies are kept up-to-date by
[Greenkeeper](https://greenkeeper.io/). [Node security platform](https://nodesecurity.io) tests
whether I'm using any unsafe dependencies.

### backend

I run this project on a [CoreOS](https://coreos.com/) server with this [Cloud-Config](https://gist.github.com/ismay/da7acd94f07666a5308c4946f4482acb)
on [Digital Ocean](https://www.digitalocean.com/). It is comprised of three dockers, where one is
built from the code in this repository (so an [Express](https://expressjs.com/) server serving the
React application), and the other two are:

* An [Nginx reverse proxy](https://github.com/jwilder/nginx-proxy)
* A [Let's Encrypt service](https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion) that
takes care of generating and automatically renewing my ssl certificates through [Let's Encrypt](https://letsencrypt.org/).

The docker container for this project is built by [Travis](https://travis-ci.org/) and can be found
on [Dockerhub](https://hub.docker.com/r/ismay/ismaywolff.nl/). I'm using [Cloudflare](https://www.cloudflare.com/)
as my cdn and [Contentful](https://www.contentful.com/) to host my content.

## requirements

* [node 8](https://github.com/nodejs/node)
* a valid .env file in the root of your project (see below)

## install

* clone this repository and run `npm install`
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

# Sentry
SENTRY_CLIENT_KEY=1234
SENTRY_SERVER_KEY=1234
SENTRY_APP=1234
SENTRY_API_KEY=1234
```

## credits

A thank you to [Browserstack](https://www.browserstack.com) for the open-source account on which I do my cross-browser testing.

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
[nsp-badge]: https://nodesecurity.io/orgs/ismay/projects/4719c95b-b54e-4586-abc7-e7f6f8b0a707/badge
[nsp-url]: https://nodesecurity.io/orgs/ismay/projects/4719c95b-b54e-4586-abc7-e7f6f8b0a707
