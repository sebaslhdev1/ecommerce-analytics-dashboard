"use client";

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import type { PerformanceStat } from "@/types";
import { CHART_COLORS } from "@/lib/constants/chart-colors";

interface CustomersLineChartProps {
  data: PerformanceStat[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border bg-background px-3 py-2 text-sm shadow-md" role="tooltip">
      <p className="font-medium mb-1">{formatDate(label)}</p>
      {payload.map((p: any) => (
        <p key={p.name} className="text-muted-foreground">
          {p.name === "newCustomers" ? "New" : "Returning"}:{" "}
          <span className="font-semibold" style={{ color: p.color }}>{p.value}</span>
        </p>
      ))}
    </div>
  );
}

function CustomLegend({ payload }: any) {
  return (
    <div className="flex justify-end gap-4 text-xs text-muted-foreground mt-1">
      {payload?.map((p: any) => (
        <div key={p.value} className="flex items-center gap-1.5">
          <span className="inline-block h-2 w-4 rounded-full" style={{ backgroundColor: p.color }} />
          {p.value === "newCustomers" ? "New customers" : "Returning customers"}
        </div>
      ))}
    </div>
  );
}

export function CustomersLineChart({ data }: CustomersLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={260} aria-label="New vs returning customers chart">
      <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          dataKey="date"
          tickFormatter={formatDate}
          tick={{ fontSize: 11, fill: "#94a3b8" }}
          tickLine={false}
          axisLine={false}
          interval="preserveStartEnd"
        />
        <YAxis
          tick={{ fontSize: 11, fill: "#94a3b8" }}
          tickLine={false}
          axisLine={false}
          width={36}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend content={CustomLegend} />
        <Line
          type="monotone"
          dataKey="newCustomers"
          stroke={CHART_COLORS.indigo}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="returningCustomers"
          stroke={CHART_COLORS.emerald}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
