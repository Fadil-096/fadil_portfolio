import { ArrowUpRight } from "lucide-react";
import HeroImage from "@/components/ui/HeroImage";
import WorkSection from "@/components/sections/WorkSection";
import InfoSection from "@/components/sections/InfoSection";
import AboutMeSection from "@/components/sections/AboutMeSection";
import EducationSection from "@/components/sections/EducationSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col relative">
      {/* 5.1 Hero */}
      <section id="home" className="pt-0 pb-[10vh] flex flex-col md:flex-row justify-between items-start gap-8 lg:gap-16 mt-4 md:mt-10">
        <div className="flex flex-col gap-6 flex-1 w-full pt-[4vh] md:pt-[15vh]">
          {/* Reserves the space the Navigation-rendered name zooms into; the zoom is
              much smaller on phones, so the spacer shrinks to match. */}
          <div className="h-[3vh] md:h-[12vh] w-full" aria-hidden="true"></div>
          <p className="text-base sm:text-lg md:text-2xl leading-relaxed">
            I&apos;m a Computer Science undergraduate at Manipal Institute of Technology, Bengaluru, specializing in data analytics, machine learning, and statistical analysis. I&apos;m passionate about transforming raw data into meaningful, actionable insights that drive informed decision-making. With hands-on experience in data visualization, predictive modeling, and research-oriented problem solving, I bring a data-driven approach to every challenge I take on.
          </p>
          
          <a 
            href="/Fadil_Ahmed_CV.pdf" 
            target="_blank"
            rel="noopener noreferrer" 
            className="mt-6 flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 w-fit rounded-full bg-[var(--foreground)] text-[var(--background)] font-bold text-base sm:text-lg hover:bg-[var(--accent)] hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(229,9,20,0.4)] transition-all duration-300 group"
          >
            View My CV
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
        
        {/* Profile Image with Parallax & Duotone */}
        <HeroImage />
      </section>

      {/* Full Sections */}
      <EducationSection />
      <InfoSection />
      <WorkSection />
      <AchievementsSection />
      <AboutMeSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
}
