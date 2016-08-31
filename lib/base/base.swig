{% import "../link/link.swig" as link %}
{% import "../image/image.swig" as image %}

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>{% block title %}{{ siteTitle }}{% endblock %}</title>
    <meta name="description" content="{{ description }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="canonical" href="{{ canonical }}">
  </head>
  <body style="max-width:30rem;">
    <header>
      {% include "../header/header.swig" %}
      {% include "../navigation/navigation.swig" %}
    </header>
    <main>{% block content %}{% endblock %}</main>
  </body>
</html>
