import { RiPlayCircleFill } from "@remixicon/react"
import Link from "next/link"
import { Button } from "../Button"
import HeroImage from "./HeroImage"

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mt-32 flex flex-col items-center justify-center text-center sm:mt-40"
    >
      <div className="relative flex items-center justify-center px-4 py-12">
        <div
          className="mask pointer-events-none absolute -z-10 select-none opacity-90"
          aria-hidden="true"
          style={{ width: '130%', height: '140%', top: '-20%', left: '-15%' }}
        >
          <div className="flex size-full flex-col gap-2">
            {Array.from({ length: 15 }, (_, idx) => (
              <div key={`outer-${idx}`}>
                <div className="flex size-full gap-2">
                  {Array.from({ length: 30 }, (_, idx2) => (
                    <div key={`inner-${idx}-${idx2}`}>
                      <div className="size-6 rounded-md shadow-md shadow-indigo-500/30 ring-1 ring-black/10 dark:shadow-indigo-500/30 dark:ring-white/10"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1
          id="hero-title"
          className="inline-block animate-slide-up-fade bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text p-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-7xl dark:from-gray-50 dark:to-gray-300"
          style={{ animationDuration: "700ms" }}
        >
          Transforming Vacation Rentals <br /> with Technology
        </h1>
      </div>
      <p
        className="mt-6 max-w-lg animate-slide-up-fade text-lg text-gray-700 dark:text-gray-400"
        style={{ animationDuration: "900ms" }}
      >
        B&B Ventures provides innovative solutions for the vacation rental
        industry, turning data into actionable insights and streamlining
        operations.
      </p>
      <div
        className="mt-8 flex w-full animate-slide-up-fade flex-col justify-center gap-3 px-3 sm:flex-row"
        style={{ animationDuration: "1100ms" }}
      >
        <Button className="h-10 font-semibold">
          <Link href="#contact">Request a Demo</Link>
        </Button>
        <Button
          asChild
          variant="light"
          className="group gap-x-2 bg-transparent font-semibold hover:bg-transparent dark:bg-transparent hover:dark:bg-transparent"
        >
          <Link
            href="#"
            className="ring-1 ring-gray-200 sm:ring-0 dark:ring-gray-900"
            target="_blank"
          >
            <span className="mr-1 flex size-6 items-center justify-center rounded-full bg-gray-50 transition-all group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700">
              <RiPlayCircleFill
                aria-hidden="true"
                className="size-5 shrink-0 text-gray-900 dark:text-gray-50"
              />
            </span>
            Watch video
          </Link>
        </Button>
      </div>
      <div
        className="relative mx-auto ml-3 mt-20 h-fit w-[40rem] max-w-6xl animate-slide-up-fade sm:ml-auto sm:w-full sm:px-2"
        style={{ animationDuration: "1400ms" }}
      >
        <HeroImage />
        <div
          className="absolute inset-x-0 -bottom-20 -mx-10 h-2/4 bg-gradient-to-t from-white via-white to-transparent lg:h-1/4 dark:from-gray-950 dark:via-gray-950"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
