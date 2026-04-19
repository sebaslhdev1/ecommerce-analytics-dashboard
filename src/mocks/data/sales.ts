import type { SalesStat } from "@/types";

function generateSalesData(days: number): SalesStat[] {
  const data: SalesStat[] = [];
  const base = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(base);
    date.setDate(date.getDate() - i);

    // Weekend dip pattern
    const dayOfWeek = date.getDay();
    const weekendFactor = dayOfWeek === 0 || dayOfWeek === 6 ? 0.6 : 1;

    // Slight upward trend over time
    const trendFactor = 1 + ((days - i) / days) * 0.3;

    const orders = Math.round((Math.random() * 30 + 20) * weekendFactor * trendFactor);
    const avgOrderValue = Math.round((Math.random() * 60 + 80) * 100) / 100;

    data.push({
      date: date.toISOString().split("T")[0],
      revenue: Math.round(orders * avgOrderValue * 100) / 100,
      orders,
      averageOrderValue: avgOrderValue,
    });
  }

  return data;
}

export const salesData = generateSalesData(90);
