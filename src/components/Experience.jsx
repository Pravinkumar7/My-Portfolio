import { PINK, TEAL, JOBS } from "../data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "90px 5vw", background: "rgba(255,45,120,0.02)" }}>
      <Reveal>
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 12, color: PINK, letterSpacing: "0.3em", marginBottom: 14 }}>// MISSION LOG</div>
          <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, letterSpacing: "0.02em" }}>
            WORK <span style={{ color: TEAL }}>HISTORY</span>
          </h2>
        </div>
      </Reveal>
      <div className="exp-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "rgba(255,255,255,0.04)" }}>
        {JOBS.map((j, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="lift" style={{ background: "#0a0a0c", padding: 32, height: "100%", borderTop: `2px solid ${j.color}` }}>
              {j.current && (
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 16, fontFamily: "'Orbitron',sans-serif", fontSize: 10, color: j.color, letterSpacing: "0.15em" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: j.color, animation: "pulse-dot 2s infinite" }} />ACTIVE
                </div>
              )}
              <div style={{ fontSize: 18, fontWeight: 700, color: "#f0f0f3", marginBottom: 6, lineHeight: 1.3 }}>{j.role}</div>
              <div style={{ fontSize: 13, color: j.color, fontWeight: 600, marginBottom: 4 }}>{j.co}</div>
              <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 11, color: "#5a5a68", marginBottom: 22, letterSpacing: "0.05em" }}>{j.period}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {j.bullets.map((b, k) => (
                  <li key={k} style={{ display: "flex", gap: 10, fontSize: 13, color: "#9090a0", lineHeight: 1.6 }}>
                    <span style={{ color: j.color, flexShrink: 0 }}>▸</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
