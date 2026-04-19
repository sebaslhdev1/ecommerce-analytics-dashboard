"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { SalesStat } from "@/types";
import { formatCurrency } from "@/lib/utils/formatters";

interface RevenueAreaChartProps {
  data: SalesStat[];
}

function formatXAxis(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="rounded-lg border bg-background px-3 py-2 text-sm shadow-md"
      role="tooltip"
    >
      <p className="font-medium">{formatXAxis(label)}</p>
      <p className="text-muted-foreground">
        Revenue: <span className="font-semibold text-foreground">{formatCurrency(payload[0].value)}</span>
      </p>
      <p className="text-muted-foreground">
        Orders: <span className="font-semibold text-foreground">{payload[1]?.value}</span>
      </p>
    </div>
  );
}

export function RevenueAreaChart({ data }: RevenueAreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={320} aria-label="Revenue over time chart">
      <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.15} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          dataKey="date"
          tickFormatter={formatXAxis}
          tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
          tickLine={false}
          axisLine={false}
          interval="preserveStartEnd"
        />
        <YAxis
          tickFormatter={(v) => formatCurrency(v)}
          tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
          tickLine={false}
          axisLine={false}
          width={72}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          fill="url(#revenueGradient)"
          dot={false}
          activeDot={{ r: 4 }}
        />
        <Area
          type="monotone"
          dataKey="orders"
          stroke="hsl(var(--chart-2))"
          strokeWidth={0}
          fill="transparent"
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
