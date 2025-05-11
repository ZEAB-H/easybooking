import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import type { AppRouter } from "../../backend/src/trpc/appRouter";
import SuperJSON from "superjson";

export const trpc = createTRPCReact<AppRouter>();

const { hostname, port, protocol } = window.location;

// Use http/https for API endpoints, not ws/wss
const url = `${protocol}//${hostname}:${port}/trpc`;

export const trpcClient = trpc.createClient({
    links: [
        httpBatchLink({
            url,
            transformer: SuperJSON,
        })
    ],
});

export default trpc;
