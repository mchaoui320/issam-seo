import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  background?: "light" | "dark" | "accent";
  py?: "sm" | "md" | "lg";
}

export function Section({
  children,
  className,
  background = "light",
  py = "lg",
  ...props
}: SectionProps) {
  const bgStyles = {
    light: "bg-[var(--bg)]",
    dark: "dark:bg-dark-bg",
    accent: "bg-accent-primary text-white",
  };

  const pyStyles = {
    sm: "py-8 sm:py-12",
    md: "py-12 sm:py-16",
    lg: "py-16 sm:py-24",
  };

  return (
    <section className={cn(bgStyles[background], pyStyles[py], className)} {...props}>
      {children}
    </section>
  );
}
