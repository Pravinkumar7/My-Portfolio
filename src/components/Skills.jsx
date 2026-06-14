import { PINK, TEAL, SKILLS } from "../data/content";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "90px 5vw" }}>
      <Reveal>
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 12, color: TEAL, letterSpacing: "0.3em", marginBottom: 14 }}>// LOADOUT</div>
          <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, letterSpacing: "0.02em" }}>
            TECH <span style={{ color: PINK }}>ARSENAL</span>
          </h2>
        </div>
      </Reveal>
      <div className="skill-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 16 }}>
        {SKILLS.map((s, i) => (
          <Reveal key={s.cat} delay={i * 0.07}>
            <div className="lift" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", padding: 26, height: "100%", borderRadius: 4 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <span style={{ color: i % 2 === 0 ? PINK : TEAL, fontSize: 18 }}>{s.icon}</span>
                <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>{s.cat}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {s.items.map((item) => (
                  <span key={item} className="skill-tag" style={{ fontSize: 12, padding: "4px 11px", border: "1px solid rgba(255,255,255,0.1)", color: "#a0a0ac", borderRadius: 2, fontWeight: 400 }}>{item}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
