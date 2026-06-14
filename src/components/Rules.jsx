import { PINK, RULES } from "../data/content";
import Reveal from "./Reveal";

export default function Rules() {
  return (
    <section style={{ padding: "70px 5vw", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
      <Reveal>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 48, flexWrap: "wrap" }}>
          <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, letterSpacing: "0.04em" }}>
            <span style={{ color: PINK }}>RULE</span>S
          </h2>
          <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 13, letterSpacing: "0.2em", color: "#707080" }}>OF MY CAREER</span>
        </div>
      </Reveal>
      <div className="rules-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "rgba(255,255,255,0.04)" }}>
        {RULES.map((r, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div style={{ background: "#0a0a0c", padding: "32px 28px", height: "100%" }}>
              <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 48, fontWeight: 900, color: r.color, marginBottom: 16, lineHeight: 1 }}>{r.num}</div>
              <div style={{ fontSize: 17, fontWeight: 600, color: "#f0f0f3", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" }}>{r.title}</div>
              <div style={{ fontSize: 13, color: "#7c7c8a", lineHeight: 1.6 }}>{r.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
