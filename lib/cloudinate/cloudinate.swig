{# cloudinate.image
 #
 # Returns the path to an image on Cloudinary.
 #}
{%- macro image(asset, transformation) -%}

  {%- if transformation -%}
    {%- set transform = transformation + '/' -%}
  {%- else -%}
    {%- set transform = '' -%}
  {%- endif -%}

  https://res.cloudinary.com/ismay/
  {{- cloudinary[asset].resource_type -}}/
  {{- cloudinary[asset].type -}}/
  {{- transform -}}
 v{{- cloudinary[asset].version -}}/
  {{- asset -}}.
  {{- cloudinary[asset].format -}}
{%- endmacro -%}

{# cloudinate.video
 #
 # Returns the path to a video on Cloudinary.
 #}
{%- macro video(asset, version, extension) -%}

  https://res.cloudinary.com/ismay/video/upload/v
  {{- version -}}/
  {{- asset -}}.
  {{- extension -}}
{%- endmacro -%}
