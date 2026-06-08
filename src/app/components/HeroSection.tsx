import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { Github, Mail, Instagram, Twitter, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const roles = [
  "Frontend Developer",
  "UI/UX Enthusiast",
  "React Developer",
  "Problem Solver",
];

export function HeroSection() {
  const { t } = useTranslation();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = roles[roleIndex];
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        60,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        35,
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, deleting, roleIndex]);

  const socials = [
    { icon: Mail, href: "mailto:suparoek.sm@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/supxroek", label: "GitHub" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/___suparoek?igsh=MTFoc3BhOTJieHZwbQ==",
      label: "Instagram",
    },
    { icon: Twitter, href: "https://x.com/_supxroek", label: "X" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* red glow */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #e5173f 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #e5173f 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-block px-3 py-1 rounded-sm text-xs uppercase tracking-[0.2em] mb-6 border"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#e5173f",
                  borderColor: "rgba(229,23,63,0.3)",
                  background: "rgba(229,23,63,0.07)",
                }}
              >
                Hi, my name is
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-foreground leading-tight mb-4"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Suparoek
              <br />
              Manajit
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 mb-8"
              style={{ height: "2.5rem" }}
            >
              <span
                className="text-xl"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#e5173f",
                  fontWeight: 600,
                }}
              >
                {displayed}
                <span className="animate-pulse" style={{ color: "#e5173f" }}>
                  |
                </span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-muted-foreground max-w-xl mb-10 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem" }}
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm transition-all duration-200"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  background: "#e5173f",
                  color: "#fff",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#c0112f")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#e5173f")
                }
              >
                {t("hero.cta.viewProjects")} <ExternalLink size={14} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm transition-all duration-200 border"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#f0f0f0",
                  borderColor: "rgba(255,255,255,0.15)",
                  background: "transparent",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(229,23,63,0.5)";
                  e.currentTarget.style.color = "#e5173f";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.color = "#f0f0f0";
                }}
              >
                {t("hero.cta.contactMe")}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-4 mt-10"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-sm border transition-all duration-200"
                  style={{
                    borderColor: "rgba(255,255,255,0.1)",
                    color: "#6b6b6b",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(229,23,63,0.5)";
                    e.currentTarget.style.color = "#e5173f";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "#6b6b6b";
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {[
              { value: "1+", label: t("hero.stats.yearsCoding") },
              { value: "7+", label: t("hero.stats.projectsBuilt") },
              { value: "4+", label: t("hero.stats.techStacks") },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="w-36 p-5 rounded-sm border text-center"
                style={{
                  borderColor: "rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  className="text-3xl mb-1"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#e5173f",
                    fontWeight: 700,
                  }}
                >
                  {value}
                </div>
                <div
                  className="text-xs text-muted-foreground uppercase tracking-widest"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs text-muted-foreground uppercase tracking-widest"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {t("common.scroll")}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, #e5173f, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
