import { Reveal } from "@/components/Reveal";

const services = [
  {
    number: "01",
    title: "MVP Development",
    description:
      "Launch-ready products built with clean code and scalable architecture.",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "High-performance marketing sites and product experiences that convert.",
  },
  {
    number: "03",
    title: "App Development",
    description:
      "Cross-platform apps designed for speed, reliability, and growth.",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Discovery & Planning",
    description:
      "We start by understanding your vision, market, and technical requirements.",
  },
  {
    number: "2",
    title: "Design & Build",
    description:
      "We craft clean interfaces and ship a maintainable codebase with speed.",
  },
  {
    number: "3",
    title: "Launch & Improve",
    description:
      "We deploy, monitor, and refine based on real user feedback.",
  },
];

const caseStudies = [
  {
    label: "CASE STUDY",
    title: "Harbor",
    description:
      "A fintech MVP launched in 6 weeks with a scalable API and secure onboarding.",
    metrics: ["50% faster launch", "10k users in 3 months", "99.9% uptime"],
  },
  {
    label: "CASE STUDY",
    title: "Arcade Health",
    description:
      "A healthcare platform rebuilt for reliability and compliance at scale.",
    metrics: ["2x release velocity", "40% fewer bugs", "HIPAA-ready stack"],
  },
];

const benefits = [
  {
    title: "Clean Code Standards",
    description:
      "Every line follows best practices for maintainability and scalability.",
  },
  {
    title: "Launch-Ready Delivery",
    description:
      "We focus on real outcomes: performance, reliability, and adoption.",
  },
  {
    title: "Product Thinking",
    description:
      "We build what matters, aligned to user needs and business goals.",
  },
  {
    title: "Ongoing Support",
    description:
      "We maintain and improve your product as your startup grows.",
  },
];

export default function Home() {
  return (
    <main>
        <section className="min-h-[100svh] pb-24 pt-24">
          <div className="mx-auto flex max-w-6xl flex-col justify-center px-6 lg:px-12">
            <Reveal>
              <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-tight text-black md:text-[4rem]">
                We Build Clean MVPs
                <br />
                That Launch Fast
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-12 max-w-2xl text-lg text-gray-700 md:text-xl">
                From concept to deployment, we create functional, scalable
                products for tech startups — and maintain them as you grow.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8">
                <a
                  className="inline-flex h-12 items-center justify-center rounded-sm bg-black px-8 text-sm font-medium text-white transition duration-300 hover:bg-gray-900"
                  href="/contact"
                >
                  Start Your Project →
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="services" className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <Reveal>
              <h2 className="font-serif text-4xl font-medium text-black md:text-5xl">
                Services Overview
              </h2>
            </Reveal>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <Reveal key={service.title}>
                  <article className="flex h-full flex-col rounded-sm border border-gray-200 p-10 transition duration-300 hover:border-gray-300 hover:bg-gray-50">
                    <div className="font-serif text-4xl text-black">
                      {service.number}
                    </div>
                    <h3 className="mt-6 font-serif text-2xl text-black">
                      {service.title}
                    </h3>
                    <p className="mt-6 text-base text-gray-700">
                      {service.description}
                    </p>
                    <a
                      className="mt-auto pt-8 text-sm font-medium text-gray-900"
                      href="/services"
                    >
                      Learn more →
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <Reveal>
              <h2 className="font-serif text-4xl font-medium text-black md:text-5xl">
                Process & Approach
              </h2>
            </Reveal>
            <div className="relative mt-16 grid gap-12 lg:grid-cols-3 lg:gap-20">
              <div className="absolute left-0 right-0 top-10 hidden h-px bg-gray-300 lg:block" />
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.05}>
                  <div className="relative bg-white">
                    <div className="font-serif text-6xl text-gray-200">
                      {step.number}
                    </div>
                    <h3 className="mt-4 font-serif text-2xl text-black">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base text-gray-700">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <Reveal>
              <h2 className="font-serif text-4xl font-medium text-black md:text-5xl">
                Case Studies
              </h2>
            </Reveal>
            <div className="mt-16 space-y-20">
              {caseStudies.map((study, index) => (
                <Reveal key={study.title}>
                  <div
                    className={`grid items-center gap-12 lg:grid-cols-2 ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    <div
                      className={`${
                        index % 2 === 1 ? "lg:col-start-2" : ""
                      }`}
                    >
                      <div
                        role="img"
                        aria-label={`${study.title} product preview`}
                        className="aspect-[4/3] w-full rounded-sm border border-gray-200 bg-gray-100"
                      />
                    </div>
                    <div className="lg:px-8">
                      <p className="text-xs font-medium uppercase tracking-[0.05em] text-gray-600">
                        {study.label}
                      </p>
                      <h3 className="mt-4 font-serif text-3xl text-black md:text-[2.5rem]">
                        {study.title}
                      </h3>
                      <p className="mt-4 text-lg text-gray-700">
                        {study.description}
                      </p>
                      <ul className="mt-6 space-y-3 text-base font-medium text-black">
                        {study.metrics.map((metric) => (
                          <li key={metric}>{metric}</li>
                        ))}
                      </ul>
                      <span className="mt-6 inline-block text-sm font-medium text-gray-900">
                        View case study →
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <Reveal>
              <h2 className="font-serif text-4xl font-medium text-black md:text-5xl">
                Why Choose Us
              </h2>
            </Reveal>
            <div className="mt-16 grid gap-10 md:grid-cols-2">
              {benefits.map((benefit) => (
                <Reveal key={benefit.title}>
                  <article className="rounded-sm border border-gray-200 p-12">
                    <div className="text-sm font-medium text-gray-600">
                      Benefit
                    </div>
                    <h3 className="mt-4 font-serif text-2xl text-black">
                      {benefit.title}
                    </h3>
                    <p className="mt-4 text-base text-gray-700">
                      {benefit.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-black py-24 text-white md:py-28"
        >
          <div className="mx-auto max-w-6xl px-6 text-center lg:px-12">
            <Reveal>
              <h2 className="font-serif text-4xl font-medium md:text-5xl">
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
