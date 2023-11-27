import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import superjson from "superjson";
import { type API } from "types/api";

export type AlgoraInput = inferRouterInputs<API>;
export type AlgoraOutput = inferRouterOutputs<API>;

export const algora = createTRPCProxyClient<API>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: "https://console.algora.io/api/trpc",
    }),
  ],
});
