import { PINK, TEAL, SKILLS } from "../data/content";
import Reveal from "./Reveal";

const CAT_ICONS = { Backend: "⚙", Frontend: "🎨", Databases: "🗄", Testing: "🔍", Tools: "🛠" };
const CAT_COLORS = [PINK, TEAL, PINK, TEAL, PINK];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "90px 5vw", position: "relative" }}>
      <div className="geo float" style={{ top: "15%", right: "3%", fontSize: 120, color: PINK, opacity: 0.04 }}>●</div>
      <Reveal>
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 12, color: TEAL, letterSpacing: "0.3em", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 20, height: 1, background: TEAL, opacity: 0.4 }} />
            // LOADOUT
          </div>
          <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, letterSpacing: "0.02em" }}>
            TECH <span style={{ color: PINK }}>STACK</span>
          </h2>
        </div>
      </Reveal>
      <div className="skill-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
        {SKILLS.map((s, i) => (
          <Reveal key={s.cat} delay={i * 0.07}>
            <div
              className="lift"
              style={{
                background: "rgba(255,255,255,0.015)",
                border: "1px solid rgba(255,255,255,0.06)",
                padding: 28,
                height: "100%",
                borderRadius: 8,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: -30, right: -30, fontSize: 120, color: CAT_COLORS[i], opacity: 0.03 }}>{s.icon}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: `rgba(${i % 2 === 0 ? "255,45,120" : "45,232,196"},0.1)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16,
                  color: CAT_COLORS[i],
                }}>
                  {CAT_ICONS[s.cat] || s.icon}
                </span>
                <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f0f0f3" }}>{s.cat}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="skill-tag"
                    style={{
                      fontSize: 12,
                      padding: "5px 12px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#a0a0ac",
                      borderRadius: 4,
                      fontWeight: 400,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
