import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

type Category = "All" | "Languages" | "Frameworks" | "Databases" | "Tools";

const skills: {
  name: string;
  category: Exclude<Category, "All">;
  level: number;
  color: string;
}[] = [
  // Languages
  { name: "HTML5", category: "Languages", level: 95, color: "#E34F26" },
  { name: "CSS3", category: "Languages", level: 90, color: "#1572B6" },
  { name: "JavaScript", category: "Languages", level: 80, color: "#F7DF1E" },
  { name: "TypeScript", category: "Languages", level: 75, color: "#3178C6" },
  { name: "SQL", category: "Languages", level: 80, color: "#F29111" },
  { name: "C/C++", category: "Languages", level: 65, color: "#00599C" },
  { name: "C#", category: "Languages", level: 70, color: "#9B4F96" },
  // Frameworks
  { name: "React", category: "Frameworks", level: 90, color: "#61DAFB" },
  { name: "Next.js", category: "Frameworks", level: 80, color: "#ffffff" },
  { name: "Tailwind CSS", category: "Frameworks", level: 95, color: "#06B6D4" },
  { name: "Vite", category: "Frameworks", level: 95, color: "#646CFF" },
  { name: "Node.js", category: "Frameworks", level: 96, color: "#339933" },
  // Databases
  { name: "PostgreSQL", category: "Databases", level: 75, color: "#4169E1" },
  { name: "MySQL", category: "Databases", level: 85, color: "#4479A1" },
  { name: "MongoDB", category: "Databases", level: 70, color: "#47A248" },
  { name: "Oracle", category: "Databases", level: 75, color: "#F80000" },
  {
    name: "Firebase Firestore",
    category: "Databases",
    level: 70,
    color: "#FFCA28",
  },
  { name: "Google Cloud", category: "Databases", level: 65, color: "#4285F4" },
  { name: "AWS RDS", category: "Databases", level: 60, color: "#FF9900" },
  // Tools
  { name: "Git", category: "Tools", level: 95, color: "#F05032" },
  { name: "Docker", category: "Tools", level: 85, color: "#2496ED" },
  { name: "Figma", category: "Tools", level: 95, color: "#F24E1E" },
  { name: "Canva", category: "Tools", level: 98, color: "#00C4CC" },
  { name: "VS Code", category: "Tools", level: 92, color: "#007ACC" },
  { name: "Postman", category: "Tools", level: 89, color: "#FF6C37" },
  { name: "SonarQube", category: "Tools", level: 70, color: "#FFAE6E" },
  { name: "Notion", category: "Tools", level: 95, color: "#FFDA62" },
  { name: "Discord", category: "Tools", level: 98, color: "#7289DA" },
];

const categories: Category[] = [
  "All",
  "Languages",
  "Frameworks",
  "Databases",
  "Tools",
];

export function SkillsSection() {
  const { ref, inView } = useInView();
  const { t } = useTranslation();
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? skills : skills.filter((s) => s.category === active);

  // Responsive progressive reveal sizes by breakpoint:
  // - mobile (<640): show 6, increment 6
  // - tablet (>=640 && <1024): show 12, increment 12
  // - desktop (>=1024): show 20, increment 20
  const getChunkSizes = (w: number) => {
    if (w >= 1024) return { initial: 20, increment: 20 };
    if (w >= 640) return { initial: 12, increment: 12 };
    return { initial: 6, increment: 6 };
  };

  const initialWidth = typeof window !== "undefined" ? window.innerWidth : 1024;
  const [chunk, setChunk] = useState(getChunkSizes(initialWidth));

  const [visibleCount, setVisibleCount] = useState<number>(() =>
    Math.min(getChunkSizes(initialWidth).initial, filtered.length),
  );

  useEffect(() => {
    const onResize = () => {
      const sizes = getChunkSizes(window.innerWidth);
      setChunk(sizes);
      // ensure visibleCount is at least the initial for the current breakpoint
      setVisibleCount((prev) =>
        Math.min(Math.max(prev, sizes.initial), filtered.length),
      );
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [filtered.length]);

  const displayed = filtered.slice(0, visibleCount);

  const handleMore = () => {
    if (visibleCount < filtered.length) {
      setVisibleCount((prev) =>
        Math.min(prev + chunk.increment, filtered.length),
      );
    } else {
      // collapse back to the current breakpoint initial and scroll to section top
      setVisibleCount(Math.min(chunk.initial, filtered.length));
      const el = (ref as any)?.current as HTMLElement | null;
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section id="skills" ref={ref} className="relative py-24 lg:py-32">
      {/* divider */}
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
            — Skills
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
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
            My <span style={{ color: "#e5173f" }}>Tech Stack</span>
          </motion.h2>

          {/* filter tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-4 py-1.5 text-xs rounded-sm border transition-all duration-200 cursor-pointer"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.05em",
                  borderColor:
                    active === cat ? "#e5173f" : "rgba(255,255,255,0.1)",
                  background:
                    active === cat ? "rgba(229,23,63,0.12)" : "transparent",
                  color: active === cat ? "#e5173f" : "#6b6b6b",
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {displayed.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="p-4 rounded-sm border group"
              style={{
                borderColor: "rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-sm text-foreground"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 600,
                  }}
                >
                  {skill.name}
                </span>
                <span
                  className="text-xs"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#6b6b6b",
                  }}
                >
                  {skill.level}%
                </span>
              </div>
              <div
                className="h-1 rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + i * 0.03,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                  }}
                />
              </div>
              <div className="mt-2">
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#3a3a3a",
                  }}
                >
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* show more / collapse button (mobile-only visible) */}
        {filtered.length > chunk.initial && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleMore}
              className="px-5 py-2 text-sm rounded-sm border transition-all duration-200"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                borderColor: "rgba(255,255,255,0.08)",
                background: "transparent",
                color: "#e5173f",
              }}
            >
              {visibleCount < filtered.length ? "Show more" : "Show less"}
            </button>
          </div>
        )}

        {/* description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted-foreground mt-10 max-w-xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {t("skills.closing", {
            defaultValue:
              "I like to take responsibility to craft aesthetic user experiences using modern frontend architecture. Always learning, always building.",
          })}
        </motion.p>
      </div>
    </section>
  );
}
