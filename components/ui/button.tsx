import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Standard variants
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        // 1. Verde pieno - per azioni principali
        green:
          "bg-[#41CF8F] text-white hover:bg-[#37B87A] shadow-lg hover:shadow-[#41CF8F]/25",

        // 2. Verde outline - per azioni secondarie in evidenza
        "green-outline":
          "border-2 border-[#41CF8F] text-[#41CF8F] bg-transparent hover:bg-[#41CF8F] hover:text-white",

        // 3. Nero pieno - per azioni scure
        dark: "bg-foreground text-white hover:bg-foreground/90",

        // 4. Dark outline (come login header) - per login/register
        "dark-outline":
          "border border-[#202020] bg-[#202020]/20 text-white hover:bg-[#202020] hover:text-white",

        // 5. Green accent (come register header) - per registrazione speciale
        "green-accent":
          "bg-[#41CF8F]/10 text-[#84E0BA] border border-[#84E0BA] hover:bg-[#84E0BA]/20 hover:border-[#84E0BA]/80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
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
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
