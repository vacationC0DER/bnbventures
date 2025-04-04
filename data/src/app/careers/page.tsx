"use client"

import { Badge } from "@/components/Badge"
import Balancer from "react-wrap-balancer"
import { RiTeamFill, RiBriefcaseFill, RiHeartFill } from "@remixicon/react"
import { useEffect, useState } from "react"

export default function CareersPage() {
  const [iframeHeight, setIframeHeight] = useState(800)

  useEffect(() => {
    // Calculate available height based on viewport and other content
    const calculateHeight = () => {
      const viewportHeight = window.innerHeight
      const headerHeight = 100 // Approximate navbar height
      const contentAboveHeight = 600 // Approximate height of content above iframe
      const footerHeight = 180 // Approximate footer height
      const padding = 100 // Extra padding
      
      // Set iframe height to take up available space while leaving room for footer
      const availableHeight = viewportHeight - headerHeight - contentAboveHeight - footerHeight - padding
      
      // Ensure a minimum height of 800px
      return Math.max(availableHeight, 800)
    }

    // Add Paycor iframe programmatically
    const container = document.getElementById('careers-listing')
    if (container) {
      // Initial height calculation
      const newHeight = calculateHeight()
      setIframeHeight(newHeight)
      
      const iframe = document.createElement('iframe')
      iframe.src = "https://recruitingbypaycor.com/career/CareerHome.action?clientId=8a7883d08e6803ea018e76f6e86a0143"
      iframe.style.width = "100%"
      iframe.style.height = `${newHeight}px`
      iframe.style.border = "none"
      iframe.style.overflow = "hidden"
      container.appendChild(iframe)

      // Handle window resize events
      const handleResize = () => {
        const newHeight = calculateHeight()
        setIframeHeight(newHeight)
        iframe.style.height = `${newHeight}px`
      }

      // Add event listener for window resize
      window.addEventListener('resize', handleResize)
      
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return (
    <div className="mt-36 flex flex-col overflow-hidden">
      <section 
        aria-labelledby="careers-header"
        className="animate-slide-up-fade px-4 sm:px-6 lg:px-8"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <Badge>careers</Badge>
        <h1
          id="careers-header"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          <Balancer>
            Join Our Team
          </Balancer>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
          At B&B Ventures, we're building the future of vacation rental technology. Join our innovative team and help transform how the industry operates.
        </p>
      </section>

      {/* Why Join Us Section */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Why Join B&B Ventures?
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900">
              <RiTeamFill className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Innovative Culture</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Work in a fast-paced environment where creativity and forward-thinking are valued and encouraged.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900">
              <RiBriefcaseFill className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Career Growth</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Develop your skills and advance your career with mentorship, learning opportunities, and room for advancement.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900">
              <RiHeartFill className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Meaningful Impact</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Create solutions that directly improve businesses and the experiences of millions of vacation rental guests.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="mx-auto mt-20 mb-32 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Open Positions
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 mb-8">
          Explore current opportunities to join the B&B Ventures team
        </p>
        
        <div id="careers-listing" className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800 w-full" style={{ height: `${iframeHeight}px` }}>
          {/* Paycor iframe will be inserted here by JavaScript */}
        </div>
      </section>
    </div>
  )
}
