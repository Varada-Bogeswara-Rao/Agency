export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-40 text-sm text-gray-300 md:grid-cols-4 lg:px-12">
        <div>
          <div className="font-serif text-xl text-gray-100">Agency</div>
          <p className="mt-4 text-sm text-gray-400">
            Clean MVPs for modern startups.
          </p>
        </div>
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.05em] text-gray-400">
            Quick Links
          </div>
          <div className="mt-4 space-y-2">
            <a className="block hover:text-gray-100" href="/services">
              Services
            </a>
            <a className="block hover:text-gray-100" href="/work">
              Work
            </a>
            <a className="block hover:text-gray-100" href="/about">
              About
            </a>
            <a className="block hover:text-gray-100" href="/contact">
              Contact
            </a>
          </div>
        </div>
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.05em] text-gray-400">
            Services
          </div>
          <div className="mt-4 space-y-2">
            <a className="block hover:text-gray-100" href="/services">
              MVP Development
            </a>
            <a className="block hover:text-gray-100" href="/services">
              Web Development
            </a>
            <a className="block hover:text-gray-100" href="/services">
              App Development
            </a>
            <a className="block hover:text-gray-100" href="/services">
              Maintenance
            </a>
          </div>
        </div>
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.05em] text-gray-400">
            Contact
          </div>
          <div className="mt-4 space-y-2">
            <div>hello@agency.com</div>
            <div>San Francisco, CA</div>
            <div>Response in 24 hours</div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        © 2024 Agency • Privacy • Terms
      </div>
    </footer>
  );
}
