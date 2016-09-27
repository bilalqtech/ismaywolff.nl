---
# Meta
description: Images and description of eye of the beholder, a site-specific installation in a church in Groningen.
# Collection
collection: works
date: 2009-06-01
thumbnail: eye-of-the-beholder/1
title: Eye of the beholder
type: Installation
# Sitemap
canonical: https://ismaywolff.nl/work/eye-of-the-beholder
---
{% extends "../../lib/work/work.swig" %}

{% block description %}
  <p itemprop="description">A site-specific installation in a church in Groningen. The installation's suspended by a cable through a traditional opening in the ceiling called the eye of god. Lighting was randomly turned on and off through a controller in the attic. The box consists of mirrors facing inwards and a single light, where a one-way mirror allows the viewer to see inside.</p>
{% endblock %}

{% block gallery %}
  {{ image.link('eye-of-the-beholder/1') }}
  {{ image.link('eye-of-the-beholder/2') }}
  {{ image.link('eye-of-the-beholder/3') }}
{% endblock %}

{% block footer %}
  <p>
    <a itemprop="license" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
    <span> - </span>
    <a href="https://gitlab.com/ismay/images/tree/master/lib/eye-of-the-beholder">Download images</a>
  </p>
{% endblock %}
