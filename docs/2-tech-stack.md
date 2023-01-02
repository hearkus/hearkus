# Technology stack

This document describes the planned technology stack for Hearkus. This is of
course subject to change if an alternative that fits our needs better.

## Backend

Overall, Hearkus is not a complex application aside from its algorithmic core,
therefore we I feel we could simply stick to simple to maintain yet powerful
technologies like [Node.js], [TypeScript], and [tRPC]. While it may not be the
fastest solution available, it is fast enough for our needs and can be easily
maintained by a small team of developers.

For the database, we plan to use [PostgreSQL] with [Prisma] due to its
simplicity, reliability, and performance.

[node.js]: https://nodejs.org/en/
[typescript]: https://www.typescriptlang.org/
[postgresql]: https://www.postgresql.org/
[prisma]: https://www.prisma.io/
[trpc]: https://trpc.io/

## Artwork

The artwork is a major part of the UI/UX of a modern application, and as I am
not a skilled artist, I would like to use tools to help to create the artwork
and plan the UI/UX of every aspect of the application. I have found that Figma
and Midjourney are the best tools for this job. Figma is a powerful tool that
allows for collaborative creation and editing of artwork, while Midjourney is an
AI-powered tool that generates sketchy artwork based on input. It is a great
tool for getting started with the artwork for the application.

[figma]: https://www.figma.com/
[midjourney]: https://midjourney.com/

## Frontend

Wouldn't it be cool to have a website and native mobile aplications for Hearkus?
I think so. That's why I think we could use Next.js to create a website and
React Native to create native applications for iOS and Android, due to it being
a big ecosystem with a lot of support yet providing a great developer
experience.

In my honest opinion, I wouldn't use anything like [Electron] to create a
desktop application for Hearkus. It is of course a great tool for creating
desktop applications based on existing web technologies, but I think it is too
overkill and heavy for a application like Hearkus. I am still deciding if a
desktop application should be created and, if so, what technology to use.

If the desktop application be ever created, I'd like it to be easily supported
on platforms like Linux, Windows, FreeBSD, and macOS, so Electron wouldn't be
that great of a choice.

[electron]: https://www.electronjs.org/

## Project structure

A mono-repository is the best approach for a project like Hearkus, as it allows
for a single codebase for the backend, website, and the mobile applications.
This means that there is a single central repository containing all the code for
the project, rather than having multiple repositories for each part of the
project.I believe this approach is easier to manage and maintain as the project
grows.

So, [pnpm] and [Turborepo] seems to do the job for us. It's a tool that allows
you to manage a mono-repository with multiple packages. It's a great tool that
I've used in the past, and the reason it is better than plain [pnpm workspaces]
is that it allows you to have easier access to parallelized builds and it's
easier to manage overall as it is a build tool.

> **Warning**! Turborepo needs to be downgraded to `1.4.7` until proper support
> for FreeBSD is added, since that's my main platform for development.

[pnpm]: https://pnpm.io/
[turborepo]: https://turborepo.com/
[pnpm workspaces]: https://pnpm.io/workspaces

## Infrastructure

I am not yet sure about the infrastructure for the project as I am not yet
familiar with the best practices for hosting a project like this. I am still
researching this topic, and I will update this document when I have more
information, but I believe using [Docker] or [FreeBSD Jails] to create a
containerized environment for the application and isolate each component could
be a good approach. This would allow for good control over each environment
while protecting the host of the application from potential security breaches.

I appreciate any suggestions and help on this matter. 😁

[docker]: https://www.docker.com/
[freebsd jails]: https://www.freebsd.org/doc/handbook/jails.html

## Extra choices

- [Next.js] can be used for both the backend and frontend, allowing for a single
  codebase for both the website and internal communications API.
- superjson can be used for (de)serialization of JSON data, expanding built-in
  JSON capabilities to support more data types.
- Using [pnpm] for package management, since it is a fast and reliable package
  manager that is easy to use and maintain.
- Using [Expo] for React Native development, since it allows deployment to both
  iOS and Android platforms with ease.

[superjson]: https://github.com/blitz-js/superjson
[expo]: https://expo.io/

## Conclusion

Overall, this technology stack allows us to create a fast and reliable
application that can easily handle a large number of users and data.
