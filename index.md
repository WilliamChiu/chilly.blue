---
title: Home
layout: default
icon: home
stylesheet: center-button.scss
---

<div class="post-content">

{% capture text %}
# Hi, my name is Billy Chiu.

I'm a Columbia University student who's probably gonna major in computer science and economics. On the side I'm an actor, a pianist, and a wannabe singer.

In the past, I've worked as a full stack web development intern at [DIDiT Labs](http://diditlabs.com/) and an investment/webmaster intern at [Rebellion Research](https://www.rebellionresearch.com/).  

I'm primarily interested in webdev and enjoy watching Safari become increasingly obsolete.

Much thanks to Yuka Miyanomae for the awesome drawing!
{% endcapture %}

{% include partials/imagePartial.html src="/media/chillyblue.svg" width="600px" height="650px" %}
<br>
<div class="center-button"><div class="center-button-text">
{{ text | markdownify }}
</div></div></div>

