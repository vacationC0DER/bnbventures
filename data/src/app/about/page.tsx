import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"
import Benefits from "@/components/ui/Benefits"
import TeamOrganization from "@/components/ui/TeamOrganization"
import { cx } from "@/lib/utils"
import Balancer from "react-wrap-balancer"

export default function About() {
  return (
    <div className="mt-36 flex flex-col overflow-hidden px-3">
      <section
        aria-labelledby="about-overview"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <Badge>about b&b ventures</Badge>
        <h1
          id="about-overview"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          <Balancer>
            Transforming vacation rentals with innovative technology solutions
          </Balancer>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
          At B&B Ventures, we're passionate about creating technology that
          revolutionizes the vacation rental industry. Our solutions turn
          complex data into actionable insights while streamlining operations
          for property managers worldwide.
        </p>
      </section>
      <TeamOrganization />
      <Benefits />
      <section aria-labelledby="vision-title" className="mx-auto mt-40">
        <h2
          id="vision-title"
          className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent md:text-5xl dark:from-gray-50 dark:to-gray-300"
        >
          Our Vision
        </h2>
        <div className="mt-6 max-w-prose space-y-4 text-gray-600 dark:text-gray-400">
          <p className="text-lg leading-8">
            We envision a future where vacation rental management is seamless,
            data-driven, and focused on exceptional guest experiences. By
            combining cutting-edge technology with industry expertise, our
            solutions empower property managers to optimize operations, increase
            revenue, and deliver outstanding service.
          </p>
          <p className="text-lg leading-8">
            Our commitment to innovation drives us to continuously improve our
            offerings, from our Archived task management system to our VR Goals
            OKR platform. Together, we're building tools that transform the way
            vacation rental businesses operate, enabling them to thrive in an
            increasingly competitive market.
          </p>
          <p
            className={cx(
              "w-fit rotate-3 font-handwriting text-3xl text-indigo-600 dark:text-indigo-400",
            )}
          >
            – Steven Brown
          </p>
        </div>
        <Button className="mt-32 h-10 w-full shadow-xl shadow-indigo-500/20">
          Join Our Team
        </Button>
      </section>
    </div>
  )
}
