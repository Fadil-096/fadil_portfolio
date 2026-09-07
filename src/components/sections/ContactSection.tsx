import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="flex flex-col pt-16 min-h-[50vh] justify-center pb-16 relative">
      <div>
        <h2 className="h1 font-bold mb-4 text-[var(--foreground)]">Contact<span className="text-[var(--accent)]">.</span></h2>
        <p className="font-mono mb-10 uppercase tracking-[0.05em] opacity-80 text-base md:text-lg text-[var(--accent)]">Let&apos;s build something together<span className="text-[var(--foreground)]">.</span></p>
      </div>
      
      <div className="max-w-3xl flex flex-col gap-6">
        <p className="text-2xl md:text-4xl leading-relaxed mb-6 font-medium">
          Looking for an internship, apprenticeship, or full-time role starting immediately. Motivated to join a data-driven team.
        </p>
        <p className="mono-label opacity-80 mb-10">
          Also open to freelance data analysis and engineering work. Remote-friendly.
        </p>

        <a href="mailto:fadilahmed.mitblr@gmail.com" className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold hover:text-[var(--accent)] transition-colors w-fit whitespace-nowrap" data-cursor="Say hi">
          fadilahmed.mitblr@gmail.com
        </a>
      </div>

      <div className="mt-12 flex flex-wrap gap-x-8 gap-y-6 sm:gap-10">
        <Link href="https://github.com/fadil-096/" target="_blank" className="flex flex-col items-center gap-2 group" data-cursor="Open">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-[var(--accent)] transition-colors duration-300">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span className="text-sm mono-label opacity-60 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all duration-300">GitHub</span>
        </Link>
        <Link href="https://www.linkedin.com/in/fadil-ahmed/" target="_blank" className="flex flex-col items-center gap-2 group" data-cursor="Open">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-[var(--accent)] transition-colors duration-300">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span className="text-sm mono-label opacity-60 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all duration-300">LinkedIn</span>
        </Link>
        <Link href="https://www.instagram.com/failahmed_96/" target="_blank" className="flex flex-col items-center gap-2 group" data-cursor="Open">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-[var(--accent)] transition-colors duration-300">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
          </svg>
          <span className="text-sm mono-label opacity-60 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all duration-300">Instagram</span>
        </Link>
        <Link href="https://x.com/FadilAhmed_96" target="_blank" className="flex flex-col items-center gap-2 group" data-cursor="Open">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-[var(--accent)] transition-colors duration-300">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span className="text-sm mono-label opacity-60 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all duration-300">X</span>
        </Link>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-10">
        <div className="flex flex-col gap-1">
          <span className="mono-label text-[var(--accent)] opacity-70">Current Location</span>
          <span className="text-lg md:text-xl">Bengaluru, India</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="mono-label text-[var(--accent)] opacity-70">Permanent Address</span>
          <span className="text-lg md:text-xl">Chennai, India</span>
        </div>
      </div>
      <p className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent)]/50 bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-semibold tracking-wide w-fit transition-all duration-300 hover:bg-[var(--accent)]/20 hover:border-[var(--accent)] hover:scale-105 hover:shadow-[0_0_15px_rgba(229,9,20,0.3)]">✦ Ready to relocate anywhere</p>
      {/* Decorative SVG */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
        <svg width="400" height="400" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" fill="none" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}
