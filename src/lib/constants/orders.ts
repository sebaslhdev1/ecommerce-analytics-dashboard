import type { OrderStatus } from "@/types";

export const ORDER_STATUS_CONFIG: Record<
  OrderStatus,
  { label: string; className: string }
> = {
  pending:    { label: "Pending",    className: "bg-amber-100 text-amber-700 border-amber-200" },
  processing: { label: "Processing", className: "bg-blue-100 text-blue-700 border-blue-200" },
  shipped:    { label: "Shipped",    className: "bg-indigo-100 text-indigo-700 border-indigo-200" },
  delivered:  { label: "Delivered",  className: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  cancelled:  { label: "Cancelled",  className: "bg-red-100 text-red-700 border-red-200" },
};

export const ORDER_STATUS_OPTIONS = [
  { label: "All statuses", value: "" },
  { label: "Pending",      value: "pending" },
  { label: "Processing",   value: "processing" },
  { label: "Shipped",      value: "shipped" },
  { label: "Delivered",    value: "delivered" },
  { label: "Cancelled",    value: "cancelled" },
];
