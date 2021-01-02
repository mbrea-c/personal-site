---
slug: /blog/serverside-html
layout: post
title: Writing blog posts in LaTeX
date: 2020-09-07 01:04 +0100
---

When toying with different ideas on how to set up this blog, one of my options
was to write posts in latex, compile them serverside to html and then serve
those static pages. I hope the example I will put forth in this post is enough
to convince you that it is not a very good idea.

I'll start by saying that it is not impossible. In fact, during this period I
built a prototype that did just that. There's a command line tool (htlatex) that
will do the compilation for you, and you can just call it from 
