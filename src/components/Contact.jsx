import { PINK, TEAL, CONTACTS } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 5vw 110px", position: "relative", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(255,45,120,0.03) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div className="geo float" style={{ top: "15%", left: "5%", fontSize: 160, color: PINK, opacity: 0.05 }}>○</div>
      <div className="geo float" style={{ bottom: "10%", right: "8%", fontSize: 140, color: TEAL, opacity: 0.05, animationDelay: "1.5s" }}>△</div>

      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 12, color: PINK, letterSpacing: "0.3em", marginBottom: 18, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <span style={{ width: 20, height: 1, background: PINK, opacity: 0.4 }} />
            // FINAL ROUND
          </div>
          <h2 style={{
            fontFamily: "'Orbitron',sans-serif", fontSize: "clamp(2.2rem,8vw,5rem)", fontWeight: 900,
            letterSpacing: "0.02em", lineHeight: 1.05, marginBottom: 20
          }}>
            LET'S <span style={{ color: TEAL }}>CONNECT</span>
          </h2>
          <p style={{ fontSize: 15, color: "#9090a0", lineHeight: 1.85, maxWidth: 520, margin: "0 auto 44px" }}>
            Open to Java Developer, MERN Stack, React Developer & Software Tester roles. Pune — immediate joiner.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 44 }}>
            {CONTACTS.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto") || c.href.startsWith("tel") ? undefined : "_blank"}
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="lift"
                  style={{
                    background: "rgba(255,255,255,0.015)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 8,
                    padding: "24px 14px",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `rgba(${i % 2 === 0 ? "255,45,120" : "45,232,196"},0.1)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, fontWeight: 700, color: i % 2 === 0 ? PINK : TEAL,
                    margin: "0 auto 12px",
                  }}>
                    {c.icon === "in" ? (
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14 }}>in</span>
                    ) : c.icon === "</>" ? (
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>&lt;/&gt;</span>
                    ) : (
                      c.icon
                    )}
                  </div>
                  <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 10, color: "#5a5a68", letterSpacing: "0.12em", marginBottom: 5, textTransform: "uppercase" }}>{c.label}</div>
                  <div style={{ fontSize: 12, color: "#c0c0cc", wordBreak: "break-all", fontWeight: 500 }}>{c.val}</div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <a href="mailto:pravinrathod93527@gmail.com" style={{ textDecoration: "none" }}>
            <button
              className="cta"
              style={{
                background: `linear-gradient(135deg, ${PINK}, #e01a5e)`,
                color: "#fff",
                padding: "16px 52px",
                fontFamily: "'Orbitron',sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.14em",
                borderRadius: 4,
                boxShadow: "0 4px 30px rgba(255,45,120,0.35)",
              }}
            >
              SEND MESSAGE
            </button>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
