import { TestimonialsOverlay } from "@/components/TestimonialsOverlay";

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

const testimonials = [
  {
    quote:
      "The team consistently delivered high-quality work on time. Their attention to detail was outstanding throughout the build.",
    author: "Vikram Shastry",
    role: "CEO, Black Lotus",
  },
  {
    quote:
      "Professional, communicative, and efficient. They delivered a product that has been instrumental in our growth.",
    author: "Gautami Raiker",
    role: "Co-Founder, Contractzy",
  },
  {
    quote:
      "Highly recommend for anyone looking for outstanding design and clean execution. Their expertise was invaluable.",
    author: "Vaishali Chitnis",
    role: "Founder, Spicy Tango",
  },
];

export default function Home() {
  return (
    <main className="bg-gray-950 text-gray-100">
      <section className="min-h-[85svh] pb-16 pt-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-tight md:text-[4rem]">
            We Build Clean MVPs
            <br />
            That Launch Fast
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-gray-300 md:text-xl">
            From concept to deployment, we create functional, scalable products
            for tech startups - and maintain them as you grow.
          </p>
          <div className="mt-8">
            <a
              className="btn-border-animate inline-flex h-12 items-center justify-center rounded-sm border border-gray-200 bg-gray-100 px-8 text-sm font-medium text-black"
              href="/contact"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <h2 className="font-serif text-4xl font-medium md:text-5xl">
            Services Overview
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title}>
                <div className="font-serif text-4xl text-white">
                  {service.number}
                </div>
                <h3 className="mt-6 font-sans text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-base text-gray-300">
                  {service.description}
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-gray-200">
                  Learn more
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <h2 className="font-serif text-4xl font-medium md:text-5xl">
            Process & Approach
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-20">
            {processSteps.map((step) => (
              <div key={step.title}>
                <div className="font-serif text-6xl text-gray-700">
                  {step.number}
                </div>
                <h3 className="mt-4 font-sans text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-base text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <h2 className="font-serif text-4xl font-medium md:text-5xl">
            Case Studies
          </h2>
          <div className="mt-12 space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div
                    role="img"
                    aria-label={`${study.title} product preview`}
                    className="aspect-[4/3] w-full border border-gray-800 bg-gray-900"
                  />
                </div>
                <div className="lg:px-8">
                  <p className="text-xs font-medium uppercase tracking-[0.05em] text-gray-400">
                    {study.label}
                  </p>
                  <h3 className="mt-4 font-sans text-2xl font-semibold text-white md:text-[2.5rem]">
                    {study.title}
                  </h3>
                  <p className="mt-4 text-lg text-gray-300">
                    {study.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-base font-medium text-gray-100">
                    {study.metrics.map((metric) => (
                      <li key={metric}>{metric}</li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-block text-sm font-medium text-gray-200">
                    View case study
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsOverlay testimonials={testimonials} />
    </main>
  );
}
