const benefits = [
  {
    title: "Work remotely",
    description:
      "Choose your location. Set your own schedule.",
  },
  {
    title: "Competitive salary & equity",
    description:
      "Get competitive pay and stock options.",
  },
  {
    title: "Health, dental, vision",
    description:
      "Your insurance costs are covered.",
  },
  {
    title: "Annual team gathering",
    description:
      "Meet the team at our yearly off-site.",
  },
  {
    title: "Book budget",
    description:
      "Receive a USD 350 allowance for books.",
  },
  {
    title: "Home office support",
    description:
      "Get a budget for your home office setup.",
  },
  {
    title: "Time off",
    description: "Take 20 PTO days per year.",
  },
  {
    title: "Spotify Premium",
    description:
      "Enjoy a Spotify subscription for your music.",
  },
]

export default function Benefits() {
  return (
    <section aria-labelledby="benefits-title" className="mx-auto mt-44">
      <h2
        id="benefits-title"
        className="inline-block bg-gradient-to-t from-[#1A73BB] to-[#3B88C4] bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent md:text-5xl dark:from-[#BAD5EA] dark:to-white"
      >
        Remote job in a family friendly work culture
      </h2>
      <p className="mt-4 text-lg text-[#666666] dark:text-[#CCCCCC]">
        You work remotely and keep family life a priority.
      </p>
      <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:mt-12">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="col-span-4 sm:col-span-2 lg:col-span-1 rounded-xl border border-[#BAD5EA] bg-white p-6 shadow-sm ring-1 ring-[#BAD5EA]/50 transition duration-300 hover:shadow-md hover:border-[#3B88C4] dark:border-[#1A73BB] dark:bg-[#000000] dark:ring-[#3B88C4]/30"
          >
            <dt className="font-semibold text-[#1A73BB] dark:text-[#3B88C4]">
              {benefit.title}
            </dt>
            <dd className="mt-2 leading-7 text-[#666666] dark:text-[#CCCCCC]">
              {benefit.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
