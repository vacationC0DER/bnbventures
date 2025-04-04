import CaseStudies from "@/components/ui/CaseStudies"
import Cta from "@/components/ui/Cta"
import DataVisualization from "@/components/ui/DataVisualization"
import Features from "@/components/ui/Features"
import Hero from "@/components/ui/Hero"
import LogoCloud from "@/components/ui/LogoCloud"
import MachineLearning from "@/components/ui/MachineLearning"
import SectionTransition from "@/components/ui/SectionTransition"
import { SolutionsShowcase } from "@/components/ui/SolutionsShowcase"

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Hero />
      <LogoCloud />
      <Features />

      <SectionTransition color="light" direction="bottom" />
      <SolutionsShowcase />
      <SectionTransition color="light" direction="top" />

      <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 pt-24 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Data-Driven Intelligence
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              From analytics to AI-powered predictions, our platform turns your
              data into actionable insights
            </p>
          </div>
          <DataVisualization />
          <MachineLearning />
        </div>
      </div>

      <SectionTransition color="dark" direction="bottom" />
      <CaseStudies />
      <SectionTransition color="indigo" direction="top" />

      <Cta />
    </main>
  )
}
