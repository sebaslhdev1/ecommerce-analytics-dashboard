"use client";

import { Package, DollarSign, AlertTriangle } from "lucide-react";
import { KpiCard, KpiCardSkeleton } from "@/components/kpi-card";
import { useProducts } from "../hooks/use-products";
import { LOW_STOCK_THRESHOLD } from "@/lib/constants/products";

export function ProductsKpiSection() {
  const { data, isLoading, isError } = useProducts();

  if (isError) return <p className="text-sm text-destructive">Failed to load product stats.</p>;

  if (isLoading || !data) {
    return (
      <div className="grid gap-4 sm:grid-cols-3" aria-busy="true" aria-label="Loading product KPIs">
        {Array.from({ length: 3 }).map((_, i) => <KpiCardSkeleton key={i} />)}
      </div>
    );
  }

  const products = data.data;
  const totalRevenue = products.reduce((s, p) => s + p.revenue, 0);
  const lowStock = products.filter((p) => p.stock < LOW_STOCK_THRESHOLD).length;

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <KpiCard
        title="Total Products"
        value={products.length}
        change={0}
        changeLabel="in catalog"
        format="number"
        icon={Package}
        iconClassName="bg-indigo-100 text-indigo-600"
      />
      <KpiCard
        title="Total Revenue"
        value={totalRevenue}
        change={8.2}
        changeLabel="vs last month"
        format="currency"
        icon={DollarSign}
        iconClassName="bg-emerald-100 text-emerald-600"
      />
      <KpiCard
        title="Low Stock Items"
        value={lowStock}
        change={lowStock > 3 ? -lowStock : 0}
        changeLabel="need restocking"
        format="number"
        icon={AlertTriangle}
        iconClassName="bg-amber-100 text-amber-600"
      />
    </div>
  );
}
