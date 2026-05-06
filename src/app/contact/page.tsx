import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";

function getSocialUrl(publicKey: string, fallbackKey: string) {
  return process.env[publicKey] || process.env[fallbackKey] || "#";
}

const socialLinks = [
  {
    label: "X",
    href: getSocialUrl("NEXT_PUBLIC_X_URL", "X_URL"),
    icon: (
      <svg
        aria-hidden="true"
        className="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18.901 2H21.99l-6.75 7.713L23.176 22h-6.214l-4.87-6.938L6.02 22H2.93l7.22-8.252L.824 2H7.2l4.402 6.268L18.901 2Zm-1.086 18.128h1.712L6.27 3.776H4.434l13.38 16.352Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: getSocialUrl("NEXT_PUBLIC_INSTAGRAM_URL", "INSTAGRAM_URL"),
    icon: (
      <svg
        aria-hidden="true"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
      >
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="4.25"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "How long does an MVP take?",
    answer:
      "Most MVPs launch in 6–10 weeks. Timelines depend on scope, integrations, and feedback cycles.",
  },
  {
    question: "Do you work with early-stage teams?",
    answer:
      "Yes. We partner with founders at idea, pre-seed, and Series A stages.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "We begin with discovery, define milestones, and deliver in focused sprints with weekly updates.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <Reveal>
            <h1 className="font-serif text-5xl font-semibold text-gray-900 md:text-[3.5rem]">
              Let’s Talk
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg text-gray-700 md:text-xl">
              Tell us about your project and we’ll get back to you within 24
              hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[3fr_2fr] lg:gap-12 lg:px-12">
          <Reveal>
            <form className="space-y-6 rounded-sm border border-gray-200 bg-gray-100 p-6 md:p-10">
              <div>
                <label
                  className="text-sm font-medium text-gray-900"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-2 w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none"
                />
              </div>
              <div>
                <label
                  className="text-sm font-medium text-gray-900"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none"
                />
              </div>
              <div>
                <label
                  className="text-sm font-medium text-gray-900"
                  htmlFor="company"
                >
                  Company (optional)
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="mt-2 w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none"
                />
              </div>
              <div>
                <label
                  className="text-sm font-medium text-gray-900"
                  htmlFor="project"
                >
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  className="mt-2 w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>MVP Development</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>Maintenance & Support</option>
                </select>
              </div>
              <div>
                <label
                  className="text-sm font-medium text-gray-900"
                  htmlFor="budget"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="mt-2 w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>$500-$2.5k</option>
                  <option>$2.5k-$10k</option>
                  <option>$10k–$25k</option>
                  <option>$25k–$50k</option>
                  <option>$50k–$100k</option>
                  <option>$100k+</option>
                </select>
              </div>
              <div>
                <label
                  className="text-sm font-medium text-gray-900"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none"
                />
              </div>
              <button className="btn-border-animate h-12 w-full rounded-sm bg-gray-900 text-sm font-medium text-white transition duration-300">
                Start Your Project →
              </button>
            </form>
          </Reveal>
          <Reveal>
            <div className="space-y-6 rounded-sm border border-gray-200 bg-gray-100 p-6 md:p-10">
              <div>
                <div className="text-sm font-medium text-gray-800">Socials</div>
                <div className="mt-3 flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const disabled = social.href === "#";

                    return (
                      <a
                        key={social.label}
                        aria-label={social.label}
                        aria-disabled={disabled}
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
                          disabled
                            ? "cursor-not-allowed border-gray-200 bg-gray-200 text-gray-500"
                            : "border-gray-300 bg-white text-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                        }`}
                        href={social.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {social.icon}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-800">Location</div>
                <div className="mt-2 text-base text-gray-700">
                  INDIA
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-800">
                  Response Time
                </div>
                <div className="mt-2 text-base text-gray-700">
                  We typically respond within 24 hours.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <Reveal>
            <h2 className="font-serif text-4xl text-gray-900 md:text-5xl">
              FAQ
            </h2>
          </Reveal>
          <div className="mt-10">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>
    </main>
  );
}
