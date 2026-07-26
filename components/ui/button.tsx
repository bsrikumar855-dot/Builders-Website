import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-graphite text-warm-white hover:bg-graphite/90 font-semibold",
        voltage: "bg-voltage text-graphite hover:bg-voltage/90 font-bold",
        copper: "bg-copper text-warm-white hover:bg-copper/90 font-bold",
        graphite: "bg-graphite text-warm-white hover:bg-graphite/90 font-bold",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-graphite/30 bg-transparent text-graphite hover:bg-graphite/5 font-semibold",
        ghostWhite: "border border-warm-white/30 bg-transparent text-warm-white hover:bg-warm-white/10 font-semibold",
        securityPrimary: "bg-security-primary text-warm-white hover:bg-security-accent font-bold",
        securityOutline: "border border-security-primary bg-transparent text-security-primary hover:bg-security-primary hover:text-warm-white font-semibold",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
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
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
