"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-12">
        <Link className="font-serif text-2xl font-semibold text-gray-100" href="/">
          Agency
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-200 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                className={`group relative inline-flex items-center transition ${
                  active ? "text-gray-100" : "hover:text-gray-100"
                }`}
                href={link.href}
              >
                <span className="relative">
                  {link.label}
                  <span
                    className={`pointer-events-none absolute left-1/2 top-full mt-1 h-px w-[110%] -translate-x-1/2 scale-x-0 bg-gray-100 transition duration-500 ease-out group-hover:scale-x-100 ${
                      active ? "scale-x-100" : ""
                    }`}
                  />
                </span>
              </Link>
            );
          })}
        </nav>

        <Link
          className="btn-border-animate hidden h-10 items-center justify-center rounded-sm border border-gray-200 px-5 text-sm font-medium text-gray-100 md:flex"
          href="/contact"
        >
          Start Project
        </Link>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-gray-700 text-gray-200 md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="block h-4 w-5">
            <span className="block h-px w-full bg-gray-100"></span>
            <span className="mt-1.5 block h-px w-full bg-gray-100"></span>
            <span className="mt-1.5 block h-px w-full bg-gray-100"></span>
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-white md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex h-full flex-col px-8 pt-24">
              {links.map((link) => (
                <Link
                  key={link.href}
                  className="border-b border-gray-800 py-4 text-2xl font-medium text-gray-100"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                className="btn-border-animate mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-gray-100 px-6 text-sm font-medium text-black"
                href="/contact"
                onClick={() => setOpen(false)}
              >
                Start Project →
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
