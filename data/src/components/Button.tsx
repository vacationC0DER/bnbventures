// Tremor Button [v0.2.0]

import { Slot } from "@radix-ui/react-slot"
import { RiLoader2Fill } from "@remixicon/react"
import React from "react"
import { tv, type VariantProps } from "tailwind-variants"

import { cx, focusRing } from "@/lib/utils"

const buttonVariants = tv({
  base: [
    // base
    "relative inline-flex items-center justify-center whitespace-nowrap rounded-lg border px-3 py-2 text-center text-sm font-medium shadow-sm transition-all duration-100 ease-in-out",
    // disabled
    "disabled:pointer-events-none disabled:shadow-none",
    // focus
    focusRing,
  ],
  variants: {
    variant: {
      primary: [
        // border
        "border-transparent",
        // text color
        "text-white dark:text-white",
        // background color
        "bg-primary dark:bg-primary-light",
        // hover color
        "hover:bg-primary-dark dark:hover:bg-primary",
        // disabled
        "disabled:bg-primary-lighter/70 disabled:text-primary/50",
        "disabled:dark:bg-primary/30 disabled:dark:text-primary-lighter/50",
      ],
      secondary: [
        // border
        "border-primary-lighter dark:border-primary",
        // text color
        "text-primary dark:text-primary-light",
        // background color
        "bg-white dark:bg-black",
        //hover color
        "hover:bg-primary-lighter/20 dark:hover:bg-primary/20",
        // disabled
        "disabled:text-custom-gray",
        "disabled:dark:text-custom-gray-light",
      ],
      light: [
        // base
        "shadow-none",
        // border
        "border-transparent",
        // text color
        "text-custom-gray-dark dark:text-custom-gray-light",
        // background color
        "bg-primary-lighter/30 dark:bg-primary/20",
        // hover color
        "hover:bg-primary-lighter/50 dark:hover:bg-primary/30",
        // disabled
        "disabled:bg-custom-gray-light/30 disabled:text-custom-gray/70",
        "disabled:dark:bg-custom-gray/30 disabled:dark:text-custom-gray-light/50",
      ],
      ghost: [
        // base
        "shadow-none",
        // border
        "border-transparent",
        // text color
        "text-primary dark:text-primary-light",
        // hover color
        "bg-transparent hover:bg-primary-lighter/20 dark:hover:bg-primary/20",
        // disabled
        "disabled:text-custom-gray",
        "disabled:dark:text-custom-gray-light",
      ],
      destructive: [
        // text color
        "text-white",
        // border
        "border-transparent",
        // background color
        "bg-red-600 dark:bg-red-700",
        // hover color
        "hover:bg-red-700 dark:hover:bg-red-600",
        // disabled
        "disabled:bg-red-300 disabled:text-white",
        "disabled:dark:bg-red-950 disabled:dark:text-red-400",
      ],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  loadingText?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      isLoading = false,
      loadingText,
      className,
      disabled,
      variant,
      children,
      ...props
    }: ButtonProps,
    forwardedRef,
  ) => {
    const Component = asChild ? Slot : "button"
    return (
      <Component
        ref={forwardedRef}
        className={cx(buttonVariants({ variant }), className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="pointer-events-none flex shrink-0 items-center justify-center gap-1.5">
            <RiLoader2Fill
              className="size-4 shrink-0 animate-spin"
              aria-hidden="true"
            />
            <span className="sr-only">
              {loadingText ? loadingText : "Loading"}
            </span>
            {loadingText ? loadingText : children}
          </span>
        ) : (
          children
        )}
      </Component>
    )
  },
)

Button.displayName = "Button"

export { Button, buttonVariants, type ButtonProps }
