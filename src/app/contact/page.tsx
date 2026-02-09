import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";

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
    <main className="bg-white">
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <Reveal>
            <h1 className="font-serif text-5xl font-semibold text-black md:text-[3.5rem]">
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
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[3fr_2fr] lg:px-12">
          <Reveal>
            <form className="space-y-6 rounded-sm border border-gray-200 p-10">
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
                  className="mt-2 w-full rounded-sm border border-gray-300 px-4 py-3 text-base focus:border-gray-900"
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
                  className="mt-2 w-full rounded-sm border border-gray-300 px-4 py-3 text-base focus:border-gray-900"
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
                  className="mt-2 w-full rounded-sm border border-gray-300 px-4 py-3 text-base focus:border-gray-900"
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
                  className="mt-2 w-full rounded-sm border border-gray-300 px-4 py-3 text-base focus:border-gray-900"
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
                  className="mt-2 w-full rounded-sm border border-gray-300 px-4 py-3 text-base focus:border-gray-900"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
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
                  className="mt-2 w-full rounded-sm border border-gray-300 px-4 py-3 text-base focus:border-gray-900"
                />
              </div>
              <button className="h-12 w-full rounded-sm bg-black text-sm font-medium text-white transition duration-300 hover:bg-gray-900">
                Start Your Project →
              </button>
            </form>
          </Reveal>
          <Reveal>
            <div className="space-y-6 rounded-sm border border-gray-200 p-10">
              <div>
                <div className="text-sm font-medium text-gray-900">Email</div>
                <div className="mt-2 text-base text-black">
                  hello@agency.com
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Location</div>
                <div className="mt-2 text-base text-gray-700">
                  San Francisco, CA
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
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
            <h2 className="font-serif text-4xl text-black md:text-5xl">
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
