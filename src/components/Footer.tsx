function getSocialUrl(publicKey: string, fallbackKey: string) {
  return process.env[publicKey] || process.env[fallbackKey] || "#";
}

export function Footer() {
  const xUrl = getSocialUrl("NEXT_PUBLIC_X_URL", "X_URL");
  const instagramUrl = getSocialUrl("NEXT_PUBLIC_INSTAGRAM_URL", "INSTAGRAM_URL");

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-24 text-sm text-gray-700 md:grid-cols-4 lg:px-12">
        <div>
          <div className="font-serif text-xl text-gray-900">Merkel Studios</div>
          <p className="mt-4 text-sm text-gray-600">
            Clean MVPs for modern startups.
          </p>
        </div>
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.05em] text-gray-600">
            Quick Links
          </div>
          <div className="mt-4 space-y-2">
            <a className="block hover:text-gray-900" href="/services">
              Services
            </a>
            <a className="block hover:text-gray-900" href="/work">
              Work
            </a>
            <a className="block hover:text-gray-900" href="/about">
              About
            </a>
            <a className="block hover:text-gray-900" href="/contact">
              Contact
            </a>
          </div>
        </div>
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.05em] text-gray-600">
            Services
          </div>
          <div className="mt-4 space-y-2">
            <a className="block hover:text-gray-900" href="/services">
              MVP Development
            </a>
            <a className="block hover:text-gray-900" href="/services">
              Web Development
            </a>
            <a className="block hover:text-gray-900" href="/services">
              App Development
            </a>
            <a className="block hover:text-gray-900" href="/services">
              Maintenance
            </a>
          </div>
        </div>
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.05em] text-gray-600">
            Contact
          </div>
          <div className="mt-4 space-y-2">
            <a
              className={`block hover:text-gray-900 ${xUrl === "#" ? "pointer-events-none text-gray-400" : ""}`}
              href={xUrl}
              rel="noreferrer"
              target="_blank"
            >
              Twitter
            </a>
            <a
              className={`block hover:text-gray-900 ${instagramUrl === "#" ? "pointer-events-none text-gray-400" : ""}`}
              href={instagramUrl}
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
            <div>India</div>
            <div>Response in 24 hours</div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">
        © 2026 Merkel Studios • Privacy • Terms
      </div>
    </footer>
  );
}
