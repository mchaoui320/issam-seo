"use client";

import Link from "next/link";
import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type MagneticButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  size?: "md" | "lg";
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  size = "lg",
  className,
  style,
  disabled,
  type = "button",
  onClick,
}: MagneticButtonProps) {
  const reducedMotion = useReducedMotion();

  function handleMove(event: MouseEvent<HTMLElement>) {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    event.currentTarget.style.setProperty("--mx", `${x * 0.16}px`);
    event.currentTarget.style.setProperty("--my", `${y * 0.16}px`);
  }

  function handleLeave(event: MouseEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--mx", "0px");
    event.currentTarget.style.setProperty("--my", "0px");
  }

  const classes = cn(
    "magnetic-btn",
    `magnetic-btn--${variant}`,
    `magnetic-btn--${size}`,
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="magnetic-btn__icon" />
    </>
  );

  if (href) {
    return (
      <Link
        className={classes}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={style}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      type={type}
    >
      {content}
    </button>
  );
}
