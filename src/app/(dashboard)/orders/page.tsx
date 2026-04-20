import type { Metadata } from "next";
import { Topbar } from "@/components/layout/topbar";
import { OrdersTable } from "@/features/orders/components/orders-table";

export const metadata: Metadata = { title: "Orders" };

export default function OrdersPage() {
  return (
    <>
      <Topbar title="Orders" />
      <main className="flex-1 space-y-4 p-4 sm:space-y-6 sm:p-6" id="main-content">
        <OrdersTable />
      </main>
    </>
  );
}
