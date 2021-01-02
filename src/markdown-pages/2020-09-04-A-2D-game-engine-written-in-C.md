---
slug: /blog/2d-game-engine
layout: post
title: A 2D Game Engine Written in C
date: 2020-09-04 00:40 +0100
---
The idea of writing a game engine has been on my mind since I started
programming. I have played around with Unity before but I have always found
some raw appeal in engineering systems from scratch, plus I hold the belief
that you never really understand a system until you are able to recreate it.

I should add the disclaimer here that this is just a fun side project of mine,
its purpose being providing a context in which to tackle the many interesting
problems that arise during the desing and development of a game engine. The
choice of language reflects this fact: while much of the design of this engine
might be more suited to an object-oriented language such as C++, I have chosen
to use C because I find that the limitations of the language put more emphasis
in good software engineering practices and encourage a different design
approach (and I admit that I find it somewhat fun to work with).

In line with the purpose stated above, I have also avoided using external
libraries in this project, since that would generally detract from the problem
solving and learning opportunities. The only exception to this is SDL2, which I
rely on for drawing graphics, loading sprites and handling user input. 

In this post I will go over some parts of the design in a high level overview,
and I might explore some parts in more detail in later posts.

# Object-Component System

A key point to consider is how to organize the data of objects that exist
withing the game world, since the primary way a developer will interact with
the engine is by introducing new 'game objects'. My approach is to store
information about game objects in a game tree, the root being the 'world'
object, and each node being an object. Objects, then, need to store information
about their parent (if any) and their children. Other than that, however, we
will keep the information that every game object needs to store to a minimum,
and make use of an extensible component system to store the rest of the
information.

Components store data relevant to a particular function, and can be attached to
objects.  They can also have dependencies of other components (i.e. a physics
component makes no sense without a transform, or position/rotation data
component) so that a component can only be attached to an object if all its
dependencies are met.

What I like most about this approach is that it allows me to provide a clear
interface to the engine for the game developer by providing a number of
built-in components that abstract away a number of low level engine features,
and you can just "plug" them into your game objects at will. We will cover
some of these components in detail in later posts.

# Extending behaviour through components

Next up we need to consider how a game developer would define custom through
components: having a 

