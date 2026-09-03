"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { X, ArrowRight } from "lucide-react";

type Certification = {
  id: number;
  name: string;
  image: string;
  link: string;
  desc: string;
  domain: string;
};

const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    name: "Applied Text Mining In Python",
    image: "/images/certificates/Applied_Text_Mining_In_Python.png",
    link: "https://coursera.org/verify/ZTXKB8Q6HN6E",
    desc: "Verified certification for Applied Text Mining In Python.",
    domain: "Data Science & Analytics"
  },
  {
    id: 2,
    name: "AWS Fundamentals",
    image: "/images/certificates/AWS_Fundamentals.png",
    link: "https://coursera.org/verify/specialization/1D4TO4SOWXQI",
    desc: "Verified certification for AWS Fundamentals.",
    domain: "Cloud & Infrastructure"
  },
  {
    id: 3,
    name: "Databases",
    image: "/images/certificates/Databases.png",
    link: "https://coursera.org/verify/ZNHRVGI9DQMA",
    desc: "Verified certification for Databases.",
    domain: "Data Engineering & Databases"
  },
  {
    id: 4,
    name: "Google Data Analytics",
    image: "/images/certificates/Google_Data_Analytics.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/WNO8Z2FOMRCI",
    desc: "Verified certification for Google Data Analytics.",
    domain: "Data Science & Analytics"
  },
  {
    id: 5,
    name: "Java and Object-Oriented Programming",
    image: "/images/certificates/Java_and_Object-Oriented_Programming.png",
    link: "https://coursera.org/verify/T07MY4TS9QB4",
    desc: "Verified certification for Java and Object-Oriented Programming.",
    domain: "Programming"
  },
  {
    id: 6,
    name: "Ordered Data Structures",
    image: "/images/certificates/Ordered_Data_Structures.png",
    link: "https://coursera.org/verify/OF833TR3D3UB",
    desc: "Verified certification for Ordered Data Structures.",
    domain: "Data Engineering & Databases"
  },
  {
    id: 7,
    name: "Preparing Data for Analysis with Microsoft Excel",
    image: "/images/certificates/Preparing_Data_for_Analysis_with_Microsoft_Excel.png",
    link: "https://coursera.org/verify/M93YBGBTWUDX",
    desc: "Verified certification for Preparing Data for Analysis with Microsoft Excel.",
    domain: "Data Science & Analytics"
  },
  {
    id: 8,
    name: "Python",
    image: "/images/certificates/Python.png",
    link: "https://coursera.org/verify/95Q76VEYF55T",
    desc: "Verified certification for Python.",
    domain: "Programming"
  },
  {
    id: 9,
    name: "Vector Databases",
    image: "/images/certificates/Vector_Databases.png",
    link: "https://coursera.org/verify/YUFZVEVJTYVE",
    desc: "Verified certification for Vector Databases.",
    domain: "Data Engineering & Databases"
  }
];

const DOMAINS = Array.from(new Set(CERTIFICATIONS.map(c => c.domain)));

function CertificationsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-[var(--background)]/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 z-0 bg-black/40" 
        onClick={onClose}
      />
      <div 
        className="relative z-10 w-full max-w-6xl max-h-full overflow-y-auto overscroll-contain bg-[var(--background)] border border-[var(--foreground)]/10 rounded-2xl shadow-2xl custom-scrollbar flex flex-col"
        data-lenis-prevent="true"
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 border-b border-[var(--foreground)]/10 bg-[var(--background)]/80 backdrop-blur-xl">
          <div>
            <h3 className="text-xl md:text-2xl font-bold">All Certifications</h3>
            <p className="text-xs md:text-sm opacity-60 font-mono mt-1">Categorized by Domain</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[var(--foreground)]/10 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 flex flex-col gap-12">
          {DOMAINS.map(domain => {
            const domainCerts = CERTIFICATIONS.filter(c => c.domain === domain);
            return (
              <div key={domain} className="flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <h4 className="text-lg md:text-xl font-bold tracking-tight text-[var(--accent)]">{domain}</h4>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-[var(--accent)]/30 to-transparent"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {domainCerts.map(cert => (
                    <a 
                      key={cert.id}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col p-4 rounded-xl border border-[var(--foreground)]/5 hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/5 transition-all duration-300"
                    >
                      <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-[var(--foreground)]/10 mb-4 bg-black/20">
                        <Image
                          src={cert.image}
                          alt={cert.name}
                          fill
                          className="object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                        />
                      </div>
                      <h5 className="font-semibold text-sm md:text-base leading-tight group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                        {cert.name}
                      </h5>
                      <div className="mt-auto pt-3 flex items-center justify-between">
                        <span className="text-[10px] font-mono opacity-50">Verified Credential</span>
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--accent)]" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CertificationCardItem({ cert, isCenter }: { cert: Certification, isCenter: boolean }) {
  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center shrink-0 w-[200px] md:w-[260px] lg:w-[300px] mx-6 lg:mx-10 transition-all duration-500 ease-out",
        isCenter ? "scale-110 md:scale-125 opacity-100 z-10" : "scale-90 opacity-40 z-0"
      )}
    >
      <div className={cn(
        "transition-all duration-500 mb-3 md:mb-5 text-center h-6 md:h-8 px-2 flex items-end",
        isCenter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      )}>
        <h4 className={cn(
          "text-xs md:text-sm font-semibold tracking-tight",
          isCenter ? "text-[var(--accent)]" : "text-[var(--foreground)]"
        )}>{cert.name}</h4>
      </div>

      <a 
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "relative block w-full aspect-[16/10] rounded-lg overflow-hidden border transition-all duration-500 bg-[var(--background)] cursor-pointer hover:scale-[1.02]",
          isCenter ? "border-[var(--accent)] shadow-[0_0_15px_rgba(229,9,20,0.25)]" : "border-[var(--foreground)]/10 shadow-none"
        )}
      >
        <Image src={cert.image} alt={cert.name} fill className="object-cover opacity-90" />
      </a>

      <div className={cn(
        "transition-all duration-500 mt-4 md:mt-5 text-center max-w-[280px] h-16 md:h-20 px-2",
        isCenter ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      )}>
        <p className="text-[10px] md:text-xs opacity-70 leading-relaxed font-mono">{cert.desc}</p>
      </div>
    </div>
  );
}

export default function CertificationsSection() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate the array 4 times to create a perfect seamless infinite loop.
  const duplicatedCerts = [...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS];

  // High-precision center detection
  useEffect(() => {
    let animationFrameId: number;
    
    const checkCenter = () => {
      if (!containerRef.current) return;
      const cards = containerRef.current.children;
      const windowCenter = window.innerWidth / 2;
      
      let closestIndex = -1;
      let minDistance = Infinity;

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(windowCenter - cardCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      }

      setActiveIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
      animationFrameId = requestAnimationFrame(checkCenter);
    };

    animationFrameId = requestAnimationFrame(checkCenter);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      <section id="certifications" className="flex flex-col pt-16 pb-12 overflow-hidden w-full relative">
        <div className="px-6 md:px-10 mb-10 max-w-4xl flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="h2 font-bold mb-4 text-[var(--foreground)]">Certifications<span className="text-[var(--accent)]">.</span></h2>
            <p className="font-mono text-[var(--accent)] uppercase tracking-[0.05em] opacity-80 text-base md:text-lg">Continuous learning and professional growth<span className="text-[var(--foreground)]">.</span></p>
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--foreground)]/20 hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/10 text-sm font-medium transition-all duration-300 shrink-0 shadow-sm"
          >
            View All Certificates
            <ArrowRight size={16} className="text-[var(--accent)] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="relative w-full py-6">
          {/* Subtle center marker lines for aesthetics (optional focus crosshairs) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-1/4 bg-gradient-to-b from-transparent via-[var(--accent)]/20 to-transparent pointer-events-none z-0 hidden md:block" />

          <div 
            ref={containerRef}
            className="animate-marquee flex items-center will-change-transform"
          >
            {duplicatedCerts.map((cert, i) => (
              <CertificationCardItem key={`${cert.id}-${i}`} cert={cert} isCenter={activeIndex === i} />
            ))}
          </div>
        </div>
      </section>

      <CertificationsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
