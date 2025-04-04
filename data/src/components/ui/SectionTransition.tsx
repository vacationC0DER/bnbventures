"use client"

import { cx } from "@/lib/utils"

type SectionTransitionProps = {
  className?: string
  direction?: "top" | "bottom"
  color?: "light" | "dark" | "indigo"
}

export default function SectionTransition({
  className,
  direction = "bottom",
  color = "light",
}: SectionTransitionProps) {
  const colors = {
    light: "from-white to-gray-50 dark:from-gray-950 dark:to-gray-900",
    dark: "from-gray-50 to-white dark:from-gray-900 dark:to-gray-950",
    indigo: "from-indigo-50 to-white dark:from-indigo-900/20 dark:to-gray-950",
  }

  return (
    <div
      className={cx(
        "h-20 w-full overflow-hidden",
        direction === "bottom" ? "-mb-20" : "-mt-20",
        className,
      )}
    >
      <div
        className={cx(
          "h-full w-full bg-gradient-to-b",
          colors[color],
          direction === "top" && "rotate-180",
        )}
      />
    </div>
  )
}
