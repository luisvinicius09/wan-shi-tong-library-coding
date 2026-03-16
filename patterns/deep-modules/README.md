# deep-modules

"Deep modules" is a concept from John Ousterhout's book A Philosophy of Software Design.
The core idea is simple: a deep module is one that provides powerful functionality through a simple interface.

Deep module: small interface, lots of functionality hidden inside.
Shallow module: large interface relative to the functionality it provides — basically a thin wrapper that forces complexity onto the caller.