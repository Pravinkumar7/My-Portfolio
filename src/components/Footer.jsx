import { PINK, TEAL } from "../data/content";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.05)",
      padding: "30px 5vw",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 16,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          onClick={scrollToTop}
          style={{
            width: 32, height: 32, borderRadius: "50%",
            background: `linear-gradient(135deg, ${PINK}, ${TEAL})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 900, color: "#0a0a0c",
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          P
        </div>
        <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 14, fontWeight: 800, letterSpacing: "0.04em", color: "#f0f0f3" }}>
          R<span style={{ color: PINK }}>A</span>THOD
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 11, color: "#4a4a58", letterSpacing: "0.1em" }}>
          © 2026 · PUNE, INDIA
        </span>
        <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#4a4a58" }} />
        <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 11, color: "#4a4a58", letterSpacing: "0.1em" }}>
          FULL-STACK DEVELOPER
        </span>
      </div>
    </footer>
  );
}
