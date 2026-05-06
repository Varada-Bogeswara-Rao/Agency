"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function FloatingBookCall() {
  const calUrl = process.env.NEXT_PUBLIC_CAL_COM;
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!calUrl || dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Dismiss button */}
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss booking prompt"
            className="absolute -right-2 -top-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-gray-700 text-gray-300 shadow-md transition-all duration-200 hover:bg-gray-600 hover:text-white hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-2.5 w-2.5"
            >
              <path
                fillRule="evenodd"
                d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-[280px] overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-2xl transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] hover:scale-[1.02] hover:border-gray-700"
          >
            {/* Image — cropped to show the faces (bottom portion of original) */}
            <div className="relative h-[90px] w-[100px] flex-shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/book-call.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-bottom transition-all duration-500 group-hover:scale-110 group-hover:brightness-125"
              />
              {/* Right-edge gradient to blend into the card */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent from-40% to-gray-900" />
            </div>

            {/* Text content */}
            <div className="flex flex-1 flex-col justify-center px-4 py-3">
              <span className="font-serif text-lg leading-tight text-white">
                Book a Call
              </span>
              <span className="mt-1.5 flex items-center gap-1 text-[11px] font-medium tracking-wide text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                Let&apos;s build together
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.25a.75.75 0 0 1 0 1.06l-4.5 4.25a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>

            {/* Hover shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
