---
# Meta
description: The work of artist Ismay Wolff
# Navigation
active: work
# Sitemap
canonical: https://ismaywolff.nl
---
{% extends "../lib/base/base.swig" %}

{% block content %}
  <h2>Work</h2>
  {% for work in works %}
    <div itemscope itemtype="http://schema.org/VisualArtwork">
      <h2>
        <a itemprop="url" href="{{ link.to(work.filename) }}">
          <span itemprop="name">{{ work.title }}</span>
        </a>
      </h2>
      <p itemprop="description">{{ work.excerpt }}</p>
    </div>
  {% endfor %}
{% endblock %}
