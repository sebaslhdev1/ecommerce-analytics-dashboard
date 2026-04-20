import type { ApiResponse, Order, OrderStatus } from "@/types";

interface FetchOrdersParams {
  status?: OrderStatus | "";
  page?: number;
  pageSize?: number;
}

export async function fetchOrders(params: FetchOrdersParams = {}): Promise<ApiResponse<Order[]>> {
  const { status, page = 1, pageSize = 10 } = params;
  const query = new URLSearchParams({ page: String(page), pageSize: String(pageSize) });
  if (status) query.set("status", status);

  const res = await fetch(`/api/orders?${query}`);
  if (!res.ok) throw new Error("Failed to fetch orders");
  return res.json();
}
