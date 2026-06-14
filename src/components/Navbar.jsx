import { useState, useEffect } from "react";
import { PINK } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileNav(false);
  };

  const links = ["About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 70,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 5vw",
          background: scrolled ? "rgba(10,10,12,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,45,120,0.15)" : "1px solid transparent",
          transition: "all .3s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: PINK, fontSize: 22 }}>◆</span>
          <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 18, fontWeight: 800, letterSpacing: "0.04em" }}>
            P<span style={{ color: PINK }}>R</span>ATHOD
          </span>
        </div>

        <div className="hide-mob" style={{ display: "flex", gap: 40 }}>
          {links.map((n) => (
            <span key={n} className="nav-link" onClick={() => go(n.toLowerCase())} style={{ color: "#a0a0ac" }}>
              {n}
            </span>
          ))}
        </div>

        <button className="hide-mob cta" onClick={() => go("contact")} style={{ background: PINK, color: "#0a0a0c", padding: "9px 26px", fontFamily: "'Orbitron',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", borderRadius: 2 }}>
          HIRE ME
        </button>

        <button onClick={() => setMobileNav(!mobileNav)} className="mob-toggle" style={{ background: "none", border: `1px solid ${PINK}`, color: "#fff", padding: "6px 12px", fontSize: 16, cursor: "pointer", display: "none" }}>
          ☰
        </button>
      </nav>

      {mobileNav && (
        <div style={{ position: "fixed", inset: 0, zIndex: 199, background: "rgba(10,10,12,0.98)", backdropFilter: "blur(20px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 36 }}>
          <button onClick={() => setMobileNav(false)} style={{ position: "absolute", top: 24, right: 24, background: "none", border: "none", fontSize: 28, cursor: "pointer", color: "#fff" }}>✕</button>
          {links.map((n) => (
            <span key={n} onClick={() => go(n.toLowerCase())} style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 32, fontWeight: 700, color: "#fff", cursor: "pointer", textTransform: "uppercase" }}>
              {n}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
