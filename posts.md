---
layout: page
title: Posts
icon: book
permalink: /posts/
---

<div class="home">

  <h1 class="page-heading">Posts</h1>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>

  <a href="{{ "/feed.xml" | prepend: site.baseurl }}">{% include materialIconPartial.html icon="rss_feed" %}</a>

</div>
