"use client"

import { RiArrowRightLine, RiCheckboxCircleFill } from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../Button"

const solutions = [
  {
    title: "Archived",
    description:
      "The Virtual Inspection Software for improved Housekeeping and Maintenance. Easily manage staff or contractors, increase the quality of your service, and reward performance.",
    href: "/solutions/archived",
    features: [
      "Issue and task management",
      "API connectivity",
      "Checklists and execution",
      "Virtual Inspections",
      "Performance Management",
    ],
    image: "/images/Archived Black_transparent.png",
  },
  {
    title: "VR Goals",
    description:
      "A comprehensive OKR system designed specifically for vacation rental businesses, based on the proven EOS methodology.",
    href: "/solutions/vr-goals",
    features: [
      "Goal setting and tracking",
      "Team accountability",
      "Quarterly planning",
      "Visual dashboards",
      "Meeting management",
    ],
    image: "/images/VRGOALS-BLACKTransparent.png",
  },
  {
    title: "Machine Learning",
    description:
      "Leverage advanced AI to optimize pricing, predict maintenance needs, and automate guest communications for your vacation rental business.",
    href: "/solutions/machine-learning",
    features: [
      "Dynamic pricing optimization",
      "Predictive maintenance",
      "Automated guest communication",
      "Resource allocation intelligence",
      "Pattern recognition",
    ],
    image: "/images/working.webp",
  },
  {
    title: "Business Analytics",
    description:
      "Turn your vacation rental data into actionable insights. Understand your business performance and make data-driven decisions.",
    href: "/solutions/business-analytics",
    features: [
      "Custom dashboards",
      "Revenue insights",
      "Performance metrics",
      "Competitive analysis",
      "Trend forecasting",
    ],
    image: "/images/cool.webp",
  },
  {
    title: "Custom Software",
    description:
      "Tailored software solutions designed to meet the unique needs of your vacation rental business.",
    href: "/solutions/custom-software",
    features: [
      "Custom integrations",
      "Workflow automation",
      "API development",
      "System optimization",
      "Scalable architecture",
    ],
    image: "/images/working.webp",
  },
  {
    title: "Tech Consulting",
    description:
      "Expert guidance to help you make informed technology decisions and optimize your vacation rental operations.",
    href: "/solutions/tech-consulting",
    features: [
      "Technology assessment",
      "Digital transformation",
      "Process optimization",
      "Integration strategy",
      "Implementation support",
    ],
    image: "/images/working.webp",
  },
]

export function SolutionsShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Our Solutions
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Innovative technology solutions designed specifically for the vacation
          rental industry
        </p>
      </div>

      <div className="mt-16 space-y-20">
        {solutions.map((solution, index) => (
          <div
            key={solution.title}
            className={`flex flex-col gap-y-10 lg:gap-x-8 xl:gap-x-12 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div className="lg:flex-1">
              <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-lg dark:bg-gray-800">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={584}
                  height={328}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-1 lg:pt-8">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                {solution.title}
              </h3>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                {solution.description}
              </p>
              <ul className="mt-8 space-y-3">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-x-2">
                    <RiCheckboxCircleFill className="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  asChild
                  variant="light"
                  className="flex items-center gap-x-2"
                >
                  <Link href={solution.href}>
                    Learn more
                    <RiArrowRightLine className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
