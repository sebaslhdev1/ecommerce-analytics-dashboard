import { useQuery } from "@tanstack/react-query";
import { fetchPerformanceChart } from "@/lib/api/performance";

export function usePerformanceChart(days: number) {
  return useQuery({
    queryKey: ["performance", "chart", days],
    queryFn: () => fetchPerformanceChart(days),
  });
}
