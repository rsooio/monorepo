# Monorepo Template

A modern & lightweight monorepo template for fullstack projects with modular components, shared configs, containerised developments and 100% type-safety.

- [About](#about)
  - [Stack overview](#stack-overview)
  - [Base Functionalities](#base-functionalities)
- [Quick Start](#quick-start)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Developing](#developing)
  - [Working with workspaces](#working-with-workspaces)
  - [Tooling Scripts](#tooling-scripts)
- [Containerisation](#containerisation)
- [Other Notes](#other-notes)

## About

### Stack overview

Below is an overview of all the components in the stack:

```
apps
  ├─ web
  |   ├─ react (vite)
  |   ├─ tanstack (router)
  |   └─ tailwindcss (v4)
  ├─ api
  |   └─ elysia
packages
  ├─ ui
  |   ├─ tailwindcss
  |   └─ shadcn & radix ui
  └─ typescript
```

## Quick Start

### Prerequisites

Ensure the following tools are available on your system:

1. [Docker](https://docs.docker.com/engine/install)

### Setup

```bash
# Install dependencies
bun install

# Start development server
bun dev
```

By default the following URLs will be accessible:

- Web (frontend): http://localhost:3000
- API (backend): http://localhost:2999

## Development

### Working with workspaces

This project uses [Bun workspaces](https://bun.sh/docs/install/workspaces).

```bash
# Install dependencies for a specific workspace
bun install --filter web add some-package

# Run a script in a specific workspace
bun run --filter web dev
```

### Tooling Scripts

- `bun dev`: Start all applications in watch mode.
- `bun run biome:check`: Check linting and formatting.
- `bun run biome:format`: Fix formatting.
- `bun run biome:lint`: Run linter.

## Project Structure

- `apps/api`: Backend API using [Elysia](https://elysiajs.com).
- `apps/web`: Frontend using [Vite](https://vitejs.dev), [React](https://react.dev), and [TanStack Router](https://tanstack.com/router).
- `packages/ui`: Shared UI components based on [Shadcn UI](https://ui.shadcn.com).
- `packages/typescript`: Shared TypeScript configurations.

## Containerisation

This project includes a Docker Compose configuration for a complete development environment.

```bash
# Start the development environment
docker compose up
```

This will start:
- **Postgres Database**: Available on port 5432 (internal) and accessible to the app.
- **Development Container**: Runs both the Web and API applications using Bun.
  - The web application is accessible at http://localhost:3000.
  - The source code is mounted into the container, so changes are reflected immediately.

See [docker-compose.yaml](docker-compose.yaml) for details.

## Other Notes

### Tanstack Router

The web application uses TanStack Router with file-based routing.
Routes are defined in `apps/web/src/routes`.

### Environment Variables

Each application should have its own `.env` file if needed.
