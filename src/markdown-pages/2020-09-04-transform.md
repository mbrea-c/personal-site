---
slug: /blog/transform
layout: post
title: Transform Components
date: 2020-09-04 00:56 +0100
image: "/assets/img/transform_scr.png"
---
In our game engine, the position and rotation of an object is always relative
to that of its parent (see image below for an example of that in action, where the smaller object is a child of the larger one). This simplifies some tasks in game design, but the
consequence is that every game object will need to contain position and
rotation information, lest we end up with a child object having a position
relative to nothing else. Nonetheless, we are limiting the information that an
object itself needs to store to just object metadata (name, id, parent,
children, etc.) so the position and rotation data will be part of a Transform
component. This component is special in that it will be required for all
objects, and will be automatically created and added on object creation.

![Demonstration of positioning of objects relative to their parent. The smaller block is a child of the larger block.](/assets/img/transform_relativepos_demonstration.gif)

We will first discuss the interface for this component, and later focus on
implementation details. 

# Interface

The interface to the Transform component will clearly need getters and setters
for the position and rotation of the object in question relative to its parent.
We note that it is often useful to get a position/rotation relative to the root
node of the object tree (i.e. a position in world space). It is sometimes
useful as well to convert a position/rotation in world space to one relative to
a given object, and to get a position/rotation relative to the parent of a
given object. Thus, our interface needs to provide methods to:

1. Given a Transform and a position/rotation relative to the given
   Transform, get the position/rotation relative to the parent object.
   These methods have type definition:
   ```c
   Real2 TR_PosToParentSpace(Component *transform, Real2 localPos);
   double TR_RotToParentSpace(Component *transform, double localRot);
   ```
2. Given a Transform and a position/rotation relative to the given
   Transform, convert the position/rotation to world space. The type definitions are:
   ```c
   Real2 TR_PosToRootSpace(Component *transform, Real2 localPos);
   double TR_RotToRootSpace(Component *transform, double localRot);
   ```
3. Given a position/rotation (in world space) and Transform, get the
   position/rotation relative to the given Transform. The type definitions are:
   ```c
   Real2 TR_PosToLocalSpace(Component *transform, Real2 rootPos);
   double TR_RotToLocalSpace(Component *transform, double rootRot);
   ```

# Implementation

The Transform component will store the position and rotation of the object
relative to its parent, so the getters and setters are trivial to implement.
In order to implement method 1, let $\mathbf{x}$ and $\alpha$ be the
position vector and rotation angle of the given Transform relative to its
parent, respectively. Let $\mathbf{x}_0$ and $\alpha_0$ be the given
position vector and rotation angle, respectively. Then the final position and
rotation with respect the the parent of the given Transform are given by

$$
\mathbf{x}_p = \mathbf{x} +
\begin{bmatrix}
\cos\alpha & -\sin\alpha \\
\sin\alpha & \cos\alpha
\end{bmatrix}
\cdot \mathbf{x}_0
$$
$$ \alpha_p = \alpha + \alpha_0 $$

respectively. Note that what we are doing in the first equation is rotating the given position vector
by the rotation angle of the given Transform, and then adding the result to the
position vector of the Transform.

The implementation of the second method boils down to repeated applications of
method 1 as we move up the object tree until we reach the root. For method 3,
we get the world space position and rotation of the given Transform using method 2
and call them $\mathbf{x}$ and $\alpha$ respectively. Let $\mathbf{x}_0$ and $\alpha_0$
be the position and rotation in world space given as arguments. Then the desired position and rotation angle relative to the given Transform are given by

$$
\mathbf{x}_l =
\begin{bmatrix}
\cos\alpha & \sin\alpha \\
-\sin\alpha & \cos\alpha
\end{bmatrix}
\cdot (\mathbf{x}_0 - \mathbf{x})
$$
$$ \alpha_l = \alpha_0 - \alpha $$

respectively. The matrix in the first equation is a rotation matrix by an angle
of $-\alpha$ applied to the position vector of the given world space position
relative to the given Transform. In other words, we first find the position
relative to the given Transform and then we rotate to "align" with the
coordinate axis of the Transform. The second equation is more straightforward,
we just need to find the difference in the angle of rotation between the
given Transform (in world space) and the given world space rotation.
