"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

interface TopbarProps {
  title: string;
}

export function Topbar({ title }: TopbarProps) {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/60" role="banner">
      <SidebarTrigger aria-label="Toggle sidebar" className="shrink-0" />
      <Separator orientation="vertical" className="h-5" />
      <h1 className="text-sm font-semibold truncate sm:text-base">{title}</h1>
    </header>
  );
}
