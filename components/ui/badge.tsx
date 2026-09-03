import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow",
        gradient:
          "border-transparent bg-gradient-ceratics text-slate-950 font-semibold shadow-sm",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        teal: "border-brand-teal-500/30 bg-brand-teal-50 text-brand-teal-800 dark:bg-brand-teal-950/60 dark:text-brand-teal-300 dark:border-brand-teal-800",
        lime: "border-brand-lime-500/30 bg-brand-lime-50 text-brand-lime-800 dark:bg-brand-lime-950/60 dark:text-brand-lime-300 dark:border-brand-lime-800",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
