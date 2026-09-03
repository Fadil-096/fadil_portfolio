"use client";

import { motion } from "framer-motion";

const facts = [
  "I'm a Multi-Linguistic, I know to speak 6 Languages (English, Tamil, Telugu, Hindi, Urdu, Kannada). Currently 2 foreign languages incoming (German & Arabic).",
  "I Love to solve cross-word puzzles.",
];

export default function AboutMeSection() {
  return (
    <section id="about-me" className="flex flex-col pt-32 pb-20">
      <div>
        <h2 className="h1 font-bold mb-4 text-[var(--foreground)]">
          About Me<span className="text-[var(--accent)]">.</span>
        </h2>
        <p className="font-mono mb-20 uppercase tracking-[0.05em] opacity-80 text-base md:text-lg text-[var(--accent)]">
          A little bit more about me<span className="text-[var(--foreground)]">.</span>
        </p>
      </div>

      <div>
        <h3 className="text-3xl mb-8 font-medium">
          Interesting facts about me
        </h3>
        <div className="flex flex-col gap-6 max-w-2xl">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 border-b border-[var(--foreground)]/10 pb-6"
            >
              <span className="mono-label text-[var(--accent)] w-8 opacity-60 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-lg md:text-xl leading-relaxed">
                {fact}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
