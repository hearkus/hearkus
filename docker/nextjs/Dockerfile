FROM node:18-alpine AS base

# Install pnpm
RUN npm i -g pnpm

# Copy root package.json and lockfile and install
# dependencies
FROM base AS dependencies
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy source code and build "apps/nextjs"
FROM base AS deploy
WORKDIR /usr/src/app
COPY . .
RUN pnpm build --filter nextjs
WORKDIR /usr/src/app/apps/nextjs
CMD ["pnpm", "start"]
