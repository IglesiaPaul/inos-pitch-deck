/* global React, Chrome, ChromeBottom, Botanical */
const { useRef, useEffect, useState } = React;

const TOTAL_A2 = 12;

// ============================================================
//  SLIDE 4 — WHAT INOS IS (interactive layered diagram)
// ============================================================
const LAYERS = [
  { id: "inos", label: "INOS", color: "var(--teal)", desc: "The operating system. The sovereign coordination layer for regenerative industries.", role: "OS" },
  { id: "ssot", label: "SSOT", color: "var(--violet)", desc: "Single source of truth. The verified knowledge graph: actors, regulations, evidence.", role: "GRAPH" },
  { id: "hempin", label: "HEMPIN", color: "var(--teal-bright)", desc: "First deployment. The hemp industry's working instance of INOS.", role: "DEPLOYMENT" },
  { id: "dewii", label: "DEWII", color: "var(--gold)", desc: "Where the industry meets. The community interface — events, members, markets.", role: "INTERFACE" },
  { id: "bud", label: "BUD", color: "var(--pink)", desc: "The AI agent. Knowledge becomes accessible; creators are compensated on every citation.", role: "AGENT" },
];

function Slide04() {
  const [active, setActive] = useState("inos");
  const current = LAYERS.find(l => l.id === active);
  return (
    <section data-screen-label="04 What INOS is" className="slide">
      <div className="bg-gradient-soft"></div>
      <div className="slide-inner">
        <Chrome section="ACT II · THE INFRASTRUCTURE" label="WHAT IT IS" />

        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 760px", gap: 56, flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="eyebrow" style={{ marginBottom: 28 }}>One paragraph, one diagram</div>
            <h2 className="section-title">Not a platform.<br/><em>An operating system.</em></h2>
            <p className="body-large" style={{ marginTop: 32 }}>
              INOS is the protocol layer for plant-based industries — the TCP/IP we have been
              missing. It encodes regulation, identifies actors, and verifies evidence. Hemp
              is the first deployment because it is the hardest case.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 40 }}>
              {LAYERS.map(l => (
                <button
                  key={l.id}
                  onClick={() => setActive(l.id)}
                  style={{
                    all: "unset",
                    cursor: "pointer",
                    display: "grid",
                    gridTemplateColumns: "120px 1fr",
                    alignItems: "center",
                    gap: 24,
                    padding: "16px 20px",
                    borderRadius: 12,
                    background: active === l.id ? "rgba(16,185,129,0.06)" : "transparent",
                    border: `1px solid ${active === l.id ? "var(--border-teal)" : "transparent"}`,
                    transition: "all .25s ease",
                  }}
                >
                  <div className="serif" style={{ fontSize: 22, fontWeight: 450, color: active === l.id ? l.color : "var(--text)" }}>{l.label}</div>
                  <div style={{ fontSize: 16, color: "var(--text-dim)", lineHeight: 1.4 }}>
                    <span className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", color: "var(--text-faint)", marginRight: 12 }}>{l.role}</span>
                    {l.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div style={{ 
            fontSize: 15, color: "var(--text-dim)", lineHeight: 1.6, 
            marginBottom: 20, padding: "14px 18px", 
            border: "1px solid var(--border)", borderRadius: 8,
            fontStyle: "italic"
          }}>
            Think of it as the shared plumbing that lets hemp businesses, regulators, 
            and researchers finally speak the same language.
          </div>

          <StackDiagram active={active} setActive={setActive} />
        </div>

        <ChromeBottom slideNum={4} total={TOTAL_A2} />
      </div>
    </section>
  );
}

function StackDiagram({ active, setActive }) {
  const order = ["bud", "dewii", "hempin", "ssot", "inos"]; // top to bottom (inos is base)
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative" }}>
      <div className="label" style={{ marginBottom: 24, alignSelf: "flex-start" }}>STACK</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, width: "100%" }}>
        {order.map((id, i) => {
          const l = LAYERS.find(x => x.id === id);
          const isActive = active === id;
          const widthPct = 60 + i * 8; // wider as we go down
          return (
            <div
              key={id}
              onMouseEnter={() => setActive(id)}
              style={{
                width: `${widthPct}%`,
                alignSelf: "center",
                padding: "26px 32px",
                background: isActive
                  ? `linear-gradient(135deg, ${l.color}22 0%, ${l.color}05 100%)`
                  : "var(--glass)",
                border: `1px solid ${isActive ? l.color : "var(--border)"}`,
                borderRadius: 14,
                backdropFilter: "blur(14px)",
                cursor: "pointer",
                transition: "all .3s ease",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "center",
                gap: 20,
                boxShadow: isActive ? `0 0 28px ${l.color}33` : "none",
              }}
            >
              <div>
                <div className="serif" style={{ fontSize: 32, fontWeight: 380, letterSpacing: "-0.01em", color: isActive ? l.color : "var(--text)" }}>{l.label}</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-faint)", marginTop: 4 }}>{l.role}</div>
              </div>
              <div style={{ width: 12, height: 12, borderRadius: 999, background: l.color, opacity: isActive ? 1 : 0.4, boxShadow: isActive ? `0 0 12px ${l.color}` : "none" }}></div>
            </div>
          );
        })}
      </div>
      <div className="label" style={{ marginTop: 18, alignSelf: "flex-end", color: "var(--teal)" }}>↓ INFRASTRUCTURE</div>
    </div>
  );
}

// ============================================================
//  SLIDE 5 — THE TECHNOLOGY (3 research questions)
// ============================================================
function Slide05() {
  const RQ = [
    {
      n: "RQ.01",
      title: "Defeasible regulatory contradiction resolution",
      body: "When 50 jurisdictions disagree on what hemp is, traditional logic collapses. We treat regulations as defeasible rules with priority orderings, and resolve contradictions formally — not by averaging, by reasoning.",
      tag: "FORMAL METHODS",
    },
    {
      n: "RQ.02",
      title: "Bounded-confidence LLM-to-graph pipelines",
      body: "Large language models hallucinate. Knowledge graphs do not. We bound LLM outputs to a verified graph, with explicit confidence intervals on every extracted fact, and provenance back to source documents.",
      tag: "ML SYSTEMS",
    },
    {
      n: "RQ.03",
      title: "Verification under regulatory uncertainty",
      body: "What does it mean to verify a producer when the rules themselves are contested? We build verification protocols that are robust under regulatory drift — with audit trails fit for European public funders.",
      tag: "TRUST PROTOCOLS",
    },
  ];
  return (
    <section data-screen-label="05 Technology" className="slide">
      <div className="bg-gradient-soft"></div>
      <div className="slide-inner">
        <Chrome section="ACT II · THE INFRASTRUCTURE" label="THE TECHNOLOGY" />

        <div className="content-grid" style={{ marginTop: 36, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 28 }}>The hard problems</div>
            <h2 className="section-title">Why this is <em>research</em>,<br/>not just SaaS.</h2>
            <p className="body-large" style={{ marginTop: 32 }}>
              Three open scientific questions sit underneath the product. They are why
              a foundation, a consortium, and a sovereign infrastructure framing are the
              right vehicle for this work — and the substance of our European public
              co-funding submission.
            </p>
            <div style={{ marginTop: 40, padding: 24, borderLeft: "2px solid var(--teal)", background: "rgba(16,185,129,0.04)" }}>
              <div className="label" style={{ color: "var(--teal)", marginBottom: 8 }}>EU PUBLIC CO-FUNDING</div>
              <div className="serif" style={{ fontSize: 18, fontWeight: 380, lineHeight: 1.35 }}>
                Consortium · non-dilutive · submission May 2026
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {RQ.map((r, i) => (
              <div key={i} className="glass" style={{ padding: 28, display: "grid", gridTemplateColumns: "120px 1fr", gap: 28, alignItems: "start" }}>
                <div>
                  <div className="serif" style={{ fontSize: 36, fontWeight: 300, color: "var(--teal)", lineHeight: 1 }}>{r.n}</div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--text-faint)", marginTop: 8 }}>{r.tag}</div>
                  <div style={{ fontSize: 12, color: "var(--teal)", fontStyle: "italic", fontFamily: "DM Mono", letterSpacing: "0.04em", marginTop: 6 }}>
                    {r.n === "RQ.01" ? "Plain: 50 countries, 50 different rules. We make the machine resolve the contradictions." :
                     r.n === "RQ.02" ? "Plain: AI makes things up. We stop it by anchoring every answer to verified data." :
                     "Plain: When the law is unclear, we encode the uncertainty — not just the rule."}
                  </div>
                </div>
                <div>
                  <div className="serif" style={{ fontSize: 18, fontWeight: 420, lineHeight: 1.25, color: "var(--text)" }}>{r.title}</div>
                  <div style={{ fontSize: 16, color: "var(--text-dim)", marginTop: 12, lineHeight: 1.5 }}>{r.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ChromeBottom slideNum={5} total={TOTAL_A2} />
      </div>
    </section>
  );
}

// ============================================================
//  SLIDE 6 — REGIONAL BUREAU MODEL
// ============================================================
function Slide06() {
  const REGIONS = [
    { code: "TH", name: "Thailand", status: "signed", who: "Local hemp association · LOI executed" },
    { code: "FR", name: "France", status: "discussion", who: "Nathalie Fichaux · InterChanvre" },
    { code: "CA", name: "Canada", status: "discussion", who: "Jeff Kostuik · CHTA / Verve Seeds" },
    { code: "RS", name: "Serbia", status: "interested", who: "Igor Bogdanovic · HempTradeMarket" },
    { code: "AU", name: "Australia", status: "interested", who: "Colin Steddy · Hemp Inside" },
    { code: "CZ", name: "Czech Rep.", status: "interested", who: "Hana Gabrielova · HEMPOINT" },
  ];
  return (
    <section data-screen-label="06 Regional Bureau" className="slide">
      <div className="bg-gradient-soft"></div>
      <div className="slide-inner">
        <Chrome section="ACT II · THE INFRASTRUCTURE" label="REGIONAL BUREAU MODEL" />

        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 800px", gap: 56, flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="eyebrow" style={{ marginBottom: 28 }}>How INOS spreads, without central control</div>
            <h2 className="section-title">Each association<br/><em>becomes a node.</em></h2>
            <p className="body-large" style={{ marginTop: 32 }}>
              Every regional partner signs an LOI and operates as the in-country bureau —
              binding local actors, encoding local regulation, splitting revenue back to
              local infrastructure. Network effects compound on every signature.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 36 }}>
              <Mech k="1" h="LOI signed" b="Association becomes the regional operator." />
              <Mech k="2" h="Identity bound" b="Local actors verified into the SSOT graph." />
              <Mech k="3" h="Regulation encoded" b="Jurisdiction-specific defeasible rules." />
              <Mech k="4" h="Revenue split" b="Operations funded back to the regional bureau." />
            </div>
          </div>

          <div className="glass" style={{ padding: 40, position: "relative" }}>
            <div className="label" style={{ marginBottom: 24, color: "var(--teal)" }}>GLOBAL PIPELINE</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {REGIONS.map(r => (
                <div key={r.code} style={{
                  padding: "20px 22px",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  background: r.status === "signed" ? "rgba(16,185,129,0.08)" : "transparent",
                  borderColor: r.status === "signed" ? "var(--border-teal)" : "var(--border)",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <div className="serif" style={{ fontSize: 24, fontWeight: 420 }}>{r.name}</div>
                    <div className="mono" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--text-faint)" }}>{r.code}</div>
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-dim)", marginTop: 8 }}>{r.who}</div>
                  <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{
                      width: 8, height: 8, borderRadius: 999,
                      background: r.status === "signed" ? "var(--teal)" : r.status === "discussion" ? "var(--gold)" : "var(--text-faint)",
                      boxShadow: r.status === "signed" ? "0 0 8px var(--teal-glow)" : "none",
                    }}></div>
                    <div className="mono" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                      color: r.status === "signed" ? "var(--teal-bright)" : r.status === "discussion" ? "var(--gold)" : "var(--text-faint)" }}>
                      {r.status === "signed" ? "LOI SIGNED" : r.status === "discussion" ? "IN DISCUSSION" : "INTERESTED"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="divider" style={{ marginTop: 24 }}></div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
              <Mini n="1" l="Signed" />
              <Mini n="2" l="In discussion" />
              <Mini n="3" l="Interested" />
              <Mini n="6" l="Active conversations" />
            </div>
          </div>
        </div>

        <ChromeBottom slideNum={6} total={TOTAL_A2} />
      </div>
    </section>
  );
}

function Mech({ k, h, b }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 18, alignItems: "start" }}>
      <div className="mono" style={{ fontSize: 13, letterSpacing: "0.18em", color: "var(--teal)", paddingTop: 4 }}>0{k}</div>
      <div>
        <div className="serif" style={{ fontSize: 20, fontWeight: 420, color: "var(--text)" }}>{h}</div>
        <div style={{ fontSize: 15, color: "var(--text-dim)", marginTop: 2 }}>{b}</div>
      </div>
    </div>
  );
}

function Mini({ n, l }) {
  return (
    <div>
      <div className="serif" style={{ fontSize: 32, fontWeight: 300, color: "var(--text)" }}>{n}</div>
      <div className="label" style={{ marginTop: 4 }}>{l}</div>
    </div>
  );
}

// ============================================================
//  SLIDE 7 — KNOWLEDGE ECONOMY
// ============================================================
function Slide07() {
  return (
    <section data-screen-label="07 Knowledge economy" className="slide">
      <div className="bg-gradient-soft"></div>
      <div className="slide-inner">
        <Chrome section="ACT II · THE INFRASTRUCTURE" label="THE KNOWLEDGE ECONOMY" />

        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, flex: 1, alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 28 }}>Wealth redistribution, written into the protocol</div>
            <h2 className="section-title">Every citation<br/><em>pays the source.</em></h2>
            <p className="body-large" style={{ marginTop: 36 }}>
              When BUD answers a question, it cites the verified knowledge in the graph —
              and the people who put that knowledge there earn. Researchers, farmers,
              activists, regulators, lab technicians.
            </p>
            <p className="body" style={{ marginTop: 24 }}>
              NADA points are the unit. They convert into platform credit, regional
              funding, or — for verified contributors — a direct royalty stream. The
              people who do the work are compensated by the system they contribute to.
              That is not a feature. It is the protocol.
            </p>
          </div>

          <div style={{ position: "relative" }}>
            <LinearFlow />
          </div>
        </div>

        <ChromeBottom slideNum={7} total={TOTAL_A2} />
      </div>
    </section>
  );
}

function LinearFlow() {
  const steps = [
    {
      icon: "📄",
      label: "01 CONTRIBUTE",
      title: "Expert adds knowledge",
      body: "Researchers, farmers, lab technicians upload verified studies, trial data, regulatory analysis into the SSOT graph.",
      color: "var(--teal)",
    },
    {
      icon: "💬",
      label: "02 CITE",
      title: "BUD answers using it",
      body: "When an industry actor asks BUD a question, it retrieves and cites the relevant verified sources — with confidence scores and provenance.",
      color: "var(--violet)",
    },
    {
      icon: "⚡",
      label: "03 EARN",
      title: "Creator earns NADA points",
      body: "Every citation triggers a micro-royalty. The contributor earns every time their work is used — perpetually, automatically, with zero middlemen.",
      color: "var(--gold)",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {steps.map((s, i) => (
        <div key={i} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
          <div style={{
            width: 56, height: 56, borderRadius: 12, flexShrink: 0,
            background: `color-mix(in srgb, ${s.color} 12%, transparent)`,
            border: `1px solid color-mix(in srgb, ${s.color} 40%, transparent)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 24,
          }}>{s.icon}</div>
          <div style={{ flex: 1 }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: s.color, marginBottom: 6 }}>{s.label}</div>
            <div className="serif" style={{ fontSize: 20, fontWeight: 420, color: "var(--text)", marginBottom: 6 }}>{s.title}</div>
            <div style={{ fontSize: 14, color: "var(--text-dim)", lineHeight: 1.55 }}>{s.body}</div>
          </div>
          {i < steps.length - 1 && (
            <div style={{ position: "absolute", left: 28, marginTop: 60, height: 16, width: 1, background: "var(--border)" }} />
          )}
        </div>
      ))}
      <div style={{ 
        marginTop: 8, padding: "16px 20px", 
        borderLeft: "2px solid var(--teal)", 
        background: "rgba(42,157,143,0.04)" 
      }}>
        <div className="serif" style={{ fontSize: 18, fontWeight: 380, color: "var(--text)", lineHeight: 1.4 }}>
          Wealth redistribution is not a feature. It is the protocol.
        </div>
      </div>
    </div>
  );
}

window.Slide04 = Slide04;
window.Slide05 = Slide05;
window.Slide06 = Slide06;
window.Slide07 = Slide07;
