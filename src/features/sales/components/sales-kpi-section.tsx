"use client";

import { DollarSign, ShoppingBag, Receipt } from "lucide-react";
import { KpiCard, KpiCardSkeleton, type KpiFormat } from "@/components/kpi-card";
import { useSalesKpi } from "../hooks/use-sales-kpi";
import type { LucideIcon } from "lucide-react";

interface KpiConfig {
  format: KpiFormat;
  icon: LucideIcon;
  iconClassName: string;
}

const KPI_CONFIG: KpiConfig[] = [
  { format: "currency", icon: DollarSign, iconClassName: "bg-indigo-100 text-indigo-600" },
  { format: "number",   icon: ShoppingBag, iconClassName: "bg-emerald-100 text-emerald-600" },
  { format: "currency", icon: Receipt,     iconClassName: "bg-amber-100 text-amber-600" },
];

export function SalesKpiSection() {
  const { data, isLoading, isError } = useSalesKpi();

  if (isError) {
    return <p className="text-sm text-destructive">Failed to load KPIs.</p>;
  }

  if (isLoading || !data) {
    return (
      <div className="grid gap-4 sm:grid-cols-3" aria-busy="true" aria-label="Loading KPIs">
        {Array.from({ length: 3 }).map((_, i) => <KpiCardSkeleton key={i} />)}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-3">
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
    </div>
  );
}
