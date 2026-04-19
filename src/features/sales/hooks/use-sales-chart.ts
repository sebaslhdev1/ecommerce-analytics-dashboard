import { useQuery } from "@tanstack/react-query";
import { fetchSalesChart } from "@/lib/api/sales";

export function useSalesChart(days: number) {
  return useQuery({
    queryKey: ["sales", "chart", days],
    queryFn: () => fetchSalesChart(days),
  });
}
