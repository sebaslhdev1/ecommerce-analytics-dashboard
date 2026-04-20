import type { ApiResponse, Product, ProductCategory } from "@/types";

interface FetchProductsParams {
  category?: ProductCategory | "";
  search?: string;
}

export async function fetchProducts(params: FetchProductsParams = {}): Promise<ApiResponse<Product[]>> {
  const { category, search } = params;
  const query = new URLSearchParams();
  if (category) query.set("category", category);
  if (search) query.set("search", search);

  const res = await fetch(`/api/products?${query}`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
