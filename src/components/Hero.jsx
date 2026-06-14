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

  // Typewriter effect
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

  // Auto swipe hero background image every 5s
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

      {/* Sliding blurred background images */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        {prevHeroImg !== null && (
          <div className="hero-img-out" style={{ position: "absolute", inset: 0 }}>
            <img src={HERO_IMAGES[prevHeroImg]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "blur(16px) brightness(0.22) saturate(0.8)" }} />
          </div>
        )}
        <div key={heroImg} className={prevHeroImg !== null ? "hero-img-in" : ""} style={{ position: "absolute", inset: 0 }}>
          <img src={HERO_IMAGES[heroImg]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "blur(16px) brightness(0.22) saturate(0.8)" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg, rgba(10,10,12,0.95) 0%, rgba(10,10,12,0.8) 55%, rgba(10,10,12,0.95) 100%)" }} />
      </div>

      {/* Geometric BG shapes */}
      <div className="geo spin-slow" style={{ top: "10%", right: "8%", fontSize: 220, color: PINK, zIndex: 1 }}>△</div>
      <div className="geo spin-rev" style={{ bottom: "5%", left: "5%", fontSize: 180, color: TEAL, zIndex: 1 }}>○</div>
      <div className="geo" style={{ top: "55%", right: "20%", fontSize: 90, color: "#fff", zIndex: 1 }}>□</div>

      {/* Scanline */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", opacity: 0.04, zIndex: 1 }}>
        <div style={{ position: "absolute", left: 0, right: 0, height: "30%", background: `linear-gradient(to bottom, transparent, ${TEAL}, transparent)`, animation: "scanline 6s linear infinite" }} />
      </div>

      {/* Image swipe indicator dots */}
      <div style={{ position: "absolute", bottom: 32, right: "5vw", zIndex: 2, display: "flex", gap: 8 }}>
        {HERO_IMAGES.map((_, i) => (
          <div key={i} style={{ width: i === heroImg ? 26 : 7, height: 7, borderRadius: 4, background: i === heroImg ? PINK : "rgba(255,255,255,0.25)", transition: "all .4s" }} />
        ))}
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
        <Reveal>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28, padding: "6px 18px", border: "1px solid rgba(45,232,196,0.3)", borderRadius: 30, background: "rgba(45,232,196,0.06)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: TEAL, animation: "pulse-dot 2s infinite" }} />
            <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 11, color: TEAL, letterSpacing: "0.15em", fontWeight: 600 }}>STATUS: OPEN TO WORK</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="hero-title" style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: "clamp(4rem,12vw,9rem)", lineHeight: 0.95, letterSpacing: "0.02em", marginBottom: 8, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.15em" }}>
            <span style={{ color: "#f0f0f3" }}>PRA</span><span style={{ color: PINK }}>V</span><span style={{ color: "#f0f0f3" }}>IN</span>
          </h1>
          <h1 className="hero-title" style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: "clamp(4rem,12vw,9rem)", lineHeight: 0.95, letterSpacing: "0.02em", marginBottom: 32, color: TEAL, opacity: 0.85 }}>
            RATHOD
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "clamp(0.9rem,2.2vw,1.3rem)", fontWeight: 600, letterSpacing: "0.15em", color: "#f0f0f3", marginBottom: 28, minHeight: 32, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: PINK }}>//</span>
            <span>{typed}</span>
            <span style={{ color: TEAL, animation: "blink 1s step-end infinite" }}>_</span>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p style={{ fontSize: 16, color: "#9090a0", lineHeight: 1.85, maxWidth: 540, marginBottom: 44, fontWeight: 400 }}>
            BCA Graduate (2024). Currently building full-stack applications as a <span style={{ color: TEAL }}>MERN Stack Developer</span> at <span style={{ color: "#fff", fontWeight: 600 }}>BPointer Technologies</span>, Pune. One stack, every layer — backend to frontend to testing.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button className="cta" onClick={() => onNavigate("projects")} style={{ background: PINK, color: "#0a0a0c", padding: "15px 38px", fontFamily: "'Orbitron',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", borderRadius: 2, boxShadow: "0 0 30px rgba(255,45,120,0.3)" }}>
              VIEW PROJECTS
            </button>
            <button className="cta" onClick={() => onNavigate("contact")} style={{ background: "transparent", color: TEAL, padding: "15px 38px", fontFamily: "'Orbitron',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", border: `1px solid ${TEAL}`, borderRadius: 2 }}>
              CONTACT ME
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
