---
# Collection
collection: works
date: 2012-07-01
thumbnail: mould/1
title: Mould
type: Digital
# Sitemap
canonical: https://ismaywolff.nl/work/mould
---
{% extends "../lib/base/base.swig" %}

{% block title %}{{ title }} · {{ siteTitle }}{% endblock %}

{% block content %}
  <h2>{{ title }}</h2>
  <h3>{{ type }} · {{ date | date('F Y') }}</h3>
  <p>A project inspired by the use of statistics in psychology. These images are averages of twenty-five portraits each. They're computer generated, by averaging the shapes as well as the colors of each individual face with software of my own design. The portraits each focus on a separate area of portraiture: science, status, beauty and self-portraits.</p>
  {{ image.link('mould/1') }}
  {{ image.link('mould/2') }}
  {{ image.link('mould/3') }}
  {{ image.link('mould/4') }}
{% endblock %}
