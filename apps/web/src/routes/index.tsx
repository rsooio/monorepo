import { Button } from '@repo/ui/components/button';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
  loader: async ({ context }) => {
    const { data } = await context.api.get();
    return { data };
  },
});

function App() {
  const { data } = Route.useLoaderData();

  return (
    <div>
      {data}
      <Button>Click Me</Button>
    </div>
  );
}
