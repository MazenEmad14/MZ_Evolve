import React from "react";

interface BadgeProps {
  variant?: "emerald" | "charcoal" | "outline" | "warning";
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "emerald",
  size = "md",
  className = "",
  children,
}) => {
  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 tracking-wider",
    md: "text-xs px-2.5 py-1 tracking-wide",
  }[size];

  const variantStyles = {
    emerald:
      "bg-[#19D879]/10 text-[#19D879] border border-[#19D879]/30",
    charcoal:
      "bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]",
    outline:
      "bg-transparent text-[var(--text-secondary)] border border-[var(--border-subtle)]",
    warning:
      "bg-amber-500/10 text-amber-400 border border-amber-500/30",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono uppercase rounded-full font-medium select-none ${sizeStyles} ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};
