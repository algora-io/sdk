# Algora Typescript SDK

![npm (scoped)](https://img.shields.io/npm/v/@algora/sdk)

## Quickstart

Install the SDK with the package manager of your choice

#### pnpm

```bash
pnpm add @algora/sdk
```

#### yarn

```bash
yarn add @algora/sdk
```

#### npm

```bash
npm install @algora/sdk
```

## Examples

### Fetch bounties

```ts
import { algora } from "@algora/sdk";

const { items, next_cursor } = await algora.bounty.list.query({ org: "acme" });
```

### Bounty cards (React & Tailwind)

<details>
  <summary>Code</summary>

  ```tsx
  import { useEffect, useState } from 'react';
  import { algora, type AlgoraOutput } from '@algora/sdk';
  import Link from 'next/link';

  // TODO: Use your own Algora handle
  const org = 'acme';
  const limit = 3;

  type RemoteData<T> =
    | { _tag: 'loading' }
    | { _tag: 'failure'; error: Error }
    | { _tag: 'success'; data: T };

  type Bounty = AlgoraOutput['bounty']['list']['items'][number];

  export function Bounties() {
    const [bounties, setBounties] = useState<RemoteData<Bounty[]>>({ _tag: 'loading' });

    useEffect(() => {
      const ac = new AbortController();

      algora.bounty.list
        .query({ org, limit, status: 'active' }, { signal: ac.signal })
        .then(({ items: data }) => setBounties({ _tag: 'success', data }))
        .catch((error) => setBounties({ _tag: 'failure', error }));

      return () => ac.abort();
    }, []);

    return (
      <div className="space-y-2">
        <Callout />
        <ul className="grid sm:grid-cols-3 gap-2">
          {bounties._tag === 'success' &&
            bounties.data.map((bounty) => (
              <li key={bounty.id}>
                <BountyCard bounty={bounty} />
              </li>
            ))}
          {bounties._tag === 'loading' &&
            [...Array(limit)].map((_, i) => (
              <li key={i}>
                <BountyCardSkeleton />
              </li>
            ))}
        </ul>
      </div>
    );
  }

  function BountyCard(props: { bounty: Bounty }) {
    return (
      <Link
        href={props.bounty.task.url}
        target="_blank"
        rel="noopener"
        className="block group relative h-full rounded-lg border border-gray-400/50 dark:border-indigo-500/50 bg-gradient-to-br from-gray-300/30 via-gray-300/40 to-gray-300/50 dark:from-indigo-600/20 dark:via-indigo-600/30 dark:to-indigo-600/40 md:gap-8 transition-colors hover:border-gray-400 hover:dark:border-indigo-500 hover:bg-gray-300/10 hover:dark:bg-gray-600/5 !no-underline"
      >
        <div className="relative h-full p-4">
          <div className="text-2xl font-bold text-green-500 group-hover:text-green-600 dark:text-green-400 dark:group-hover:text-green-300 transition-colors">
            {props.bounty.reward_formatted}
          </div>
          <div className="mt-0.5 text-sm text-gray-700 dark:text-indigo-200 group-hover:text-gray-800 dark:group-hover:text-indigo-100 transition-colors">
            {props.bounty.task.repo_name}#{props.bounty.task.number}
          </div>
          <div className="mt-3 line-clamp-1 break-words text-lg font-medium leading-tight text-gray-800 dark:text-indigo-50 group-hover:text-gray-900 dark:group-hover:text-white">
            {props.bounty.task.title}
          </div>
        </div>
      </Link>
    );
  }

  function BountyCardSkeleton() {
    return (
      <div className="h-[122px] animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800">
        <div className="relative h-full p-4">
          <div className="mt-1 h-[25px] w-[59px] bg-gray-300 dark:bg-gray-700 rounded-md" />
          <div className="mt-2.5 h-[14px] w-[86px] bg-gray-300 dark:bg-gray-700 rounded-md" />
          <div className="mt-4 h-[20px] bg-gray-300 dark:bg-gray-700 rounded-md" />
        </div>
      </div>
    );
  }

  function Callout() {
    return (
      <div className="overflow-x-auto mt-6 flex rounded-lg border py-2 ltr:pr-4 rtl:pl-4 contrast-more:border-current contrast-more:dark:border-current border-indigo-100 bg-green-100 text-green-800 dark:border-indigo-400/30 dark:bg-indigo-600/20 dark:text-indigo-300">
        <div className="mt-px select-none text-xl ltr:pl-3 ltr:pr-2 rtl:pr-3 rtl:pl-2">
          💸
        </div>
        <div className="w-full min-w-0 leading-7">
          <p className="mt-6 leading-7 first:mt-0">
            We&apos;re actively looking for and <strong>paying</strong> contributors. Check out our{' '}
            <Link
              href={`https://console.algora.io/org/${org}/bounties`}
              target="_blank"
              rel="noopener"
              className="!underline font-medium"
            >
              active bounties
              <span className="sr-only"> (opens in a new tab)</span>
            </Link>
          </p>
        </div>
      </div>
    );
  }
  ```
</details>

### Bounty cards (React & CSS)

<details>
  <summary>Code</summary>

  ```tsx
  import { algora, type AlgoraOutput } from "@algora/sdk";
  import React, { useEffect, useState } from "react";

  // TODO: Use your own color mode hook
  import { useColorMode } from "@docusaurus/theme-common";

  import "./bounties.css";

  // TODO: Use your own Algora handle
  const org = "acme";
  const limit = 3;

  type RemoteData<T> =
    | { _tag: "loading" }
    | { _tag: "failure"; error: Error }
    | { _tag: "success"; data: T };

  type Bounty = AlgoraOutput["bounty"]["list"]["items"][number];

  export const Bounties = () => {
    const { colorMode } = useColorMode();

    const [bounties, setBounties] = useState<RemoteData<Bounty[]>>({
      _tag: "loading",
    });

    useEffect(() => {
      const ac = new AbortController();

      algora.bounty.list
        .query({ org, limit, status: "active" }, { signal: ac.signal })
        .then(({ items: data }) => setBounties({ _tag: "success", data }))
        .catch((error) => setBounties({ _tag: "failure", error }));

      return () => ac.abort();
    }, []);

    return (
      <div className={`bounty-grid ${colorMode}`}>
        {bounties._tag === "success" &&
          bounties.data.map((bounty) => (
            <div key={bounty.id}>
              <BountyCard bounty={bounty} />
            </div>
          ))}
        {bounties._tag === "loading" &&
          [...Array(limit).keys()].map((i) => (
            <div key={i}>
              <BountyCardSkeleton />
            </div>
          ))}
      </div>
    );
  };

  const BountyCard = (props: { bounty: Bounty }) => (
    <a
      href={props.bounty.task.url}
      target="_blank"
      rel="noopener"
      className="bounty-card"
    >
      <div className="bounty-content">
        <div className="bounty-reward">{props.bounty.reward_formatted}</div>
        <div className="bounty-issue">
          {props.bounty.task.repo_name}#{props.bounty.task.number}
        </div>
        <div className="bounty-title">{props.bounty.task.title}</div>
      </div>
    </a>
  );

  const BountyCardSkeleton = () => (
    <div className="bounty-skeleton">
      <div className="bounty-content">
        <div className="bounty-reward" />
        <div className="bounty-issue" />
        <div className="bounty-title" />
      </div>
    </div>
  );
  ```
</details>

<details>
  <summary>Stylesheet</summary>

  ```css
  .bounty-grid {
    --gray-50: 248, 250, 252;
    --gray-100: 241, 245, 249;
    --gray-200: 226, 232, 240;
    --gray-300: 203, 213, 225;
    --gray-400: 148, 163, 184;
    --gray-500: 100, 116, 139;
    --gray-600: 71, 85, 105;
    --gray-700: 51, 65, 85;
    --gray-800: 30, 41, 59;
    --gray-900: 15, 23, 42;
    --gray-950: 2, 6, 23;

    --accent-50: 239, 246, 255;
    --accent-100: 219, 234, 254;
    --accent-200: 191, 219, 254;
    --accent-300: 147, 197, 253;
    --accent-400: 96, 165, 250;
    --accent-500: 59, 130, 246;
    --accent-600: 37, 99, 235;
    --accent-700: 29, 78, 216;
    --accent-800: 30, 64, 175;
    --accent-900: 30, 58, 138;
    --accent-950: 23, 37, 84;

    --green-50: 236, 253, 245;
    --green-100: 209, 250, 229;
    --green-200: 167, 243, 208;
    --green-300: 110, 231, 183;
    --green-400: 52, 211, 153;
    --green-500: 16, 185, 129;
    --green-600: 5, 150, 105;
    --green-700: 4, 120, 87;
    --green-800: 6, 95, 70;
    --green-900: 6, 78, 59;
    --green-950: 2, 44, 34;
  }

  .bounty-grid {
    display: grid;
    gap: 0.5rem;
  }

  @media (min-width: 640px) {
    .bounty-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @keyframes bounty-pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .bounty-grid {
    --gradient-to: rgba(var(--accent-400), 0.4);
    --gradient-from: rgba(var(--accent-400), 0.2);
    --gradient-stops: var(--gradient-from), rgba(var(--accent-400), 0.3),
      var(--gradient-to);
  }

  .bounty-grid.dark {
    --gradient-to: rgba(var(--accent-600), 0.2);
    --gradient-from: rgba(var(--accent-600), 0.3);
    --gradient-stops: var(--gradient-from), rgba(var(--accent-600), 0.4),
      var(--gradient-to);
  }

  .bounty-grid .bounty-card {
    text-decoration-line: none;
    display: block;
    position: relative;
    border-radius: 0.5rem;
    border-width: 1px;
    height: 100%;
    background-image: linear-gradient(to bottom right, var(--gradient-stops));
  }

  .bounty-grid .bounty-card *,
  .bounty-grid .bounty-skeleton * {
    transition-property: background-color, color, border-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }

  .bounty-grid .bounty-card:hover {
    border-color: rgb(var(--gray-400));
  }

  .bounty-grid .bounty-card .bounty-content {
    position: relative;
    padding: 1rem;
    height: 100%;
  }

  .bounty-grid .bounty-card .bounty-reward {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    color: rgb(var(--green-500));
  }

  .bounty-grid .bounty-card .bounty-issue {
    margin-top: 0.125rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgb(var(--gray-700));
  }

  .bounty-grid .bounty-card .bounty-title {
    margin-top: 0.75rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
    line-height: 1.25;
    color: rgb(var(--gray-800));
    overflow-wrap: break-word;
  }

  .bounty-grid.dark .bounty-card .bounty-reward {
    color: rgb(var(--green-400));
  }

  .bounty-grid.dark .bounty-card .bounty-issue {
    color: rgb(var(--accent-200));
  }

  .bounty-grid.dark .bounty-card .bounty-title {
    color: rgb(var(--accent-50));
  }

  .bounty-grid .bounty-card:hover {
    background-color: rgba(var(--gray-300), 0.1);
    border-color: rgb(var(--gray-400));
  }

  .bounty-grid .bounty-card:hover .bounty-reward {
    color: rgb(var(--green-600));
  }

  .bounty-grid .bounty-card:hover .bounty-issue {
    color: rgb(var(--gray-800));
  }

  .bounty-grid .bounty-card:hover .bounty-title {
    color: rgb(var(--gray-900));
  }

  .bounty-grid.dark .bounty-card:hover {
    background-color: rgba(var(--gray-600), 0.05);
    border-color: rgb(var(--accent-500));
  }

  .bounty-grid.dark .bounty-card:hover .bounty-reward {
    color: rgb(var(--green-300));
  }

  .bounty-grid.dark .bounty-card:hover .bounty-issue {
    color: rgb(var(--accent-100));
  }

  .bounty-grid.dark .bounty-card:hover .bounty-title {
    color: white;
  }

  .bounty-grid .bounty-skeleton {
    border-radius: 0.5rem;
    background-color: rgb(var(--gray-200));
    animation: bounty-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    height: 122px;
  }

  .bounty-grid.dark .bounty-skeleton {
    background-color: rgb(var(--gray-800));
  }

  .bounty-grid .bounty-skeleton .bounty-content {
    position: relative;
    padding: 1rem;
    height: 100%;
  }

  .bounty-grid .bounty-skeleton .bounty-reward {
    margin-top: 0.25rem;
    border-radius: 0.375rem;
    height: 25px;
    width: 59px;
    background-color: rgb(var(--gray-300));
  }

  .bounty-grid .bounty-skeleton .bounty-issue {
    margin-top: 0.625rem;
    border-radius: 0.375rem;
    height: 14px;
    width: 86px;
    background-color: rgb(var(--gray-300));
  }

  .bounty-grid .bounty-skeleton .bounty-title {
    margin-top: 1rem;
    border-radius: 0.375rem;
    height: 20px;
    background-color: rgb(var(--gray-300));
  }

  .bounty-grid.dark .bounty-skeleton .bounty-reward {
    background-color: rgb(var(--gray-700));
  }

  .bounty-grid.dark .bounty-skeleton .bounty-issue {
    background-color: rgb(var(--gray-700));
  }

  .bounty-grid.dark .bounty-skeleton .bounty-title {
    background-color: rgb(var(--gray-700));
  }
  ```
</details>

### Leaderboard (React & Tailwind)

<details>
  <summary>Code</summary>

  ```tsx
  import { useEffect, useMemo, useState } from "react";
  import Image from "next/image";
  import Link from "next/link";
  import { IconBrandTwitter, IconMapPin } from "@tabler/icons-react";
  import { algora, type AlgoraOutput } from "@algora/sdk";

  import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
  import { capitalize, range } from "~/utils/util";

  // TODO: Use your own Algora handle
  const org = "acme";

  type RemoteData<T> =
    | { _tag: "loading" }
    | { _tag: "failure"; error: Error }
    | { _tag: "success"; data: T };

  type Entry = AlgoraOutput["org"]["getLeaderboard"][number];

  const usdFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  export function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState<RemoteData<Entry[]>>({
      _tag: "loading",
    });

    const [rewardType, setRewardType] = useState<Entry["reward_type"]>();

    const rewardTypes = useMemo(
      () =>
        leaderboard._tag === "success"
          ? [...new Set(leaderboard.data.map((x) => x.reward_type))]
          : undefined,
      [leaderboard],
    );

    useEffect(() => {
      const ac = new AbortController();

      algora.org.getLeaderboard
        .query({ org }, { signal: ac.signal })
        .then((data) => {
          setLeaderboard({ _tag: "success", data });
          setRewardType(data.at(0)?.reward_type);
        })
        .catch((error) => setLeaderboard({ _tag: "failure", error }));

      return () => ac.abort();
    }, []);

    return (
      <div className="space-y-2">
        <Tabs
          value={rewardType}
          onValueChange={setRewardType as (_: string) => void}
        >
          {rewardTypes && (
            <TabsList
              className="grid w-full gap-1 bg-white/5 text-white/50"
              style={{
                gridTemplateColumns: `repeat(${rewardTypes.length}, minmax(0, 1fr))`,
              }}
            >
              {rewardTypes.map((t) => (
                <TabsTrigger
                  key={t}
                  className="hover:bg-purple-600/50 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                  value={t}
                >
                  {capitalize(t)}
                </TabsTrigger>
              ))}
            </TabsList>
          )}
        </Tabs>
        <ul className="w-full divide-y-2 divide-gray-400/50 overflow-hidden rounded-lg border-2 border-gray-400/50 text-left text-sm text-gray-500 dark:divide-white/10 dark:border-white/10 dark:text-gray-400">
          {leaderboard._tag === "loading" &&
            range(10).map((i) => (
              <LeaderboardEntrySkeleton key={i} isFirst={i === 0} />
            ))}

          {leaderboard._tag === "success" &&
            leaderboard.data
              .filter((entry) => entry.reward_type === rewardType)
              .map((entry, i) => (
                <li key={entry.uid}>
                  <LeaderboardEntry entry={entry} isFirst={i === 0} />
                </li>
              ))}
        </ul>
      </div>
    );
  }

  function LeaderboardEntry({
    entry,
    isFirst,
  }: {
    entry: Entry;
    isFirst: boolean;
  }) {
    const { user, stats, reward_type } = entry;
    return (
      <div className="group/card relative flex h-full flex-col justify-center gap-4 rounded-none bg-white px-6 py-8 transition-colors dark:bg-white/[2%] dark:bg-gradient-to-br dark:from-white/[2%] dark:via-white/[2%] dark:to-white/[2%] md:flex-row md:justify-between md:gap-4 md:px-12">
        <div className="flex w-full items-center gap-3 text-gray-900 dark:text-white">
          <Link
            href={`https://github.com/${user.login}`}
            rel="noopener noreferrer"
            target="_blank"
            className="relative mr-3 h-16 w-16 shrink-0"
          >
            <Image
              className="rounded-full"
              src={user.avatar_url}
              alt={user.login}
              fill
            />
            {isFirst && (
              <div className="absolute bottom-12 left-0 right-0">
                <div className="relative mx-auto h-12 w-12">
                  <Image
                    className="rounded-full"
                    src="https://algora.io/emojis/crown.png"
                    alt="Crown"
                    fill
                  />
                </div>
              </div>
            )}
          </Link>
          <div className="w-full shrink truncate md:max-w-[10rem] lg:max-w-sm xl:max-w-xl">
            <Link
              href={`https://github.com/${user.login}`}
              rel="noopener noreferrer"
              target="_blank"
              className="flex flex-col truncate"
            >
              <div className="truncate text-base font-semibold">
                {user.name ?? user.login}
              </div>
              <div className="truncate font-medium text-gray-400 dark:text-gray-400">
                @{user.login}
              </div>
            </Link>
            <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 font-normal text-gray-500 dark:text-gray-300">
              {user.location && (
                <div className="flex items-center gap-1">
                  <IconMapPin className="h-4 w-4" aria-hidden="true" />
                  <span>{user.location}</span>
                </div>
              )}
              {user.twitter_username && (
                <Link
                  href={`https://twitter.com/${user.twitter_username}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center gap-1"
                >
                  <IconBrandTwitter className="h-4 w-4" aria-hidden="true" />
                  <span>{user.twitter_username}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
        <dl className="grid w-full max-w-md grid-cols-3 gap-8 whitespace-nowrap">
          <div className="flex flex-col text-left md:text-center">
            <dt className="order-2 text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
              Bount{stats.num_completed_bounties === 1 ? "y" : "ies"}{" "}
              <span className="hidden sm:inline-block">Completed</span>
            </dt>
            <dd className="order-1 font-mono text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {stats.num_completed_bounties}
            </dd>
          </div>
          <div className="col-span-2 flex flex-col text-left md:text-center">
            <dt className="order-2 text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
              Total {reward_type === "cash" ? "Earnings" : "Points"}
            </dt>
            <dd className="order-1 font-mono text-4xl font-bold tracking-tight text-green-500 dark:text-green-400">
              {reward_type === "cash"
                ? usdFormatter.format(stats.total_earnings / 100)
                : stats.total_earnings}
            </dd>
          </div>
        </dl>
      </div>
    );
  }

  function LeaderboardEntrySkeleton(props: { isFirst: boolean }) {
    return (
      <div className="h-[212px] w-full animate-pulse bg-white px-6 py-8 dark:bg-gray-900 md:h-[132px] md:px-12">
        <div className="flex items-center gap-3">
          <div className="relative mr-3 h-16 w-16 shrink-0 ">
            <div className="h-full w-full rounded-full bg-gray-200 dark:bg-gray-800" />
            {props.isFirst && (
              <div className="absolute bottom-12 left-0 right-0">
                <div className="relative mx-auto -mb-[2px] h-12 w-12">
                  <Image
                    className="rounded-full"
                    src="https://algora.io/emojis/crown.png"
                    alt="Crown"
                    fill
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <div className="h-6 w-36 rounded-md bg-gray-200 dark:bg-gray-800" />
            <div className="h-4 w-20 rounded-md bg-gray-200 dark:bg-gray-800" />
          </div>
        </div>
      </div>
    );
  }

  ```
</details>