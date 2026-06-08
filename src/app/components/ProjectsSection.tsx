import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type Project = {
  title: string;
  description: string;
  longDesc: string;
  tags: string[];
  github?: string;
  demo?: string;
  accent: string;
  featured?: boolean;
  status: "Completed" | "In Progress" | "Archived";
  image: string;
  imageAlt: string;
};

const projects: Project[] = [
  {
    title: "Music Player App",
    description: "A sleek music player built with Java & Netbeans.",
    longDesc:
      "A desktop music player app built with Java and Netbeans. Features a simple and user-friendly interface with playback controls, playlist management, and song metadata display.",
    tags: ["Java", "Netbeans", "Desktop App", "UI/UX"],
    github: "https://github.com/supxroek",
    accent: "#6C63FF",
    featured: true,
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1720962158813-29b66b8e23e1?w=800&h=450&fit=crop&auto=format",
    imageAlt: "Music player app interface on screen",
  },
  {
    title: "Room Booking System",
    description: "Full-stack web app for booking meeting rooms.",
    longDesc:
      "A web application for booking meeting rooms with full database connectivity, API calls, a login system, user/admin management, and CRUD operations. Built with React, Tailwind CSS, and REST API.",
    tags: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "REST API"],
    github: "https://github.com/supxroek",
    demo: "#",
    accent: "#e5173f",
    featured: true,
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&auto=format",
    imageAlt: "Dashboard analytics and booking system UI",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio — the one you're looking at!",
    longDesc:
      "A fully responsive personal portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode aesthetics, and a modern monospace design system.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Motion"],
    github: "https://github.com/supxroek",
    accent: "#00C4CC",
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=450&fit=crop&auto=format",
    imageAlt: "HTML code on a monitor screen",
  },
  {
    title: "Flutter Mobile App",
    description: "Cross-platform mobile application with Dart.",
    longDesc:
      "A cross-platform mobile app built with Flutter and Dart. Integrates Firebase for authentication and real-time database, offering smooth animations and a native-feeling UI across iOS and Android.",
    tags: ["Flutter", "Dart", "Firebase", "Mobile"],
    github: "https://github.com/supxroek",
    accent: "#02569B",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1625838144804-300f3907c110?w=800&h=450&fit=crop&auto=format",
    imageAlt: "Mobile app development on computer monitor",
  },
];

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project;
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-sm border overflow-hidden flex flex-col transition-all duration-300"
      style={{
        borderColor: hovered ? `${project.accent}44` : "rgba(255,255,255,0.08)",
        background: hovered
          ? "rgba(255,255,255,0.03)"
          : "rgba(255,255,255,0.015)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* screenshot */}
      <div
        className="relative overflow-hidden"
        style={{ height: "180px", background: "#111" }}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: hovered ? "scale(1.05)" : "scale(1)",
            opacity: hovered ? 0.75 : 0.55,
          }}
        />
        {/* overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.95) 100%)`,
          }}
        />
        {/* top-right accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{
            background: `linear-gradient(90deg, ${project.accent}, transparent)`,
          }}
        />
        {/* badges over image */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          {project.featured && (
            <span
              className="text-xs px-2 py-0.5 rounded-sm"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: "rgba(229,23,63,0.85)",
                color: "#fff",
                letterSpacing: "0.05em",
                backdropFilter: "blur(4px)",
              }}
            >
              Featured
            </span>
          )}
          <span
            className="text-xs px-2 py-0.5 rounded-sm"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              background:
                project.status === "In Progress"
                  ? "rgba(246,176,0,0.8)"
                  : "rgba(0,196,124,0.8)",
              color: "#fff",
              letterSpacing: "0.05em",
              backdropFilter: "blur(4px)",
            }}
          >
            {project.status}
          </span>
        </div>
        {/* links over image */}
        <div className="absolute top-3 right-3 flex gap-2">
          {project.github && (
            <a
              href={project.github}
              className="w-7 h-7 flex items-center justify-center rounded-sm transition-all duration-200"
              style={{
                background: "rgba(0,0,0,0.6)",
                color: "#c0c0c0",
                backdropFilter: "blur(4px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.background = "rgba(0,0,0,0.85)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#c0c0c0";
                e.currentTarget.style.background = "rgba(0,0,0,0.6)";
              }}
              aria-label="GitHub"
            >
              <Github size={13} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              className="w-7 h-7 flex items-center justify-center rounded-sm transition-all duration-200"
              style={{
                background: "rgba(0,0,0,0.6)",
                color: "#c0c0c0",
                backdropFilter: "blur(4px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.background = "rgba(0,0,0,0.85)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#c0c0c0";
                e.currentTarget.style.background = "rgba(0,0,0,0.6)";
              }}
              aria-label="Live demo"
            >
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>

      {/* content */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="text-foreground mb-2"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "1rem",
            fontWeight: 700,
          }}
        >
          {project.title}
        </h3>
        <p
          className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {t(`projects.items.${index}.longDesc`, {
            defaultValue: project.longDesc,
          })}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag) => (
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
    </motion.div>
  );
}

export function ProjectsSection() {
  const { ref, inView } = useInView();
  const { t } = useTranslation();

  return (
    <section id="projects" ref={ref} className="relative py-24 lg:py-32">
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
            — Projects
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground leading-tight"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Things I've <span style={{ color: "#e5173f" }}>Built</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-sm text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t("projects.intro", {
              defaultValue:
                "A selection of projects that helped me grow my skills and ship real software.",
            })}
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://github.com/supxroek"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#6b6b6b",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#e5173f";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#6b6b6b";
            }}
          >
            See more on GitHub <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
