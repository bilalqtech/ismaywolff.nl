{# video.link
 #
 # Generates an embedded video served from cloudinary
 #
 #}
{%- macro link(asset, version) -%}
  {% import "../cloudinate/cloudinate.swig" as cloudinate %}
  <video style="max-width:100%" controls>
    <source src="{{ cloudinate.video(asset, version, 'webm') }}" type="video/webm"/>
    <source src="{{ cloudinate.video(asset, version, 'mp4') }}" type="video/mp4"/>
    <source src="{{ cloudinate.video(asset, version, 'ogv') }}" type="video/ogg"/>
    Your browser does not support the video tag.
  </video>
{%- endmacro -%}
