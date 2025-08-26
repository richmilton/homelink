This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

Use node v20

```bash
npm i
npm run dev
```

Seed the database:

```bash
wrangler d1 execute DB --file data/create-device.sql
wrangler d1 execute DB --file data/create-device-type.sql
```
