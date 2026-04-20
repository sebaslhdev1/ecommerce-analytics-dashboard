import type { ApiResponse, KpiCard, PerformanceStat } from "@/types";

export async function fetchPerformanceKpi(): Promise<KpiCard[]> {
  const res = await fetch("/api/performance/kpi");
  if (!res.ok) throw new Error("Failed to fetch performance KPIs");
  const json: ApiResponse<KpiCard[]> = await res.json();
  return json.data;
}

export async function fetchPerformanceChart(days: number): Promise<PerformanceStat[]> {
  const res = await fetch(`/api/performance?days=${days}`);
  if (!res.ok) throw new Error("Failed to fetch performance chart data");
  const json: ApiResponse<PerformanceStat[]> = await res.json();
  return json.data;
}
