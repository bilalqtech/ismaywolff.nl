---
# Collection
collection: works
date: 2009-06-01
thumbnail: eye-of-the-beholder/1
title: Eye of the beholder
type: Installation
# Sitemap
canonical: https://ismaywolff.nl/work/eye-of-the-beholder
---
{% extends "../lib/base/base.swig" %}

{% block title %}{{ title }} · {{ siteTitle }}{% endblock %}

{% block content %}
  <h2>{{ title }}</h2>
  <h3>{{ type }} · {{ date | date('F Y') }}</h3>
  <p>A site-specific installation in a church in Groningen. The installation's suspended by a cable through a traditional opening in the ceiling called the eye of god. Lighting was randomly turned on and off through a controller in the attic. The box consists of mirrors facing inwards and a single light, where a one-way mirror allows the viewer to see inside.</p>
  {{ image.link('eye-of-the-beholder/1') }}
  {{ image.link('eye-of-the-beholder/2') }}
  {{ image.link('eye-of-the-beholder/3') }}
{% endblock %}
