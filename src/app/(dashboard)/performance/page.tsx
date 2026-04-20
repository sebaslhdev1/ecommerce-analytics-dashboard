import type { Metadata } from "next";
import { Topbar } from "@/components/layout/topbar";
import { PerformanceKpiSection } from "@/features/performance/components/performance-kpi-section";
import { PerformanceChartsSection } from "@/features/performance/components/performance-charts-section";

export const metadata: Metadata = { title: "Performance" };

export default function PerformancePage() {
  return (
    <>
      <Topbar title="Performance" />
      <main className="flex-1 space-y-6 p-6" id="main-content">
        <PerformanceKpiSection />
        <PerformanceChartsSection />
      </main>
    </>
  );
}
