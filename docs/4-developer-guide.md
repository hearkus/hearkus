# Developer Guide

Welcome to the developers guide for Hearkus! This guide will provide you with
the information you need to get started contributing to the project or just
hosting it locally on your machine.

## Setting up a development environment

It is highly recommend that you wrap each component required by Hearkus in a
virtual component, such as [Docker] or [Jails] from FreeBSD®. This will allow
you to easily manage the dependencies required by Hearkus and keep your system
clean, while allowing you to have a great control of the workflow.

First of all, some tools are vital to the development of Hearkus, such as
[Node.js] and [pnpm]. Of course you don't need to wrap these tools in a virtual
component, since it is unlikely that they will conflict with other tools you may
have installed on your system, and you usually don't need that much control over
them.

Each "proprietary" component - that is, components declared on Hearkus' source
code - should be wrapped in a virtual component as well.

[docker]: https://www.docker.com/
[jails]: https://www.freebsd.org/doc/handbook/jails.html

### Components

- [PostgreSQL] - database system
- [Redis] - in-memory data structure store; used as caching technique
- [RabbitMQ] - message broker; used to communicate between microservices

### Recommended tools

The following tools are optional, but can enhance your development experience:

- [Figma] - design tool
- [Midjourney] - AI-based artwork generator
- [neovim] or [Visual Studio Code] - text editor

[figma]: https://www.figma.com/
[midjourney]: https://midjourney.com/
[neovim]: https://neovim.io/
[visual studio code]: https://code.visualstudio.com/

### Cloning

To clone the repository, you can use the following command:

```bash
git clone https://github.com/hearkus/hearkus.git
```

### Installing dependencies

Make sure you have [Node.js] and [pnpm] installed on your system. Then, run the
following command from the project's root directory:

```bash
pnpm install
```

### Compiling

To compile the project, run the following command:

```bash
pnpm build
```
