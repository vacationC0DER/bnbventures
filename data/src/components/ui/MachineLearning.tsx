"use client"

import {
    RiAiGenerate,
    RiBrainFill,
    RiLineChartLine,
    RiRobot2Fill,
} from "@remixicon/react"

const mlFeatures = [
  {
    icon: <RiLineChartLine className="h-6 w-6 text-indigo-600" />,
    title: "Dynamic Pricing Optimization",
    description:
      "AI algorithms analyze market conditions, demand patterns, and competitor pricing to automatically optimize your rental rates for maximum revenue.",
  },
  {
    icon: <RiBrainFill className="h-6 w-6 text-indigo-600" />,
    title: "Predictive Maintenance",
    description:
      "Identify potential maintenance issues before they occur by analyzing patterns in property inspection data and equipment usage history.",
  },
  {
    icon: <RiRobot2Fill className="h-6 w-6 text-indigo-600" />,
    title: "Automated Guest Communication",
    description:
      "Smart communication tools that learn from guest interactions to provide personalized responses and anticipate common questions.",
  },
  {
    icon: <RiAiGenerate className="h-6 w-6 text-indigo-600" />,
    title: "Resource Allocation Intelligence",
    description:
      "Optimize cleaning and maintenance schedules based on booking patterns, property specifications, and historical performance data.",
  },
]

export default function MachineLearning() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                Machine Learning Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Our advanced AI systems analyze millions of data points from
                your properties to identify patterns, predict outcomes, and
                automate decision-making for optimal performance.
              </p>

              <div className="mt-8 space-y-6">
                {mlFeatures.map((feature) => (
                  <div key={feature.title} className="flex gap-x-4">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-950/30">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-30"></div>
                <div className="relative p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Industry Issue Prediction
                  </h3>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/20">
                      <p className="text-sm font-medium text-indigo-900 dark:text-indigo-300">
                        Problem Category
                      </p>
                      <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Seasonal Demand Fluctuation
                      </p>
                      <div className="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-2 rounded-full bg-indigo-600"
                          style={{ width: "76%" }}
                        ></div>
                      </div>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        76% of properties affected
                      </p>
                    </div>
                    <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/20">
                      <p className="text-sm font-medium text-indigo-900 dark:text-indigo-300">
                        Problem Category
                      </p>
                      <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Cleaning Staff Shortages
                      </p>
                      <div className="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-2 rounded-full bg-indigo-600"
                          style={{ width: "54%" }}
                        ></div>
                      </div>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        54% of properties affected
                      </p>
                    </div>
                    <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/20">
                      <p className="text-sm font-medium text-indigo-900 dark:text-indigo-300">
                        Problem Category
                      </p>
                      <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Maintenance Delays
                      </p>
                      <div className="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-2 rounded-full bg-indigo-600"
                          style={{ width: "68%" }}
                        ></div>
                      </div>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        68% of properties affected
                      </p>
                    </div>
                    <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/20">
                      <p className="text-sm font-medium text-indigo-900 dark:text-indigo-300">
                        Problem Category
                      </p>
                      <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Guest Communication Gaps
                      </p>
                      <div className="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-2 rounded-full bg-indigo-600"
                          style={{ width: "47%" }}
                        ></div>
                      </div>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        47% of properties affected
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/20">
                    <p className="text-center text-sm font-medium text-indigo-900 dark:text-indigo-300">
                      AI-Powered Solutions Impact
                    </p>
                    <div className="mt-4 flex items-center justify-around">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-indigo-600">
                          42%
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Revenue Increase
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-indigo-600">
                          67%
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Issue Resolution
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-indigo-600">
                          89%
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Process Automation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
