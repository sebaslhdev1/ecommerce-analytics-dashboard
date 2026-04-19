import type { Metadata } from "next";
import { Topbar } from "@/components/layout/topbar";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <Topbar title="Products" />
      <main className="flex-1 p-6" id="main-content">
        <p className="text-muted-foreground">Products coming soon.</p>
      </main>
    </>
  );
}
