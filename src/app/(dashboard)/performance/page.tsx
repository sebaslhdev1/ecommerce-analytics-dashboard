import type { Metadata } from "next";
import { Topbar } from "@/components/layout/topbar";

export const metadata: Metadata = { title: "Performance" };

export default function PerformancePage() {
  return (
    <>
      <Topbar title="Performance" />
      <main className="flex-1 p-6" id="main-content">
        <p className="text-muted-foreground">Performance coming soon.</p>
      </main>
    </>
  );
}
