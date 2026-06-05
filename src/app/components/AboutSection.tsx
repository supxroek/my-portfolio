import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Code2, Cpu, Layers, Zap } from "lucide-react";

export function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-xs uppercase tracking-[0.25em]" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#e5173f" }}>
            — About
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2
              className="text-foreground mb-8 leading-tight"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              Building the web,<br />
              <span style={{ color: "#e5173f" }}>one pixel</span> at a time.
            </h2>
            <div className="space-y-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p className="text-muted-foreground leading-relaxed">
                I'm a frontend developer who cares deeply about the user experience. I love turning complex problems into elegant, intuitive interfaces — the kind that feel fast, clean, and effortless to use.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My stack spans from low-level C/C++ to modern React applications. I enjoy working across the full spectrum — whether it's crafting pixel-perfect UIs or architecting backend systems with Node.js.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Outside of work I'm constantly experimenting with new tools, contributing to projects, and trying to push the boundaries of what a great user experience can look like.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm border transition-all duration-200"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  borderColor: "#e5173f",
                  color: "#e5173f",
                  background: "transparent",
                  letterSpacing: "0.05em",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#e5173f"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#e5173f"; }}
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Trait cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Code2, title: "Clean Code", desc: "Readable, maintainable, and scalable codebases" },
              { icon: Layers, title: "System Design", desc: "Thoughtful architecture for complex applications" },
              { icon: Zap, title: "Performance", desc: "Fast load times and smooth interactions matter" },
              { icon: Cpu, title: "Full-Stack", desc: "Comfortable from database to pixel-perfect UI" },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="p-5 rounded-sm border group transition-all duration-300 cursor-default"
                style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(229,23,63,0.3)"; e.currentTarget.style.background = "rgba(229,23,63,0.05)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-sm mb-3" style={{ background: "rgba(229,23,63,0.1)" }}>
                  <Icon size={18} style={{ color: "#e5173f" }} />
                </div>
                <div className="text-sm text-foreground mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>{title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
