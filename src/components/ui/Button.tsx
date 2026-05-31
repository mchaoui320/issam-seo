import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 " +
    "disabled:opacity-40 disabled:cursor-not-allowed select-none";

  const variants = {
    // Plein indigo avec ombre douce + scale hover
    primary:
      "bg-[var(--accent)] text-white shadow-[0_2px_12px_rgba(79,70,229,0.35)] " +
      "hover:bg-[#4338CA] hover:shadow-[0_4px_20px_rgba(79,70,229,0.45)] hover:scale-[1.02] active:scale-[0.98]",
    // Outline sobre
    secondary:
      "border border-[var(--fg-primary)]/15 text-[var(--fg-primary)] bg-transparent " +
      "hover:bg-[var(--fg-primary)]/5 hover:border-[var(--fg-primary)]/25 active:scale-[0.98]",
    // Texte seul
    ghost:
      "text-[var(--accent)] hover:bg-[var(--accent)]/8 active:scale-[0.98]",
    // Glassmorphism button
    glass:
      "glass text-[var(--fg-primary)] hover:bg-white/80 " +
      "shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:scale-[1.02] active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-2.5 text-[15px] gap-2",
    lg: "px-8 py-3.5 text-base gap-2",
  };

  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
