import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

type TimelineItem = {
  type: "education" | "work" | "award" | "intern";
  title: string;
  org: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
};

const timeline: TimelineItem[] = [
  {
    type: "intern",
    title: "Timesnow (Attendance & Shift Scheduling)",
    org: "Inverz Solutions Co., Ltd.",
    period: "Jan 2026 — Mar 2026",
    location: "Thailand",
    description:
      "Intern — Implemented bulk shift updates and pagination for employee roster management. Created cross-database SQL reports with LeaveHub to automate monthly attendance. Built offsite check-in using `navigator.geolocation` with middleware API-key validation. Troubleshot LINE Beacon webhooks and supported Rich Menu automated check-ins.",
    tags: [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "Node.js",
      "MySQL",
      "Web Application - CMS",
      "LIFF Application",
      "Geolocation",
      "Middleware",
    ],
  },
  {
    type: "intern",
    title: "LeaveHub (Intelligent Leave Management)",
    org: "Inverz Solutions Co., Ltd.",
    period: "Sep 2025 — Dec 2025",
    location: "Thailand",
    description:
      "Intern — Built leave-request and holiday-swap flows on LINE LIFF. Refactored backend into service/handler/controller layers for better maintainability. Integrated automated notifications via Gmail and LINE Messaging API (Flex Messages). Deployed LIFF on Firebase Hosting and implemented PII masking and timezone normalization.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "Node.js",
      "MySQL",
      "Firebase",
      "LIFF Application",
      "LINE Messaging API",
    ],
  },
  {
    type: "intern",
    title: "Qmanage (Queue & Personnel Management)",
    org: "Inverz Solutions Co., Ltd.",
    period: "Jun 2025 — Sep 2025",
    location: "Thailand",
    description:
      "Intern — Maintained an inherited CMS codebase and supported queue & personnel workflows. Developed Node.js REST APIs, CMS features for employee data and password recovery, and PowerShell deployment scripts. Optimized React rendering (`useMemo`, `useCallback`) and SQL queries for high-volume queue data. Integrated JWT/LINE token auth and LINE Flex Message notifications; hosted services on Google Cloud Run and Firebase Functions.",
    tags: [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "Web Application - CMS",
      "Node.js",
      "MySQL",
      "JWT",
      "Google Cloud Run",
      "Firebase",
      "LIFF Application",
    ],
  },
  {
    type: "education",
    title: "B.Eng., Computer Engineering & AI",
    org: "Mahanakorn University of Technology",
    period: "2022 — 2026",
    location: "Thailand",
    description:
      "B.Eng. in Computer Engineering and Artificial Intelligence — GPA: 3.02",
    tags: ["Computer Engineering", "Artificial Intelligence", "GPA 3.02"],
  },
  {
    type: "education",
    title: "Science & Mathematics",
    org: "Uttayansuksa Krabi School",
    period: "2019 — 2021",
    location: "Thailand",
    description: "Science and Mathematics program — GPA: 3.34",
    tags: ["Science & Math", "GPA 3.34"],
  },
];

const iconMap = {
  education: GraduationCap,
  work: Briefcase,
  intern: Briefcase,
  award: Award,
};

const colorMap = {
  education: "#6C63FF",
  work: "#e5173f",
  intern: "#e5173f",
  award: "#F6B000",
};

export function ExperienceSection() {
  const { ref, inView } = useInView();
  const { t } = useTranslation();

  return (
    <section id="experience" ref={ref} className="relative py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 mb-2">
        <div
          className="h-px"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span
            className="text-xs uppercase tracking-[0.25em]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#e5173f",
            }}
          >
            — Experience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-foreground leading-tight mb-16"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Experience &amp; <span style={{ color: "#e5173f" }}>Education</span>
        </motion.h2>

        <div className="relative">
          {/* vertical line */}
          <div
            className="absolute left-[19px] lg:left-1/2 top-0 bottom-0 w-px"
            style={{
              background: "rgba(255,255,255,0.07)",
              transform: "translateX(-0.5px)",
            }}
          />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const Icon = iconMap[item.type];
              const accent = colorMap[item.type];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={`${item.title}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`relative flex flex-col lg:flex-row gap-8 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* card */}
                  <div
                    className={`lg:w-[calc(50%-2.5rem)] ml-12 lg:ml-0 ${isLeft ? "lg:text-right" : ""}`}
                  >
                    <div
                      className="p-6 rounded-sm border transition-all duration-300 group cursor-default"
                      style={{
                        borderColor: "rgba(255,255,255,0.08)",
                        background: "rgba(255,255,255,0.02)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${accent}44`;
                        e.currentTarget.style.background = `${accent}08`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.08)";
                        e.currentTarget.style.background =
                          "rgba(255,255,255,0.02)";
                      }}
                    >
                      {/* top bar */}
                      <div
                        className={`flex items-center gap-2 mb-3 flex-wrap ${isLeft ? "lg:justify-end" : ""}`}
                      >
                        <span
                          className="text-xs px-2 py-0.5 rounded-sm"
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            background: `${accent}18`,
                            color: accent,
                            letterSpacing: "0.05em",
                          }}
                        >
                          {item.type.charAt(0).toUpperCase() +
                            item.type.slice(1)}
                        </span>
                        <span
                          className="text-xs text-muted-foreground"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {item.period}
                        </span>
                      </div>

                      <h3
                        className="text-foreground mb-1"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.95rem",
                          fontWeight: 700,
                        }}
                      >
                        {item.title}
                      </h3>
                      <div
                        className={`flex items-center gap-2 mb-4 flex-wrap ${isLeft ? "lg:justify-end" : ""}`}
                      >
                        <span
                          className="text-sm"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            color: accent,
                            fontWeight: 500,
                          }}
                        >
                          {item.org}
                        </span>
                        <span
                          className="text-xs text-muted-foreground"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          · {item.location}
                        </span>
                      </div>
                      <p
                        className="text-muted-foreground text-sm leading-relaxed mb-4"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {t(`experience.timeline.${i}.description`, {
                          defaultValue: item.description,
                        })}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 ${isLeft ? "lg:justify-end" : ""}`}
                      >
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-sm"
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              background: "rgba(255,255,255,0.05)",
                              color: "#6b6b6b",
                              border: "1px solid rgba(255,255,255,0.06)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* center dot */}
                  <div className="absolute left-0 lg:left-1/2 top-6 lg:-translate-x-1/2 flex items-center justify-center">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center border z-10"
                      style={{
                        background: "#0a0a0a",
                        borderColor: `${accent}55`,
                        boxShadow: `0 0 12px ${accent}22`,
                      }}
                    >
                      <Icon size={16} style={{ color: accent }} />
                    </div>
                  </div>

                  {/* spacer for opposite side */}
                  <div className="hidden lg:block lg:w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
