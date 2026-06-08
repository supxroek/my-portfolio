import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { useState } from "react";
import { Send, Mail, Github, Instagram, Twitter, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ContactSection() {
  const { ref, inView } = useInView();
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { name, email, message } = form;

    const mailtoLink = `mailto:suparoek.sm@gmail.com?subject=${encodeURIComponent(
      name,
    )}&body=${encodeURIComponent(message)}%0A%0AFrom: ${email}`;

    window.location.href = mailtoLink;

    setForm({ name: "", email: "", message: "" });
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  const inputStyle = {
    fontFamily: "'JetBrains Mono', monospace",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.09)",
    color: "#f0f0f0",
    borderRadius: "2px",
    fontSize: "0.875rem",
    outline: "none",
    width: "100%",
    padding: "0.75rem 1rem",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 lg:py-32">
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
            — Contact
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
          {/* left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2
              className="text-foreground leading-tight mb-6"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Let's <span style={{ color: "#e5173f" }}>Work</span>
              <br />
              Together
            </h2>
            <p
              className="text-muted-foreground mb-10 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t("contact.p1")}
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "suparoek.sm@gmail.com",
                  href: "mailto:suparoek.sm@gmail.com",
                },
                {
                  icon: Github,
                  label: "github.com/supxroek",
                  href: "https://github.com/supxroek",
                },
                {
                  icon: Instagram,
                  label: "instagram/@___suparoek",
                  href: "https://www.instagram.com/___suparoek?igsh=MTFoc3BhOTJieHZwbQ==",
                },
                {
                  icon: Twitter,
                  label: "x/@_supxroek",
                  href: "https://x.com/_supxroek",
                },
                { icon: MapPin, label: "Thailand", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded-sm border flex-shrink-0 transition-all duration-200 group-hover:border-red-500/40"
                    style={{
                      borderColor: "rgba(255,255,255,0.08)",
                      background: "rgba(255,255,255,0.02)",
                    }}
                  >
                    <Icon
                      size={15}
                      style={{ color: "#6b6b6b" }}
                      className="group-hover:text-[#e5173f] transition-colors duration-200"
                    />
                  </div>
                  <span
                    className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {sent ? (
              <div
                className="flex flex-col items-center justify-center h-full min-h-[300px] rounded-sm border p-10 text-center"
                style={{
                  borderColor: "rgba(0,196,124,0.3)",
                  background: "rgba(0,196,124,0.05)",
                }}
              >
                <div className="text-3xl mb-4">✓</div>
                <div
                  className="text-foreground mb-2"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 700,
                  }}
                >
                  {t("contact.sentTitle")}
                </div>
                <div
                  className="text-muted-foreground text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t("contact.sentBody")}
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4 justify-end h-full"
              >
                <div>
                  <label
                    className="block text-xs text-muted-foreground mb-2 uppercase tracking-widest"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("contact.form.namePlaceholder")}
                    value={form.name}
                    required
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(229,23,63,0.4)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.09)")
                    }
                  />
                </div>
                <div>
                  <label
                    className="block text-xs text-muted-foreground mb-2 uppercase tracking-widest"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    placeholder={t("contact.form.emailPlaceholder")}
                    value={form.email}
                    required
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(229,23,63,0.4)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.09)")
                    }
                  />
                </div>
                <div>
                  <label
                    className="block text-xs text-muted-foreground mb-2 uppercase tracking-widest"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    placeholder={t("contact.form.messagePlaceholder")}
                    rows={5}
                    value={form.message}
                    required
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "100px",
                      maxHeight: "100px",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(229,23,63,0.4)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.09)")
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm transition-all duration-200 w-full justify-center"
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
                  {t("contact.form.send")} <Send size={14} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* footer */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <div
          className="h-px"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 pb-4">
          <span
            className="text-xs text-muted-foreground text-center sm:text-left"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            © {new Date().getFullYear()} Suparoek Manajit. Built with Vite +
            Tailwind CSS.
          </span>
          <div
            className="flex items-center gap-1 text-xs text-muted-foreground"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span>Designed & developed by</span>
            <span style={{ color: "#e5173f" }}>Suparoek</span>
          </div>
        </div>
      </div>
    </section>
  );
}
