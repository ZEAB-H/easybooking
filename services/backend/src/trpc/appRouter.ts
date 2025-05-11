import { publicProcedure, router } from "./trpc";
import { z } from "zod";

const getServiceTypesOutput = z.array(z.object({
    id: z.number(),
    name: z.string(),
}));

  const appRouter = router({
    ping: publicProcedure.output(String).query(() => 'Pong!'),
    getServiceTypes: publicProcedure.output(getServiceTypesOutput).query(async () => [
        {
            id: "hello" as unknown as number,
            name: 'Service 1! ',
        },
        {
            id: 2,
            name: 'Service Type 2',
        },
    ]),
  });

  export type AppRouter = typeof appRouter;


  export default appRouter;
