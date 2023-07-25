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

### List your bounties

```ts
import { algora } from "@algora/sdk";

const { items, next_cursor } = await algora.bounty.list.query({ org: "acme" });
```

### Display a grid of bounty cards in your React app

```tsx
import { useEffect, useState } from 'react';
import { algora, type AlgoraOutput } from '@algora/sdk';
import Link from 'next/link';

// TODO: Change this into the handle of your organization on Algora
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
      .query({ org, limit }, { signal: ac.signal })
      .then(({ items: data }) => setBounties({ _tag: 'success', data }))
      .catch((error) => setBounties({ _tag: 'failure', error }));

    return () => ac.abort();
  }, []);

  return (
    <div className="space-y-2">
      <Callout />
      <ul className="hidden sm:grid sm:grid-cols-3 gap-2">
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