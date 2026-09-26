"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline" | "line" | "emerald";
  size?: "default" | "lg" | "sm";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "gold", size = "default", onClick, children, ...props }, ref) => {
    const [ripples, setRipples] = React.useState<{ x: number; y: number; id: number }[]>([]);

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();
      setRipples((prev) => [...prev, { x, y, id }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
      onClick?.(e);
    }

    const variants: Record<string, string> = {
      gold: "bg-gold text-[#241A05] hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30",
      outline: "border border-white/50 text-white hover:bg-white/10 hover:-translate-y-0.5",
      line: "border border-deep text-deep hover:bg-deep hover:text-white",
      emerald: "bg-emerald text-white hover:bg-emerald-light hover:-translate-y-0.5",
    };

    const sizes: Record<string, string> = {
      default: "px-7 py-3.5 text-sm",
      lg: "px-9 py-4 text-base",
      sm: "px-5 py-2.5 text-xs",
    };

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={cn(
          "relative overflow-hidden inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
        {ripples.map((r) => (
          <span
            key={r.id}
            className="absolute rounded-full bg-white/40 pointer-events-none animate-ripple"
            style={{
              left: r.x - 10,
              top: r.y - 10,
              width: 20,
              height: 20,
            }}
          />
        ))}
      </button>
    );
  }
);
Button.displayName = "Button";
