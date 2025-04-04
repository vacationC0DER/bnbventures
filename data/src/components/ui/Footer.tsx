import { RiArrowRightUpLine } from "@remixicon/react"
import Link from "next/link"
import ThemeSwitch from "../ThemeSwitch"

const navigation = {
  solutions: [
    {
      name: "Archived",
      href: "/solutions/archived",
      external: false,
    },
    {
      name: "VR Goals",
      href: "/solutions/vr-goals",
      external: false,
    },
    {
      name: "Machine Learning",
      href: "/solutions/machine-learning",
      external: false,
    },
    {
      name: "Business Analytics",
      href: "/solutions/business-analytics",
      external: false,
    },
    {
      name: "Custom Software",
      href: "/solutions/custom-software",
      external: false,
    },
    {
      name: "Tech Consulting",
      href: "/solutions/tech-consulting",
      external: false,
    },
  ],
  resources: [
    { name: "Case Studies", href: "/case-studies", external: false },
    { name: "Blog", href: "/blog", external: false },
    { name: "GitHub", href: "#", external: true },
  ],
  company: [
    { name: "About", href: "/about", external: false },
    { name: "Careers", href: "/careers", external: false },
    { name: "Contact", href: "/contact", external: false },
    { name: "Login", href: "/login", external: false },
  ],
  legal: [
    { name: "Imprint", href: "#", external: false },
    { name: "Privacy", href: "#", external: false },
    { name: "Terms", href: "#", external: false },
    { name: "DPA", href: "#", external: false },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-primary-lighter/30 bg-white dark:border-primary/20 dark:bg-black">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start gap-10">
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary dark:text-primary-light">
                B&B Ventures
              </span>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/company/b-b-ventures-co/"
                aria-label="LinkedIn"
                className="text-primary-lighter transition hover:text-primary dark:text-primary-light/70 dark:hover:text-primary-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
              <a
                href="https://github.com/vacationC0DER"
                aria-label="GitHub"
                className="text-primary-lighter transition hover:text-primary dark:text-primary-light/70 dark:hover:text-primary-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <ThemeSwitch />
          </div>

          <div>
            <h3 className="text-sm font-semibold leading-6 text-primary dark:text-primary-light">
              Solutions
            </h3>
            <ul
              role="list"
              className="mt-6 space-y-4"
              aria-label="Quick links Solutions"
            >
              {navigation.solutions.map((item) => (
                <li key={item.name} className="w-fit">
                  <Link
                    className="flex rounded-md text-sm text-custom-gray transition hover:text-primary dark:text-custom-gray-light dark:hover:text-primary-light"
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    <span>{item.name}</span>
                    {item.external && (
                      <div className="ml-1 aspect-square size-3 rounded-full bg-primary-lighter/30 p-px dark:bg-primary/20">
                        <RiArrowRightUpLine
                          aria-hidden="true"
                          className="size-full shrink-0 text-primary dark:text-primary-light"
                        />
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold leading-6 text-primary dark:text-primary-light">
              Resources
            </h3>
            <ul
              role="list"
              className="mt-6 space-y-4"
              aria-label="Quick links Resources"
            >
              {navigation.resources.map((item) => (
                <li key={item.name} className="w-fit">
                  <Link
                    className="flex rounded-md text-sm text-custom-gray transition hover:text-primary dark:text-custom-gray-light dark:hover:text-primary-light"
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    <span>{item.name}</span>
                    {item.external && (
                      <div className="ml-0.5 aspect-square size-3 rounded-full bg-primary-lighter/30 p-px dark:bg-primary/20">
                        <RiArrowRightUpLine
                          aria-hidden="true"
                          className="size-full shrink-0 text-primary dark:text-primary-light"
                        />
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold leading-6 text-primary dark:text-primary-light">
              Company
            </h3>
            <ul
              role="list"
              className="mt-6 space-y-4"
              aria-label="Quick links Company"
            >
              {navigation.company.map((item) => (
                <li key={item.name} className="w-fit">
                  <Link
                    className="flex rounded-md text-sm text-custom-gray transition hover:text-primary dark:text-custom-gray-light dark:hover:text-primary-light"
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    <span>{item.name}</span>
                    {item.external && (
                      <div className="ml-1 aspect-square size-3 rounded-full bg-primary-lighter/30 p-px dark:bg-primary/20">
                        <RiArrowRightUpLine
                          aria-hidden="true"
                          className="size-full shrink-0 text-primary dark:text-primary-light"
                        />
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-primary-lighter/30 pt-8 dark:border-primary/20">
          <p className="text-xs leading-5 text-custom-gray dark:text-custom-gray-light">
            &copy; {new Date().getFullYear()} B&B Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
