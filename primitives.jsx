/* global React */
const { useEffect, useRef, useState } = React;

// ============================================================
//  SHARED PRIMITIVES
// ============================================================

function Chrome({ section, slideNum, total, label }) {
  return (
    <>
      <div className="chrome-top">
        <span>INOS<span className="dot"></span>SSOT<span className="dot"></span>HEMPIN</span>
        <span>{section} <span className="dot"></span> {label}</span>
      </div>
    </>
  );
}

function ChromeBottom({ slideNum, total, footerLeft = "INOS Foundation France · Bridge Round · May 2026", footerRight = "PITCH · CONFIDENTIAL" }) {
  return (
    <div className="chrome-bottom">
      <div className="left">
        <span>{footerLeft}</span>
      </div>
      <div className="right">
        <span>{footerRight}</span>
        <span className="mono" style={{ color: "var(--teal)" }}>
          {String(slideNum).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

// Solarpunk geometric botanical — purely structural lines
function Botanical({ style, color = "var(--teal)", opacity = 0.35 }) {
  return (
    <svg className="botanical" style={style} viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={color} strokeWidth="1.2" opacity={opacity}>
        <line x1="200" y1="600" x2="200" y2="40" />
        {/* leaf-like geometric pairs */}
        {[80, 160, 240, 340, 440, 520].map((y, i) => {
          const flip = i % 2 === 0 ? 1 : -1;
          const len = 80 + (i % 3) * 22;
          return (
            <g key={i}>
              <line x1="200" y1={y} x2={200 + len * flip} y2={y - 36} />
              <line x1={200 + len * flip} y1={y - 36} x2={200 + (len - 18) * flip} y2={y - 60} />
              <circle cx={200 + len * flip} cy={y - 36} r="2.2" fill={color} />
            </g>
          );
        })}
        <circle cx="200" cy="40" r="3.5" fill={color} />
      </g>
    </svg>
  );
}

// Animated number counter
function CountUp({ to, duration = 1400, suffix = "", prefix = "", decimals = 0, active = true }) {
  const [val, setVal] = useState(active ? 0 : to);
  const startRef = useRef(null);
  useEffect(() => {
    if (!active) { setVal(to); return; }
    let raf;
    startRef.current = null;
    const tick = (t) => {
      if (startRef.current === null) startRef.current = t;
      const e = Math.min(1, (t - startRef.current) / duration);
      const eased = 1 - Math.pow(1 - e, 3);
      setVal(to * eased);
      if (e < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, active]);
  const formatted = decimals > 0
    ? val.toFixed(decimals)
    : Math.round(val).toLocaleString("en-US");
  return <span>{prefix}{formatted}{suffix}</span>;
}

// Hook: detect when a slide becomes active so we can re-trigger animations
function useSlideActive(ref) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current.closest("section[data-screen-label]");
    if (!el) return;
    const update = () => setActive(!el.hasAttribute("hidden"));
    update();
    const obs = new MutationObserver(update);
    obs.observe(el, { attributes: true, attributeFilter: ["hidden"] });
    return () => obs.disconnect();
  }, [ref]);
  return active;
}

window.Chrome = Chrome;
window.ChromeBottom = ChromeBottom;
window.Botanical = Botanical;
window.CountUp = CountUp;
window.useSlideActive = useSlideActive;
