import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/api/products";
import type { ProductCategory } from "@/types";

interface UseProductsParams {
  category?: ProductCategory | "";
  search?: string;
}

export function useProducts(params: UseProductsParams = {}) {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => fetchProducts(params),
    placeholderData: (prev) => prev,
  });
}
