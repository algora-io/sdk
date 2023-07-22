import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import superjson from "superjson";
import { type AppRouter } from "types/root";

export type AlgoraInput = inferRouterInputs<AppRouter>;
export type AlgoraOutput = inferRouterOutputs<AppRouter>;

export const algora = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: "https://console.algora.io/api/trpc",
    }),
  ],
});
