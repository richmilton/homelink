This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, seed the database:

```bash
wrangler d1 execute DB --file data/create-device.sql
wrangler d1 execute DB --file data/create-device-type.sql
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
