{% import "../link/link.swig" as link %}

<header class="Header u-cf">
  <h1 class="Header-title">
    <a class="Header-link" href="{{ link.root() }}" title="Return to homepage">{{ siteTitle }}</a>
  </h1>
  <div class="Header-navigation">
    {% include "../navigation/navigation.swig" %}
  </div>
</header>
