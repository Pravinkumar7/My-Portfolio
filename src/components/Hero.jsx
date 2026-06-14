import { useState, useEffect, useRef } from "react";
import { PINK, TEAL, HERO_IMAGES, ROLES } from "../data/content";
import Reveal from "./Reveal";

export default function Hero({ onNavigate }) {
  const [typed, setTyped] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [heroImg, setHeroImg] = useState(0);
  const [prevHeroImg, setPrevHeroImg] = useState(null);
  const delRef = useRef(false);
  const chrRef = useRef(0);

  useEffect(() => {
    const role = ROLES[roleIdx];
    const tick = () => {
      if (!delRef.current) {
        chrRef.current++;
        setTyped(role.slice(0, chrRef.current));
        if (chrRef.current >= role.length) { delRef.current = true; setTimeout(tick, 1900); return; }
      } else {
        chrRef.current--;
        setTyped(role.slice(0, chrRef.current));
        if (chrRef.current <= 0) { delRef.current = false; setRoleIdx((i) => (i + 1) % ROLES.length); return; }
      }
      setTimeout(tick, delRef.current ? 35 : 75);
    };
    const t = setTimeout(tick, 500);
    return () => clearTimeout(t);
  }, [roleIdx]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevHeroImg(heroImg);
      setHeroImg((i) => (i + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImg]);

  useEffect(() => {
    if (prevHeroImg === null) return;
    const t = setTimeout(() => setPrevHeroImg(null), 1000);
    return () => clearTimeout(t);
  }, [prevHeroImg]);

  return (
    <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", padding: "100px 5vw 60px", overflow: "hidden" }}>

      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        {prevHeroImg !== null && (
          <div className="hero-img-out" style={{ position: "absolute", inset: 0 }}>
            <img src={HERO_IMAGES[prevHeroImg]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "blur(20px) brightness(0.2) saturate(0.6)", transform: "scale(1.1)", transition: "transform 6s ease" }} />
          </div>
        )}
        <div key={heroImg} className={prevHeroImg !== null ? "hero-img-in" : ""} style={{ position: "absolute", inset: 0 }}>
          <img src={HERO_IMAGES[heroImg]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "blur(20px) brightness(0.2) saturate(0.6)", transform: "scale(1.1)", transition: "transform 6s ease" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,10,12,0.92) 0%, rgba(10,10,12,0.7) 50%, rgba(10,10,12,0.95) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%, rgba(255,45,120,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(45,232,196,0.06) 0%, transparent 60%)" }} />
      </div>

      <div className="geo spin-slow" style={{ top: "8%", right: "5%", fontSize: 260, color: PINK, zIndex: 1, opacity: 0.08 }}>△</div>
      <div className="geo spin-rev" style={{ bottom: "3%", left: "3%", fontSize: 200, color: TEAL, zIndex: 1, opacity: 0.08 }}>○</div>
      <div className="geo float" style={{ top: "60%", right: "15%", fontSize: 100, color: "rgba(255,255,255,0.05)", zIndex: 1 }}>□</div>
      <div className="geo spin-slow" style={{ top: "30%", left: "10%", fontSize: 60, color: TEAL, zIndex: 1, opacity: 0.06 }}>◇</div>

      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", opacity: 0.03, zIndex: 1 }}>
        <div style={{ position: "absolute", left: 0, right: 0, height: "30%", background: `linear-gradient(to bottom, transparent, ${TEAL}, transparent)`, animation: "scanline 6s linear infinite" }} />
      </div>

      <div style={{ position: "absolute", bottom: 32, right: "5vw", zIndex: 2, display: "flex", gap: 8 }}>
        {HERO_IMAGES.map((_, i) => (
          <div key={i} style={{ width: i === heroImg ? 26 : 7, height: 7, borderRadius: 4, background: i === heroImg ? PINK : "rgba(255,255,255,0.2)", transition: "all .4s cubic-bezier(.16,1,.3,1)" }} />
        ))}
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
        <Reveal>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28, padding: "6px 18px", border: "1px solid rgba(45,232,196,0.25)", borderRadius: 30, background: "rgba(45,232,196,0.05)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: TEAL, animation: "pulse-dot 2s infinite", boxShadow: `0 0 12px ${TEAL}` }} />
            <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 11, color: TEAL, letterSpacing: "0.15em", fontWeight: 600 }}>STATUS: OPEN TO WORK</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: "clamp(3.5rem,12vw,8rem)", lineHeight: 0.92, letterSpacing: "0.02em", marginBottom: 6, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.1em" }}>
            <span style={{ color: "#f0f0f3" }}>PRA</span>
            <span style={{
              background: `linear-gradient(135deg, ${PINK}, #ff6b9d, ${PINK})`,
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradientShift 4s ease infinite",
            }}>V</span>
            <span style={{ color: "#f0f0f3" }}>IN</span>
          </h1>
          <h1 style={{
            fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: "clamp(3.5rem,12vw,8rem)", lineHeight: 0.92,
            letterSpacing: "0.02em", marginBottom: 28,
            background: `linear-gradient(135deg, ${TEAL}, #60f0d0, ${TEAL})`,
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradientShift 5s ease infinite",
          }}>
            RATHOD
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "clamp(0.85rem,2vw,1.2rem)", fontWeight: 600, letterSpacing: "0.12em", color: "#f0f0f3", marginBottom: 24, minHeight: 32, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: PINK, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.9em" }}>&gt;&gt;</span>
            <span>{typed}</span>
            <span style={{ color: TEAL, fontFamily: "'JetBrains Mono', monospace", animation: "blink 1s step-end infinite", fontWeight: 400 }}>_</span>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p style={{ fontSize: 15, color: "#9090a0", lineHeight: 1.9, maxWidth: 540, marginBottom: 44, fontWeight: 400 }}>
            BCA Graduate (2024). Currently building full-stack applications as a <span style={{ color: TEAL, fontWeight: 600 }}>MERN Stack Developer</span> at <span style={{ color: "#fff", fontWeight: 600 }}>BPointer Technologies</span>, Pune. One stack, every layer — backend to frontend to testing.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button
              className="cta"
              onClick={() => onNavigate("projects")}
              style={{
                background: `linear-gradient(135deg, ${PINK}, #e01a5e)`,
                color: "#fff",
                padding: "16px 40px",
                fontFamily: "'Orbitron',sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                borderRadius: 4,
                boxShadow: "0 4px 30px rgba(255,45,120,0.35)",
              }}
            >
              VIEW PROJECTS
            </button>
            <button
              className="cta"
              onClick={() => onNavigate("contact")}
              style={{
                background: "transparent",
                color: TEAL,
                padding: "16px 40px",
                fontFamily: "'Orbitron',sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                border: `1px solid ${TEAL}`,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 0 rgba(45,232,196,0.1)",
                transition: "all 0.3s cubic-bezier(.16,1,.3,1)",
              }}
              onMouseEnter={(e) => { e.target.style.background = "rgba(45,232,196,0.08)"; e.target.style.boxShadow = "0 0 25px rgba(45,232,196,0.15)"; }}
              onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.boxShadow = "none"; }}
            >
              CONTACT ME
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
