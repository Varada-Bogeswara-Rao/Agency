import { Reveal } from "@/components/Reveal";

const values = [
  {
    number: "01",
    title: "Simplicity First",
    description:
      "We remove noise and build only what matters for the user and the business.",
  },
  {
    number: "02",
    title: "Craft Over Hype",
    description:
      "Every screen and API endpoint is built to last, not just to launch.",
  },
  {
    number: "03",
    title: "Transparent Delivery",
    description:
      "Clear timelines, honest communication, and predictable execution.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <Reveal>
            <h1 className="font-serif text-5xl font-semibold text-gray-900 md:text-[3.5rem]">
              We Build Products
              <br />
              That Matter
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-lg text-gray-700 md:text-xl">
              Founded by developers who were tired of bloated codebases and
              missed deadlines. We do things differently.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-lg text-gray-700">
                We started  after years inside startups where velocity
                suffered under messy code and unclear priorities. We believe MVPs
                should be clean, reliable, and ready to scale from day one.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg text-gray-700">
                Our process is built around clarity. We ask the right questions,
                align early on outcomes, and ship in focused iterations.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <blockquote className="mt-16 border-l-2 border-gray-300 pl-10 font-serif text-3xl text-gray-900">
                “Clean code isn’t optional. It’s how we work.”
              </blockquote>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-12 text-lg text-gray-700">
                That discipline helps teams move faster without sacrificing
                stability. It’s how we help startups earn user trust early.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <Reveal>
            <h2 className="font-serif text-4xl text-gray-900 md:text-5xl">
              Values & Principles
            </h2>
          </Reveal>
          <div className="mt-16 space-y-16">
            {values.map((value) => (
              <Reveal key={value.title}>
                <div className="relative border-b border-gray-200 pb-12">
                  <div className="absolute -left-2 -top-6 font-serif text-7xl text-gray-300">
                    {value.number}
                  </div>
                  <div className="relative">
                    <h3 className="font-serif text-3xl text-gray-900">
                      {value.title}
                    </h3>
                    <p className="mt-4 text-base text-gray-700">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-gray-900">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl">
              Ready to Build Your MVP?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg text-gray-600">
              Let’s turn your idea into a launched product.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <a
                className="btn-border-animate inline-flex h-12 items-center justify-center rounded-sm bg-gray-900 px-8 text-sm font-medium text-white transition duration-300"
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
