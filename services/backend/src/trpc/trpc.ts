import { initTRPC } from "@trpc/server"
import superJSON from "superjson"

const t = initTRPC.create({transformer: superJSON});

export const router = t.router;
export const publicProcedure = t.procedure;
export const middleware = t.middleware;
export const mergeRouters = t.mergeRouters;
