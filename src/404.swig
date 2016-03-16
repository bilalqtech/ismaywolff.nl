---
# Sitemap
private: true
---
{% import "lib/vimeo/vimeo.swig" as vimeo %}
{% extends "lib/base/base.swig" %}

{% block title %}404 · {{ siteTitle }}{% endblock %}

{% block content %}
  <section>
    <div class="Segment u-textCenter">
      <h2 class="Title Title--main">404</h2>
      <h3 class="Title Title--sub">Page not found</h3>
    </div>
    <div class="Segment Segment--text">
      <p>Hmm.. unfortunately that page doesn't exist. Try the navigation up top, that should work. Also, here's a short animation by Adam Patch to make you feel better.</p>
    </div>
    <div class="Segment">
      {{ vimeo.item('65102146') }}
    </div>
  </section>
{% endblock %}
