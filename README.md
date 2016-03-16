# ismay.github.io
[![build status][build-badge]][build-url]
[![dependency status][dependency-badge]][dependency-url]
[![devdependency status][devdependency-badge]][devdependency-url]

> Source for [https://ismaywolff.nl](https://ismaywolff.nl)

This is the source for my personal website. I also use it as a testing ground for new front end technology. The key features are:

* Hosted on [Github pages](https://pages.github.com/) with [Cloudflare](https://www.cloudflare.com/) as the [CDN](https://en.wikipedia.org/wiki/Content_delivery_network). Besides being a cheap solution, it's also proven to be faster and more versatile than the paid hosting that I used to have. All you need is a registered domain name.
* Images hosted and [transformed](http://cloudinary.com/documentation/image_transformations) by [Cloudinary](http://cloudinary.com/). I used to process images on every build, but it takes a lot of time and imagemagick can be a bit of a hassle. Cloudinary does all the image processing on-the-fly, caches the results and distributes the results via CDN. Which is much faster and more versatile than processing them locally.
* Built using [Metalsmith](http://www.metalsmith.io/), a modular static site generator that gives you complete freedom in the organisation of your build process. This makes the initial learning curve a little more steep, but I wouldn't have it any other way now.
* Deployed automatically by [Travis](https://travis-ci.org/). After every push to the development branch Travis runs the Metalsmith build task, tests with [Eslint](http://eslint.org/), [Stylelint](http://stylelint.io/) and [Webpagetest](http://www.webpagetest.org/) and takes [screenshots](https://github.com/sindresorhus/pageres) at the ten most popular resolutions. Using Travis for the build process makes deployment a lot quicker as you're not compiling locally.
* Uses [Suitcss](https://suitcss.github.io/) for the css architecture. I've used Suitcss for a while now, it was created by [Nicolas Gallagher](http://nicolasgallagher.com/) and is a good way to create loosely coupled css components. It uses a dialect of the [BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) to prevent styles leaking between components.
* Css is preprocessed by [Postcss](http://postcss.org/). Postcss is a modular, javascript based css preprocessor that works well with Suitcss. Postcss is best known for [autoprefixer](https://github.com/postcss/autoprefixer), which automatically adds vendor prefixes to your css, but can do a lot more. This article by David Clark is a nice introduction to Postcss: [It's Time for Everyone to Learn About PostCSS](http://davidtheclark.com/its-time-for-everyone-to-learn-about-postcss/).

## Requirements

* Up-to-date installation of [node.js](https://nodejs.org/en/)
* [local credentials](#local-credentials)
* [remote credentials](#remote-credentials)

## Usage

* clone and run `npm install`
* make sure all [requirements](#requirements) are met
* run `npm run develop`
* push the changes to github

## Local credentials

You'll need a `keys.js` file that exports keys for [Cloudinary](http://cloudinary.com/), so that [metalsmith-cloudinary](https://github.com/superwolff/metalsmith-cloudinary) can build the urls for your images:

```javascript
module.exports = {
  cloud_name: 'your_cloud_name',
  api_key: 'your_api_key',
  api_secret: 'your_api_secret'
}
```

## Remote credentials

You'll need a working [Travis](https://travis-ci.org/) account and turn on Travis for your repo to allow it to build your site. Replace the secure environment variables in `.travis.yml` with your own using [travis-encrypt](https://www.npmjs.com/package/travis-encrypt). You'll need:

* `GH_TOKEN`: a github token for your repo so Travis can publish the build
* `CLOUND_NAME`: your Cloudinary `cloud_name`
* `API_KEY`: your Cloudinary `api_key`
* `API_SECRET`: your Cloudinary `api_secret`

## License

[MIT](http://ismay.mit-license.org/)

[build-badge]: https://travis-ci.org/ismay/ismay.github.io.svg
[build-url]: https://travis-ci.org/ismay/ismay.github.io
[dependency-badge]: https://david-dm.org/ismay/ismay.github.io.svg
[dependency-url]: https://david-dm.org/ismay/ismay.github.io
[devdependency-badge]: https://david-dm.org/ismay/ismay.github.io/dev-status.svg
[devdependency-url]: https://david-dm.org/ismay/ismay.github.io#info=devDependencies
