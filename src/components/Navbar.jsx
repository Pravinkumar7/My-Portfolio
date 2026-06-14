import { useState, useEffect } from "react";
import { PINK, TEAL } from "../data/content";

const LINKS = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );
    LINKS.forEach((id) => {
      const el = document.getElementById(id.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileNav(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 70,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 5vw",
          background: scrolled ? "rgba(10,10,12,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.8)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.8)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,45,120,0.12)" : "1px solid transparent",
          transition: "all .4s cubic-bezier(.16,1,.3,1)",
        }}
      >
        <div
          onClick={() => go("about")}
          style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
        >
          <span style={{
            width: 32, height: 32, borderRadius: "50%",
            background: `linear-gradient(135deg, ${PINK}, ${TEAL})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 900, color: "#0a0a0c"
          }}>P</span>
          <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 18, fontWeight: 800, letterSpacing: "0.04em", color: "#f0f0f3" }}>
            R<span style={{ color: PINK }}>A</span>THOD
          </span>
        </div>

        <div className="hide-mob" style={{ display: "flex", gap: 32 }}>
          {LINKS.map((n) => {
            const isActive = active === n.toLowerCase();
            return (
              <span
                key={n}
                className="nav-link"
                onClick={() => go(n.toLowerCase())}
                style={{
                  color: isActive ? PINK : "#80808c",
                  fontWeight: isActive ? 700 : 500,
                }}
              >
                {n}
                {isActive && (
                  <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: PINK }} />
                )}
              </span>
            );
          })}
        </div>

        <button
          className="hide-mob cta"
          onClick={() => go("contact")}
          style={{
            background: `linear-gradient(135deg, ${PINK}, #e01a5e)`,
            color: "#fff",
            padding: "10px 28px",
            fontFamily: "'Orbitron',sans-serif",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            borderRadius: 4,
            boxShadow: "0 4px 20px rgba(255,45,120,0.25)",
          }}
        >
          HIRE ME
        </button>

        <button
          onClick={() => setMobileNav(!mobileNav)}
          className="mob-toggle"
          style={{ background: "none", border: `1px solid ${PINK}`, color: "#fff", padding: "6px 12px", fontSize: 16, cursor: "pointer", borderRadius: 4 }}
        >
          {mobileNav ? "✕" : "☰"}
        </button>
      </nav>

      {mobileNav && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 199,
            background: "rgba(10,10,12,0.97)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
            animation: "fadeIn .3s ease",
          }}
        >
          <div style={{ position: "absolute", top: 24, right: 24 }}>
            <span style={{ width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg, ${PINK}, ${TEAL})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 900, color: "#0a0a0c" }}>P</span>
          </div>
          {LINKS.map((n, i) => (
            <span
              key={n}
              onClick={() => go(n.toLowerCase())}
              style={{
                fontFamily: "'Orbitron',sans-serif",
                fontSize: 28,
                fontWeight: 700,
                color: active === n.toLowerCase() ? PINK : "#fff",
                cursor: "pointer",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                animation: `fadeUp .4s ${i * 0.08}s forwards`,
                opacity: 0,
              }}
            >
              {n}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
