import type { LucideIcon } from "lucide-react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatChange, formatCurrency, formatNumber, formatPercent } from "@/lib/utils/formatters";
import { cn } from "@/lib/utils";

export type KpiFormat = "currency" | "number" | "percent";

interface KpiCardProps {
  title: string;
  value: number;
  change: number;
  changeLabel: string;
  format?: KpiFormat;
  icon: LucideIcon;
  iconClassName?: string;
}

function formatValue(value: number, format: KpiFormat): string {
  if (format === "currency") return formatCurrency(value);
  if (format === "percent") return formatPercent(value);
  return formatNumber(value);
}

export function KpiCard({
  title,
  value,
  change,
  changeLabel,
  format = "number",
  icon: Icon,
  iconClassName,
}: KpiCardProps) {
  const isPositive = change >= 0;

  return (
    <Card className="relative overflow-hidden">
      <CardContent className="pt-5">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold tracking-tight">{formatValue(value, format)}</p>
          </div>
          <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", iconClassName)}>
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
        <div
          className={cn("mt-3 flex items-center gap-1 text-xs", isPositive ? "text-emerald-600" : "text-red-500")}
          aria-label={`${formatChange(change)} ${changeLabel}`}
        >
          {isPositive ? (
            <TrendingUp className="h-3 w-3" aria-hidden="true" />
          ) : (
            <TrendingDown className="h-3 w-3" aria-hidden="true" />
          )}
          <span className="font-medium">{formatChange(change)}</span>
          <span className="text-muted-foreground">{changeLabel}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function KpiCardSkeleton() {
  return (
    <Card>
      <CardContent className="pt-5">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-32" />
          </div>
          <Skeleton className="h-10 w-10 rounded-lg" />
        </div>
        <Skeleton className="mt-3 h-3 w-40" />
      </CardContent>
    </Card>
  );
}
