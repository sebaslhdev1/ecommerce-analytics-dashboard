export const ROUTES = {
  home: "/",
  sales: "/sales",
  orders: "/orders",
  products: "/products",
  performance: "/performance",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
