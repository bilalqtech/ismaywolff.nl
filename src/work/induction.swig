---
# Meta
description: Images and description of induction, an installation made during an exchange in Germany.
# Collection
collection: works
date: 2011-09-01
thumbnail: induction/1
title: Induction
type: Installation
# Sitemap
canonical: https://ismaywolff.nl/work/induction
---
{% extends "../lib/work/work.swig" %}

{% block description %}
  <p itemprop="description">An installation made during an exchange in Germany, in the abandoned military hospital complex of Beelitz-Heilstätten. Created with bits of machinery that were lying around and unhindered by any knowledge of electrical engineering. The machine consumes old VHS tapes found in the storage area of the complex.</p>
{% endblock %}

{% block gallery %}
  {{ video.link('induction/video-1', '1472655225') }}
  {{ video.link('induction/video-2', '1472655225') }}
  {{ image.link('induction/1') }}
  {{ image.link('induction/2') }}
  {{ image.link('induction/3') }}
{% endblock %}

{% block footer %}
  <p>
    <a itemprop="license" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
    <span> - </span>
    <a href="https://gitlab.com/ismay/images/tree/master/lib/induction">Download images and videos</a>
  </p>
{% endblock %}
