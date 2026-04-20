import type { Metadata } from "next";
import { Topbar } from "@/components/layout/topbar";
import { ProductsKpiSection } from "@/features/products/components/products-kpi-section";
import { ProductsTable } from "@/features/products/components/products-table";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <Topbar title="Products" />
      <main className="flex-1 space-y-6 p-6" id="main-content">
        <ProductsKpiSection />
        <ProductsTable />
      </main>
    </>
  );
}
