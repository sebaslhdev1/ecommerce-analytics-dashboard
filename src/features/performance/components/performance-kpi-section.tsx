"use client";

import { TrendingUp, Users, UserCheck } from "lucide-react";
import { KpiCard, KpiCardSkeleton, type KpiFormat } from "@/components/kpi-card";
import { FadeIn } from "@/components/fade-in";
import { usePerformanceKpi } from "../hooks/use-performance-kpi";
import type { LucideIcon } from "lucide-react";

interface KpiConfig {
  format: KpiFormat;
  icon: LucideIcon;
  iconClassName: string;
}

const KPI_CONFIG: KpiConfig[] = [
  { format: "percent", icon: TrendingUp, iconClassName: "bg-amber-100 text-amber-600" },
  { format: "number",  icon: Users,      iconClassName: "bg-indigo-100 text-indigo-600" },
  { format: "number",  icon: UserCheck,  iconClassName: "bg-emerald-100 text-emerald-600" },
];

export function PerformanceKpiSection() {
  const { data, isLoading, isError } = usePerformanceKpi();

  if (isError) return <p className="text-sm text-destructive">Failed to load performance KPIs.</p>;

  if (isLoading || !data) {
    return (
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true" aria-label="Loading KPIs">
        {Array.from({ length: 3 }).map((_, i) => <KpiCardSkeleton key={i} />)}
      </div>
    );
  }

  return (
    <FadeIn className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((kpi, i) => (
        <KpiCard
          key={kpi.title}
          title={kpi.title}
          value={kpi.value as number}
          change={kpi.change}
          changeLabel={kpi.changeLabel}
          format={KPI_CONFIG[i].format}
          icon={KPI_CONFIG[i].icon}
          iconClassName={KPI_CONFIG[i].iconClassName}
        />
      ))}
    </FadeIn>
  );
}
