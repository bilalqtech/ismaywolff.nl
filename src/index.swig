---
# Navigation
active: work
# Sitemap
canonical: https://ismaywolff.nl
---
{% extends "lib/base/base.swig" %}

{% block content %}
  <h2>Work</h2>
  {% for work in works %}
    <div>
      <h2>
        <a href="{{ link.to(work.filename) }}">
          {{ work.title }}
        </a>
      </h2>
      <p>{{ work.excerpt }}</p>
    </div>
  {% endfor %}
{% endblock %}
