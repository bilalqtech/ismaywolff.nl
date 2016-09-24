---
# Meta
description: Images and description of subject, a project focused on finding and documenting the smallest village in the Netherlands.
# Collection
collection: works
date: 2011-04-01
thumbnail: subject/1
title: Subject
type: Photography
# Sitemap
canonical: https://ismaywolff.nl/work/subject
---
{% extends "../lib/work/work.swig" %}

{% block description %}
  <p itemprop="description">A project focused on finding and documenting the smallest village in the Netherlands. The search led to a village called Breezanddijk, which is located in the middle of the largest dike of the Netherlands. It's inhabited by a single family who operate a shipyard there and is accompanied by a small campsite.</p>
{% endblock %}

{% block gallery %}
  {{ image.link('subject/1') }}
  {{ image.link('subject/2') }}
  {{ image.link('subject/3') }}
  {{ image.link('subject/4') }}
  {{ image.link('subject/5') }}
  {{ image.link('subject/6') }}
  {{ image.link('subject/7') }}
{% endblock %}

{% block footer %}
  <p>
    <a itemprop="license" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
    <span> - </span>
    <a href="https://gitlab.com/ismay/images/tree/master/lib/subject">Download images</a>
  </p>
{% endblock %}
