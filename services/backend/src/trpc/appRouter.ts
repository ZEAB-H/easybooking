import { publicProcedure, router } from "./trpc";
import { z } from "zod";

const getServiceTypesOutput = z.array(z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
}));

  const appRouter = router({
    ping: publicProcedure.output(String).query(() => 'Pong!'),
    getServiceTypes: publicProcedure.output(getServiceTypesOutput).query(async ({ctx}) => {
      const serviceTypes = await ctx.trx("service_type").select("*");
      return serviceTypes;
    }),
  });

  export type AppRouter = typeof appRouter;


  export default appRouter;
