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
{% extends "../lib/work/work.swig" %}

{% block description %}
  <p itemprop="description">A project inspired by the use of statistics in psychology. These images are averages of twenty-five portraits each. They're computer generated, by averaging the shapes as well as the colors of each individual face with software of my own design. The portraits each focus on a separate area of portraiture: science, status, beauty and self-portraits.</p>
{% endblock %}

{% block imagegallery %}
  {{ image.link('mould/1') }}
  {{ image.link('mould/2') }}
  {{ image.link('mould/3') }}
  {{ image.link('mould/4') }}
{% endblock %}
