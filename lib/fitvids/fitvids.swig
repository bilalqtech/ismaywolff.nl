{% macro item(id) %}
  <div class="js-fitvids">
    <iframe src="https://player.vimeo.com/video/{{ id }}?color=ffffff&byline=0&portrait=0" width="1500" height="843" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  </div>
{% endmacro %}

{% macro init() %}
  <script>
    $(document).ready(function(){
      $('.js-fitvids').fitVids();
    });
  </script>
{% endmacro %}
