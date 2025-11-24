import { Elysia } from 'elysia';

export const app = new Elysia({ prefix: '/api' })
  .listen(3000)
  .get('/health', () => 'OK')
  .get('/', async () => {
    return 'Hello Elysia';
  });

console.log(
  `API server running at http://${app.server?.hostname}:${app.server?.port}`,
);

export type App = typeof app;
