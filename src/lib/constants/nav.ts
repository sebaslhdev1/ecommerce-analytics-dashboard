import { BarChart3, Package, ShoppingCart, TrendingUp } from "lucide-react";
import { ROUTES } from "./routes";

export const NAV_ITEMS = [
  {
    title: "Sales",
    href: ROUTES.sales,
    icon: BarChart3,
  },
  {
    title: "Orders",
    href: ROUTES.orders,
    icon: ShoppingCart,
  },
  {
    title: "Products",
    href: ROUTES.products,
    icon: Package,
  },
  {
    title: "Performance",
    href: ROUTES.performance,
    icon: TrendingUp,
  },
] as const;
