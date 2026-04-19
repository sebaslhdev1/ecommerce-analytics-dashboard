import { http, HttpResponse } from "msw";
import { orders } from "@/mocks/data/orders";

export const ordersHandlers = [
  http.get("/api/orders", ({ request }) => {
    const url = new URL(request.url);
    const status = url.searchParams.get("status");
    const page = Number(url.searchParams.get("page") ?? 1);
    const pageSize = Number(url.searchParams.get("pageSize") ?? 10);

    const filtered = status ? orders.filter((o) => o.status === status) : orders;
    const start = (page - 1) * pageSize;
    const data = filtered.slice(start, start + pageSize);

    return HttpResponse.json({ data, total: filtered.length, page, pageSize });
  }),

  http.get("/api/orders/:id", ({ params }) => {
    const order = orders.find((o) => o.id === params.id);
    if (!order) return new HttpResponse(null, { status: 404 });
    return HttpResponse.json({ data: order });
  }),
];
