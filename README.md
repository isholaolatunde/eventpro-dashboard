EventPro Dashboard

EventPro Dashboard is a Next.js dashboard for monitoring event revenue, transactions, customers, and analytics in one place.

## Features

- Protected dashboard, customers, transactions, and analytics pages
- Revenue, transaction, and customer summary cards
- Recent event activity table
- Transaction filtering and date sorting
- Customer search and status indicators
- Revenue-over-time and transaction-status charts
- Loading skeletons and error states for data-driven pages
- React Query for server-state fetching and caching

## Tech Stack

- [Next.js 16](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [TanStack Query](https://tanstack.com/query)
- [Recharts](https://recharts.org/)
- [Axios](https://axios-http.com/)

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/isholaolatunde/eventpro-dashboard.git
cd eventpro-dashboard
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run ESLint
```

## Application Routes

| Route | Description |
| --- | --- |
| `/login` | Sign in to the dashboard |
| `/dashboard` | Overview of event performance |
| `/customers` | Search and review customers |
| `/transactions` | Filter and sort payment activity |
| `/analytics` | View revenue and transaction charts |

## Project Structure

```text
app/                  Next.js routes and layouts
components/           Reusable UI and page components
	charts/             Analytics chart components
	customers/          Customer page components
	dashboard/          Dashboard page components
	layout/             Sidebar and top navigation
	transactions/       Transaction page components
context/              Authentication context
hooks/                React Query data hooks
providers/            Application providers
services/             API and authentication services
types/                Shared TypeScript types
utils/                Shared utility functions
```

## Data Sources

The current service functions in `services/api.ts` return local mock data so the dashboard can be run without a backend. To connect a production API, replace those service implementations while keeping the existing hooks and component contracts.

Environment files are ignored by git. Add local configuration in `.env.local` when API endpoints or authentication settings are introduced.

## Deployment

Create a production build locally with:

```bash
npm run build
npm run start
```

The project can be deployed to any platform that supports Next.js, including [Vercel](https://vercel.com/).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
