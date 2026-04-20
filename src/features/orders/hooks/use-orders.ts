import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "@/lib/api/orders";
import type { OrderStatus } from "@/types";

interface UseOrdersParams {
  status?: OrderStatus | "";
  page?: number;
  pageSize?: number;
}

export function useOrders(params: UseOrdersParams = {}) {
  return useQuery({
    queryKey: ["orders", params],
    queryFn: () => fetchOrders(params),
    placeholderData: (prev) => prev,
  });
}
