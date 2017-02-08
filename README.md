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

Docker containers of this project are built automatically and can be found on [Dockerhub](https://hub.docker.com/r/ismay/ismaywolff.nl/). I run this project on a [CoreOS](https://coreos.com/) server on [Digital Ocean](https://www.digitalocean.com/), with an [Nginx reverse proxy](https://github.com/jwilder/nginx-proxy) and automatically renewing [Let's Encrypt](https://letsencrypt.org/) certificates. All that's needed is the following cloud-config:

```
#cloud-config

coreos:
  update:
    reboot-strategy: reboot
  locksmith:
    window-start: 04:00
    window-length: 1h
  units:
    - name: "nginx-proxy.service"
      command: "start"
      content: |
        [Unit]
        Description=Nginx reverse proxy

        [Service]
        Restart=always
        ExecStartPre=-/usr/bin/docker kill proxy
        ExecStartPre=-/usr/bin/docker rm proxy
        ExecStartPre=/usr/bin/docker pull jwilder/nginx-proxy
        ExecStart=/usr/bin/docker run \
          --name proxy \
          --log-opt max-size=50m \
          -p 80:80 \
          -p 443:443 \
          -v /etc/ssl/certs:/etc/nginx/certs:ro \
          -v /etc/nginx/vhost.d \
          -v /usr/share/nginx/html \
          -v /var/run/docker.sock:/tmp/docker.sock:ro \
          jwilder/nginx-proxy
        ExecStop=/usr/bin/docker stop proxy
    - name: "nginx-letsencrypt.service"
      command: "start"
      content: |
        [Unit]
        Description=Nginx letsencrypt proxy companion

        [Service]
        Restart=always
        ExecStartPre=-/usr/bin/docker kill ssl
        ExecStartPre=-/usr/bin/docker rm ssl
        ExecStartPre=/usr/bin/docker pull jrcs/letsencrypt-nginx-proxy-companion
        ExecStart=/usr/bin/docker run \
          --name ssl \
          --log-opt max-size=50m \
          -v /etc/ssl/certs:/etc/nginx/certs:rw \
          --volumes-from proxy \
          -v /var/run/docker.sock:/var/run/docker.sock:ro \
          jrcs/letsencrypt-nginx-proxy-companion
        ExecStop=/usr/bin/docker stop ssl
    - name: "docker-express-app.service"
      command: "start"
      content: |
        [Unit]
        Description=Express server serving react app

        [Service]
        Restart=always
        ExecStartPre=-/usr/bin/docker kill app
        ExecStartPre=-/usr/bin/docker rm app
        ExecStartPre=/usr/bin/docker pull ismay/ismaywolff.nl
        ExecStart=/usr/bin/docker run \
          --name app \
          --log-opt max-size=50m \
          -p 80 \
          -e VIRTUAL_HOST=ismaywolff.nl \
          -e "LETSENCRYPT_HOST=ismaywolff.nl" \
          -e "LETSENCRYPT_EMAIL=email@youremailhere.com" \
          ismay/ismaywolff.nl
        ExecStop=/usr/bin/docker stop app
    - name: iptables-restore.service
      enable: true
      command: "start"
write_files:
  - path: /var/lib/iptables/rules-save
    permissions: 0644
    owner: "root:root"
    content: |
      *filter
      :INPUT DROP [0:0]
      :FORWARD DROP [0:0]
      :OUTPUT ACCEPT [0:0]
      -A INPUT -i lo -j ACCEPT
      -A INPUT -i eth1 -j ACCEPT
      -A INPUT -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT
      -A INPUT -p tcp -m tcp --dport 22 -j ACCEPT
      -A INPUT -p tcp -m tcp --dport 80 -j ACCEPT
      -A INPUT -p tcp -m tcp --dport 443 -j ACCEPT
      -A INPUT -p icmp -m icmp --icmp-type 0 -j ACCEPT
      -A INPUT -p icmp -m icmp --icmp-type 3 -j ACCEPT
      -A INPUT -p icmp -m icmp --icmp-type 11 -j ACCEPT
      COMMIT
      # the last line of the file needs to be a blank line or a comment
```

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
