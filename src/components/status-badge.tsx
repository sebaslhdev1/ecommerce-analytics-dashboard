import { cn } from "@/lib/utils";
import { ORDER_STATUS_CONFIG } from "@/lib/constants/orders";
import type { OrderStatus } from "@/types";

interface StatusBadgeProps {
  status: OrderStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const { label, className } = ORDER_STATUS_CONFIG[status];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium",
        className
      )}
      aria-label={`Status: ${label}`}
    >
      {label}
    </span>
  );
}
