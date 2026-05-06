"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type FounderPillar = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

const founderPillars: FounderPillar[] = [
  {
    id: "build",
    label: "Hands-On Build",
    eyebrow: "How I Work",
    title: "Every project stays close to the code and the product.",
    description:
      "You are collaborating directly with the person planning the architecture, building the experience, and making the tradeoffs around scope, speed, and quality.",
    bullets: [
      "Direct technical input from discovery through launch",
      "Fast iteration without long approval chains",
      "Clean implementation built for real-world change",
    ],
  },
  {
    id: "focus",
    label: "Decision Making",
    eyebrow: "What I Optimize For",
    title: "Clarity first, then momentum, then polish.",
    description:
      "Early products do not need complexity for its own sake. They need the right core experience, stable foundations, and a delivery rhythm that keeps founders moving.",
    bullets: [
      "MVP scope shaped around what matters most",
      "Thoughtful tradeoffs instead of overbuilding",
      "Quality where users feel it and teams maintain it",
    ],
  },
  {
    id: "fit",
    label: "Best Fit",
    eyebrow: "Who I Work Best With",
    title: "The best partnerships are founder-led and action-oriented.",
    description:
      "This setup works especially well for early-stage founders, product teams validating a new idea, and businesses that need a senior builder without agency overhead.",
    bullets: [
      "Teams that value speed and honest communication",
      "Founders who want a collaborative technical partner",
      "Projects where shipping matters more than theater",
    ],
  },
];

export function FounderSpotlight() {
  const [activePillar, setActivePillar] = useState(founderPillars[0]);

  return (
    <section id="meet-the-founder" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
              Meet The Founder
            </p>
            <h2 className="mt-4 max-w-md font-serif text-4xl font-medium leading-tight text-gray-900 md:text-5xl">
              A closer look at how this studio thinks, builds, and collaborates.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-gray-700">
              Explore the parts of the working style that matter most before we
              ever get on a call.
            </p>

            <div className="mt-10 rounded-sm border border-gray-200 bg-gray-50 p-6">
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                Founder-Led Promise
              </div>
              <p className="mt-4 font-serif text-2xl leading-9 text-gray-900">
                You will always know who is building, why a decision is being
                made, and what happens next.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {founderPillars.map((pillar) => {
              const isActive = pillar.id === activePillar.id;

              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillar(pillar)}
                  className={`w-full rounded-sm border p-6 text-left transition duration-300 ${
                    isActive
                      ? "border-gray-900 bg-gray-900 text-white shadow-[0_20px_50px_-24px_rgba(17,24,39,0.55)]"
                      : "border-gray-200 bg-white text-gray-900 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <div
                        className={`text-xs font-medium uppercase tracking-[0.18em] ${
                          isActive ? "text-gray-300" : "text-gray-500"
                        }`}
                      >
                        {pillar.eyebrow}
                      </div>
                      <div className="mt-3 font-serif text-2xl leading-tight">
                        {pillar.label}
                      </div>
                    </div>
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                        isActive
                          ? "border-white/20 text-white"
                          : "border-gray-200 text-gray-500"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`h-5 w-5 transition-transform duration-300 ${
                          isActive ? "translate-x-0.5" : ""
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.22 10a.75.75 0 0 1 .75-.75h10.19L10.47 5.56a.75.75 0 1 1 1.06-1.06l4.97 4.97a.75.75 0 0 1 0 1.06l-4.97 4.97a.75.75 0 1 1-1.06-1.06l3.69-3.69H3.97A.75.75 0 0 1 3.22 10Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key={pillar.id}
                        initial={{ opacity: 0, height: 0, y: 10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 border-t border-white/10 pt-6">
                          <h3 className="max-w-2xl font-sans text-xl font-semibold leading-8">
                            {pillar.title}
                          </h3>
                          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300">
                            {pillar.description}
                          </p>
                          <ul className="mt-6 grid gap-3 md:grid-cols-3">
                            {pillar.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="rounded-sm border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-gray-200"
                              >
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
