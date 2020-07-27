---
title: Liquid playground
layout: page
days: Monday, Tuesday
---
# {{ site.title }}

## How to display time
Just time:\
{{ site.time }}

String time:\
{{ site.time | date_to_string }}

Long string time:\
{{ site.time | date_to_long_string }}

Long string ordinal time:\
{{ site.time | date_to_long_string: 'ordinal' }}

Long string ordinal US time:\
{{ site.time | date_to_long_string: 'ordinal', 'US' }}

## Data types

### String
{% assign greeting = 'Hi, there!' %}
{{ greeting }}

### Integer/Float

### Array

{% assign days = "Monday, Tuesday, Wednesday" | split: ", " %}

### Days
{% for day in days %}
  - {{ day }}
{% endfor %}

