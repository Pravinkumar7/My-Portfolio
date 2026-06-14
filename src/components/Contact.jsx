import { PINK, TEAL, CONTACTS } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 5vw 110px", position: "relative", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="geo float" style={{ top: "10%", left: "5%", fontSize: 160, color: PINK }}>○</div>
      <div className="geo float" style={{ bottom: "10%", right: "8%", fontSize: 140, color: TEAL, animationDelay: "1.5s" }}>△</div>

      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 12, color: PINK, letterSpacing: "0.3em", marginBottom: 18 }}>// FINAL ROUND</div>
          <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "clamp(2.5rem,8vw,5.5rem)", fontWeight: 900, letterSpacing: "0.02em", lineHeight: 1.05, marginBottom: 24 }}>
            LET'S <span style={{ color: TEAL }}>CONNECT</span>
          </h2>
          <p style={{ fontSize: 15, color: "#9090a0", lineHeight: 1.85, maxWidth: 520, margin: "0 auto 48px" }}>
            Open to Java Developer, MERN Stack, React Developer & Software Tester roles. Pune — immediate joiner.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 44 }}>
            {CONTACTS.map((c, i) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <div className="lift" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 4, padding: "22px 14px", textAlign: "center" }}>
                  <div style={{ fontSize: 22, color: i % 2 === 0 ? PINK : TEAL, marginBottom: 10, fontWeight: 700 }}>{c.icon}</div>
                  <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 10, color: "#5a5a68", letterSpacing: "0.12em", marginBottom: 6 }}>{c.label}</div>
                  <div style={{ fontSize: 11, color: "#c0c0cc", wordBreak: "break-all" }}>{c.val}</div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <a href="mailto:pravinrathod93527@gmail.com" style={{ textDecoration: "none" }}>
            <button className="cta" style={{ background: PINK, color: "#0a0a0c", padding: "16px 52px", fontFamily: "'Orbitron',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", borderRadius: 2, boxShadow: "0 0 40px rgba(255,45,120,0.3)" }}>
              SEND MESSAGE
            </button>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
