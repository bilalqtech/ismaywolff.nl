{% import "../link/link.swig" as link %}

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>{% block title %}{{ siteTitle }}{% endblock %}</title>
    <meta name="description" content="{{ description }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="canonical" href="{{ canonical }}">
    <link rel="stylesheet" href="{{ link.bust('css/styles.css') }}">
  </head>
  <body>
    <div class="Page">
      {% include "../header/header.swig" %}
      {% block content %}{% endblock %}
    </div>
    {% include "../jquery/jquery.swig" %}
    <script src="{{ link.bust('js/scripts.js') }}"></script>
    {% block scripts %}{% endblock %}
  </body>
</html>
