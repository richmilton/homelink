This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### First, run the development server:

Use node v20

```bash
npm i
npm run dev
```

### Seed the database:
Windows users will need to open a powershell prompt from the top level of the repo
directory to access wrangler cli

```bash
npm run db-init
```

Next, import and run the postman collection from `./postman/dev.postman_collection`

See some registered devices at http://localhost:3000/dashboard
