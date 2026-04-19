import { useQuery } from "@tanstack/react-query";
import { fetchSalesKpi } from "@/lib/api/sales";

export function useSalesKpi() {
  return useQuery({
    queryKey: ["sales", "kpi"],
    queryFn: fetchSalesKpi,
  });
}
