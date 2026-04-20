import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

export function FadeIn({ children, className }: FadeInProps) {
  return (
    <div className={cn("animate-in fade-in-0 duration-300 fill-mode-both", className)}>
      {children}
    </div>
  );
}
