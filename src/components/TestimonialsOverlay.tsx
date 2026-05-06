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
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);

  return (
    <div ref={ref} className="relative z-0 bg-gray-50">
      <section id="testimonials" className="sticky top-0 -z-10 flex min-h-[100svh] items-center justify-center overflow-hidden py-24">
        <motion.div style={{ opacity, scale }} className="mx-auto w-full max-w-6xl px-6 lg:px-12">
          <h2 className="font-serif text-4xl font-medium text-gray-900 md:text-5xl text-center">
            What Our Clients Say
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.author}
                className="flex h-full flex-col justify-between rounded-sm border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div>
                  <div className="mb-6 flex content-start text-gray-300">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="mt-1 text-sm font-medium text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="relative z-20 w-full bg-white py-32 shadow-[0_-20px_40px_rgba(0,0,0,0.03)] border-t border-gray-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center lg:px-12">
          <h2 className="font-serif text-4xl font-medium text-gray-900 md:text-5xl">
            Ready to Build Your MVP?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Let&apos;s turn your idea into a launched product.
          </p>
          <div className="mt-10">
            <a
              className="btn-border-animate inline-flex h-12 items-center justify-center rounded-sm bg-gray-900 px-8 text-sm font-medium text-white transition duration-300"
              href="/contact"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
