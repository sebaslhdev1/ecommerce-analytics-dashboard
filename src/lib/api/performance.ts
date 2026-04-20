import type { KpiCard, PerformanceStat } from "@/types";
import { performanceData } from "@/mocks/data/performance";

export async function fetchPerformanceKpi(): Promise<KpiCard[]> {
  const last30 = performanceData.slice(-30);
  const prev30 = performanceData.slice(-60, -30);

  const avgConversion = last30.reduce((s, d) => s + d.conversionRate, 0) / last30.length;
  const prevConversion = prev30.reduce((s, d) => s + d.conversionRate, 0) / prev30.length;
  const newCustomers = last30.reduce((s, d) => s + d.newCustomers, 0);
  const prevNew = prev30.reduce((s, d) => s + d.newCustomers, 0);
  const returning = last30.reduce((s, d) => s + d.returningCustomers, 0);
  const prevReturning = prev30.reduce((s, d) => s + d.returningCustomers, 0);

  return [
    {
      title: "Conversion Rate",
      value: avgConversion,
      change: ((avgConversion - prevConversion) / prevConversion) * 100,
      changeLabel: "vs last 30 days",
    },
    {
      title: "New Customers",
      value: newCustomers,
      change: ((newCustomers - prevNew) / prevNew) * 100,
      changeLabel: "vs last 30 days",
    },
    {
      title: "Returning Customers",
      value: returning,
      change: ((returning - prevReturning) / prevReturning) * 100,
      changeLabel: "vs last 30 days",
    },
  ];
}

export async function fetchPerformanceChart(days: number): Promise<PerformanceStat[]> {
  return performanceData.slice(-days);
}
