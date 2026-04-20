import type { ApiResponse, Order, OrderStatus } from "@/types";
import { orders } from "@/mocks/data/orders";

interface FetchOrdersParams {
  status?: OrderStatus | "";
  page?: number;
  pageSize?: number;
}

export async function fetchOrders(params: FetchOrdersParams = {}): Promise<ApiResponse<Order[]>> {
  const { status, page = 1, pageSize = 10 } = params;

  const filtered = status ? orders.filter((o) => o.status === status) : orders;
  const start = (page - 1) * pageSize;
  const data = filtered.slice(start, start + pageSize);

  return { data, total: filtered.length, page, pageSize };
}
