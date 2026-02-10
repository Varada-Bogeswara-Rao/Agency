import { Reveal } from "@/components/Reveal";

const services = [
  {
    title: "MVP Development",
    description:
      "We define the core product, design clean user flows, and build an MVP that proves demand without cutting corners. Every sprint is scoped to outcomes, not features.",
    includes: ["Product discovery", "UX/UI design", "Full-stack build"],
    timeline: "Typical timeline: 6–10 weeks depending on scope.",
  },
  {
    title: "Web Development",
    description:
      "High-performance marketing sites and product experiences that load fast, communicate clearly, and convert. Built with SEO, accessibility, and analytics baked in.",
    includes: ["Design systems", "CMS integration", "Conversion tracking"],
    timeline: "Typical timeline: 3–6 weeks with ongoing optimization.",
  },
  {
    title: "App Development",
    description:
      "Cross-platform apps designed for reliability, speed, and growth. We focus on product clarity, stable architecture, and clean releases.",
    includes: ["iOS + Android", "QA + testing", "Release management"],
    timeline: "Typical timeline: 8–14 weeks depending on complexity.",
  },
  {
    title: "Maintenance & Support",
    description:
      "We stay on after launch to monitor performance, ship improvements, and keep your product secure as your startup scales.",
    includes: ["Monitoring", "Roadmap updates", "Security reviews"],
    timeline: "Monthly support retainers with clear SLAs.",
  },
];

const stack = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Supabase",
  "Stripe",
  "AWS",
  "Vercel",
  "Figma",
  "Framer Motion",
  "Tailwind CSS",
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="flex min-h-[70svh] items-center py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-600">
              What We Do
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-serif text-5xl font-semibold text-black md:text-[3.5rem]">
              Build. Launch. Maintain.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-gray-700 md:text-xl">
              End-to-end development services for tech startups who need to move
              fast without compromising quality.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl space-y-28 px-6 lg:px-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <Reveal>
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <h2 className="font-serif text-4xl text-black md:text-[2.5rem]">
                    {service.title}
                  </h2>
                  <p className="mt-6 text-lg text-gray-700">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <div className="text-sm font-medium text-black">
                      What’s included
                    </div>
                    <ul className="mt-4 space-y-2 text-base text-gray-700">
                      {service.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-6 text-base text-gray-700">
                    {service.timeline}
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="aspect-[4/3] w-full rounded-sm border border-gray-200 bg-gray-100" />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <Reveal>
            <h2 className="font-serif text-4xl text-black md:text-5xl">
              Technology Stack
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {stack.map((item) => (
              <Reveal key={item}>
                <div className="flex h-20 items-center justify-center rounded-sm border border-gray-200 text-sm font-medium text-gray-700 transition duration-300 hover:scale-[1.02] hover:opacity-80">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-12">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl">
              Ready to Build Your MVP?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              Let’s turn your idea into a launched product.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <a
                className="btn-border-animate inline-flex h-12 items-center justify-center rounded-sm bg-white px-8 text-sm font-medium text-black transition duration-300 hover:bg-gray-100"
                href="/contact"
              >
                Get in touch →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
