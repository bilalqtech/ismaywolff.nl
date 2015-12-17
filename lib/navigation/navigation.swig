{% import "../link/link.swig" as link %}

<nav class="Navigation">
  <a class="Navigation-link{% if active == "work" %} is-active{% endif %}"
     title="My work" href="{{ link.root() }}">Work</a>
  <a class="Navigation-link{% if active == "about" %} is-active{% endif %}"
     title="About me" href="{{ link.to('about.html') }}">About</a>
</nav>
