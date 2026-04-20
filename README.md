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
| Mock data | Seeded in-memory data layer |
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
- **Single API swap point** — all fetch functions live in `src/lib/api/`. They currently import from `src/mocks/data/` directly (no service worker needed). Connecting a real backend only requires changing these files — nothing else.
- **`staleTime: Infinity`** — data is fetched once per session and cached. Navigating between pages is instant with no redundant requests.

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Mock data loads instantly — no external API or service worker required.

## Mock Data Layer

All data functions live in `src/lib/api/` and import directly from `src/mocks/data/`. To connect a real backend, replace the function bodies with `fetch()` calls — the hooks and components stay unchanged.

| Function | Data source | Description |
|---|---|---|
| `fetchSalesKpi()` | `sales.ts` | KPI summary vs previous 30 days |
| `fetchSalesChart(days)` | `sales.ts` | Daily revenue + order stats |
| `fetchOrders(params)` | `orders.ts` | Paginated orders with status filter |
| `fetchProducts(params)` | `products.ts` | Product catalog with category + search |
| `fetchPerformanceKpi()` | `performance.ts` | Performance KPI summary |
| `fetchPerformanceChart(days)` | `performance.ts` | Conversion rate + customer data |
