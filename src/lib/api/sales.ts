import type { KpiCard, SalesStat } from "@/types";
import { salesData } from "@/mocks/data/sales";

export async function fetchSalesKpi(): Promise<KpiCard[]> {
  const last30 = salesData.slice(-30);
  const prev30 = salesData.slice(-60, -30);

  const revenue = last30.reduce((s, d) => s + d.revenue, 0);
  const prevRevenue = prev30.reduce((s, d) => s + d.revenue, 0);
  const ordersTotal = last30.reduce((s, d) => s + d.orders, 0);
  const prevOrders = prev30.reduce((s, d) => s + d.orders, 0);
  const avgOrderValue = revenue / ordersTotal;
  const prevAvg = prevRevenue / (prevOrders || 1);

  return [
    {
      title: "Total Revenue",
      value: revenue,
      change: ((revenue - prevRevenue) / prevRevenue) * 100,
      changeLabel: "vs last 30 days",
    },
    {
      title: "Total Orders",
      value: ordersTotal,
      change: ((ordersTotal - prevOrders) / prevOrders) * 100,
      changeLabel: "vs last 30 days",
    },
    {
      title: "Avg Order Value",
      value: avgOrderValue,
      change: ((avgOrderValue - prevAvg) / prevAvg) * 100,
      changeLabel: "vs last 30 days",
    },
  ];
}

export async function fetchSalesChart(days: number): Promise<SalesStat[]> {
  return salesData.slice(-days);
}
