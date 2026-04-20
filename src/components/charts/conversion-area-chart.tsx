"use client";

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import type { PerformanceStat } from "@/types";
import { CHART_COLORS } from "@/lib/constants/chart-colors";

interface ConversionAreaChartProps {
  data: PerformanceStat[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border bg-background px-3 py-2 text-sm shadow-md" role="tooltip">
      <p className="font-medium">{formatDate(label)}</p>
      <p className="text-muted-foreground">
        Conversion: <span className="font-semibold text-foreground">{payload[0].value}%</span>
      </p>
    </div>
  );
}

export function ConversionAreaChart({ data }: ConversionAreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={260} aria-label="Conversion rate over time">
      <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="conversionGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={CHART_COLORS.amber} stopOpacity={0.15} />
            <stop offset="95%" stopColor={CHART_COLORS.amber} stopOpacity={0} />
          </linearGradient>
        </defs>
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
          tickFormatter={(v) => `${v}%`}
          tick={{ fontSize: 11, fill: "#94a3b8" }}
          tickLine={false}
          axisLine={false}
          width={40}
          domain={[0, "auto"]}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="conversionRate"
          stroke={CHART_COLORS.amber}
          strokeWidth={2}
          fill="url(#conversionGradient)"
          dot={false}
          activeDot={{ r: 4 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
