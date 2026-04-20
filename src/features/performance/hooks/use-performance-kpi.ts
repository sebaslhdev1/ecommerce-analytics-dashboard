import { useQuery } from "@tanstack/react-query";
import { fetchPerformanceKpi } from "@/lib/api/performance";

export function usePerformanceKpi() {
  return useQuery({
    queryKey: ["performance", "kpi"],
    queryFn: fetchPerformanceKpi,
  });
}
