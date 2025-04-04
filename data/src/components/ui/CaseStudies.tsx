"use client"

import { RiArrowRightLine } from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../Button"

const caseStudies = [
  {
    title: "Mountain View Properties",
    type: "Large Property Management Company",
    description:
      "Implemented the Archived system across 120+ properties, resulting in 42% fewer maintenance issues and 87% increase in guest satisfaction.",
    image: "/images/Archived Black_transparent.png",
    href: "#",
  },
  {
    title: "Beachside Rentals",
    type: "Medium Property Management Company",
    description:
      "Combined Archived and VR Goals to align team objectives, leading to 35% revenue growth and 28% more repeat bookings within 6 months.",
    image: "/images/home.webp",
    href: "#",
  },
  {
    title: "Urban Stays",
    type: "Boutique Rental Company",
    description:
      "Used our Analytics platform to identify pricing opportunities, resulting in 22% ADR increase and more efficient resource allocation.",
    image: "/images/testimonial.webp",
    href: "#",
  },
]

export default function CaseStudies() {
  return (
    <section className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            See how vacation rental businesses have transformed their operations
            with our solutions
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="flex flex-col items-start overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
            >
              <div className="relative w-full">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={500}
                  height={300}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="relative z-10 rounded-full bg-indigo-50 px-3 py-1.5 font-medium text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300">
                    {study.type}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {study.description}
                  </p>
                </div>
                <div className="mt-6">
                  <Button
                    asChild
                    variant="light"
                    className="flex items-center gap-x-2"
                  >
                    <Link href={study.href}>
                      Read full case study
                      <RiArrowRightLine className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild className="inline-flex items-center gap-x-2">
            <Link href="/case-studies">
              View all case studies
              <RiArrowRightLine className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
