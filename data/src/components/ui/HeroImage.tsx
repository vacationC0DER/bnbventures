"use client"

import ThemedImage from "./ThemedImage"

export default function HeroImage() {
  return (
    <section aria-label="Hero Image of the website" className="flow-root">
      <div className="rounded-2xl bg-slate-50/40 p-2 ring-1 ring-inset ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10">
        <div className="rounded-xl bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
          <ThemedImage
            lightSrc="/images/hero-light.webp"
            darkSrc="/images/hero-dark.webp"
            alt="B&B Ventures vacation rental technology platform"
            width={2400}
            height={1600}
            className="rounded-xl shadow-2xl dark:shadow-indigo-600/10"
          />
          <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="rounded-xl bg-white/80 px-6 py-4 backdrop-blur-sm dark:bg-black/50">
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                Streamline Your Vacation Rental Operations
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Task Management | OKR System | Analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
