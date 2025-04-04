"use client"

import { Card } from "@tremor/react"

const kpiData = [
  {
    name: "Guest Satisfaction",
    value: "87%",
    description: "Increase in scores",
    color: "indigo",
  },
  {
    name: "Maintenance Response",
    value: "42%",
    description: "Reduction in time",
    color: "blue",
  },
  {
    name: "Cleaning Quality",
    value: "68%",
    description: "Fewer issues",
    color: "violet",
  },
  {
    name: "ROI",
    value: "3.2x",
    description: "First year return",
    color: "fuchsia",
  },
]

export default function DataVisualization() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
            Analytics Dashboard
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Real-time metrics and analytics to track your vacation rental
            performance
          </p>

          {/* KPI Cards */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {kpiData.map((kpi) => (
              <Card
                key={kpi.name}
                decoration="top"
                decorationColor={kpi.color}
                className="group space-y-2 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800/80"
              >
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {kpi.name}
                </p>
                <p className="text-3xl font-bold tracking-tight text-gray-900 transition-colors duration-200 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                  {kpi.value}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {kpi.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Feature Impact */}
          <div className="mt-10">
            <Card className="overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50/80 via-white to-white p-0 shadow-md transition-all duration-300 dark:from-indigo-900/20 dark:via-gray-900 dark:to-gray-900">
              <div className="border-b border-gray-200 bg-white/80 p-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
                <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  Feature Impact Analysis
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  How our different features impact property management
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-800/90">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/10 to-indigo-600/20 p-3 shadow-sm dark:from-indigo-400/10 dark:to-indigo-500/20">
                      <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                        AR
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Archived
                    </h4>
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        Task Tracking
                      </span>
                      <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                        74%
                      </span>
                    </div>
                    <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 transition-all duration-700 ease-in-out dark:from-indigo-500 dark:to-indigo-700"
                        style={{ width: "74%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        Quality
                      </span>
                      <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                        81%
                      </span>
                    </div>
                    <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 transition-all duration-700 ease-in-out dark:from-indigo-500 dark:to-indigo-700"
                        style={{ width: "81%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-800/90">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/10 to-blue-600/20 p-3 shadow-sm dark:from-blue-400/10 dark:to-blue-500/20">
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        OKR
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      VR Goals
                    </h4>
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        Alignment
                      </span>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        92%
                      </span>
                    </div>
                    <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-700 ease-in-out dark:from-blue-500 dark:to-blue-700"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        Accountability
                      </span>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        87%
                      </span>
                    </div>
                    <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-700 ease-in-out dark:from-blue-500 dark:to-blue-700"
                        style={{ width: "87%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-800/90">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/10 to-purple-600/20 p-3 shadow-sm dark:from-purple-400/10 dark:to-purple-500/20">
                      <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                        AI
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      AI Predictions
                    </h4>
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        Accuracy
                      </span>
                      <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                        89%
                      </span>
                    </div>
                    <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-700 ease-in-out dark:from-purple-500 dark:to-purple-700"
                        style={{ width: "89%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        Automation
                      </span>
                      <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                        76%
                      </span>
                    </div>
                    <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-700 ease-in-out dark:from-purple-500 dark:to-purple-700"
                        style={{ width: "76%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-800/90">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-600/20 p-3 shadow-sm dark:from-fuchsia-400/10 dark:to-fuchsia-500/20">
                      <span className="text-lg font-bold text-fuchsia-600 dark:text-fuchsia-400">
                        AN
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Analytics
                    </h4>
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        Insight Value
                      </span>
                      <span className="text-xs font-semibold text-fuchsia-600 dark:text-fuchsia-400">
                        95%
                      </span>
                    </div>
                    <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 to-fuchsia-600 transition-all duration-700 ease-in-out dark:from-fuchsia-500 dark:to-fuchsia-700"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        ROI Impact
                      </span>
                      <span className="text-xs font-semibold text-fuchsia-600 dark:text-fuchsia-400">
                        83%
                      </span>
                    </div>
                    <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 to-fuchsia-600 transition-all duration-700 ease-in-out dark:from-fuchsia-500 dark:to-fuchsia-700"
                        style={{ width: "83%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
