---
# Navigation
active: work
# Sitemap
canonical: https://ismaywolff.nl
---
{% import "lib/cloudinate/cloudinate.swig" as cloudinate %}
{% extends "lib/base/base.swig" %}

{% block content %}
  <div class="Grid Grid--withGutter">
    {% for work in works %}
      <div class="Grid-cell u-sm-sizeFull u-md-size1of2 u-lg-size1of3">
        <div class="Card">
          <a class="Card-link" href="{{ link.to(work.filename) }}" title="{{ work.title }}">
            <img class="Card-image" src="{{ cloudinate.url(work.thumbnail, 'w_550,h_350,c_fill') }}">
            <div class="Card-details">
              <h3 class="Card-title">{{ work.title }}</h3>
              <span class="Card-date">{{ work.date | date('Y') }}</span>
            </div>
          </a>
        </div>
      </div>
    {% endfor %}
  </div>
{% endblock %}
