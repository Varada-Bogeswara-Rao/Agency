import { Reveal } from "@/components/Reveal";

const projects = [
  {
    name: "Harbor",
    category: "Fintech MVP",
  },
  {
    name: "Arcade Health",
    category: "Healthcare Platform",
  },
  {
    name: "Northwind",
    category: "B2B SaaS",
  },
  {
    name: "Signal Labs",
    category: "Analytics",
  },
];

const outcomes = [
  { value: "150%", label: "Increase in conversions" },
  { value: "42 days", label: "Average MVP launch" },
  { value: "99.9%", label: "Uptime across launches" },
];

export default function WorkPage() {
  return (
    <main className="bg-white">
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <Reveal>
            <h1 className="font-serif text-5xl font-semibold text-black md:text-[3.5rem]">
              Our Work
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg text-gray-700 md:text-xl">
              Clean MVPs that launched successfully.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <Reveal key={project.name}>
                <div className="group relative overflow-hidden rounded-sm border border-gray-200">
                  <div className="aspect-[16/10] w-full bg-gray-100" />
                  <div className="absolute inset-0 flex flex-col justify-end bg-black/90 p-8 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="font-serif text-2xl text-white">
                      {project.name}
                    </div>
                    <div className="mt-2 text-sm text-gray-400">
                      {project.category}
                    </div>
                    <div className="mt-4 text-sm font-medium text-white">
                      View case study →
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <Reveal>
            <div className="aspect-[16/7] w-full rounded-sm border border-gray-200 bg-gray-100" />
          </Reveal>
          <div className="mx-auto mt-16 max-w-3xl">
            <Reveal>
              <h2 className="font-serif text-4xl text-black md:text-5xl">
                Harbor
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 text-sm text-gray-600">
                Client • Fintech • 6-week timeline
              </p>
            </Reveal>
            <div className="mt-12 space-y-12">
              <Reveal>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
                    The Challenge
                  </p>
                  <p className="mt-4 text-lg text-gray-700">
                    Launch a secure onboarding flow with compliance-ready
                    reporting in under two months.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
                    Our Solution
                  </p>
                  <p className="mt-4 text-lg text-gray-700">
                    We built a modular architecture, reusable design system, and
                    automated QA workflow to ship fast with confidence.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
                    Outcomes
                  </p>
                  <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {outcomes.map((outcome) => (
                      <div
                        key={outcome.label}
                        className="rounded-sm border border-gray-200 p-6"
                      >
                        <div className="font-serif text-3xl text-black">
                          {outcome.value}
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          {outcome.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
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
                className="inline-flex h-12 items-center justify-center rounded-sm bg-white px-8 text-sm font-medium text-black transition duration-300 hover:bg-gray-100"
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
