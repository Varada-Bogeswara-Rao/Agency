"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

type TestimonialsOverlayProps = {
  testimonials: Testimonial[];
};

export function TestimonialsOverlay({ testimonials }: TestimonialsOverlayProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const shrink = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.98, 0.94]);
  const slideDown = useTransform(scrollYProgress, [0, 0.35, 1], [0, 40, 160]);

  return (
    <div ref={ref} className="relative h-[170svh]">
      <section id="testimonials" className="sticky top-0 z-10">
        <div className="mx-auto flex min-h-[100svh] max-w-6xl items-center px-6 py-16 lg:px-12">
          <motion.div
            style={{ scale: shrink, y: slideDown }}
            className="w-full origin-top rounded-[36px] border border-gray-200 bg-white p-10 shadow-[0_24px_60px_rgba(0,0,0,0.12)] md:p-14"
          >
            <h2 className="font-serif text-4xl font-medium md:text-5xl">
              What Our Clients Say
            </h2>
            <div className="grid gap-10 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.author}
                  className="flex h-full flex-col rounded-[24px] border border-gray-200 bg-white p-7 shadow-[0_14px_32px_rgba(0,0,0,0.08)]"
                >
                  <p className="text-lg italic leading-relaxed text-gray-700">
                    {testimonial.quote}
                  </p>
                  <div className="mt-6">
                    <div className="font-medium text-black">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="relative z-20 mt-[10svh]">
        <div className="mx-auto flex min-h-[100svh] w-full max-w-6xl items-center px-6 py-16 lg:px-12">
          <div className="flex min-h-[70svh] w-full flex-col justify-center rounded-[36px] border border-gray-200 bg-white p-10 text-center shadow-[0_24px_60px_rgba(0,0,0,0.16)] md:min-h-[75svh] md:p-14">
            <h2 className="font-serif text-4xl font-medium md:text-5xl">
              Ready to Build Your MVP?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Let&apos;s turn your idea into a launched product.
            </p>
            <div className="mt-8">
              <a
                className="btn-border-animate inline-flex h-12 items-center justify-center rounded-sm border border-black bg-white px-8 text-sm font-medium text-black"
                href="/contact"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
