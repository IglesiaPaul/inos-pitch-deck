/* global React, Chrome, ChromeBottom, Botanical, CountUp, useSlideActive */
const { useRef, useEffect, useState } = React;

const TOTAL_A3 = 12;

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

        <div style={{ marginTop: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 24 }}>This is not projected. This happened last week.</div>
          <h2 className="section-title" style={{ maxWidth: 1500 }}>
            24 hours of <em>response</em> —<br/>14 substantive replies, all aligned.
          </h2>
        </div>

        <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          <BigStat n={266} label="Emails sent" sub="30+ countries · April 28–29" active={active} />
          <BigStat n={21} label="Replies in 24 hours" sub="14 substantive · 7 OOO/auto" active={active} accent />
          <BigStat n={7.9} label="Response rate" suffix="%" decimals={1} sub="Industry average: 1–3%" active={active} />
          <BigStat n={14} label="Problem confirmed" sub="14 / 14 of substantive replies" active={active} />
        </div>

        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32, flex: 1 }}>
          <div className="glass" style={{ padding: 36 }}>
            <div className="label" style={{ color: "var(--teal)", marginBottom: 24 }}>WHO REPLIED — AND WHAT THEY ASKED FOR</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[
                { who: "Jeff Kostuik · CHTA / Verve Seeds (CA)", ask: "Requested a call" },
                { who: "Marco Fugazza · UNCTAD (Intl)", ask: "Requested a call" },
                { who: "Hana Gabrielova · HEMPOINT (CZ)", ask: "Open invitation to help" },
                { who: "David Vaillencourt · ASTM D37 (US)", ask: "Pathway to ASTM ecosystem" },
                { who: "Nathalie Fichaux · InterChanvre (FR)", ask: "Prospective consortium partner" },
                { who: "Igor Bogdanovic · HempTradeMarket (RS)", ask: "Wants infrastructure partner" },
                { who: "Sepi Rad · HempGenTech Group", ask: "Requested deck + governance" },
                { who: "+ 6 more substantive replies", ask: "Same diagnosis · 14 / 14" },
              ].map((r, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "10px 1fr", gap: 14, alignItems: "start", padding: "10px 0", borderBottom: i < 6 ? "1px solid var(--border)" : "none" }}>
                  <div className="tick" style={{ marginTop: 8 }}></div>
                  <div>
                    <div className="serif" style={{ fontSize: 17, fontWeight: 420, color: "var(--text)" }}>{r.who}</div>
                    <div className="mono" style={{ fontSize: 11, letterSpacing: "0.14em", color: "var(--text-faint)", marginTop: 2 }}>{r.ask}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-teal" style={{ padding: 36, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div className="label" style={{ color: "var(--teal)", marginBottom: 18 }}>WHY THIS MATTERS</div>
              <div className="serif" style={{ fontSize: 26, fontWeight: 380, lineHeight: 1.35, color: "var(--text)" }}>
                Cold outreach in B2B infrastructure converts at 1–3%. We hit <span style={{ color: "var(--teal-bright)" }}>7.9%</span> with no warm intro, no pitch deck, and no product to demo.
              </div>
            </div>
            <div style={{ marginTop: 28 }}>
              <div className="serif" style={{ fontSize: 20, fontWeight: 380, color: "var(--text)", lineHeight: 1.4 }}>
                The signal is not "people will use this if you build it."
              </div>
              <div className="serif" style={{ fontSize: 22, fontWeight: 420, color: "var(--teal-bright)", lineHeight: 1.4, marginTop: 8 }}>
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
//  SLIDE 9 — CAPITAL STACK (interactive)
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
    amount: "€250K",
    type: "Convertible / royalty / advisory",
    timing: "This month",
    funds: "Pre-grant operations: 6–12 months of runway between today and the public co-funding decision. Foundation incorporation, Swiss OpCo prep, regional onboarding, BUD beta.",
    color: "var(--teal)",
    pct: 3,
    highlight: true,
  },
];

function Slide09() {
  const [active, setActive] = useState("bridge");
  const cur = SOURCES.find(s => s.id === active);
  return (
    <section data-screen-label="09 Capital stack" className="slide">
      <div className="bg-gradient-soft"></div>
      <div className="slide-inner">
        <Chrome section="ACT III · THE MOMENT" label="THE CAPITAL STACK" />

        <div style={{ marginTop: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 24 }}>Three non-competing sources, complementary by design</div>
          <h2 className="section-title" style={{ maxWidth: 1500 }}>
            The bridge is the <em>smallest</em><br/>and most urgent piece.
          </h2>
        </div>

        <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "1fr 720px", gap: 80, flex: 1 }}>
          <div>
            <div className="label" style={{ marginBottom: 20 }}>RELATIVE SCALE — HOVER TO INSPECT</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
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
                      <div style={{ display: "flex", gap: 24 }}>
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
            <div style={{ marginTop: 28, padding: 20, borderLeft: `2px solid ${cur.color}`, background: "rgba(255,255,255,0.02)" }}>
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

        <ChromeBottom slideNum={9} total={TOTAL_A3} />
      </div>
    </section>
  );
}

// ============================================================
//  SLIDE 10 — LEGAL STRUCTURE (Daphne's slide)
// ============================================================
function Slide10() {
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
      name: "Swiss OpCo",
      sub: "AG / Sàrl — to be incorporated",
      status: "Post-grant award",
      role: "Commercial exploitation vehicle. Where convertibles convert. Where revenue from licensed deployments flows.",
      tag: "CH",
    },
    {
      n: "III",
      name: "Luxembourg SOPARFI",
      sub: "Holding · IP licensing",
      status: "Long-term",
      role: "IP licensing entity for cross-border exploitation. Activated when revenue scale justifies it. Tax-treaty friendly.",
      tag: "LU",
    },
  ];
  return (
    <section data-screen-label="10 Legal" className="slide">
      <div className="bg-gradient-soft"></div>
      <div className="slide-inner">
        <Chrome section="ACT III · THE MOMENT" label="LEGAL STRUCTURE — DAPHNE PRESENTS" />

        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 880px", gap: 80, flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="eyebrow" style={{ marginBottom: 28 }}>Three jurisdictions, one mission lock</div>
            <h2 className="section-title">A vehicle that<br/><em>cannot be captured.</em></h2>
            <p className="body-large" style={{ marginTop: 36 }}>
              The architecture is deliberate. The IP and the mission live in a French
              non-profit. Commercial exploitation lives in a Swiss operating company,
              incorporated only once the EIC grant is awarded. Long-term licensing flows
              through a Luxembourg holding when scale justifies the structure.
            </p>
            <p className="body" style={{ marginTop: 24 }}>
              Investors in the bridge round receive instruments that convert into the
              Swiss OpCo or accrue royalty rights against the Luxembourg holding —
              never equity in the foundation itself.
            </p>

            <div style={{ marginTop: 36, padding: 18, background: "rgba(16,185,129,0.05)", border: "1px solid var(--border-teal)", borderRadius: 12, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: 999, background: "rgba(16,185,129,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="serif" style={{ fontSize: 18, color: "var(--teal-bright)" }}>D</span>
              </div>
              <div>
                <div className="serif" style={{ fontSize: 17, fontWeight: 420 }}>Daphne presents this slide</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: "0.14em", color: "var(--text-faint)", marginTop: 2 }}>FINANCIAL ANCHOR · FOUNDING PARTNER</div>
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
                  <span className="mono" style={{ fontSize: 18, fontWeight: 500, letterSpacing: "0.1em", color: e.now ? "var(--teal-bright)" : "var(--text-dim)" }}>{e.tag}</span>
                </div>
                <div>
                  <div className="serif" style={{ fontSize: 22, fontWeight: 420, lineHeight: 1.2 }}>{e.name}</div>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: "0.14em", color: "var(--text-faint)", marginTop: 4 }}>{e.sub.toUpperCase()}</div>
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

        <ChromeBottom slideNum={10} total={TOTAL_A3} />
      </div>
    </section>
  );
}

// ============================================================
//  SLIDE 11 — THE ASK
// ============================================================
function Slide11() {
  const INSTRUMENTS = [
    {
      tag: "A",
      name: "Convertible note",
      desc: "Converts into Swiss OpCo equity at the priced round following the public co-funding award. Discount + cap protection. Most analogous to a SAFE for an audience used to that structure.",
    },
    {
      tag: "B",
      name: "Royalty participation",
      desc: "A defined share of revenue from licensed regional deployments, paid through the Luxembourg holding once it activates. Non-equity. Caps at a multiple of contribution.",
    },
    {
      tag: "C",
      name: "Advisory + observer",
      desc: "Advisory contract with the foundation, board observer rights to the Swiss OpCo at incorporation, founding-stakeholder recognition in the SSOT graph itself.",
    },
  ];
  const USES = [
    { pct: 35, label: "Foundation incorporation & legal", color: "var(--teal)" },
    { pct: 28, label: "Pre-grant team — 4 FTE × 9mo", color: "var(--teal-bright)" },
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
          <div className="eyebrow" style={{ marginBottom: 24 }}>What the bridge funds, what is on offer, why now</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: 48 }}>
            <h2 className="section-title">
              <em>€250K</em> · 6–12 months ·<br/>founding stakeholder.
            </h2>
            <div style={{ textAlign: "right" }}>
              <div className="label" style={{ marginBottom: 6 }}>WINDOW CLOSES</div>
              <div className="serif" style={{ fontSize: 28, color: "var(--teal-bright)" }}>Co-funding submission · May 2026</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 32, flex: 1 }}>
          {/* Use of funds */}
          <div className="glass" style={{ padding: 36 }}>
            <div className="label" style={{ marginBottom: 24 }}>USE OF FUNDS — €250K</div>
            <div style={{ display: "flex", height: 26, borderRadius: 6, overflow: "hidden", border: "1px solid var(--border)" }}>
              {USES.map((u, i) => (
                <div key={i} style={{ width: `${u.pct}%`, background: u.color, opacity: 0.85 }}></div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 28 }}>
              {USES.map((u, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "12px 60px 1fr", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 12, height: 12, borderRadius: 3, background: u.color }}></div>
                  <div className="mono" style={{ fontSize: 14, color: "var(--text)", letterSpacing: "0.04em" }}>{u.pct}%</div>
                  <div style={{ fontSize: 16, color: "var(--text-dim)" }}>{u.label}</div>
                </div>
              ))}
            </div>

            <div className="divider" style={{ marginTop: 28 }}></div>
            <div style={{ marginTop: 24 }}>
              <div className="label" style={{ marginBottom: 10 }}>WHEN CO-FUNDING IS AWARDED</div>
              <div className="serif" style={{ fontSize: 20, fontWeight: 380, lineHeight: 1.45, color: "var(--text)" }}>
                Bridge instruments convert into the Swiss OpCo at the priced round.
                Royalty participants begin accruing against licensed deployments.
                Foundation transitions from incorporation to operating mode.
              </div>
            </div>
          </div>

          {/* Instruments */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div className="label">INSTRUMENTS — CHOOSE ONE OR BLEND</div>
            {INSTRUMENTS.map(ins => (
              <div key={ins.tag} className="glass" style={{ padding: 26, display: "grid", gridTemplateColumns: "60px 1fr", gap: 20, alignItems: "start" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 999,
                  background: "rgba(16,185,129,0.08)", border: "1px solid var(--border-teal)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span className="serif" style={{ fontSize: 22, fontWeight: 420, color: "var(--teal-bright)" }}>{ins.tag}</span>
                </div>
                <div>
                  <div className="serif" style={{ fontSize: 22, fontWeight: 420, color: "var(--text)" }}>{ins.name}</div>
                  <div style={{ fontSize: 14, color: "var(--text-dim)", marginTop: 8, lineHeight: 1.5 }}>{ins.desc}</div>
                </div>
              </div>
            ))}

            <div className="glass-teal" style={{ padding: 24, marginTop: 6 }}>
              <div className="label" style={{ color: "var(--teal)", marginBottom: 8 }}>WHY THIS MONTH SPECIFICALLY</div>
              <div className="serif" style={{ fontSize: 17, fontWeight: 380, lineHeight: 1.5, color: "var(--text)" }}>
                The foundation incorporates this month. Founding-stakeholder positions
                are recorded in the constitutive documents. After the public co-funding
                submission, the structure is sealed and the round closes.
              </div>
            </div>
          </div>
        </div>

        <ChromeBottom slideNum={11} total={TOTAL_A3} />
      </div>
    </section>
  );
}

// ============================================================
//  SLIDE 12 — WHY NOW / WHY US
// ============================================================
function Slide12() {
  return (
    <section data-screen-label="12 Why now" className="slide">
      <div className="bg-aurora"></div>
      <div className="bg-grid"></div>
      <Botanical style={{ left: 60, top: 100, width: 200, height: 700 }} opacity={0.22} />
      <Botanical style={{ right: 60, bottom: 80, width: 220, height: 720, transform: "rotate(180deg)" }} opacity={0.18} />

      <div className="slide-inner">
        <Chrome section="ACT III · THE MOMENT" label="WHY NOW · WHY US" />

        <div style={{ marginTop: 48, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 1500 }}>
          <div className="eyebrow" style={{ marginBottom: 32 }}>Conviction, not a team slide</div>
          <h2 className="section-title" style={{ fontSize: 92, lineHeight: 0.98 }}>
            The EU is building <em>sovereign infrastructure.</em><br/>
            Hemp is the stress test.<br/>
            <span style={{ color: "var(--text-dim)" }}>We are building the layer underneath.</span>
          </h2>

          <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            <Conviction
              tag="01"
              title="The demand is verified"
              body="21 industry experts confirmed the same diagnosis in 24 hours. 7.9% response on cold outreach. Six countries already in pipeline."
            />
            <Conviction
              tag="02"
              title="The science is fundable"
              body="Three open research questions. European public co-funding submission in May 2026. Non-dilutive support for the deep-tech layer."
            />
            <Conviction
              tag="03"
              title="The vehicle is mission-locked"
              body="French association holds IP. Swiss OpCo handles commercial exploitation. The protocol cannot be acquired or captured."
            />
            <Conviction
              tag="04"
              title="The window is real"
              body="Foundation incorporates this month. Bridge instruments record founding-stakeholder positions. After the public co-funding submission, the structure is sealed."
              highlight
            />
          </div>

          <div style={{ marginTop: 64, padding: "32px 40px", borderLeft: "2px solid var(--teal)", background: "rgba(16,185,129,0.04)", maxWidth: 1500 }}>
            <div className="serif" style={{ fontSize: 30, fontWeight: 380, lineHeight: 1.35, color: "var(--text)" }}>
              One person already tried, and could not, because the layer below was missing.
              We are building that layer — on European technology, in the open, with a mission
              lock that protects the industry from the infrastructure being captured.
            </div>
            <div style={{ display: "flex", gap: 32, marginTop: 28, alignItems: "center" }}>
              <div className="serif" style={{ fontSize: 20, fontWeight: 420 }}>Paul Iglesia</div>
              <div className="mono" style={{ fontSize: 12, letterSpacing: "0.16em", color: "var(--text-faint)" }}>·</div>
              <div className="serif" style={{ fontSize: 20, fontWeight: 420 }}>Daphne</div>
              <div className="mono" style={{ fontSize: 12, letterSpacing: "0.16em", color: "var(--text-faint)" }}>·</div>
              <div className="mono" style={{ fontSize: 13, letterSpacing: "0.18em", color: "var(--teal-bright)" }}>INOS FOUNDATION FRANCE · MAY 2026</div>
            </div>
          </div>
        </div>

        <ChromeBottom slideNum={12} total={TOTAL_A3} />
      </div>
    </section>
  );
}

function Conviction({ tag, title, body, highlight }) {
  return (
    <div className={highlight ? "glass-teal" : "glass"} style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14 }}>
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
