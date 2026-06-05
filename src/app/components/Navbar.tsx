import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* logo */}
          <a href="#home" className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-sm flex items-center justify-center text-xs"
              style={{ background: "#e5173f", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: "#fff" }}
            >
              S
            </div>
            <span className="text-sm text-foreground" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>
              Suparoek
            </span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setActive(label)}
                className="text-xs uppercase tracking-widest transition-colors duration-200 relative"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: active === label ? "#f0f0f0" : "#6b6b6b",
                }}
                onMouseEnter={e => { if (active !== label) e.currentTarget.style.color = "#c0c0c0"; }}
                onMouseLeave={e => { if (active !== label) e.currentTarget.style.color = "#6b6b6b"; }}
              >
                {active === label && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background: "#e5173f" }}
                  />
                )}
                {label}
              </a>
            ))}
          </div>

          {/* mobile menu btn */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-sm border"
            style={{ borderColor: "rgba(255,255,255,0.1)", color: "#6b6b6b" }}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden border-b"
            style={{ background: "rgba(10,10,10,0.97)", backdropFilter: "blur(12px)", borderColor: "rgba(255,255,255,0.07)" }}
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => { setActive(label); setMenuOpen(false); }}
                  className="text-sm py-2 border-b"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: active === label ? "#e5173f" : "#6b6b6b",
                    borderColor: "rgba(255,255,255,0.05)",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
