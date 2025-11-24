import { Elysia } from 'elysia';

export const app = new Elysia({ prefix: '/api' })
  .get('/', async () => {
    return 'Hello Elysia';
  })
  .listen(2999);

console.log(
  `API server running at http://${app.server?.hostname}:${app.server?.port}`,
);

export type App = typeof app;
