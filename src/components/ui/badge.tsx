import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gzdr-lime/50",
  {
    variants: {
      variant: {
        default: "border-transparent bg-gzdr-lime/15 text-gzdr-lime",
        fuchsia: "border-transparent bg-gzdr-fuchsia/15 text-gzdr-fuchsia",
        gold: "border-transparent bg-gzdr-gold/15 text-gzdr-gold",
        outline: "border-gzdr-border text-white/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
