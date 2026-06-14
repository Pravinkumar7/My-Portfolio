import { useState, useEffect, useRef } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [threshold]);
  return [ref, vis];
}

export default function Reveal({ children, delay = 0, y = 30 }) {
  const [ref, vis] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity .8s ${delay}s cubic-bezier(.16,1,.3,1), transform .8s ${delay}s cubic-bezier(.16,1,.3,1)`,
      }}
    >
      {children}
    </div>
  );
}
