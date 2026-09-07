"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

const education = [
  {
    degree: "B.Tech Computer Science Engineering (Data Science)",
    level: "UG",
    institution: "Manipal Institute Of Technology (MAHE), Bengaluru",
    location: "Bengaluru, Karnataka — 560064, India",
    logo: "/images/mit-logo.png",
    duration: "July 2023 — April 2027",
  },
  {
    degree: "Kendriya Vidyalaya Sangathan (CBSE)",
    level: "Schooling",
    institution: "Kendriya Vidyalaya Anna Nagar, Chennai",
    location: "Chennai, Tamil Nadu — 600040, India",
    logo: "/images/KV.jpg",
    duration: "June 2011 — March 2023",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="flex flex-col pt-20 md:pt-32 pb-12 md:pb-20">
      <div>
        <h2 className="h1 font-bold mb-4 text-[var(--foreground)]">
          Education<span className="text-[var(--accent)]">.</span>
        </h2>
        <p className="font-mono mb-10 md:mb-20 uppercase tracking-[0.05em] opacity-80 text-base md:text-lg text-[var(--accent)]">
          Academic background<span className="text-[var(--foreground)]">.</span>
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="group border-b border-[var(--foreground)]/10 pb-10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border border-[var(--foreground)]/10 bg-white/5 shrink-0">
                <Image
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-3">
                  <h3 className="text-lg lg:text-2xl font-medium lg:whitespace-nowrap group-hover:text-[var(--accent)] transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <span className="font-mono text-sm uppercase tracking-[0.05em] px-3 py-1 rounded-full border border-[var(--accent)]/40 text-[var(--accent)] opacity-90 shrink-0">
                    {edu.level}
                  </span>
                </div>
                <span className="text-lg md:text-xl opacity-80">
                  {edu.institution}
                </span>
                <span className="mono-label text-[var(--accent)] opacity-70 text-sm">
                  {edu.duration}
                </span>
                <span className="mono-label opacity-50 text-sm inline-flex items-center gap-1.5">
                  <MapPin size={14} className="shrink-0" />
                  {edu.location}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
