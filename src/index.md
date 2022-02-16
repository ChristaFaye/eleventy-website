---
title: Tech-Works
layout: "index.njk"
---


<ul>

{% for post in collections.posts %}

<li id="list">
<a href="{{ post.url }}">
<!-- <img src="./img/logo2.png" alt="Test"/> --> 
    {{ post.data.title }}
</a>


{% endfor %}
</li>

</ul>










