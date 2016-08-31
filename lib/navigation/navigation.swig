<nav>
  {% if active == "work" %}
    <span>Work</span>
  {% else %}
    <a title="My work" href="{{ link.root() }}">Work</a>
  {% endif %}
  {% if active == "about" %}
    <span>About</span>
  {% else %}
    <a title="About me" href="{{ link.to('about.html') }}">About</a>
  {% endif %}
</nav>
