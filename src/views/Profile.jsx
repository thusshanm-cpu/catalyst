import { useStore } from '../store.jsx'
import { CANDIDATES, fieldLabel } from '../data.js'
import { Check } from '../components/icons.jsx'

export default function Profile() {
  const { state, api } = useStore()
  const isEmployer = state.user?.role === 'employer'
  const mock = CANDIDATES[0]

  // Employer sees the matched candidate's profile; candidates see their own
  const p = isEmployer
    ? {
        name: mock.name,
        role: `${mock.program} · ${fieldLabel(mock.field)}`,
        school: mock.school,
        avatar: null,
        initials: mock.name.split(' ').map((w) => w[0]).join(''),
        resume: mock.resume,
        links: mock.links,
        certs: mock.certs,
        verified: mock.verified,
        fields: [fieldLabel(mock.field)],
      }
    : {
        name: state.user?.name || 'You',
        role: `${state.user?.school || ''} · ${state.user?.fields?.map(fieldLabel).join(', ') || ''}`,
        school: state.user?.school,
        avatar: state.user?.avatar,
        initials: (state.user?.name || 'Y').split(' ').map((w) => w[0]).join('').slice(0, 2),
        resume: [
          'Finalist, regional case competition',
          'Led a 4-person project sprint',
          'Built a portfolio of applied coursework',
        ],
        links: { github: 'github.com/you', linkedin: 'in/you', portfolio: 'you.dev' },
        certs: ['Verified on Catalyst'],
        verified: ['ID verified', 'Face matched', 'School email confirmed'],
        fields: state.user?.fields?.map(fieldLabel) || [],
      }

  return (
    <div className="shell">
      <div className="container shell-main">
        <button className="back-link" onClick={() => api.navigate('dashboard')}>← Back to dashboard</button>

        {isEmployer && (
          <div className="lock-banner" style={{ marginTop: 18 }}>
            <span className="lock">🔓</span>
            <span>
              <strong style={{ color: 'var(--text)' }}>Profile unlocked.</strong> You evaluated
              {mock.name.split(' ')[0]} live, on a scenario — the resume only showed up after you decided they were worth it.
            </span>
          </div>
        )}

        <div className="profile-grid" style={{ marginTop: 20 }}>
          <div className="card profile-card">
            <div className="avatar-lg">
              {p.avatar ? <img src={p.avatar} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} /> : p.initials}
            </div>
            <h2>{p.name}</h2>
            <div className="p-role">{p.role}</div>
            <div className="p-verified">
              {p.verified.map((v) => <span className="v-chip" key={v}>✓ {v}</span>)}
            </div>
            <div className="profile-links">
              {Object.entries(p.links).map(([k, v]) => (
                <a key={k} href={`https://${v}`} target="_blank" rel="noreferrer" onClick={(e) => e.preventDefault()}>
                  <span style={{ textTransform: 'capitalize' }}>{k === 'github' ? 'GitHub' : k === 'linkedin' ? 'LinkedIn' : 'Portfolio'}</span>
                  <span style={{ marginLeft: 'auto', color: 'var(--text-3)', fontSize: 12, fontFamily: 'var(--font-mono)' }}>{v}</span>
                </a>
              ))}
            </div>
            <div className="p-tags" style={{ marginTop: 18, display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
              {p.fields.map((f) => <span className="sim-tag" key={f}>{f}</span>)}
            </div>
          </div>

          <div className="card resume-card">
            <h3>Snapshot</h3>
            <p className="text-2" style={{ fontSize: 14, lineHeight: 1.65 }}>
              {isEmployer
                ? `A ${mock.program.toLowerCase()} student at ${mock.school}. ${mock.sessionNote}. Known on Catalyst for recovering fast when a scenario changes mid-session.`
                : 'This is what a verified startup sees only after deciding to match with you. Keep it honest and current.'}
            </p>

            <h3>Experience &amp; projects</h3>
            <ul>{p.resume.map((r) => <li key={r}>{r}</li>)}</ul>

            <h3>Education</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--surface-3)', border: '1px solid var(--line)', display: 'grid', placeItems: 'center', fontWeight: 600 }}>{p.school?.split(' ').map((w) => w[0]).join('').slice(0, 2)}</div>
              <div>
                <div style={{ fontWeight: 500, fontSize: 14.5 }}>{p.school}</div>
                <div className="text-3" style={{ fontSize: 12.5 }}>{mock ? (isEmployer ? mock.program : p.role) : p.role}</div>
              </div>
            </div>

            <h3>Verified credentials</h3>
            <div className="p-tags" style={{ marginTop: 4 }}>
              {p.certs.map((c) => <span className="v-chip" key={c}>✓ {c}</span>)}
            </div>

            <div className="consent-box" style={{ marginTop: 26, marginBottom: 0 }}>
              <div className="row"><span className="tick"><Check size={13} /></span>Shown only after a live match — never searchable, never in a feed.</div>
              <div className="row"><span className="tick"><Check size={13} /></span>Every credential re-verified by a human before it displays.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
