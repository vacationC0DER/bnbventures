"use client"

import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"
import {
  RiBuildingLine,
  RiCheckboxCircleFill,
  RiCheckboxCircleLine,
  RiTimeLine,
} from "@remixicon/react"
import { useState } from "react"

// Mock data for available time slots
const timeSlots = [
  { date: "2024-03-20", times: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
  { date: "2024-03-21", times: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
  { date: "2024-03-22", times: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
]

const unitRanges = [
  { value: "1-50", label: "1-50 units" },
  { value: "51-100", label: "51-100 units" },
  { value: "100+", label: "100+ units" },
]

const solutions = [
  { value: "archived", label: "Archived" },
  { value: "vr-goals", label: "VR Goals" },
  { value: "machine-learning", label: "Machine Learning" },
  { value: "business-analytics", label: "Business Analytics" },
  { value: "custom-software", label: "Custom Software" },
  { value: "tech-consulting", label: "Tech Consulting" },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    solutions: [] as string[],
    unitsManaged: "",
    message: "",
  })
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ ...formData, selectedDate, selectedTime })
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const toggleSolution = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      solutions: prev.solutions.includes(value)
        ? prev.solutions.filter((s) => s !== value)
        : [...prev.solutions, value],
    }))
  }

  return (
    <div className="mt-36 flex flex-col overflow-hidden px-3">
      <section className="mx-auto mb-32 max-w-7xl">
        <Badge>Get in Touch</Badge>
        <h1 className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300">
          Schedule a Consultation
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
          Book a time to discuss how we can help transform your vacation rental
          business with our technology solutions.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Calendar Booking */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Select a Time
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Choose a date and time that works best for you.
            </p>
            <div className="mt-8">
              {/* Date Selection */}
              <div className="mb-6">
                <h3 className="mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Select Date
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.date}
                      onClick={() => setSelectedDate(slot.date)}
                      className={`rounded-lg border p-3 text-sm transition-colors ${
                        selectedDate === slot.date
                          ? "border-indigo-500 bg-indigo-50 text-indigo-600 dark:border-indigo-400 dark:bg-indigo-950/30 dark:text-indigo-400"
                          : "border-gray-200 text-gray-700 hover:border-indigo-500 hover:bg-indigo-50 dark:border-gray-700 dark:text-gray-300 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/30"
                      }`}
                    >
                      {new Date(slot.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div>
                  <h3 className="mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Select Time
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots
                      .find((slot) => slot.date === selectedDate)
                      ?.times.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`flex items-center justify-center gap-2 rounded-lg border p-3 text-sm transition-colors ${
                            selectedTime === time
                              ? "border-indigo-500 bg-indigo-50 text-indigo-600 dark:border-indigo-400 dark:bg-indigo-950/30 dark:text-indigo-400"
                              : "border-gray-200 text-gray-700 hover:border-indigo-500 hover:bg-indigo-50 dark:border-gray-700 dark:text-gray-300 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/30"
                          }`}
                        >
                          <RiTimeLine className="h-4 w-4" />
                          {time}
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Your Information
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Please provide your details to confirm the booking.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="solutions"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Solutions of Interest
                </label>
                <div className="mt-2 space-y-2">
                  {solutions.map((solution) => (
                    <button
                      key={solution.value}
                      type="button"
                      onClick={() => toggleSolution(solution.value)}
                      className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-colors ${
                        formData.solutions.includes(solution.value)
                          ? "border-indigo-500 bg-indigo-50 dark:border-indigo-400 dark:bg-indigo-950/30"
                          : "border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 dark:border-gray-700 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/30"
                      }`}
                    >
                      {formData.solutions.includes(solution.value) ? (
                        <RiCheckboxCircleFill className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      ) : (
                        <RiCheckboxCircleLine className="h-5 w-5 text-gray-400" />
                      )}
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {solution.label}
                      </span>
                    </button>
                  ))}
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Click to select or deselect solutions
                </p>
              </div>
              <div>
                <label
                  htmlFor="unitsManaged"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Number of Units Managed
                </label>
                <div className="relative mt-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <RiBuildingLine
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <select
                    name="unitsManaged"
                    id="unitsManaged"
                    value={formData.unitsManaged}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    required
                  >
                    <option value="">Select range</option>
                    {unitRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  placeholder="Any specific topics you'd like to discuss?"
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={!selectedDate || !selectedTime}
              >
                Confirm Booking
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
