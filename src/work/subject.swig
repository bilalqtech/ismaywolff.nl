---
# Collection
collection: works
date: 2011-04-01
thumbnail: subject/1
title: Subject
type: Photography
# Navigation
active: work
# Sitemap
canonical: https://ismaywolff.nl/work/subject
---
{% import "../lib/fluidbox/fluidbox.swig" as fluidbox %}
{% extends "../lib/base/base.swig" %}

{% block preconnect %}
  <link rel="preconnect" href="https://res.cloudinary.com">
{% endblock %}

{% block title %}{{ title }} · {{ siteTitle }}{% endblock %}

{% block content %}
  <section>
    <div class="Segment u-textCenter">
      <h2 class="Title Title--main">{{ title }}</h2>
      <h3 class="Title Title--sub">{{ type }} · {{ date | date('F Y') }}</h3>
    </div>
    <div class="Segment Segment--gallery">
      <div class="Grid Grid--withGutter">
        <div class="Grid-cell u-sm-sizeFull u-md-size1of4 u-lg-size1of4">
          {{ fluidbox.item('subject/1', title) }}
        </div>
        <div class="Grid-cell u-sm-sizeFull u-md-size1of4 u-lg-size1of4">
          {{ fluidbox.item('subject/2', title) }}
        </div>
        <div class="Grid-cell u-sm-sizeFull u-md-size1of4 u-lg-size1of4">
          {{ fluidbox.item('subject/3', title) }}
        </div>
        <div class="Grid-cell u-sm-sizeFull u-md-size1of4 u-lg-size1of4">
          {{ fluidbox.item('subject/4', title) }}
        </div>
        <div class="Grid-cell u-sm-sizeFull u-md-size1of3 u-lg-size1of3">
          {{ fluidbox.item('subject/5', title) }}
        </div>
        <div class="Grid-cell u-sm-sizeFull u-md-size1of3 u-lg-size1of3">
          {{ fluidbox.item('subject/6', title) }}
        </div>
        <div class="Grid-cell u-sm-sizeFull u-md-size1of3 u-lg-size1of3">
          {{ fluidbox.item('subject/7', title) }}
        </div>
      </div>
    </div>
    <div class="Segment Segment--text">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu finibus augue. Mauris ultrices quam id elit porttitor consectetur. Aenean lacinia est cursus est dapibus pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed imperdiet fermentum sem sed semper. Vestibulum sagittis fringilla mi. Nulla enim felis, pretium et ultrices id, imperdiet eget velit. Morbi non diam at nisi placerat molestie dictum at magna. Nullam fringilla pretium diam, sed molestie quam imperdiet sed.</p>
      <p>Vestibulum non magna et dolor tempor tincidunt. Ut finibus nulla mattis, dictum mi sed, fringilla orci. Vestibulum ac ipsum quam. Morbi pellentesque suscipit erat. Nulla tempus elit vel dictum cursus. Nam placerat lorem ac lorem lobortis sodales. Nullam fermentum, tortor vel malesuada interdum, ante elit ultricies elit, a volutpat libero leo ut mi. Donec id iaculis orci. Curabitur eu sagittis magna. Integer id augue libero. Curabitur nec consequat dui. Praesent lacinia pretium elit, non mollis orci pellentesque eu. Nulla ut vehicula neque. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas rhoncus, mi sit amet efficitur lacinia, lectus lorem faucibus diam, in gravida augue libero id nunc. </p>
    </div>
  </section>
{% endblock %}

{% block scripts %}{{ fluidbox.init() }}{% endblock %}
