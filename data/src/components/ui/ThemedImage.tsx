"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const ThemedImage = ({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  className,
}: {
  lightSrc: string
  darkSrc: string
  alt: string
  width: number
  height: number
  className?: string
}) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [src, setSrc] = useState(lightSrc)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      setSrc(resolvedTheme === "dark" ? darkSrc : lightSrc)
    }
  }, [resolvedTheme, mounted, darkSrc, lightSrc])

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="eager"
    />
  )
}

export default ThemedImage
