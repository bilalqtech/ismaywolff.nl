{% macro item(id) %}
  <div class="FlexEmbed">
    <div class="FlexEmbed-ratio FlexEmbed-ratio--16by9"></div>
    <iframe class="FlexEmbed-content" src="https://player.vimeo.com/video/{{ id }}?color=ffffff&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  </div>
{% endmacro %}
