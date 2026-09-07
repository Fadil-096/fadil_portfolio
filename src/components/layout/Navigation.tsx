"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.3 5.3 0 0 0-1.5-3.78 4.9 4.9 0 0 0 .15-3.72s-1.2-.38-3.9 1.44a13.2 13.2 0 0 0-7 0C4.9 1.62 3.7 2 3.7 2a4.9 4.9 0 0 0 .15 3.72A5.3 5.3 0 0 0 2.3 9.5c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
  </svg>
);

const links = [
  { name: "Home", path: "#home" },
  { name: "Info", path: "#info" },
  { name: "Work", path: "#work" },
  { name: "Contact", path: "#contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const isHome = pathname === "/";
  const [quoteComplete, setQuoteComplete] = useState(false);
  const [taglineComplete, setTaglineComplete] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Prevent browser from restoring scroll position
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      // Force scroll to top on mount if no hash
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      } else {
        // SSR always renders "#home"; syncing the real hash here (post-hydration)
        // avoids a server/client mismatch that setting it during the initial render would cause.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveSection(window.location.hash);
      }
    }
  }, [pathname]);

  // Intersection Observer for scroll spying
  useEffect(() => {
    const observerOptions = {
      root: null,
      // Triggers when a section crosses the upper-middle part of the viewport
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Small timeout to ensure elements are rendered
    const timeoutId = setTimeout(() => {
      links.forEach((link) => {
        const element = document.querySelector(link.path);
        if (element) observer.observe(element);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // Zoom progress only; the actual scale/offset live in CSS (.hero-scale) so they
  // can respond to viewport width without a hydration-unsafe JS check.
  const heroProgressRaw = useTransform(scrollY, [0, 300], [1, 0]);
  const heroProgress = isHome ? heroProgressRaw : 0;

  return (
    <nav className="fixed top-0 left-0 w-full py-4 md:py-5 px-4 sm:px-6 md:px-10 flex flex-wrap justify-between items-start gap-y-2 z-50 pointer-events-none bg-[var(--background)] text-[var(--foreground)]">
      <motion.div
        className="min-w-0 pointer-events-auto"
        style={{ "--hero-p": heroProgress } as React.CSSProperties}
      >
        <div className="hero-scale flex flex-col items-start">
          <Link href="/" className="h3 font-sans font-bold hover-wipe whitespace-nowrap">
            Fadil Ahmed<span className="text-[var(--accent)]">.</span>
          </Link>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: { transition: { staggerChildren: 0.04 } }
            }}
            onAnimationComplete={() => setTaglineComplete(true)}
            className={cn(
              "flex flex-col items-start mt-0 opacity-80",
              taglineComplete ? "text-[var(--accent)] transition-colors duration-700" : "text-[var(--foreground)]"
            )}
          >
            <p className="font-mono tracking-widest text-[7px] sm:text-[8px] md:text-[10px] uppercase whitespace-nowrap">
              {"basically, I make data make sense.".split("").map((char, i) => (
                <motion.span
                  key={i}
                  className={char === "." ? "text-[var(--foreground)]" : undefined}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0 } }
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Center Quote (hidden on smaller screens to prevent overlap) */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 1 },
          visible: { transition: { staggerChildren: 0.04 } }
        }}
        onAnimationComplete={() => setQuoteComplete(true)}
        className={cn(
          "absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none hidden lg:block w-full max-w-lg mono-label text-[10px] md:text-xs",
          quoteComplete ? "text-[var(--accent)] transition-colors duration-700" : "text-[var(--foreground)]"
        )}
      >
        {[
          { text: "Math", white: true },
          { text: " is the recipe, " },
          { text: "Data", white: true },
          { text: " is the Ingredient, And a" },
          { text: "Data Scientist", white: true, breakBefore: true },
          { text: " is just a hungry chef trying to cook" },
        ].map((segment, segIndex) => (
          <span key={segIndex}>
            {segment.breakBefore && <br />}
            {segment.text.split("").map((char, i) => (
              <motion.span
                key={i}
                className={segment.white ? "text-[var(--foreground)]" : undefined}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0 } }
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.div>

      <div className="flex flex-col items-end gap-2 md:gap-3 pointer-events-auto mt-2 md:mt-0">
        {/* Social Icons Row (hidden on mobile for space) */}
        <div className="hidden md:flex items-center gap-6 opacity-80">
          <Link href="https://www.linkedin.com/in/fadil-ahmed/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors duration-300">
            <LinkedinIcon size={20} />
          </Link>
          <Link href="https://github.com/fadil-096/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors duration-300">
            <GithubIcon size={20} />
          </Link>
          <Link href="https://www.instagram.com/failahmed_96/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors duration-300">
            <InstagramIcon size={20} />
          </Link>
          <Link href="https://x.com/FadilAhmed_96" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors duration-300">
            <XIcon size={20} />
          </Link>
        </div>

        {/* Nav Links Row */}
        <div className="flex flex-row items-center gap-3 sm:gap-6 md:gap-8">
          {links.map((link) => {
            const isActive = activeSection === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setActiveSection(link.path)}
                className={cn(
                  // py/-my pair grows the touch target without changing layout height
                  "font-mono uppercase tracking-[0.05em] text-[10px] sm:text-xs md:text-sm relative block py-3 -my-3 transition-all duration-300",
                  isActive ? "text-[var(--accent)] scale-110 opacity-100" : "text-[var(--foreground)] opacity-60 hover:opacity-100"
                )}
              >
                {link.name}
                {/* Animated left-to-right underline */}
                <span
                  className={cn(
                    "absolute bottom-2 left-0 h-[1px] w-full bg-[var(--accent)] origin-left transition-transform duration-300 ease-out",
                    isActive ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* Availability Badge (hidden on very small screens) */}
        <Link 
          href="#contact"
          onClick={() => setActiveSection("#contact")}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--background)]/80 backdrop-blur-md mt-2 md:mt-3 animate-glow-breathe cursor-pointer hover:bg-[var(--accent)]/10 transition-colors duration-300"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
          </span>
          <span className="mono-label text-[8px] md:text-[9px] uppercase tracking-widest opacity-80 whitespace-nowrap text-[var(--foreground)]">
            Actively looking for internships and job opportunities
          </span>
        </Link>
      </div>
    </nav>
  );
}
