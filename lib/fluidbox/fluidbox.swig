{# fluidbox.item
 #
 # Generates html for a fluidbox gallery item. Uses thumbnails for production
 # builds. Image and title parameters are required.
 #}
{% macro item(image, title) %}
  {% set base = "https://res.cloudinary.com/ismay/image/upload/" %}
  {% set thumbnail = base + "w_300/" + image %}
  {% set fullsize = base + "w_1000/" + image %}

  <a class="js-fluidbox" href="{{ fullsize }}" title="{{ title }}">
    <img src="{{ thumbnail }}" alt="{{ title }}">
  </a>
{% endmacro %}

{% macro init() %}
  <script>
    $(function () {
      $('.js-fluidbox').fluidbox();
    });
  </script>
{% endmacro %}
