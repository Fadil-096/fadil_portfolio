"use client";

import { motion } from "framer-motion";
import { Database, PieChart, BarChart3 } from "lucide-react";
import {
  SiPython,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiDatabricks,
  SiSnowflake,
  SiApacheairflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiDocker,
  SiGithub,
  SiGit,
} from "react-icons/si";
import { FaAws, FaFileExcel } from "react-icons/fa6";

type IconComponent = React.ComponentType<{ size?: number; className?: string }>;

type Tool = {
  name: string;
  Icons?: IconComponent[];
  mono?: string;
};

const CATEGORIES: { category: string; tools: Tool[] }[] = [
  {
    category: "Programming & Database Languages",
    tools: [
      { name: "Python", Icons: [SiPython] },
      { name: "SQL", Icons: [Database] },
      { name: "HTML5/CSS3", Icons: [SiHtml5, SiCss] },
      { name: "JavaScript", Icons: [SiJavascript] },
    ],
  },
  {
    category: "Data Platforms & Storage",
    tools: [
      { name: "Databricks", Icons: [SiDatabricks] },
      { name: "Snowflake", Icons: [SiSnowflake] },
    ],
  },
  {
    category: "Business Intelligence & Visualization",
    tools: [
      { name: "Power BI", Icons: [PieChart] },
      { name: "Tableau", Icons: [BarChart3] },
      { name: "Excel", Icons: [FaFileExcel] },
    ],
  },
  {
    category: "Data & Analytics",
    tools: [
      { name: "Pandas", Icons: [SiPandas] },
      { name: "NumPy", Icons: [SiNumpy] },
      { name: "Matplotlib", mono: "mpl" },
      { name: "Seaborn", mono: "sns" },
      { name: "Scikit-learn", Icons: [SiScikitlearn] },
    ],
  },
  {
    category: "Data Engineering & Orchestration",
    tools: [
      { name: "Apache Airflow", Icons: [SiApacheairflow] },
      { name: "dbt", mono: "dbt" },
    ],
  },
  {
    category: "ML/DL Frameworks",
    tools: [
      { name: "TensorFlow", Icons: [SiTensorflow] },
      { name: "PyTorch", Icons: [SiPytorch] },
    ],
  },
  {
    category: "DevOps & Cloud",
    tools: [
      { name: "AWS", Icons: [FaAws] },
      { name: "Docker", Icons: [SiDocker] },
      { name: "GitHub", Icons: [SiGithub] },
      { name: "Git", Icons: [SiGit] },
    ],
  },
];

function Monogram({ label }: { label: string }) {
  return (
    <span className="flex items-center justify-center w-4 h-4 rounded-[4px] border border-current text-[8px] font-mono font-bold leading-none shrink-0">
      {label}
    </span>
  );
}

export default function InfoSection() {
  return (
    <section id="info" className="flex flex-col pt-32 pb-20">
      <div>
        <h2 className="h1 font-bold mb-4 text-[var(--foreground)]">Info<span className="text-[var(--accent)]">.</span></h2>
        <p className="font-mono mb-20 uppercase tracking-[0.05em] opacity-80 text-base md:text-lg text-[var(--accent)]">Background, skills, and tools<span className="text-[var(--foreground)]">.</span></p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0"
      >
        <table className="w-full min-w-[720px] border-collapse">
          <thead>
            <tr className="border-b border-[var(--foreground)]/20">
              <th className="font-mono text-base md:text-lg text-left uppercase tracking-widest text-[var(--accent)] opacity-80 pb-4 pr-6 font-normal w-[280px]">
                Category
              </th>
              <th className="font-mono text-base md:text-lg text-left uppercase tracking-widest text-[var(--accent)] opacity-80 pb-4 font-normal">
                Tools
              </th>
            </tr>
          </thead>
          <tbody>
            {CATEGORIES.map((cat) => (
              <tr key={cat.category} className="border-b border-[var(--foreground)]/10">
                <td className="py-6 pr-6 align-top text-lg md:text-xl font-medium">
                  {cat.category}
                </td>
                <td className="py-6 align-top">
                  <div className="flex flex-wrap gap-3">
                    {cat.tools.map((tool) => (
                      <span
                        key={tool.name}
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--foreground)]/15 px-3 py-1.5 text-sm opacity-80 hover:opacity-100 hover:border-[var(--accent)]/50 hover:text-[var(--accent)] transition-colors duration-300"
                      >
                        {tool.Icons ? (
                          <span className="flex items-center gap-1">
                            {tool.Icons.map((Icon, i) => (
                              <Icon key={i} size={16} className="shrink-0" />
                            ))}
                          </span>
                        ) : (
                          <Monogram label={tool.mono!} />
                        )}
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
