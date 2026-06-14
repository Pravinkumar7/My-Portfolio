import { PINK, TEAL, PROJECTS } from "../data/content";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "90px 5vw" }}>
      <Reveal>
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 12, color: TEAL, letterSpacing: "0.3em", marginBottom: 14 }}>// BUILD LOG</div>
          <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, letterSpacing: "0.02em" }}>
            FEATURED <span style={{ color: PINK }}>PROJECTS</span>
          </h2>
        </div>
      </Reveal>
      <div className="proj-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 18 }}>
        {PROJECTS.map((p, i) => (
          <Reveal key={i} delay={i * 0.07}>
            <div className="lift" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 4, padding: 30, height: "100%", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -10, right: 10, fontSize: 100, color: p.color, opacity: 0.06 }}>{p.shape}</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <span style={{ fontSize: 30 }}>{p.emoji}</span>
                <span style={{ color: p.color, fontSize: 22 }}>{p.shape}</span>
              </div>
              <h3 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 17, fontWeight: 700, color: "#f0f0f3", marginBottom: 12, lineHeight: 1.3, textTransform: "uppercase", letterSpacing: "0.02em" }}>{p.name}</h3>
              <p style={{ fontSize: 13, color: "#9090a0", lineHeight: 1.75, marginBottom: 20 }}>{p.desc}</p>
              <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 11, color: p.color, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 14, letterSpacing: "0.05em" }}>{p.stack}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
