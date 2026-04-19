import type { PerformanceStat } from "@/types";

function generatePerformanceData(days: number): PerformanceStat[] {
  const data: PerformanceStat[] = [];
  const base = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(base);
    date.setDate(date.getDate() - i);

    const trendFactor = 1 + ((days - i) / days) * 0.2;
    const newCustomers = Math.round((Math.random() * 40 + 20) * trendFactor);
    const returningCustomers = Math.round((Math.random() * 25 + 15) * trendFactor);

    data.push({
      date: date.toISOString().split("T")[0],
      conversionRate: Math.round((Math.random() * 2 + 2.5) * 100) / 100,
      newCustomers,
      returningCustomers,
      avgSessionValue: Math.round((Math.random() * 40 + 60) * 100) / 100,
    });
  }

  return data;
}

export const performanceData = generatePerformanceData(90);
