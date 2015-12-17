{% import "../link/link.swig" as link %}

{% macro generate(filename, image, title, date) %}
  <div class="Card">
    <a class="Card-link" href="{{ link.to(filename) }}" title="{{ title }}">
      <img class="Card-image" src="{{ link.bust(image) }}">
      <div class="Card-details">
        <h3 class="Card-title">{{ title }}</h3>
        <span class="Card-date">{{ date | date('Y') }}</span>
      </div>
    </a>
  </div>
{% endmacro %}
