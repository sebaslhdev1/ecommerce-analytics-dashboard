"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ORDER_STATUS_OPTIONS } from "@/lib/constants/orders";
import type { OrderStatus } from "@/types";

interface OrdersFiltersProps {
  search: string;
  status: OrderStatus | "";
  onSearchChange: (value: string) => void;
  onStatusChange: (value: OrderStatus | "") => void;
}

export function OrdersFilters({ search, status, onSearchChange, onStatusChange }: OrdersFiltersProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input
          placeholder="Search by customer..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9"
          aria-label="Search orders by customer name"
        />
      </div>

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value as OrderStatus | "")}
        className="h-9 rounded-md border border-input bg-background px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
        aria-label="Filter by order status"
      >
        {ORDER_STATUS_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
