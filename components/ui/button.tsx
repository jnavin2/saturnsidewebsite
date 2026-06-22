import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-display font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-background hover:bg-accent-light shadow-[0_0_0_1px_rgba(196,196,201,0.4),0_8px_30px_-8px_rgba(196,196,201,0.45)] hover:shadow-[0_0_0_1px_rgba(241,241,243,0.6),0_8px_36px_-6px_rgba(241,241,243,0.5)]",
        secondary:
          "bg-white/[0.04] text-white border border-border hover:border-border-hover hover:bg-white/[0.07]",
        ghost: "bg-transparent text-white hover:bg-white/[0.06]",
      },
      size: {
        default: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base py-3.5",
        sm: "h-9 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    // Radix Slot requires exactly one child element to clone props onto,
    // so the shimmer overlay can only be added when rendering a real <button>.
    if (asChild) {
      return (
        <Slot className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
          {children}
        </Slot>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {variant === "primary" && (
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </span>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
