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

const parseStatus = (
  status: string | null,
): "active" | "inactive" | undefined => {
  switch (status) {
    case "active":
      return "active";
    case "inactive":
      return "inactive";
    default:
      return undefined;
  }
};

const parseParams = (el: Element) => {
  const org = el.getAttribute("data-bounty-org");
  const limit = parseInt(el.getAttribute("data-bounty-limit") || "100", 10);
  const status = parseStatus(el.getAttribute("data-bounty-status"));

  if (!org) {
    return;
  }

  return { org, limit, status };
};

async function init(selector = "[data-bounty-org]") {
  try {
    const container = document.querySelector(selector);
    if (!container) {
      return;
    }

    const params = parseParams(container);
    if (!params) {
      console.error("Algora SDK: Invalid configuration");
      return;
    }

    container.innerHTML = "";

    for (let i = 0; i < params.limit; i++) {
      container.innerHTML += `
      <div class="bounty-skeleton">
        <div class="bounty-content">
          <div class="bounty-reward"></div>
          <div class="bounty-issue"></div>
          <div class="bounty-title"></div>
        </div>
      </div>
    `;
    }

    const { items: bounties } = await algora.bounty.list.query(params);

    container.innerHTML = "";

    bounties.forEach((bounty) => {
      container.innerHTML += `
        <a
          href="${bounty.task.url}"
          target="_blank"
          rel="noopener"
          class="bounty-card"
        >
          <div class="bounty-content">
            <div class="bounty-reward">${bounty.reward_formatted}</div>
            <div class="bounty-issue">${bounty.task.repo_name}#${bounty.task.number}</div>
            <div class="bounty-title">${bounty.task.title}</div>
          </div>
        </a>
      `;
    });
  } catch (error) {
    console.error("Algora SDK: Failed to fetch bounties", error);
  }
}

// Export for IIFE bundle
if (typeof window !== "undefined") {
  (window as any).Algora = { algora, init };

  // Auto-initialize when script loads
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => init());
  } else {
    init();
  }
}
