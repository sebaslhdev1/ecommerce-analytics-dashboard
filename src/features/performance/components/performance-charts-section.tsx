"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ConversionAreaChart } from "@/components/charts/conversion-area-chart";
import { CustomersLineChart } from "@/components/charts/customers-line-chart";
import { usePerformanceChart } from "../hooks/use-performance-chart";

const RANGES = [
  { label: "30D", value: 30 },
  { label: "60D", value: 60 },
  { label: "90D", value: 90 },
];

export function PerformanceChartsSection() {
  const [days, setDays] = useState(30);
  const { data, isLoading, isError } = usePerformanceChart(days);

  const rangeSelector = (
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
  );

  const chartContent = (height: number) =>
    isLoading || !data
      ? <Skeleton className={`h-[${height}px] w-full`} aria-label="Loading chart" />
      : null;

  if (isError) return <p className="text-sm text-destructive">Failed to load chart data.</p>;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle className="text-base">Conversion Rate</CardTitle>
          {rangeSelector}
        </CardHeader>
        <CardContent>
          {isLoading || !data
            ? <Skeleton className="h-[260px] w-full" />
            : <ConversionAreaChart data={data} />}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle className="text-base">Customer Acquisition</CardTitle>
          {rangeSelector}
        </CardHeader>
        <CardContent>
          {isLoading || !data
            ? <Skeleton className="h-[260px] w-full" />
            : <CustomersLineChart data={data} />}
        </CardContent>
      </Card>
    </div>
  );
}
