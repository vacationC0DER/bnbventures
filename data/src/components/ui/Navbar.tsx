"use client"

import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/use-scroll"
import { cx } from "@/lib/utils"
import { RiArrowRightUpLine, RiCloseLine, RiMenuLine } from "@remixicon/react"
import Link from "next/link"
import React from "react"
import { Button } from "../Button"

export function Navigation() {
  const scrolled = useScroll(15)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 768px)")
    const handleMediaQueryChange = () => {
      setOpen(false)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange)
    handleMediaQueryChange()

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  return (
    <header
      className={cx(
        "fixed inset-x-3 top-4 z-50 mx-auto flex max-w-6xl transform-gpu animate-slide-down-fade justify-center overflow-hidden rounded-xl border border-transparent px-3 py-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
        open === true ? "h-auto pb-6" : "h-16",
        scrolled || open === true
          ? "backdrop-blur-nav max-w-3xl border-primary-lighter bg-white/80 shadow-xl shadow-black/5 dark:border-primary/20 dark:bg-black/70"
          : "bg-white/0 dark:bg-black/0",
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link
            href={siteConfig.baseLinks.home}
            aria-label="Home"
            className="max-w-[200px] flex-shrink-0"
          >
            <span className="text-base font-bold tracking-tight text-primary sm:text-lg md:text-xl dark:text-primary-light">
              B&B Ventures
            </span>
          </Link>
          <nav className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-6 font-medium">
              <Link
                className="px-2 py-1 text-custom-gray-dark hover:text-primary dark:text-custom-gray-light dark:hover:text-primary-light"
                href={siteConfig.baseLinks.home}
              >
                Home
              </Link>
              <Link
                className="px-2 py-1 text-custom-gray-dark hover:text-primary dark:text-custom-gray-light dark:hover:text-primary-light"
                href={siteConfig.baseLinks.solutions}
              >
                Solutions
              </Link>
              <Link
                className="px-2 py-1 text-custom-gray-dark hover:text-primary dark:text-custom-gray-light dark:hover:text-primary-light"
                href={siteConfig.baseLinks.blog}
              >
                Blog
              </Link>
              <Link
                className="px-2 py-1 text-custom-gray-dark hover:text-primary dark:text-custom-gray-light dark:hover:text-primary-light"
                href={siteConfig.baseLinks.about}
              >
                About
              </Link>
              <Link
                className="px-2 py-1 text-custom-gray-dark hover:text-primary dark:text-custom-gray-light dark:hover:text-primary-light"
                href={siteConfig.baseLinks.contact}
              >
                Contact
              </Link>
            </div>
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <Button
              asChild
              variant="primary"
              className="flex items-center gap-x-2"
            >
              <Link href="/contact">
                <span>Demo</span>
                <RiArrowRightUpLine aria-hidden="true" className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="flex gap-x-2 md:hidden">
            <Button
              onClick={() => setOpen(!open)}
              variant="light"
              className="aspect-square p-2"
            >
              {open ? (
                <RiCloseLine aria-hidden="true" className="size-5" />
              ) : (
                <RiMenuLine aria-hidden="true" className="size-5" />
              )}
            </Button>
          </div>
        </div>
        <nav
          className={cx(
            "my-6 flex text-lg ease-in-out will-change-transform md:hidden",
            open ? "" : "hidden",
          )}
        >
          <ul className="w-full space-y-4 font-medium">
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.home}>Home</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.solutions}>Solutions</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.blog}>Blog</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.about}>About</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.contact}>Contact</Link>
            </li>
            <li>
              <Button className="mt-2 w-full" onClick={() => setOpen(false)}>
                Request a Demo
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
