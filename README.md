# ismaywolff.nl


[![build status][build-badge]][build-url]
[![coverage status][coverage-badge]][coverage-url]
[![greenkeeper][greenkeeper-badge]][greenkeeper-url]

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

# Contentful api tokens
  SPACE_ID=1234
  CONTENT_PREVIEW_TOKEN=1234

# Only used when building a production version locally, for travis generated containers this variable is set in .travis.yml
  CONTENT_DELIVERY_TOKEN=1234
  ```

## containers

[![docker status][docker-badge]][docker-url]
[![image status][image-badge]][image-url]

Docker containers of this project are built automatically and can be found on [Dockerhub](https://hub.docker.com/r/ismay/ismaywolff.nl/). To run them on a Digital Ocean CoreOS server (which is what I do) use the following cloud-config:

```
#cloud-config

coreos:
  update:
    reboot-strategy: reboot
  units:
    - name: "dockerstart.service"
      command: "start"
      content: |
        [Unit]
        Description=app
        Author=ismay

        [Service]
        Restart=always
        ExecStartPre=-/usr/bin/docker kill app
        ExecStartPre=-/usr/bin/docker rm app
        ExecStartPre=/usr/bin/docker pull ismay/ismaywolff.nl
        ExecStart=/usr/bin/docker run --name app -p 80:80 ismay/ismaywolff.nl
        ExecStop=/usr/bin/docker stop app
```

## license

[MIT](http://ismay.mit-license.org/)

[build-badge]: https://img.shields.io/travis/ismay/ismaywolff.nl/develop.svg
[build-url]: https://travis-ci.org/ismay/ismaywolff.nl
[coverage-badge]: https://img.shields.io/coveralls/ismay/ismaywolff.nl.svg
[coverage-url]: https://coveralls.io/github/ismay/ismaywolff.nl?branch=develop
[greenkeeper-badge]: https://badges.greenkeeper.io/ismay/ismaywolff.nl.svg
[greenkeeper-url]: https://greenkeeper.io/
[docker-badge]: https://images.microbadger.com/badges/version/ismay/ismaywolff.nl.svg
[docker-url]: https://hub.docker.com/r/ismay/ismaywolff.nl/
[image-badge]: https://images.microbadger.com/badges/image/ismay/ismaywolff.nl.svg
[image-url]: https://hub.docker.com/r/ismay/ismaywolff.nl/
