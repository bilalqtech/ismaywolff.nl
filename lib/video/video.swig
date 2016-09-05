{# video.link
 #
 # Generates an embedded video served from cloudinary
 #
 #}
{%- macro link(asset, version) -%}
  {% import "../cloudinate/cloudinate.swig" as cloudinate %}
  <span itemprop="associatedMedia" itemscope itemtype="http://schema.org/VideoObject">
    <video style="max-width:100%" controls>
      <source itemprop="contentUrl" src="{{ cloudinate.video(asset, version, 'webm') }}" type="video/webm"/>
      <source itemprop="contentUrl" src="{{ cloudinate.video(asset, version, 'mp4') }}" type="video/mp4"/>
      <source itemprop="contentUrl" src="{{ cloudinate.video(asset, version, 'ogv') }}" type="video/ogg"/>
      Your browser does not support the video tag.
    </video>
  </span>
{%- endmacro -%}
