"use client"
import Balancer from "react-wrap-balancer"
import { Button } from "../Button"
import { Input } from "../Input"

export default function Cta() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-title"
      className="mx-auto mb-20 mt-32 max-w-6xl p-1 px-2 sm:mt-56"
    >
      <div className="relative flex items-center justify-center">
        <div
          className="mask pointer-events-none absolute -z-10 select-none opacity-70"
          aria-hidden="true"
        >
          <div className="flex size-full flex-col gap-2">
            {Array.from({ length: 20 }, (_, idx) => (
              <div key={`outer-${idx}`}>
                <div className="flex size-full gap-2">
                  {Array.from({ length: 41 }, (_, idx2) => (
                    <div key={`inner-${idx}-${idx2}`}>
                      <div className="size-5 rounded-md shadow shadow-indigo-500/20 ring-1 ring-black/5 dark:shadow-indigo-500/20 dark:ring-white/5"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl">
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <h3
                id="cta-title"
                className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text p-2 text-4xl font-bold tracking-tighter text-transparent md:text-6xl dark:from-gray-50 dark:to-gray-300"
              >
                Ready to transform your vacation rental business?
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600 sm:text-lg dark:text-gray-400">
                <Balancer>
                  Request a demo to see how our solutions can streamline your
                  operations and increase your revenue.
                </Balancer>
              </p>
            </div>
            <div className="mt-14 w-full rounded-[16px] bg-gray-300/5 p-1.5 ring-1 ring-black/[3%] backdrop-blur dark:bg-gray-900/10 dark:ring-white/[3%]">
              <div className="rounded-xl bg-white p-4 shadow-lg shadow-indigo-500/10 ring-1 ring-black/5 dark:bg-gray-950 dark:shadow-indigo-500/10 dark:ring-white/5">
                <form
                  className="flex flex-col gap-3 sm:flex-row"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="flex w-full flex-col gap-3 sm:flex-1">
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <Input
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        id="email"
                        className="h-10 w-full min-w-0 flex-auto"
                        inputClassName="h-full"
                        placeholder="Your Work Email"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="sr-only">
                        Company Name
                      </label>
                      <Input
                        name="company"
                        type="text"
                        autoComplete="organization"
                        required
                        id="company"
                        className="h-10 w-full min-w-0 flex-auto"
                        inputClassName="h-full"
                        placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="properties" className="sr-only">
                        Number of Properties
                      </label>
                      <select
                        id="properties"
                        name="properties"
                        defaultValue=""
                        className="h-10 w-full rounded-md border-0 bg-gray-50 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-900 dark:text-gray-100 dark:ring-gray-600"
                      >
                        <option value="" disabled>
                          Number of Properties
                        </option>
                        <option value="1-10">1-10 Properties</option>
                        <option value="11-50">11-50 Properties</option>
                        <option value="51-100">51-100 Properties</option>
                        <option value="100+">100+ Properties</option>
                      </select>
                    </div>
                  </div>
                  <Button
                    className="h-auto w-full py-3 sm:w-fit sm:flex-none"
                    type="submit"
                    variant="primary"
                  >
                    Request a Demo
                  </Button>
                </form>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-600 sm:text-sm dark:text-gray-400">
              Want to know more about our solutions?{" "}
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400"
              >
                Talk to our team
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
