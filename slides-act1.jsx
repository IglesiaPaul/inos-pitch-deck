/* global React, Chrome, ChromeBottom, Botanical, CountUp, useSlideActive */
const { useRef, useEffect, useState } = React;

const TOTAL = 12;

// ============================================================
//  SLIDE 1 — COVER
// ============================================================
function Slide01() {
  return (
    <section data-screen-label="01 Cover" className="slide">
      <div className="bg-aurora"></div>
      <div className="bg-grid"></div>
      <Botanical style={{ left: 80, top: 120, width: 220, height: 720 }} opacity={0.28} />
      <Botanical style={{ right: 100, bottom: 80, width: 200, height: 700, transform: "rotate(180deg)" }} opacity={0.22} />

      <div className="slide-inner">
        <div className="chrome-top">
          <span style={{ whiteSpace: "nowrap" }}>INOS<span className="dot"></span>SSOT<span className="dot"></span>HEMPIN</span>
          <span style={{ whiteSpace: "nowrap" }}>BRIDGE ROUND <span className="dot"></span> MAY 2026 <span className="dot"></span> CONFIDENTIAL</span>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 1500 }}>
          <div className="eyebrow" style={{ marginBottom: 36 }}>A founding-stakeholder pitch</div>
          <h1 className="display">
            The infrastructure<br/>
            the hemp industry<br/>
            <em>has been missing.</em>
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: 28, marginTop: 56 }}>
            <div style={{ width: 64, height: 1, background: "var(--teal)" }}></div>
            <p className="body-large" style={{ maxWidth: 880 }}>
              <span className="mono" style={{ color: "var(--teal)", letterSpacing: "0.18em" }}>INOS / SSOT / HEMPIN</span> — a sovereign EU
              knowledge infrastructure for regenerative industries, mission-locked in a French
              association and engineered to be replicated.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 48 }}>
          <div style={{ display: "flex", gap: 80 }}>
            <div>
              <div className="label" style={{ marginBottom: 10 }}>Presented by</div>
              <div className="serif" style={{ fontSize: 26, lineHeight: 1.35, fontWeight: 350 }}>Paul Iglesia</div>
            </div>
            <div>
              <div className="label" style={{ marginBottom: 10 }}>Vehicle</div>
              <div className="serif" style={{ fontSize: 22, lineHeight: 1.45, fontWeight: 380, color: "var(--text-dim)" }}>
                INOS Foundation France<br/>Association loi 1901 · Incorporating now
              </div>
            </div>
            <div>
              <div className="label" style={{ marginBottom: 10 }}>Round</div>
              <div className="serif" style={{ fontSize: 22, lineHeight: 1.45, fontWeight: 380, color: "var(--text-dim)" }}>
                Bridge · €100K-250K<br/>Pre-grant operations
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
            <div className="mono" style={{ fontSize: 12, color: "var(--text-faint)", letterSpacing: "0.18em" }}>01 / 12</div>
            <div style={{ 
              display: "flex", 
              gap: 20, 
              alignItems: "center" 
            }}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", color: "var(--text-faint)" }}>
                → ARROW KEYS TO ADVANCE
              </div>
              <div className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", color: "var(--text-faint)" }}>
                F FULLSCREEN
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
//  SLIDE 2 — TESTIMONY (verbatim quotes)
// ============================================================
const QUOTES = [
  {
    name: "Jeff Kostuik",
    title: "Canadian Hemp Trade Alliance / Verve Seeds — Canada",
    body:
      "The lack of shared infrastructure across the hemp value chain is something I run into regularly, whether it is regulatory alignment, traceability, or simply finding the right people in the ecosystem.",
  },
  {
    name: "Robert Hertel",
    title: "HempAge — Germany · 32 years in the European hemp industry",
    body:
      "What you have put is true. I just have too many negative memories about the whole scene from the past 32 years in it.",
  },
  {
    name: "Dr. Miroslava Kavgic",
    title: "University of Ottawa — hemp construction materials research",
    body:
      "Fragmentation across the hemp value chain remains a key barrier to broader adoption. One important aspect will be how such platforms integrate validated material and performance data, especially for the built environment where standardisation and reliability are critical.",
  },
  {
    name: "Colin Steddy",
    title: "Hemp Inside Pty Ltd — Australia · 20 years experience",
    body:
      "In Australia, people want to do it all themselves. I have been ripped off two times because of greed. I want to work together to help build an industry — I need others to make my business work well.",
  },
];

function Slide02() {
  return (
    <section data-screen-label="02 Testimony" className="slide">
      <div className="bg-gradient-soft"></div>
      <div className="slide-inner">
        <Chrome section="ACT I · THE VOID" label="THE PROBLEM" />

        <div className="content-grid" style={{ display: "grid", gridTemplateColumns: "440px 1fr", gap: 56, marginTop: 36, flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 28 }}>Validated by the field, in 9 days</div>
              <h2 className="section-title" style={{ fontSize: 68, lineHeight: 1.1 }}>The problem,<br/><em>in their words.</em></h2>
              <p className="body" style={{ marginTop: 40 }}>
                One outreach email, sent April 28–29, to 266 hemp professionals across
                30+ countries. 30 unsolicited replies arrived inside 9 days — a 11.3%
                response rate against a cold-outreach industry average of 1–3%. 23 of
                the 23 substantive replies confirmed the same diagnosis.
              </p>
            </div>

            <div style={{ display: "flex", gap: 32, marginTop: 48 }}>
              <Stat n="266" l="Outreach" />
              <Stat n="30" l="Substantive" />
              <Stat n="11.3%" l="Response" />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {QUOTES.map((q, i) => (
              <div key={i} className="glass" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 20 }}>
                <div className="serif" style={{ fontSize: 56, lineHeight: 0.6, color: "var(--teal)", height: 24 }}>“</div>
                <div className="serif" style={{ fontSize: 19, lineHeight: 1.45, fontWeight: 380, color: "var(--text)", textWrap: "pretty" }}>
                  {q.body}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--border)" }}>
                  <div className="serif" style={{ fontSize: 17, fontWeight: 450 }}>{q.name}</div>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-faint)" }}>
                    {q.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ChromeBottom slideNum={2} total={TOTAL} />
      </div>
    </section>
  );
}

function Stat({ n, l }) {
  return (
    <div>
      <div className="serif" style={{ fontSize: 52, fontWeight: 300, lineHeight: 1, color: "var(--text)", letterSpacing: "-0.02em" }}>{n}</div>
      <div className="label" style={{ marginTop: 8 }}>{l}</div>
    </div>
  );
}

// ============================================================
//  SLIDE 3 — IGOR'S STORY (why it's unsolved)
// ============================================================
function Slide03() {
  return (
    <section data-screen-label="03 Unsolved" className="slide">
      <div className="bg-gradient-soft"></div>
      <Botanical style={{ right: 60, top: 80, width: 200, height: 700 }} opacity={0.18} />

      <div className="slide-inner">
        <Chrome section="ACT I · THE VOID" label="THE DEMAND EXISTS · IT JUST CAN'T FLOW" />

        <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "1fr 720px", gap: 64, flex: 1, alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Field evidence — Serbia, 2019</div>
            
            {/* Stat bar */}
            <div className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 28 }}>
              Still active<span className="dot"></span>Self-generating<span className="dot"></span>Hundreds of members<span className="dot"></span>6 years without infrastructure
            </div>
            
            <h2 className="section-title">The market built itself<br/><em>around the gap.</em></h2>
            <p className="body-large" style={{ marginTop: 36 }}>
              HempTradeMarket.com launched in Serbia in 2019 — no outside funding, no 
              infrastructure. Today it still has hundreds of members doing real trade, 
              entirely self-generated. The demand was never the question.
            </p>
            <p className="body" style={{ marginTop: 24 }}>
              What stopped it scaling was not the market. Stripe and other payment rails 
              reject companies with 'hemp' in their business name — not because the 
              activity is illegal, but because there is no verified identity layer letting 
              a processor confirm legitimacy. The infrastructure was missing.
            </p>
            
            {/* Highlighted callout box */}
            <div style={{ marginTop: 32, padding: "20px 24px", borderLeft: "3px solid var(--teal)", background: "rgba(42, 157, 143, 0.08)" }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--teal-light)", marginBottom: 10 }}>
                IGOR BOGDANOVIC · HEMPTRADEMARKET.COM · SERBIA
              </div>
              <div className="serif" style={{ fontSize: 18, fontWeight: 400, color: "var(--text)", fontStyle: "italic" }}>
                "I still need partners in order to restart it."
              </div>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <Timeline />
          </div>
        </div>

        <ChromeBottom slideNum={3} total={TOTAL} />
      </div>
    </section>
  );
}

function Timeline() {
  const items = [
    { y: "2019", h: "HempTradeMarket launches", b: "Serbia. Open to global hemp operators.", live: true },
    { y: "2020", h: "Hundreds of members", b: "Self-generated trust. Manual verification.", live: true },
    { y: "2021", h: "Stripe blocks payments", b: "No verified actor identity layer below.", failed: true },
    { y: "2022—24", h: "Market keeps running", b: "Off-platform, unrouted, unbankable.", live: true },
    { y: "2026", h: "INOS provides the verified identity layer", b: "The missing piece below every marketplace, payment rail, and cross-border transaction in hemp.", solved: true },
  ];
  return (
    <div className="glass" style={{ padding: 40, position: "relative" }}>
      <div className="label" style={{ marginBottom: 28, color: "var(--teal)" }}>FIELD EVIDENCE — TIMELINE</div>
      <div style={{ position: "absolute", left: 110, top: 100, bottom: 60, width: 1, background: "var(--border)" }}></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 24px 1fr", alignItems: "start", gap: 16 }}>
            <div className="mono" style={{ fontSize: 13, color: "var(--text-faint)", letterSpacing: "0.12em", paddingTop: 6 }}>{it.y}</div>
            <div style={{ position: "relative", height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{
                width: it.solved ? 14 : 10,
                height: it.solved ? 14 : 10,
                borderRadius: 999,
                background: it.solved ? "var(--teal)" : it.failed ? "transparent" : "var(--text-faint)",
                border: it.failed ? "1.5px solid var(--pink)" : "none",
                boxShadow: it.solved ? "0 0 12px var(--teal-glow)" : "none",
              }}></div>
            </div>
            <div>
              <div className="serif" style={{ fontSize: 20, fontWeight: 420, color: it.solved ? "var(--teal-bright)" : "var(--text)" }}>{it.h}</div>
              <div style={{ fontSize: 15, color: "var(--text-dim)", marginTop: 4 }}>{it.b}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

window.Slide01 = Slide01;
window.Slide02 = Slide02;
window.Slide03 = Slide03;
