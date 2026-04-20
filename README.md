# E-commerce Analytics Dashboard

A full-featured analytics dashboard built with Next.js 16, TypeScript, and shadcn/ui. Displays sales, orders, products, and performance metrics with interactive charts and real-time filtering — powered by a mock API layer (MSW) that can be swapped for a real backend with zero frontend changes.

**[Live Demo →](https://your-vercel-url.vercel.app)**

---

## Features

- **Sales** — Revenue KPIs with trend indicators and an interactive area chart (30/60/90 day range)
- **Orders** — Paginated orders table with status filtering and customer search
- **Products** — Catalog table with category filtering, stock health indicators, and revenue stats
- **Performance** — Conversion rate and customer acquisition charts side by side
- Skeleton loading states with smooth fade-in transitions
- Responsive layout — works on mobile, tablet, and desktop
- Dark sidebar with light content area for visual hierarchy
- Accessible — semantic HTML, `aria-*` attributes, keyboard navigation

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (Nova preset, Radix UI) |
| Charts | Recharts 3 |
| Data fetching | TanStack React Query |
| Mock API | MSW (Mock Service Worker) 2 |
| Font | Geist Sans |

## Architecture

```
src/
├── app/(dashboard)/          # Route group — shared sidebar layout
│   ├── sales/
│   ├── orders/
│   ├── products/
│   └── performance/
├── features/                 # Domain logic, self-contained per section
│   ├── sales/
│   │   ├── components/
│   │   └── hooks/
│   ├── orders/
│   ├── products/
│   └── performance/
├── components/
│   ├── ui/                   # shadcn/ui primitives
│   ├── layout/               # AppSidebar, Topbar
│   └── charts/               # Reusable Recharts wrappers
├── lib/
│   ├── api/                  # Fetch functions — swap MSW for real API here
│   ├── constants/            # Routes, nav items, status configs, chart colors
│   └── utils/                # Formatters (currency, number, percent)
├── mocks/
│   ├── data/                 # Seeded realistic e-commerce data
│   └── handlers/             # MSW route handlers per feature
├── providers/                # QueryProvider, MockProvider
└── types/                    # Shared TypeScript interfaces
```

**Key architectural decisions:**

- **Feature-based structure** — each section is self-contained. Adding or removing a feature means touching one folder, not hunting across the codebase.
- **Single API swap point** — all fetch functions live in `src/lib/api/`. Replacing MSW with a real backend only requires changing these files.
- **`staleTime: Infinity`** — data is fetched once per session and cached. Navigating between pages is instant with no redundant requests.

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The mock API starts automatically — you'll see `[MSW] Mocking enabled` in the browser console.

## Mock API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/sales?days=30` | Daily revenue + order stats |
| GET | `/api/sales/kpi` | KPI summary vs previous period |
| GET | `/api/orders?status=&page=1` | Paginated orders with optional status filter |
| GET | `/api/products?category=&search=` | Product catalog with filters |
| GET | `/api/products/top` | Top 5 products by revenue |
| GET | `/api/performance?days=30` | Conversion rate + customer data |
| GET | `/api/performance/kpi` | Performance KPI summary |
