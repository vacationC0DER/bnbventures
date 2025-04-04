"use client"

import { cx } from "@/lib/utils"
import "@/styles/team.css"
import Image from "next/image"
import React from "react"

// Organization structure data
const executives = [
  {
    name: "Steven Brown",
    role: "CEO",
    image: "/images/CEO_Steven.jpeg",
    bio: "With over 15 years of experience in vacation rental technology, Steven leads B&B Ventures with a vision to revolutionize the industry. His expertise in property management and software development drives our innovative solutions. Steven's leadership style combines technical excellence with a deep understanding of customer needs, making him a driving force behind our success.",
  },
  {
    name: "Alexander Buchanan",
    role: "COO",
    image: "/images/coo_alexander.jpeg",
    bio: "Alexander brings strategic leadership and operational excellence to B&B Ventures. His background in hospitality management and technology helps bridge the gap between traditional vacation rentals and modern solutions. With a proven track record in scaling operations, Alexander ensures our company's growth while maintaining the highest standards of service quality.",
  },
]

const managers = [
  {
    name: "Taylor Porter",
    role: "People Manager",
    image: "/images/people_manager_taylor.jpg.jpeg",
    bio: "Taylor is passionate about creating an inclusive and innovative workplace culture. She leads our talent development initiatives and ensures our team thrives in a collaborative environment. Her expertise in organizational psychology and team dynamics helps us build a strong, cohesive workforce that drives our company's success.",
  },
  {
    name: "Joanne Oh",
    role: "Marketing Manager",
    image: "/images/marketing_manager_joanne.jpg.jpeg",
    bio: "Joanne drives our marketing strategy with creativity and data-driven insights. Her expertise in digital marketing helps us reach and engage vacation rental professionals worldwide. Through innovative campaigns and strategic partnerships, she has helped establish B&B Ventures as a thought leader in the industry.",
  },
  {
    name: "Aaron Carpenter",
    role: "Data Engineer",
    image: "/images/working.webp",
    bio: "Aaron specializes in transforming complex data into actionable insights. His work on our analytics platform helps property managers make data-driven decisions. With expertise in machine learning and predictive analytics, Aaron's contributions have been instrumental in developing our cutting-edge technology solutions.",
  },
]

const vrDepartment = [
  {
    name: "Madison Byron",
    role: "Director of Operations for Vacation Rentals",
    image: "/images/director_operations_madison.jpeg",
    bio: "Madison oversees our vacation rental operations with precision and expertise. Her deep understanding of property management helps us deliver exceptional service to our clients. Through her leadership, we've streamlined operations and improved efficiency across all our service areas.",
  },
  {
    name: "John Doe",
    role: "Account Manager for Vacation Rentals",
    image: "/images/working.webp",
    bio: "John builds strong relationships with our clients and ensures their success with our solutions. His dedication to customer satisfaction drives our client retention. With a background in hospitality management, John brings valuable insights to our client relationships and service delivery.",
  },
  {
    name: "Samantha Maher",
    role: "Customer Service for Vacation Rentals",
    image: "/images/customer_service_samantha.jpeg",
    bio: "Samantha leads our customer service team with empathy and efficiency. Her commitment to excellence ensures our clients receive the support they need. Through her innovative approach to customer service, she has helped us maintain industry-leading satisfaction rates.",
  },
  {
    name: "Sara Suler",
    role: "Director of Business Development for Vacation Rentals",
    image: "/images/director_business_development_sara.jpg.jpeg",
    bio: "Sara drives our business growth through strategic partnerships and market expansion. Her innovative approach helps us reach new markets and opportunities. With expertise in both traditional and digital business development, Sara has been instrumental in our company's expansion.",
  },
  {
    name: "Gabriella Riska",
    role: "Director of Business Development for Vacation Rentals",
    image: "/images/director_business_development_gabriella.jpg.jpeg",
    bio: "Gabriella focuses on developing long-term relationships with key industry partners. Her expertise in business development helps us create valuable opportunities. Through her strategic approach to partnerships, she has helped us build a robust network of industry collaborators.",
  },
  {
    name: "Cat Marx",
    role: "Accounting Manager for Vacation Rentals",
    image: "/images/accounting_manager_cat.jpg.jpeg",
    bio: "Cat manages our financial operations with precision and expertise. Her strategic financial planning ensures sustainable growth for our company. With a strong background in financial management and analysis, Cat helps us make informed decisions that drive our business forward.",
  },
]

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
  leader?: boolean
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  bio,
  leader = false,
}) => {
  return (
    <div
      className={cx(
        "group relative flex flex-col transition-all duration-300",
        leader ? "col-span-1" : "",
      )}
    >
      <div className="card-container relative aspect-[3/4] w-full">
        {/* Front of card */}
        <div className="card-front">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              className="card-image object-cover"
            />
          </div>
        </div>

        {/* Back of card */}
        <div className="card-back">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-sm leading-relaxed text-indigo-50">{bio}</p>
            </div>
            <div className="mt-4 text-xs text-indigo-200">
              Hover to see photo
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
      </div>
    </div>
  )
}

export default function TeamOrganization() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Our dedicated team of professionals is passionate about transforming
            vacation rentals with innovative technology solutions.
          </p>
        </div>

        {/* Executive Leaders */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
            Founders
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {executives.map((member) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                leader
              />
            ))}
          </div>
        </div>

        {/* Department Managers */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
            Core Team
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {managers.map((member) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>

        {/* Vacation Rental Department */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
            Vacation Rental Department
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {vrDepartment.map((member) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
