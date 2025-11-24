import type { Treaty } from '@elysiajs/eden';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import type { App } from 'api';

type RootContext = {
  api: Treaty.Create<App>;
};

export const Route = createRootRouteWithContext<RootContext>()({
  component: () => (
    <>
      <Outlet />
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  ),
});
