---
# Navigation
active: work
# Sitemap
canonical: https://ismaywolff.nl
---
{% import "lib/card/card.swig" as card %}
{% extends "lib/base/base.swig" %}

{% block content %}
  <div class="Grid Grid--withGutter">
    {% for work in works %}
      <div class="Grid-cell u-sm-sizeFull u-md-size1of2 u-lg-size1of3">
        {{ card.generate(
          work.filename,
          work.thumbnail,
          work.title,
          work.date) }}
      </div>
    {% endfor %}
  </div>
{% endblock %}
