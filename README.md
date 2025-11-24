# Monorepo

A modern & lightweight monorepo template for fullstack projects with modular components, shared configs, containerised developments and 100% type-safety.

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

### Setup

```bash
# Install dependencies and start development server
bun dev web

# Stop the development server
bun stop

# Show service logs
bun log web
```

## Project Structure

- `apps/*`: Application codebases.
- `packages/*`: Shared packages and configurations.

## Containerisation

This project includes a Docker Compose configuration for a complete development environment.

```bash
# Start the development environment
docker compose up [service-name]
```

This will start:
- The service you specified (e.g., `web`, `api`).
- Any dependencies required by the service (e.g., `pgsql` for Postgres).

See [docker-compose.yaml](docker-compose.yaml) for details.