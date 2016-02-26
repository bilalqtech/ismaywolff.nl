
{# fluidbox.item
 #
 # Generates html for a fluidbox gallery item. Uses thumbnails for production
 # builds. Image and title parameters are required.
 #}
{% macro item(image, title) %}
  {% import "../../lib/cloudinate/cloudinate.swig" as cloudinate %}

  <a class="js-fluidbox" href="{{ cloudinate.url(image, 'w_600,c_fill') }}" title="{{ title }}">
    <img src="{{ cloudinate.url(image, 'w_300,c_fill') }}" alt="{{ title }}">
  </a>
{% endmacro %}

{% macro init() %}
  <script>
    $(function () {
      $('.js-fluidbox').fluidbox();
    });
  </script>
{% endmacro %}
