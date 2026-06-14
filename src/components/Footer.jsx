import { PINK } from "../data/content";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "22px 5vw", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
      <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 14, fontWeight: 800, letterSpacing: "0.04em" }}>
        P<span style={{ color: PINK }}>R</span>ATHOD
      </span>
      <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 11, color: "#4a4a58", letterSpacing: "0.1em" }}>
        © 2026 · PUNE, MAHARASHTRA
      </span>
    </footer>
  );
}
