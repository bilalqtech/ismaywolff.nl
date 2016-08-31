---
# Collection
collection: works
date: 2011-09-01
thumbnail: induction/1
title: Induction
type: Installation
# Sitemap
canonical: https://ismaywolff.nl/work/induction
---
{% extends "../lib/base/base.swig" %}

{% block title %}{{ title }} · {{ siteTitle }}{% endblock %}

{% block content %}
  <h2>{{ title }}</h2>
  <h3>{{ type }} · {{ date | date('F Y') }}</h3>
  <p>An installation made during an exchange in Germany, in the abandoned military hospital complex of Beelitz-Heilstätten. Created with bits of machinery that were lying around and unhindered by any knowledge of electrical engineering. The machine consumes old VHS tapes found in the storage area of the complex.</p>
  {{ image.link('induction/1') }}
  {{ image.link('induction/2') }}
  {{ image.link('induction/3') }}
{% endblock %}
