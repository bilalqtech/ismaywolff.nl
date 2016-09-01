{# image.link
 #
 # Generates a thumbnail that links to the full size image on cloudinary
 #
 # Automatic content-aware cropping - g_auto
 # Intelligent content-aware encoding - q_auto
 # Dynamic format selection - f_auto
 # Automatic responsive images - w_auto and dpr_auto
 #}
{%- macro link(asset) -%}
  {% import "../cloudinate/cloudinate.swig" as cloudinate %}

  <span itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
    <a itemprop="contentUrl" href="{{ cloudinate.url(asset, 'f_auto,q_auto,w_1000') }}"><img itemprop="thumbnail" style="max-width:49%" src="{{ cloudinate.url(asset, 'w_550,h_350,c_fill,f_auto,g_auto,q_auto') }}"></a>
  </span>
{%- endmacro -%}
