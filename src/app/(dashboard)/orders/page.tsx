import type { Metadata } from "next";
import { Topbar } from "@/components/layout/topbar";

export const metadata: Metadata = { title: "Orders" };

export default function OrdersPage() {
  return (
    <>
      <Topbar title="Orders" />
      <main className="flex-1 p-6" id="main-content">
        <p className="text-muted-foreground">Orders coming soon.</p>
      </main>
    </>
  );
}
