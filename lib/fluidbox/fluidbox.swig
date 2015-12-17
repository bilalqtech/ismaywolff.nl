{% import "../link/link.swig" as link %}

{# fluidbox.item
 #
 # Generates html for a fluidbox gallery item. Uses thumbnails for production
 # builds. Image and title parameters are required, type is optional.
 #}

{% macro item(image, title, type) %}
  {# Use thumbnails for production builds #}
  {% if production %}
    {# Set .jpg as default if no image type was passed #}
    {% if !type %}{% set type = ".jpg" %}{% endif %}
    {% set thumbnail = image | replace(type, "-thumb" + type) %}
  {% endif %}

  {# Just use full-size images when developing #}
  {% if development %}
    {% set thumbnail = image %}
  {% endif %}

  {# Generate html #}
  <a class="js-fluidbox" href="{{ link.bust(image) }}" title="{{ title }}">
    <img src="{{ link.bust(thumbnail) }}" alt="{{ title }}">
  </a>
{% endmacro %}

{% macro init() %}
  <script>
    $(function () {
      $('.js-fluidbox').fluidbox();
    });
  </script>
{% endmacro %}
