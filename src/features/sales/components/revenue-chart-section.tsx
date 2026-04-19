"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { RevenueAreaChart } from "@/components/charts/revenue-area-chart";
import { useSalesChart } from "../hooks/use-sales-chart";

const RANGES = [
  { label: "30D", value: 30 },
  { label: "60D", value: 60 },
  { label: "90D", value: 90 },
];

export function RevenueChartSection() {
  const [days, setDays] = useState(30);
  const { data, isLoading, isError } = useSalesChart(days);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-base">Revenue Over Time</CardTitle>
        <div className="flex gap-1" role="group" aria-label="Select date range">
          {RANGES.map((r) => (
            <Button
              key={r.value}
              variant={days === r.value ? "default" : "outline"}
              size="sm"
              onClick={() => setDays(r.value)}
              aria-pressed={days === r.value}
              className="h-7 px-2.5 text-xs"
            >
              {r.label}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        {isError && <p className="text-sm text-destructive">Failed to load chart data.</p>}
        {isLoading || !data ? (
          <Skeleton className="h-[320px] w-full" aria-label="Loading chart" />
        ) : (
          <RevenueAreaChart data={data} />
        )}
      </CardContent>
    </Card>
  );
}
