import type { ApiResponse, KpiCard, SalesStat } from "@/types";

export async function fetchSalesKpi(): Promise<KpiCard[]> {
  const res = await fetch("/api/sales/kpi");
  if (!res.ok) throw new Error("Failed to fetch sales KPIs");
  const json: ApiResponse<KpiCard[]> = await res.json();
  return json.data;
}

export async function fetchSalesChart(days: number): Promise<SalesStat[]> {
  const res = await fetch(`/api/sales?days=${days}`);
  if (!res.ok) throw new Error("Failed to fetch sales chart data");
  const json: ApiResponse<SalesStat[]> = await res.json();
  return json.data;
}
