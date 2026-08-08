import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import { StoreProvider, useStore } from './store.jsx'
import { ToastProvider } from './toast.jsx'
import Landing from './views/Landing.jsx'
import Onboarding from './views/Onboarding.jsx'
import Dashboard from './views/Dashboard.jsx'
import Session from './views/Session.jsx'
import PostSession from './views/PostSession.jsx'
import Profile from './views/Profile.jsx'
import { X, Zap } from './components/icons.jsx'

const JUDGE_STEPS = [
  ['Landing', 'Hit “⚡ Instant demo · student” (or · startup) — skips sign-up, you land verified.'],
  ['Dashboard', 'Press “Start a 10-minute session” and watch the radar find your blind match.'],
  ['In the call', 'Open the shared whiteboard and draw together. As the employer, launch a simulation or “Send an unexpected change”.'],
  ['End session', 'Four decisions — continue, follow up, save, or skip. Then read the AI summary.'],
  ['Other role', 'Back out and take the other Instant demo to see the resume appear at match time.'],
]

/* Floating judge-facing demo guide — pill bottom-right, opens a step card. */
function JudgeGuide() {
  const [open, setOpen] = useState(() => !sessionStorage.getItem('catalyst-guide-seen'))
  useEffect(() => {
    sessionStorage.setItem('catalyst-guide-seen', '1')
  }, [])

  return (
    <div className="judge-guide">
      {open && (
        <div className="guide-card">
          <div className="guide-head">
            <div>
              <span className="guide-eyebrow">Judge mode · 60-second walkthrough</span>
              <h4>How to demo Catalyst</h4>
            </div>
            <button className="guide-close" onClick={() => setOpen(false)} aria-label="Close demo guide"><X size={15} /></button>
          </div>
          <ol className="guide-steps">
            {JUDGE_STEPS.map(([t, b], i) => (
              <li key={t}>
                <span className="guide-num">{i + 1}</span>
                <div>
                  <b>{t}</b>
                  <p>{b}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="guide-note">Every flow is simulated — click anything, nothing breaks.</p>
        </div>
      )}
      <button className={`guide-pill ${open ? 'open' : ''}`} onClick={() => setOpen((o) => !o)}>
        <Zap size={13} /> Demo guide
      </button>
    </div>
  )
}

function Router() {
  const { state } = useStore()
  switch (state.view) {
    case 'onboarding':
      return <Onboarding />
    case 'dashboard':
      return <Dashboard />
    case 'session':
      return <Session />
    case 'post':
      return <PostSession />
    case 'profile':
      return <Profile />
    default:
      return <Landing />
  }
}

/* Thin ember reading bar that fills as you scroll — Motion spring, not manual rAF. */
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  const opacity = useTransform(scrollYProgress, [0, 0.02], [0, 1])
  return <motion.div className="scroll-progress" style={{ scaleX, opacity }} aria-hidden />
}

/* Soft ember glow that trails the cursor — Motion motion-values + springs. */
function CursorGlow() {
  const reduce = useReducedMotion()
  const mx = useMotionValue(-600)
  const my = useMotionValue(-600)
  const x = useSpring(mx, { stiffness: 110, damping: 18, mass: 0.5 })
  const y = useSpring(my, { stiffness: 110, damping: 18, mass: 0.5 })
  const [on, setOn] = useState(false)

  useEffect(() => {
    if (reduce) return
    const onMove = (e) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      setOn(true)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my, reduce])

  return <motion.div className="cursor-glow" style={{ x, y, opacity: on ? 1 : 0 }} aria-hidden />
}

export default function App() {
  return (
    <StoreProvider>
      <ToastProvider>
        <ScrollProgress />
        <div className="page-glow" />
        <div className="bg-sweep" aria-hidden />
        <CursorGlow />
        <JudgeGuide />
        <div className="app">
          <Router />
        </div>
      </ToastProvider>
    </StoreProvider>
  )
}
