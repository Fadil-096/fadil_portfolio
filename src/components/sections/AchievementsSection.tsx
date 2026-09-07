"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Star, IdCard } from "lucide-react";
import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";

type ImageAchievement = {
  id: number;
  title: string;
  organization: string;
  date: string;
  images: string[];
  logo?: string;
  description?: string;
  bullets?: { label: string; text: string }[];
  cashPrize?: boolean;
  posts?: {
    linkedin?: string;
    x?: string;
    instagram?: string;
  };
  profileLink?: string;
};

type LinkAchievement = {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  link: string;
  logo?: string;
};

const ACHIEVEMENTS: (ImageAchievement | LinkAchievement)[] = [
  {
    id: 1,
    title: "Winner — Atos Srijan Hackathon 2026",
    organization: "Digital Workspace Theme",
    date: "Aug 9, 2026",
    images: [
      "/images/Add_On/WhatsApp Image 2026-09-01 at 2.04.06 PM.jpeg",
      "/images/Add_On/WhatsApp Image 2026-09-01 at 2.12.27 PM.jpeg",
    ],
    description: "An AI-powered QA system that replaces manual testing with intelligent, autonomous agents. Understands requirements, analyzes code, generates tests, executes them across real-world tools, predicts risk, and gates deployments.",
    cashPrize: true,
    posts: {
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7495861030430932993/",
      x: "https://x.com/FadilAhmed_96/status/2094708231813870022",
    },
  },
  {
    id: 2,
    title: "ACM SIGSOFT Vice-Chair",
    organization: "ACM MITB",
    date: "Nov 2025 — Nov 2026",
    description: "Hosted 7 successful corporate hackathons in collaboration with top MNCs as Vice Chair of the ACM MITB Team.",
    link: "https://mitb.acm.org/sigsoft",
    logo: "/images/Add_On/images.jpg"
  },
  {
    id: 5,
    title: "Operational Head — NSS MITB",
    organization: "National Service Scheme, MIT Bengaluru",
    date: "Feb 2025 — Feb 2026",
    images: [
      "/images/Add_On/1.png",
      "/images/Add_On/2.png",
      "/images/Add_On/3.png",
    ],
    logo: "/images/Add_On/nss.jpg",
    bullets: [
      { label: "Event Operations & Management", text: "Successfully conceptualized, planned, and executed 6 large-scale events, steering end-to-end logistics and operational tasks." },
      { label: "Team Collaboration & Leadership", text: "Cultivated strong teamwork dynamics and practical management skills by directly managing day-to-day operations and floor management." },
      { label: "Youth & Community Engagement", text: "Contributed as an active team member and facilitator during Summer Camp 2025, coordinating daily schedules and camp activities." },
    ],
    posts: {
      instagram: "https://www.instagram.com/p/DQ3eVpLksXg/?img_index=2",
    },
    profileLink: "/images/Add_On/4.png",
  }
];

function AchievementImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden border border-[var(--foreground)]/10 bg-black/20">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} photo ${i + 1}`}
          fill
          className={`object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="flex flex-col pt-12 md:pt-16 pb-20 md:pb-32 overflow-hidden w-full relative">
      <div className="px-6 md:px-10 mb-10 max-w-4xl">
        <h2 className="h2 font-bold mb-4 text-[var(--foreground)]">Achievements & Leadership<span className="text-[var(--accent)]">.</span></h2>
        <p className="font-mono text-[var(--accent)] uppercase tracking-[0.05em] opacity-80 text-base md:text-lg">Recognition, community, and impact<span className="text-[var(--foreground)]">.</span></p>
      </div>

      <div className="flex flex-col border-t border-[var(--foreground)]/10">
        {ACHIEVEMENTS.map((item) =>
          "images" in item ? (
            <div
              key={item.id}
              className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 p-6 md:px-10 md:py-10 border-b border-[var(--foreground)]/10"
            >
              <div className="flex flex-col gap-2 md:max-w-md shrink-0">
                <span className="mono-label opacity-50">{item.date}</span>
                <div className="flex items-center gap-3">
                  {item.logo && (
                    <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden border border-[var(--foreground)]/10 bg-white/5 shrink-0">
                      <Image src={item.logo} alt={`${item.organization} logo`} fill className="object-contain p-1.5" />
                    </div>
                  )}
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {item.title}
                  </h3>
                </div>
                <span className="text-sm opacity-70 font-mono">{item.organization}</span>
                {item.description && (
                  <p className="text-sm md:text-base opacity-60 leading-relaxed mt-2">
                    {item.description}
                  </p>
                )}
                {item.bullets && (
                  <ul className="flex flex-col gap-2 mt-2">
                    {item.bullets.map((b) => (
                      <li key={b.label} className="text-sm md:text-base opacity-60 leading-relaxed">
                        <span className="font-semibold opacity-90">{b.label}:</span> {b.text}
                      </li>
                    ))}
                  </ul>
                )}
                {item.cashPrize && (
                  <div className="flex items-center gap-2 mt-2">
                    <Star size={16} className="text-[var(--accent)] fill-[var(--accent)] shrink-0" />
                    <span className="text-sm font-mono opacity-80">Bagged Money & Goodies as Prizes</span>
                  </div>
                )}
                {(item.posts || item.profileLink) && (
                  <div className="flex items-center gap-5 mt-3 flex-wrap">
                    {item.posts?.linkedin && (
                      <a
                        href={item.posts.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View LinkedIn post"
                        className="flex items-center gap-2 opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-colors duration-300"
                      >
                        <FaLinkedin size={26} />
                        <span className="text-sm font-mono">LinkedIn</span>
                      </a>
                    )}
                    {item.posts?.x && (
                      <a
                        href={item.posts.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View X post"
                        className="flex items-center gap-2 opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-colors duration-300"
                      >
                        <FaXTwitter size={24} />
                        <span className="text-sm font-mono">X</span>
                      </a>
                    )}
                    {item.posts?.instagram && (
                      <a
                        href={item.posts.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Instagram post"
                        className="flex items-center gap-2 opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-colors duration-300"
                      >
                        <FaInstagram size={24} />
                        <span className="text-sm font-mono">Instagram</span>
                      </a>
                    )}
                    {item.profileLink && (
                      <a
                        href={item.profileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View NSS profile"
                        className="flex items-center gap-2 opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-colors duration-300"
                      >
                        <IdCard size={24} />
                        <span className="text-sm font-mono">NSS Profile</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="w-full md:flex-1">
                <AchievementImageCarousel images={item.images} alt={item.title} />
              </div>
            </div>
          ) : (
            <a
              key={item.id}
              href={item.link}
              target={item.link !== "#" ? "_blank" : undefined}
              rel={item.link !== "#" ? "noopener noreferrer" : undefined}
              className="group relative flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 md:px-10 md:py-8 border-b border-[var(--foreground)]/10 hover:bg-[var(--foreground)]/5 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 flex-1">
                <span className="mono-label opacity-50 w-16 md:w-36 shrink-0">{item.date}</span>
                <div className="flex items-center gap-4">
                  {item.logo && (
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border border-[var(--foreground)]/10 bg-white/5 shrink-0">
                      <Image src={item.logo} alt={`${item.organization} logo`} fill className="object-contain p-1.5" />
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl md:text-2xl font-semibold group-hover:text-[var(--accent)] transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-sm opacity-70 font-mono">{item.organization}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 md:w-1/3">
                <p className="text-sm opacity-60 md:max-w-xs">{item.description}</p>
                <ArrowUpRight size={24} className="opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-[var(--accent)] shrink-0" />
              </div>
            </a>
          )
        )}
      </div>
    </section>
  );
}
