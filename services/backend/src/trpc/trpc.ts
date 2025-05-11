import { initTRPC } from "@trpc/server";
import superJSON from "superjson";
import getDb from "../getDb";

const t = initTRPC.create({ transformer: superJSON });

const withTransaction = t.middleware(async ({ ctx, next }) => {
    const trx = await getDb().transaction();
    let result;
    try {
        result = await next({ ctx: { ...ctx, trx } });
        await trx.commit();
    } catch (error) {
        await trx.rollback();
        throw error;
    }
    return result;
});

export const router = t.router;
export const publicProcedure = t.procedure.use(withTransaction);
export const middleware = t.middleware;
export const mergeRouters = t.mergeRouters;
