import { publicProcedure, router } from "./trpc";

  const appRouter = router({
    ping: publicProcedure.output(String).query(() => 'Pong!'),
    getServiceTypes: publicProcedure.query(async () => [
        {
            id: 1,
            name: 'Service Type 1',
        },
        {
            id: 2,
            name: 'Service Type 2',
        },
    ]),
  });

  export type AppRouter = typeof appRouter;


  export default appRouter;
