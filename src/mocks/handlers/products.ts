import { http, HttpResponse } from "msw";
import { products } from "@/mocks/data/products";

export const productsHandlers = [
  http.get("/api/products/top", () => {
    const top = [...products]
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 5)
      .map((p) => ({
        id: p.id,
        name: p.name,
        revenue: p.revenue,
        units: p.sold,
        trend: Math.round((Math.random() * 20 - 5) * 10) / 10,
      }));
    return HttpResponse.json({ data: top });
  }),

  http.get("/api/products", ({ request }) => {
    const url = new URL(request.url);
    const category = url.searchParams.get("category");
    const search = url.searchParams.get("search")?.toLowerCase();

    let filtered = category ? products.filter((p) => p.category === category) : products;
    if (search) filtered = filtered.filter((p) => p.name.toLowerCase().includes(search));

    return HttpResponse.json({ data: filtered, total: filtered.length });
  }),

  http.get("/api/products/:id", ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) return new HttpResponse(null, { status: 404 });
    return HttpResponse.json({ data: product });
  }),
];
