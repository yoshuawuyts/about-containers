Even though I'm writing this from a Linux machine, I don't consider myself a
Linux person. Linux people have a particular _vibe_ to them, something that I
don't feel quite fits.

[I'm a DIY technologist](https://yoshuawuyts.com). I tend to make things myself.
I like the process. I like taking things apart. I like knowing how things work.
And then improving them.

A question I've recently be thinking about is: how can you run an application on
a machine, fearlessly.

---

There's a difference between the way we develop locally, and the way we deploy
things. Most devs these days seem to either work on MacOS or Windows, but most
deploys happen to Linux. That creates friction.

In order to combat that friction, Docker was created. A single abstraction, that
through virtualization can be run anywhere. But Docker had shortcomings. It
didn't have a story for how to move things from local to production.

Kubernetes was created as an abstraction on top of Docker to turn lots of
computers into something that can be reasoned about as a single computer. But in
doing so, again, it had shortcomings.

The problem of all abstractions we create, is the world view we imbed in them.
Docker wanted to make it safe for untrusted code to run in a trusted
environment, and thus needed to touch the networking protocols.

Kubernetes viewed the world through a lens of load balancers, and RPC, so it
moduled it's computer abstraction after it.

---

Docker doesn't fit my world view, and neither does Kubernetes.

---

The abstractions I'm after are the ones that fit my world view. I don't intend
to run untrusted code on my servers. I don't intent to use RPC everywhere. My
resources are limited too, so abstractions need to be efficient.

The way I interact with computers is through binaries. Every command in the
system is a binary that can be called. Ideally they don't depend on magic files
somehwere else on the computer - but that's not always up to me.

I want a container abstraction to behave like a binary. I want it to have memory
and CPU limits. I want it to be a tiny, self-contained system that doesn't mess
with my local computer.

If a container is a binary, the tooling around it only needs to deal with
binaries too. Logs can be read from `stdout`. Internal networking happens as it
would otherwise. Talking to other computers needs to be explicit.

Free access to UDP, TCP. DIY QUIC, UTP. I want to be able to replace RPC with
secure ledgers. I want to be able to send [incremental
updates](https://en.wikipedia.org/wiki/Rabin_fingerprint) over the wire,
reducing the cost of updates to a bare minimum.

I want to work on systems that look like what I work on locally.
But scaled out, and just running a few more programs that combine it into a
cohesive whole.

---

Computers should be understandable. Understanding leads to confidence.
Confidence creates empowerment.

This doesn't mean that "we're right, and you're not". The tools of today are
marvels of their own, but we should dare to look beyond what exists today. We
shouldn't be scared of big tech names thrown around. Or the amount of users and
contributors that they have.

We should look at how solutions are working out for you. If they're not good
enough, don't wait around for a corporate to fix them for you. Especially if
they're at the root of the design. Dare to look at what's possible without
existing legacy.

Anyway, let's cut this short. I'm excited for what containers can become! And
like, yeah that's about it. Containers should be boring: vessels for more
exciting things. Let's make sure they're boring, alright?

Peace.
