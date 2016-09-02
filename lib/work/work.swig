{% extends "../base/base.swig" %}

{% block title %}{{ title }} · {{ siteTitle }}{% endblock %}

{% block content %}
    <div itemscope itemtype="http://schema.org/VisualArtwork">
      <h2 itemprop="name">{{ title }}</h2>
      <h3><span itemprop="artform">{{ type }}</span> · <span itemprop="dateCreated" datetime="{{ date | date('Y') }}" >{{ date | date('F Y') }}</span></h3>
      {% block description %}{% endblock %}
      {% block imagegallery %}{% endblock %}
    </div>
{% endblock %}
