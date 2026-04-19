import type { Metadata } from "next";
import { Topbar } from "@/components/layout/topbar";
import { SalesKpiSection } from "@/features/sales/components/sales-kpi-section";
import { RevenueChartSection } from "@/features/sales/components/revenue-chart-section";

export const metadata: Metadata = { title: "Sales" };

export default function SalesPage() {
  return (
    <>
      <Topbar title="Sales" />
      <main className="flex-1 space-y-6 p-6" id="main-content">
        <SalesKpiSection />
        <RevenueChartSection />
      </main>
    </>
  );
}
