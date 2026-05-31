import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "base" | "subtle" | "muted" | "mesh";
  py?: "sm" | "md" | "lg" | "xl";
}

export function Section({
  children,
  className,
  variant = "base",
  py = "lg",
  ...props
}: SectionProps) {
  const variants = {
    base:   "bg-[var(--bg-base)]",
    subtle: "bg-[var(--bg-subtle)]",
    muted:  "bg-[var(--bg-muted)]",
    mesh:   "mesh-bg",
  };

  const pyMap = {
    sm:  "py-12 sm:py-16",
    md:  "py-16 sm:py-20",
    lg:  "py-20 sm:py-28",
    xl:  "py-28 sm:py-40",
  };

  return (
    <section className={cn(variants[variant], pyMap[py], className)} {...props}>
      {children}
    </section>
  );
}
