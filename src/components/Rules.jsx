import { PINK, TEAL, RULES } from "../data/content";
import Reveal from "./Reveal";

export default function Rules() {
  return (
    <section style={{
      padding: "80px 5vw",
      position: "relative",
      background: "radial-gradient(ellipse at 50% 50%, rgba(255,45,120,0.02) 0%, transparent 60%)",
    }}>
      <Reveal>
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 12, color: PINK, letterSpacing: "0.3em", marginBottom: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <span style={{ width: 20, height: 1, background: PINK, opacity: 0.4 }} />
            // PHILOSOPHY
          </div>
          <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, letterSpacing: "0.02em" }}>
            RULES <span style={{ color: TEAL }}>TO BUILD BY</span>
          </h2>
        </div>
      </Reveal>
      <div className="rules-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
        {RULES.map((r, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div
              className="lift"
              style={{
                background: "rgba(255,255,255,0.015)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 8,
                padding: "32px 24px",
                height: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: -5, right: 5, fontFamily: "'Orbitron',sans-serif", fontSize: 80, fontWeight: 900, color: r.color, opacity: 0.06, lineHeight: 1 }}>{r.num}</div>
              <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 42, fontWeight: 900, color: r.color, marginBottom: 14, lineHeight: 1 }}>{r.num}</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: "#f0f0f3", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" }}>{r.title}</div>
              <div style={{ fontSize: 13, color: "#7c7c8a", lineHeight: 1.7 }}>{r.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
