"use client";

import { useEffect, useState } from "react";
import { Database, PieChart } from "lucide-react";
import { SiPython, SiPostgresql, SiSnowflake, SiApacheairflow, SiDocker, SiStreamlit, SiOllama } from "react-icons/si";
import { FaAws } from "react-icons/fa6";

const projects = [
  {
    name: "E-Commerce Customer Shopping Behavior Analysis",
    tools: [
      { label: "Python", Icon: SiPython },
      { label: "PostgreSQL", Icon: SiPostgresql },
      { label: "SQL", Icon: Database },
      { label: "Power BI", Icon: PieChart },
    ],
    desc: "End-to-end retail analytics on 3,900+ e-commerce transactions — data cleaning, SQL business queries, and statistical modeling behind an interactive Power BI dashboard uncovering what drives customer loyalty and subscription behavior.",
    techList: ["Python", "SQL (PostgreSQL)", "Power BI"],
    link: "https://github.com/Fadil-096/E-Commerece_Customer_Shopping_Behavior_Data_Analysis",
    images: ["/images/Add_On/Dashboard_Final.png"],
  },
  {
    name: "Food-Tech AI Data Engineering",
    tools: [
      { label: "Snowflake", Icon: SiSnowflake },
      { label: "Airflow", Icon: SiApacheairflow },
      { label: "Docker", Icon: SiDocker },
      { label: "Python", Icon: SiPython },
      { label: "Amazon S3", Icon: FaAws },
      { label: "PostgreSQL", Icon: SiPostgresql },
      { label: "Ollama", Icon: SiOllama },
      { label: "Streamlit", Icon: SiStreamlit },
    ],
    desc: "An end-to-end ELT pipeline processing 10 million food-delivery orders — raw data lands in Snowflake via S3 and transforms through version-controlled dbt models, orchestrated incrementally with Airflow. A local LLM layer via Ollama enriches customer reviews, powers conversational search, and enables natural-language querying of the warehouse, all without external APIs.",
    techList: ["Snowflake", "dbt", "Airflow", "Docker", "Ollama", "Amazon S3", "PostgreSQL", "Streamlit", "Python"],
    link: "https://github.com/Fadil-096/Food-Tech_AI_Data_Engineering",
    images: [
      "/images/Add_On/Top 10 cities by GMV.png",
      "/images/Are delivery complaints and food quality complaints coming from the same customers, or different ones .png",
      "/images/Add_On/Airflow_Output.png",
      "/images/Add_On/Docker.png",
    ],
  },
];

function ProjectImagePreview({ images, alt }: { images: string[]; alt: string }) {
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
        <img
          key={src}
          src={src}
          alt={`${alt} preview ${i + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="flex flex-col pt-20 md:pt-32 pb-12 md:pb-20 relative">
      <div>
        <h2 className="h1 font-bold mb-4 text-[var(--foreground)]">Selected Work<span className="text-[var(--accent)]">.</span></h2>
        <p className="font-mono mb-10 md:mb-20 uppercase tracking-[0.05em] opacity-80 text-sm sm:text-base md:text-lg text-[var(--accent)]">Showcase of projects, pipelines, and models<span className="text-[var(--foreground)]">.</span></p>
      </div>

      <div className="flex flex-col border-t border-[var(--foreground)]/10">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link ?? "#"}
            target={project.link ? "_blank" : undefined}
            rel={project.link ? "noopener noreferrer" : undefined}
            className="group py-12 border-b border-[var(--foreground)]/10 flex flex-col md:flex-row md:items-center gap-8 md:gap-12 cursor-pointer"
            data-cursor="View"
          >
            <div className="flex flex-col gap-3 md:max-w-2xl shrink-0">
              <h3 className="text-2xl md:text-4xl font-medium transition-transform duration-500 group-hover:translate-x-6 group-hover:text-[var(--accent)] z-10">
                {project.name}
              </h3>
              {project.desc && (
                <p className="text-sm sm:text-base md:text-lg opacity-60 leading-relaxed z-10">
                  {project.desc}
                </p>
              )}
              {project.techList && (
                <div className="flex flex-wrap gap-2 z-10">
                  {project.techList.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs uppercase tracking-[0.05em] px-3 py-1 rounded-full border border-[var(--accent)]/40 text-[var(--accent)] opacity-90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex items-center gap-3 mt-1">
                {project.tools.map(({ label, Icon }) => (
                  <span
                    key={label}
                    title={label}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--foreground)]/15 opacity-70 group-hover:opacity-100 group-hover:border-[var(--accent)]/40 group-hover:text-[var(--accent)] transition-colors duration-300"
                  >
                    <Icon size={20} />
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full md:flex-1">
              <ProjectImagePreview images={project.images} alt={project.name} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
