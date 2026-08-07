import { useStore } from '../store.jsx'
import { Check } from '../components/icons.jsx'

export default function Landing() {
  const { api } = useStore()

  const go = (role) => api.navigate('onboarding') /* role picked on the onboarding step 1 */

  return (
    <div>
      {/* ————— Nav ————— */}
      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <svg className="brand-mark" viewBox="0 0 32 32">
              <rect width="32" height="32" rx="9" fill="none" stroke="rgba(242,237,228,.25)" />
              <circle cx="14" cy="16" r="5" fill="#FF5C3A" />
              <circle cx="22" cy="10" r="3" fill="#FF8A5C" />
              <circle cx="22" cy="22" r="3" fill="#8B7CFF" />
            </svg>
            Catalyst
          </div>
          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#sims">Simulations</a>
            <a href="#safety">Trust &amp; safety</a>
            <a href="#ai">AI &amp; consent</a>
          </div>
          <div className="nav-actions">
            <button className="btn btn-ghost btn-sm" onClick={() => go('employer')}>I&apos;m a startup</button>
            <button className="btn btn-primary btn-sm" onClick={() => go('candidate')}>I&apos;m a student</button>
          </div>
        </div>
      </nav>

      {/* ————— Hero ————— */}
      <header className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Live talent discovery</span>
            <h1 className="display display-xl">
              The resume is the <em>last thing</em> we look at.
            </h1>
            <p className="hero-sub">
              Catalyst pairs verified students with startups for blind, ten-minute video
              interviews and on-the-spot startup simulations — so hiring runs on how you think
              under pressure, not where you&apos;ve worked.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary btn-lg" onClick={() => go('candidate')}>Interview as a student</button>
              <button className="btn btn-violet btn-lg" onClick={() => go('employer')}>Hire as a startup</button>
            </div>
            <p className="hero-note">
              <span className="check"><Check size={13} /></span> Free for students · Verify once ·
              You only see the role, never the company
            </p>
          </div>

          <LiveMock />
        </div>

        <div className="container">
          <div className="hero-stats">
            <div className="stat"><div className="num">10<em>:</em>00</div><div className="lbl">one session, start to finish</div></div>
            <div className="stat"><div className="num">100<em>%</em></div><div className="lbl">accounts manually verified first</div></div>
            <div className="stat"><div className="num">0</div><div className="lbl">advance notice. no canned answers</div></div>
          </div>
        </div>
      </header>

      {/* ————— How it works ————— */}
      <section className="section" id="how">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow center">The loop</span>
            <h2 className="display display-lg">Four moves, ten minutes.</h2>
            <p>No resume review, no phone screens, no waiting weeks. Every session follows the same honest loop.</p>
          </div>
          <div className="steps-grid">
            {[
              ['Verify', 'Every account is reviewed by a human — government ID, face match, education, and a real company behind every employer.'],
              ['Match blind', 'You pick your field, we pick the room. You know the role — never the company. No name bias in the first round.'],
              ['Interview live', 'A ten-minute video session. The employer sets the scene, then it\u2019s unscripted — including on-the-spot startup simulations.'],
              ['Decide & unlock', 'Skip, save, or ask for a follow-up. If they\u2019re interested, the employer unlocks your verified profile. The resume comes last.'],
            ].map(([t, b], i) => (
              <div className="step-card" key={t}>
                <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="title">{t}</div>
                <p className="body">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— Startup Simulation Mode ————— */}
      <section className="section" id="sims">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Startup Simulation Mode</span>
            <h2 className="display display-lg">Interviews that feel like work.</h2>
            <p>
              Employers can replace behaviour questions with live scenarios tailored to the role.
              And mid-session, they can change the rules — an upset customer, a teammate who
              disagrees, an investor who moves the deadline. That&apos;s the point.
            </p>
          </div>
          <div className="sim-grid">
            {[
              ['⚙️', 'Debug a live bug', 'Software', 'A checkout handler that zeroes out totals "sometimes". Find it, fix it, defend it — out loud, on the clock.'],
              ['🤝', 'Sell the unknown', 'Sales', 'A product neither of you has heard of. Ninety seconds to make the first sale. No notes.'],
              ['📣', 'Launch blind', 'Marketing', '$40k, no brand awareness, one month. Build the campaign, split the budget, defend one metric.'],
              ['🧮', 'The funding cut', 'Business', 'Funding dies in 30 days. Three initiatives, one budget. Rank them, then argue for what you cut.'],
            ].map(([icon, title, field, body], i) => (
              <div className={`sim-card ${i % 2 ? 'ember' : ''}`} key={title}>
                <div className="sim-icon">{icon}</div>
                <div>
                  <span className="kicker">{field}</span>
                  <div className="title">{title}</div>
                  <p className="body">{body}</p>
                  <div className="tag-row">
                    <span className="sim-tag">LIVE</span>
                    <span className="sim-tag">90s–2m</span>
                    <span className="sim-tag">Unexpected twists</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— Collaboration ————— */}
      <section className="section" id="collab">
        <div className="container cols-2">
          <div>
            <span className="eyebrow">Collaboration sessions</span>
            <h3 className="display display-md" style={{ margin: '14px 0 12px' }}>
              Stop talking about teamwork. Show it.
            </h3>
            <p className="muted" style={{ fontSize: '15px' }}>
              For collaborative roles, sessions run on a shared whiteboard. Candidates and
              employers sketch, rank, and build together in real time — the way they&apos;d
              actually work, not the way they&apos;d rehearse.
            </p>
            <div className="consent-box" style={{ borderStyle: 'solid' }}>
              {['Shared canvas, design crits, and technical scratch space', 'Employer and candidate draw on the same board', 'Optional — never forced into a session'].map((t) => (
                <div className="row" key={t}><span className="tick"><Check size={13} /></span>{t}</div>
              ))}
            </div>
          </div>
          <div className="session-mock">
            <div className="mock-bar">
              <span className="live-dot" />
              <span className="mock-live">COLLAB</span>
              <span className="mock-timer">whiteboard · 02:41</span>
            </div>
            <div style={{ height: 260, background: '#100e0b', position: 'relative' }}>
              <svg viewBox="0 0 400 260" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                <line x1="60" y1="200" x2="220" y2="120" stroke="rgba(255,92,58,.7)" strokeWidth="3" strokeLinecap="round" />
                <line x1="220" y1="120" x2="330" y2="160" stroke="rgba(139,124,255,.7)" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 5" />
                <rect x="150" y="150" width="70" height="50" fill="none" stroke="rgba(79,209,165,.6)" strokeWidth="2" />
                <circle cx="330" cy="160" r="6" fill="rgba(139,124,255,.8)" />
                <text x="30" y="40" fill="rgba(242,237,228,.45)" fontSize="12" fontFamily="IBM Plex Mono, monospace">retention flow — sketch</text>
                <text x="60" y="212" fill="rgba(242,237,228,.35)" fontSize="11" fontFamily="IBM Plex Mono, monospace">drop-off here?</text>
              </svg>
              <div style={{ position: 'absolute', left: 14, bottom: 12, fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: 'rgba(242,237,228,.5)' }}>teammate is drawing…</div>
            </div>
          </div>
        </div>
      </section>

      {/* ————— Trust & safety ————— */}
      <section className="section" id="safety">
        <div className="container cols-2">
          <div className="band" style={{ margin: 0 }}>
            <span className="eyebrow">Trust &amp; safety</span>
            <h3>Verified in, verified out.</h3>
            <p>A hiring room only works if every person in it is real. Catalyst layers verification at every step.</p>
            <ul className="safety-list" style={{ marginTop: 22 }}>
              {[
                ['Government ID + facial match', 'Identity is checked against a live face scan, not a selfie upload.'],
                ['Manual review on every account', 'A human reviews each candidate and each company before approval.'],
                ['Employer authorization', 'Startups prove they exist and that the recruiter can actually hire.'],
                ['AI-assisted moderation & reporting', 'Misconduct, impersonation, or harassment ends in suspension — fast.'],
              ].map(([t, b]) => (
                <li key={t}>
                  <span className="ic">✓</span>
                  <span><strong style={{ color: 'var(--text)', fontWeight: 500 }}>{t}</strong><br />{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Consent is a feature</span>
            <h3 className="display display-md" style={{ margin: '14px 0 12px' }}>AI assists. It never decides.</h3>
            <p className="muted" style={{ fontSize: '15px' }}>
              With both participants&apos; explicit consent, sessions can be recorded and analyzed
              to produce structured summaries — communication, adaptability, collaboration — that
              support the human decision. Decline, and you get the same interview, with nothing
              recorded.
            </p>
            <div className="consent-box">
              {['Clear consent form before you ever join a session', 'Recording & AI analysis are always opt-in, per session', 'AI writes observations, never verdicts', 'Withdraw consent anytime the law allows'].map((t) => (
                <div className="row" key={t}><span className="tick"><Check size={13} /></span>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ————— CTA ————— */}
      <section className="section">
        <div className="container">
          <div className="section-head center" style={{ marginBottom: 30 }}>
            <span className="eyebrow center">Join the room</span>
            <h2 className="display display-lg">Potential doesn&apos;t wait for an opening.</h2>
          </div>
          <div className="cta-grid">
            <div className="cta-card cand">
              <span className="role">For students</span>
              <h4>Get judged on how you think.</h4>
              <p>One verification. Real startups in your field. Practice under pressure with feedback that makes you a sharper interviewer.</p>
              <button className="btn btn-primary" onClick={() => go('candidate')}>Interview as a student</button>
            </div>
            <div className="cta-card startup">
              <span className="role">For startups</span>
              <h4>Hire the room, not the resume.</h4>
              <p>Meet adaptable, curious students who can actually handle ambiguity — ten minutes at a time, in your field, with zero noise.</p>
              <button className="btn btn-violet" onClick={() => go('employer')}>Hire as a startup</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand" style={{ cursor: 'default' }}>Catalyst</div>
          <div className="small">Prototype for the hackathon — every flow is simulated, no real data is stored.</div>
        </div>
      </footer>
    </div>
  )
}

/* ————— The hero signature: a live session, in miniature ————— */

function LiveMock() {
  return (
    <div className="session-mock" aria-hidden>
      <div className="mock-bar">
        <span className="live-dot" />
        <span className="mock-live">LIVE</span>
        <span className="mock-timer">software intern · 04:12</span>
      </div>
      <div className="mock-stage">
        <div className="mock-tile a">
          <div className="tile-art"><div className="orb violet" /></div>
          <div className="tile-tag">
            <span>Founder</span>
            <span className="small">· Helios Robotics</span>
          </div>
        </div>
        <div className="mock-tile b">
          <div className="tile-art"><div className="orb ember" /></div>
          <div className="tile-tag you"><span>You</span></div>
        </div>
        <div className="mock-ring">
          <svg viewBox="0 0 100 100">
            <circle className="ring-bg" cx="50" cy="50" r="46" />
            <circle className="ring-fg" cx="50" cy="50" r="46" />
          </svg>
          <div className="num">4:12</div>
        </div>
        <span className="mock-phase">unscripted</span>
      </div>
      <div className="mock-scenario">
        <div className="icon">⚡</div>
        <div>
          <div className="t">Scenario incoming — the investor just changed the requirements.</div>
          <div className="s">The founder wants to see how you adapt, live.</div>
        </div>
        <span className="cta">ADAPT →</span>
      </div>
    </div>
  )
}
