import type { Metadata } from "next";
import { Topbar } from "@/components/layout/topbar";

export const metadata: Metadata = { title: "Sales" };

export default function SalesPage() {
  return (
    <>
      <Topbar title="Sales" />
      <main className="flex-1 p-6" id="main-content">
        <p className="text-muted-foreground">Sales coming soon.</p>
      </main>
    </>
  );
}
