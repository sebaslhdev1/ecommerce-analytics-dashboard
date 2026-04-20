import type { ApiResponse, Product, ProductCategory } from "@/types";
import { products } from "@/mocks/data/products";

interface FetchProductsParams {
  category?: ProductCategory | "";
  search?: string;
}

export async function fetchProducts(params: FetchProductsParams = {}): Promise<ApiResponse<Product[]>> {
  const { category, search } = params;

  let filtered = category ? products.filter((p) => p.category === category) : products;
  if (search) filtered = filtered.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return { data: filtered, total: filtered.length };
}
