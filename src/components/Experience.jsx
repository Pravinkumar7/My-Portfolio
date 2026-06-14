import { PINK, TEAL, JOBS } from "../data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "90px 5vw", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(255,45,120,0.03) 0%, transparent 60%)", pointerEvents: "none" }} />
      <Reveal>
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 12, color: PINK, letterSpacing: "0.3em", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 20, height: 1, background: PINK, opacity: 0.4 }} />
            // MISSION LOG
          </div>
          <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, letterSpacing: "0.02em" }}>
            WORK <span style={{ color: TEAL }}>HISTORY</span>
          </h2>
        </div>
      </Reveal>
      <div style={{ position: "relative", paddingLeft: 20 }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)", borderRadius: 1 }} />
        {JOBS.map((j, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div style={{ position: "relative", padding: "0 0 40px 40px" }}>
              <div style={{
                position: "absolute", left: -9, top: 6,
                width: 16, height: 16, borderRadius: "50%",
                background: j.color,
                boxShadow: j.current ? `0 0 20px ${j.color}40` : "none",
                border: "2px solid #0a0a0c",
                animation: j.current ? "pulse-dot 2s infinite" : "none",
              }} />
              <div className="lift" style={{
                background: "rgba(255,255,255,0.015)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 8,
                padding: 28,
                borderLeft: `3px solid ${j.color}`,
              }}>
                {j.current && (
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 14, fontFamily: "'Orbitron',sans-serif", fontSize: 10, color: j.color, letterSpacing: "0.15em", padding: "3px 10px", border: `1px solid ${j.color}30`, borderRadius: 4, background: `${j.color}10` }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: j.color, animation: "pulse-dot 2s infinite" }} />
                    ACTIVE
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "#f0f0f3", lineHeight: 1.3 }}>{j.role}</div>
                    <div style={{ fontSize: 13, color: j.color, fontWeight: 600 }}>{j.co}</div>
                  </div>
                  <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 11, color: "#5a5a68", letterSpacing: "0.05em", whiteSpace: "nowrap", padding: "4px 10px", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 4 }}>{j.period}</div>
                </div>
                <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {j.bullets.map((b, k) => (
                    <li key={k} style={{ display: "flex", gap: 10, fontSize: 13, color: "#9090a0", lineHeight: 1.6 }}>
                      <span style={{ color: j.color, flexShrink: 0, fontWeight: 700 }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
