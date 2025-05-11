import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import type { AppRouter } from "../../backend/src/trpc/appRouter";

export const trpc = createTRPCReact<AppRouter>();

const {hostname, port, protocol} = window.location;

const url = `${protocol === 'https' ? 'wss' : 'ws'}://${hostname}:${port}/trpc`;

export const trpcClient = trpc.createClient({
    links: [
        httpBatchLink({
            url,
        })
    ]
});

export default trpc;
