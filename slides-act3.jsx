/* global React, Chrome, ChromeBottom, Botanical, CountUp, useSlideActive */
const { useRef, useEffect, useState } = React;

const TOTAL_A3 = 13;

// ============================================================
//  SLIDE 8 — TRACTION (animated counters)
// ============================================================
function Slide08() {
  const ref = useRef(null);
  const active = useSlideActive(ref);

  return (
    <section data-screen-label="08 Traction" className="slide">
      <div className="bg-aurora"></div>
      <div className="bg-grid"></div>
      <div className="slide-inner" ref={ref}>
        <Chrome section="ACT III · THE MOMENT" label="TRACTION · LAST 72 HOURS" />

        <div style={{ marginTop: 40 }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>This is not projected. This happened last week.</div>
          <h2 className="section-title" style={{ maxWidth: 1500, fontSize: 72 }}>
            9 days of <em>response</em> —<br/>23 substantive replies, all aligned.
          </h2>
        </div>

        <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          <BigStat n={266} label="Emails sent" sub="30+ countries · April 28–29" active={active} />
          <BigStat n={30} label="Replies in 9 days" sub="23 substantive · 7 OOO/auto" active={active} accent />
          <BigStat n={11.3} label="Response rate" suffix="%" decimals={1} sub="Industry average: 1–3%" active={active} />
          <BigStat n={23} label="Problem confirmed" sub="23 / 23 of substantive replies" active={active} />
        </div>

        <div className="content-grid" style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 24, flex: 1 }}>
          <div className="glass" style={{ padding: 20 }}>
            <div className="label" style={{ color: "var(--teal)", marginBottom: 14 }}>WHO REPLIED — AND WHAT THEY ASKED FOR</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                { who: "Jeff Kostuik · CHTA / Verve Seeds (CA)", ask: "Requested a call" },
                { who: "Marco Fugazza · UNCTAD (Intl)", ask: "Requested a call" },
                { who: "Hana Gabrielova · HEMPOINT (CZ)", ask: "Open invitation to help" },
                { who: "David Vaillencourt · ASTM D37 (US)", ask: "Pathway to ASTM ecosystem" },
                { who: "Nathalie Fichaux · InterChanvre (FR)", ask: "Prospective consortium partner" },
                { who: "Igor Bogdanovic · HempTradeMarket (RS)", ask: "Wants infrastructure partner" },
                { who: "Sepi Rad · HempGenTech Group", ask: "Requested deck + governance" },
                { who: "+ 15 more substantive replies", ask: "Same diagnosis · 23 / 23" },
              ].map((r, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "10px 1fr", gap: 10, alignItems: "start", padding: "8px 0", borderBottom: i < 6 ? "1px solid var(--border)" : "none" }}>
                  <div className="tick" style={{ marginTop: 4 }}></div>
                  <div>
                    <div className="serif" style={{ fontSize: 13, fontWeight: 420, color: "var(--text)" }}>{r.who}</div>
                    <div className="mono" style={{ fontSize: 9, letterSpacing: "0.14em", color: "var(--text-faint)", marginTop: 2 }}>{r.ask}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-teal" style={{ padding: 20, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div className="label" style={{ color: "var(--teal)", marginBottom: 14 }}>WHY THIS MATTERS</div>
              <div className="serif" style={{ fontSize: 16, fontWeight: 380, lineHeight: 1.35, color: "var(--text)" }}>
                Cold outreach in B2B infrastructure converts at 1–3%. We hit <span style={{ color: "var(--teal-bright)" }}>11.3%</span> with no warm intro, no pitch deck, and no product to demo.
              </div>
            </div>
            <div style={{ marginTop: 16 }}>
              <div className="serif" style={{ fontSize: 14, fontWeight: 380, color: "var(--text)", lineHeight: 1.4 }}>
                The signal is not "people will use this if you build it."
              </div>
              <div className="serif" style={{ fontSize: 14, fontWeight: 420, color: "var(--teal-bright)", lineHeight: 1.4, marginTop: 4 }}>
                It is "people are angry it does not exist yet."
              </div>
            </div>
          </div>
        </div>

        <ChromeBottom slideNum={8} total={TOTAL_A3} />
      </div>
    </section>
  );
}

function BigStat({ n, label, sub, suffix = "", decimals = 0, active, accent = false }) {
  return (
    <div className={accent ? "glass-teal" : "glass"} style={{ padding: 32, display: "flex", flexDirection: "column", gap: 10 }}>
      <div className="label" style={{ color: accent ? "var(--teal)" : "var(--text-faint)" }}>{label}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span className="metric-num" style={{ color: accent ? "var(--teal-bright)" : "var(--text)" }}>
          <CountUp to={n} suffix={suffix} decimals={decimals} active={active} />
        </span>
      </div>
      <div style={{ fontSize: 14, color: "var(--text-dim)", lineHeight: 1.4 }}>{sub}</div>
    </div>
  );
}

// ============================================================
//  SLIDE 9 — THE BUILDER (Paul's field work)
// ============================================================
function Slide09() {
  return (
    <section data-screen-label="09 The builder" className="slide">
      <div className="bg-gradient-soft"></div>
      <Botanical style={{ right: 60, top: 80, width: 180, height: 680 }} opacity={0.18} />
      <div className="slide-inner">
        <Chrome section="ACT III · THE MOMENT" label="WHO IS BUILDING THIS" />

        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 640px", gap: 80, flex: 1, alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 28 }}>The reason the traction is real</div>
            <h2 className="section-title">Not a startup.<br/><em>A decade of field work.</em></h2>
            <p className="body-large" style={{ marginTop: 32 }}>
              Paul Iglesia has spent years on the ground — at hemp conferences across 
              Europe and Asia, at UNCTAD workshops, in policy rooms and farm fields. 
              The 266 contacts in the outreach campaign were not bought from a database. 
              They were built, conversation by conversation, over years.
            </p>
            <p className="body" style={{ marginTop: 24 }}>
              The 30 replies in 9 days happened because the people who replied 
              already knew Paul was serious, or knew someone who did. That network 
              is the moat. It cannot be replicated by a team that just discovered hemp.
            </p>
            <p className="body" style={{ marginTop: 24 }}>
              A financial partner brings the financial architecture and the founding capital. 
              Paul brings the map of who the industry actually is, and the energy 
              to activate it.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "Years on the ground", value: "5+", sub: "Conferences across EU, Asia, Americas" },
              { label: "Industry contacts (active)", value: "328", sub: "Personally built, no database" },
              { label: "Outreach response rate", value: "11.3%", sub: "vs 1–3% industry average" },
              { label: "Countries in conversation", value: "6", sub: "Before a single product is live" },
              { label: "Financial partner role", value: "CFO partner", sub: "Structuring French Association + Commercial Entity" },
            ].map((item, i) => (
              <div key={i} className="glass" style={{ padding: "18px 24px", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 20 }}>
                <div>
                  <div className="serif" style={{ fontSize: 15, fontWeight: 420, color: "var(--text)" }}>{item.label}</div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: "var(--text-faint)", marginTop: 4 }}>{item.sub}</div>
                </div>
                <div className="serif" style={{ fontSize: 36, fontWeight: 300, color: "var(--teal)", letterSpacing: "-0.02em" }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <ChromeBottom slideNum={9} total={TOTAL_A3} />
      </div>
    </section>
  );
}

// ============================================================
//  SLIDE 10 — CAPITAL STACK (interactive)
// ============================================================
const SOURCES = [
  {
    id: "research",
    label: "EU public co-funding",
    amount: "Major",
    type: "Non-dilutive · consortium",
    timing: "Submission May 2026",
    funds: "Deep-tech research — the three RQs from Slide 5. Consortium, multi-year, public co-funding for the science layer.",
    color: "var(--violet)",
    pct: 88,
  },
  {
    id: "regional",
    label: "Regional Bureau LOI revenue",
    amount: "Variable",
    type: "Operating revenue",
    timing: "Activates per region",
    funds: "Local operations, encoded into each LOI. Funds the bureau model itself — a self-replicating revenue layer that compounds with each new country.",
    color: "var(--gold)",
    pct: 9,
  },
  {
    id: "bridge",
    label: "Bridge round",
    amount: "€100K-250K",
    type: "Convertible / royalty / advisory",
    timing: "This month",
    funds: "Pre-grant operations: 6–12 months of runway between today and the public co-funding decision. Foundation incorporation, Swiss OpCo prep, regional onboarding, BUD beta.",
    color: "var(--teal)",
    pct: 3,
    highlight: true,
  },
];

// ============================================================
//  SLIDE 10 — CAPITAL STACK (interactive)
// ============================================================
function Slide10() {
  const [active, setActive] = useState("bridge");
  const cur = SOURCES.find(s => s.id === active);
  return (
    <section data-screen-label="10 Capital stack" className="slide">
      <div className="bg-gradient-soft"></div>
      <div className="slide-inner">
        <Chrome section="ACT III · THE MOMENT" label="THE CAPITAL STACK" />

        <div style={{ marginTop: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>Three non-competing sources, complementary by design</div>
          <h2 className="section-title" style={{ maxWidth: 1500, fontSize: 72 }}>
            The bridge is the <em>smallest</em><br/>and most urgent piece.
          </h2>
        </div>

        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 720px", gap: 56, flex: 1 }}>
          <div>
            <div className="label" style={{ marginBottom: 20 }}>RELATIVE SCALE — HOVER TO INSPECT</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {SOURCES.map(s => {
                const isActive = active === s.id;
                return (
                  <button
                    key={s.id}
                    onMouseEnter={() => setActive(s.id)}
                    onClick={() => setActive(s.id)}
                    style={{
                      all: "unset",
                      cursor: "pointer",
                      padding: "20px 24px",
                      background: isActive ? `linear-gradient(135deg, ${s.color}18 0%, ${s.color}04 100%)` : "var(--glass)",
                      border: `1px solid ${isActive ? s.color : "var(--border)"}`,
                      borderRadius: 14,
                      backdropFilter: "blur(14px)",
                      transition: "all .3s ease",
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: 24,
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8 }}>
                        <div className="serif" style={{ fontSize: 24, fontWeight: 420, color: isActive ? s.color : "var(--text)" }}>{s.label}</div>
                        {s.highlight && <span className="pill" style={{ padding: "4px 10px", fontSize: 10 }}>THIS PITCH</span>}
                      </div>
                      <div style={{ display: "flex", gap: 20 }}>
                        <span className="mono" style={{ fontSize: 12, letterSpacing: "0.14em", color: "var(--text-faint)" }}>{s.type}</span>
                        <span className="mono" style={{ fontSize: 12, letterSpacing: "0.14em", color: "var(--text-faint)" }}>{s.timing}</span>
                      </div>
                      {/* width bar */}
                      <div style={{ marginTop: 14, height: 4, borderRadius: 999, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                        <div style={{ width: `${s.pct}%`, height: "100%", background: s.color, transition: "width .6s ease", boxShadow: isActive ? `0 0 12px ${s.color}` : "none" }}></div>
                      </div>
                    </div>
                    <div className="serif" style={{ fontSize: 40, fontWeight: 300, color: isActive ? s.color : "var(--text)", letterSpacing: "-0.02em" }}>{s.amount}</div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="glass" style={{ padding: 40, position: "relative", borderColor: cur.color, transition: "border-color .3s" }}>
            <div className="label" style={{ color: cur.color, marginBottom: 20 }}>{cur.id.toUpperCase()} — DETAIL</div>
            <div className="serif" style={{ fontSize: 56, fontWeight: 300, color: cur.color, letterSpacing: "-0.025em", lineHeight: 1 }}>{cur.amount}</div>
            <div className="serif" style={{ fontSize: 28, fontWeight: 420, marginTop: 16, color: "var(--text)" }}>{cur.label}</div>
            <div style={{ display: "flex", gap: 24, marginTop: 18 }}>
              <span className="pill-faint">{cur.type}</span>
              <span className="pill-faint">{cur.timing}</span>
            </div>
            <div style={{ marginTop: 20, padding: 20, borderLeft: `2px solid ${cur.color}`, background: "rgba(255,255,255,0.02)" }}>
              <div className="label" style={{ marginBottom: 8 }}>WHAT IT FUNDS</div>
              <div className="serif" style={{ fontSize: 19, fontWeight: 380, lineHeight: 1.5, color: "var(--text-dim)" }}>{cur.funds}</div>
            </div>
            <div className="divider" style={{ marginTop: 32 }}></div>
            <div style={{ marginTop: 20 }}>
              <div className="label" style={{ marginBottom: 12 }}>WHY THESE THREE DON'T COMPETE</div>
              <div style={{ fontSize: 14, color: "var(--text-dim)", lineHeight: 1.6 }}>
                Public co-funding funds research and consortium overhead. Regional
                revenue funds local operations. The bridge funds the foundation itself
                in the months before either of the other two activates.
              </div>
            </div>
          </div>
        </div>

        <ChromeBottom slideNum={10} total={TOTAL_A3} />
      </div>
    </section>
  );
}

// ============================================================
//  SLIDE 11 — LEGAL STRUCTURE
// ============================================================
function Slide11() {
  const ENTITIES = [
    {
      n: "I",
      name: "INOS Foundation France",
      sub: "Association loi 1901",
      status: "Incorporating this month",
      role: "IP holder. Mission lock. Non-profit coordinator. Signs the consortium agreement and holds the SSOT graph in trust.",
      tag: "FR",
      now: true,
    },
    {
      n: "II",
      name: "Commercial Operating Entity",
      sub: "S.à r.l. to be formed",
      status: "Post-grant award",
      role: "Commercial exploitation vehicle. Where convertibles convert. Where revenue from licensed deployments flows.",
      tag: "OpCo",
    },
  ];
  return (
    <section data-screen-label="10 Legal" className="slide">
      <div className="bg-gradient-soft"></div>
      <div className="slide-inner">
        <Chrome section="ACT III · THE MOMENT" label="LEGAL STRUCTURE" />

        <div className="content-grid" style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 880px", gap: 56, flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="eyebrow" style={{ marginBottom: 28 }}>Two-tier structure, mission-locked</div>
            <h2 className="section-title">A vehicle that<br/><em>cannot be captured.</em></h2>
            <p className="body-large" style={{ marginTop: 28 }}>
              The architecture is deliberate. The IP and the mission live in a French
              non-profit association. Commercial exploitation lives in a separate
              operating company (S.à r.l. to be formed), incorporated once the EIC
              grant is awarded.
            </p>
            <p className="body" style={{ marginTop: 24 }}>
              Investors in the bridge round receive instruments that convert into the
              Commercial Operating Entity or accrue royalty rights — never equity
              in the foundation itself.
            </p>

            <div style={{ marginTop: 28, padding: 18, background: "rgba(16,185,129,0.05)", border: "1px solid var(--border-teal)", borderRadius: 12, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: 999, background: "rgba(16,185,129,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="serif" style={{ fontSize: 16, color: "var(--teal-bright)" }}>P</span>
              </div>
              <div>
                <div className="serif" style={{ fontSize: 15, fontWeight: 420 }}>Paul Iglesia presents</div>
                <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: "var(--text-faint)", marginTop: 2 }}>FOUNDER · FIELD ORIGINATOR</div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {ENTITIES.map((e, i) => (
              <div key={e.n} className={e.now ? "glass-teal" : "glass"} style={{ padding: 28, display: "grid", gridTemplateColumns: "auto 80px 1fr auto", gap: 24, alignItems: "center" }}>
                <div className="serif" style={{ fontSize: 36, fontWeight: 300, color: e.now ? "var(--teal)" : "var(--text-faint)", letterSpacing: "-0.02em" }}>{e.n}</div>
                <div style={{
                  width: 64, height: 64, borderRadius: 12,
                  background: e.now ? "rgba(16,185,129,0.1)" : "var(--glass)",
                  border: `1px solid ${e.now ? "var(--border-teal)" : "var(--border)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span className="mono" style={{ fontSize: 16, fontWeight: 500, letterSpacing: "0.1em", color: e.now ? "var(--teal-bright)" : "var(--text-dim)" }}>{e.tag}</span>
                </div>
                <div>
                  <div className="serif" style={{ fontSize: 16, fontWeight: 420, lineHeight: 1.2 }}>{e.name}</div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: "var(--text-faint)", marginTop: 4 }}>{e.sub.toUpperCase()}</div>
                  <div style={{ fontSize: 14, color: "var(--text-dim)", marginTop: 12, lineHeight: 1.5, maxWidth: 480 }}>{e.role}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="label" style={{ color: e.now ? "var(--teal)" : "var(--text-faint)" }}>STATUS</div>
                  <div className="serif" style={{ fontSize: 16, fontWeight: 420, color: e.now ? "var(--teal-bright)" : "var(--text)", marginTop: 4, maxWidth: 160 }}>{e.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ChromeBottom slideNum={11} total={TOTAL_A3} />
      </div>
    </section>
  );
}

// ============================================================
//  SLIDE 12 — THE ASK
// ============================================================
function Slide12() {
  const INSTRUMENTS = [
    {
      tag: "A",
      name: "Convertible note",
      desc: "Converts into Commercial OpCo equity at the priced round following the public co-funding award. Discount + cap protection. Most analogous to a SAFE for an audience used to that structure.",
    },
    {
      tag: "B",
      name: "Royalty participation",
      desc: "A defined share of revenue from licensed regional deployments, paid through the Commercial Operating Entity once it activates. Non-equity. Caps at a multiple of contribution.",
    },
    {
      tag: "C",
      name: "Advisory + observer",
      desc: "Advisory contract with the foundation, board observer rights to the Commercial Operating Entity at incorporation, founding-stakeholder recognition in the SSOT graph itself.",
    },
  ];
  const USES = [
    { pct: 35, label: "Foundation incorporation & legal", color: "var(--teal)" },
    { pct: 28, label: "Pre-grant team — 4 FTE × 6mo", color: "var(--teal-bright)" },
    { pct: 18, label: "BUD beta + SSOT v0", color: "var(--violet)" },
    { pct: 12, label: "Regional bureau onboarding", color: "var(--gold)" },
    { pct: 7, label: "Reserve", color: "var(--text-faint)" },
  ];
  return (
    <section data-screen-label="11 The ask" className="slide">
      <div className="bg-gradient-soft"></div>
      <div className="slide-inner">
        <Chrome section="ACT III · THE MOMENT" label="THE ASK" />

        <div style={{ marginTop: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>What the bridge funds, what is on offer, why now</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: 48 }}>
            <h2 className="section-title">
              <em>€100,000 – €250,000</em> · 6–12 months ·<br/>founding stakeholder.
            </h2>
            <div style={{ textAlign: "right" }}>
              <div className="label" style={{ marginBottom: 6 }}>WINDOW CLOSES</div>
              <div className="serif" style={{ fontSize: 28, color: "var(--teal-bright)" }}>Co-funding submission · May 2026</div>
            </div>
          </div>
        </div>

        <div className="content-grid" style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 32, flex: 1 }}>
          {/* Use of funds */}
          <div className="glass" style={{ padding: 28 }}>
            <div className="label" style={{ marginBottom: 18 }}>USE OF FUNDS — €100K-250K</div>
            <div style={{ display: "flex", height: 26, borderRadius: 6, overflow: "hidden", border: "1px solid var(--border)" }}>
              {USES.map((u, i) => (
                <div key={i} style={{ width: `${u.pct}%`, background: u.color, opacity: 0.85 }}></div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
              {USES.map((u, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "12px 60px 1fr", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 12, height: 12, borderRadius: 3, background: u.color }}></div>
                  <div className="mono" style={{ fontSize: 14, color: "var(--text)", letterSpacing: "0.04em" }}>{u.pct}%</div>
                  <div style={{ fontSize: 16, color: "var(--text-dim)" }}>{u.label}</div>
                </div>
              ))}
            </div>

            <div className="divider" style={{ marginTop: 20 }}></div>
            <div style={{ marginTop: 24 }}>
              <div className="label" style={{ marginBottom: 10 }}>WHEN CO-FUNDING IS AWARDED</div>
              <div className="serif" style={{ fontSize: 20, fontWeight: 380, lineHeight: 1.45, color: "var(--text)" }}>
                Bridge instruments convert into the Commercial OpCo at the priced round.
                Royalty participants begin accruing against licensed deployments.
                Foundation transitions from incorporation to operating mode.
              </div>
            </div>
          </div>

          {/* Instruments */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div className="label">INSTRUMENTS — CHOOSE ONE OR BLEND</div>
            {INSTRUMENTS.map(ins => (
              <div key={ins.tag} className="glass" style={{ padding: 26, display: "grid", gridTemplateColumns: "60px 1fr", gap: 20, alignItems: "start" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 999,
                  background: "rgba(16,185,129,0.08)", border: "1px solid var(--border-teal)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span className="serif" style={{ fontSize: 16, fontWeight: 420, color: "var(--teal-bright)" }}>{ins.tag}</span>
                </div>
                <div>
                  <div className="serif" style={{ fontSize: 16, fontWeight: 420, color: "var(--text)" }}>{ins.name}</div>
                  <div style={{ fontSize: 14, color: "var(--text-dim)", marginTop: 6, lineHeight: 1.5 }}>{ins.desc}</div>
                </div>
              </div>
            ))}

            <div className="glass-teal" style={{ padding: 24, marginTop: 6 }}>
              <div className="label" style={{ color: "var(--teal)", marginBottom: 8 }}>WHY THIS MONTH SPECIFICALLY</div>
              <div className="serif" style={{ fontSize: 15, fontWeight: 380, lineHeight: 1.5, color: "var(--text)" }}>
                The foundation incorporates this month. Founding-stakeholder positions
                are recorded in the constitutive documents. After the public co-funding
                submission, the structure is sealed and the round closes.
              </div>
            </div>
          </div>
        </div>

        <ChromeBottom slideNum={12} total={TOTAL_A3} />
      </div>
    </section>
  );
}

// ============================================================
//  SLIDE 13 — WHY NOW / WHY US
// ============================================================
function Slide13() {
  return (
    <section data-screen-label="13 Why now" className="slide">
      <div className="bg-aurora"></div>
      <div className="bg-grid"></div>
      <Botanical style={{ left: 60, top: 100, width: 200, height: 700 }} opacity={0.22} />
      <Botanical style={{ right: 60, bottom: 80, width: 220, height: 720, transform: "rotate(180deg)" }} opacity={0.18} />

      <div className="slide-inner">
        <Chrome section="ACT III · THE MOMENT" label="WHY NOW · WHY US" />

        <div style={{ marginTop: 48, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 1500, fontSize: 72 }}>
          <div className="eyebrow" style={{ marginBottom: 32 }}>Conviction, not a team slide</div>
          <h2 className="section-title" style={{ fontSize: 92, lineHeight: 0.98 }}>
            The EU is building <em>sovereign infrastructure.</em><br/>
            Hemp is the stress test.<br/>
            <span style={{ color: "var(--text-dim)" }}>We are building the layer underneath.</span>
          </h2>

          <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            <Conviction
              tag="01"
              title="The demand is verified"
              body="30 industry experts confirmed the same diagnosis in 9 days. 11.3% response on cold outreach. Six countries already in pipeline."
            />
            <Conviction
              tag="02"
              title="The science is fundable"
              body="Three open research questions. European public co-funding submission in May 2026. Non-dilutive support for the deep-tech layer."
            />
            <Conviction
              tag="03"
              title="The vehicle is mission-locked"
              body="French association holds IP. Commercial Operating Entity handles commercial exploitation. The protocol cannot be acquired or captured."
            />
            <Conviction
              tag="04"
              title="The window is real"
              body="Foundation incorporates this month. Bridge instruments record founding-stakeholder positions. After the public co-funding submission, the structure is sealed."
              highlight
            />
          </div>

          <div style={{ marginTop: 48, padding: "32px 40px", borderLeft: "2px solid var(--teal)", background: "rgba(16,185,129,0.04)", maxWidth: 1500, fontSize: 72 }}>
            <div className="serif" style={{ fontSize: 30, fontWeight: 380, lineHeight: 1.35, color: "var(--text)" }}>
              One person already tried, and could not, because the layer below was missing.
              We are building that layer — on European technology, in the open, with a mission
              lock that protects the industry from the infrastructure being captured.
            </div>
            <div style={{ display: "flex", gap: 32, marginTop: 20, alignItems: "center" }}>
              <div className="serif" style={{ fontSize: 20, fontWeight: 420 }}>Paul Iglesia</div>
              <div className="mono" style={{ fontSize: 12, letterSpacing: "0.16em", color: "var(--text-faint)" }}>·</div>
              <div className="mono" style={{ fontSize: 13, letterSpacing: "0.18em", color: "var(--teal-bright)" }}>INOS FOUNDATION FRANCE · MAY 2026</div>
            </div>
          </div>
        </div>

        <ChromeBottom slideNum={13} total={TOTAL_A3} />
      </div>
    </section>
  );
}

function Conviction({ tag, title, body, highlight }) {
  return (
    <div className={highlight ? "glass-teal" : "glass"} style={{ padding: 28, display: "flex", flexDirection: "column", gap: 12 }}>
      <div className="mono" style={{ fontSize: 13, letterSpacing: "0.22em", color: highlight ? "var(--teal)" : "var(--text-faint)" }}>{tag}</div>
      <div className="serif" style={{ fontSize: 24, fontWeight: 420, lineHeight: 1.2, color: highlight ? "var(--teal-bright)" : "var(--text)" }}>{title}</div>
      <div style={{ fontSize: 15, color: "var(--text-dim)", lineHeight: 1.5 }}>{body}</div>
    </div>
  );
}

window.Slide08 = Slide08;
window.Slide09 = Slide09;
window.Slide10 = Slide10;
window.Slide11 = Slide11;
window.Slide12 = Slide12;
window.Slide13 = Slide13;
