import { PINK, TEAL, PROJECTS } from "../data/content";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "90px 5vw", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(45,232,196,0.03) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div className="geo float" style={{ bottom: "5%", left: "3%", fontSize: 140, color: TEAL, opacity: 0.04 }}>△</div>
      <Reveal>
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 12, color: TEAL, letterSpacing: "0.3em", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 20, height: 1, background: TEAL, opacity: 0.4 }} />
            // BUILD LOG
          </div>
          <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, letterSpacing: "0.02em" }}>
            FEATURED <span style={{ color: PINK }}>PROJECTS</span>
          </h2>
        </div>
      </Reveal>
      <div className="proj-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 18 }}>
        {PROJECTS.map((p, i) => (
          <Reveal key={i} delay={i * 0.07}>
            <div
              className="lift"
              style={{
                background: "rgba(255,255,255,0.015)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 8,
                padding: 28,
                height: "100%",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "absolute", top: -20, right: 5, fontSize: 130, color: p.color, opacity: 0.04, pointerEvents: "none" }}>{p.shape}</div>
              <div style={{ position: "absolute", bottom: -20, left: -15, fontSize: 100, color: p.color, opacity: 0.03, pointerEvents: "none" }}>{p.shape}</div>

              <div style={{ width: 44, height: 44, borderRadius: 10, background: `${p.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 18 }}>
                {p.emoji}
              </div>

              <h3 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 16, fontWeight: 700, color: "#f0f0f3", marginBottom: 10, lineHeight: 1.3, letterSpacing: "0.02em" }}>{p.name}</h3>
              <p style={{ fontSize: 13, color: "#9090a0", lineHeight: 1.75, marginBottom: 20, flex: 1 }}>{p.desc}</p>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: p.color,
                borderTop: "1px solid rgba(255,255,255,0.06)",
                paddingTop: 14,
                letterSpacing: "0.03em",
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
              }}>
                {p.stack.split("·").map((tech, idx) => (
                  <span key={idx} style={{ padding: "2px 8px", background: `${p.color}10`, borderRadius: 3, fontSize: 10 }}>{tech.trim()}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
