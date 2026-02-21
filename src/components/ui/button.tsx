import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium uppercase tracking-[0.08em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-ivory",
  {
    variants: {
      variant: {
        default: "bg-graphite text-ivory hover:bg-black",
        outline: "border border-graphite/30 text-graphite hover:bg-graphite/5",
        gold: "bg-gold text-graphite hover:bg-[#b08b54]",
        ghost: "text-graphite hover:bg-graphite/5",
      },
      size: {
        default: "h-11 px-5",
        xs: "h-9 px-4 text-[11px]",
        sm: "h-9 px-4",
        lg: "h-12 px-7",
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
