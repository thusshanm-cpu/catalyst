# Catalyst — Interview for potential, not resumes

> **Potential before credentials.** Catalyst pairs verified students with startups for blind,
> ten-minute video interviews and on-the-spot startup simulations — so employers evaluate how
> someone thinks, communicates, and adapts *before* they read a resume.

A fully client-side React + Vite prototype. No backend, no API keys, no accounts — every flow
(verification, matchmaking, sessions, simulations, AI summaries) runs in the browser.

## Live demo

**https://thusshanm-cpu.github.io/catalyst/** — deployed automatically from `main` on every push
via GitHub Actions. Open it on any device, any network.

## What it is

Catalyst is a talent-discovery platform where startups meet students through live, unscripted
interviews instead of using resumes as the first screening tool. Traditional platforms reward past
experience and credentials, which causes talented students to be overlooked before they ever get an
interview. Catalyst flips the pipeline: **potential is evaluated before credentials.**

- **Blind matching** — candidates pick a field (software, business, marketing, design…) and are
  matched with a verified startup actively hiring in that field. Nobody knows who they'll meet:
  candidates know the role, never the company — no name bias in the first round.
- **Ten-minute live sessions** — the employer sets the scene for the first minute; the rest is
  unscripted. Real questions, real pressure, no memorized answers.
- **Startup simulations** — employers launch interactive scenarios tailored to the role: debugging
  a checkout bug, a 90-second cold sales pitch, a $40k marketing campaign, ranking initiatives
  after a funding cut. Mid-session they can change the rules — an upset customer, an investor
  changing requirements, a disagreeing teammate — to see how candidates adapt.
- **Collaboration sessions** — a shared whiteboard where candidates and employers solve problems
  together, stroke by stroke, live.
- **Resume at match** — the candidate's verified resume arrives the moment they match; the
  employer's full profile unlock (portfolio, GitHub, credentials) still comes after the session.
- **Verification-first** — webcam face capture, ID upload, and an email code gate every account;
  profiles are manually reviewed before approval.
- **AI-assisted summaries** — with consent, sessions generate structured interview summaries
  (communication, adaptability, confidence, problem-solving) that support — never replace — human
  judgment.

## Try the demo

Get into the product in under a minute, no typing required:

1. **⚡ Instant demo** buttons on the landing page jump straight to a verified dashboard — as a
   student (Jordan Lee) or a startup (Helios Robotics).
2. Inside onboarding, **⚡ Pre-fill demo data** fills every field in one click, and
   **Skip animation** fast-forwards the manual review.
3. On the dashboard, flip on **DEMO SPEED** to shrink sessions from 10:00 to 90 seconds.
4. In a demo session, the **CANDIDATE / EMPLOYER** toggle lets you run both sides from one screen:
   launch a simulation, fire an unexpected change, draw on the whiteboard, then end with an
   AI summary.

> Camera blocked? Every face-capture step offers a placeholder fallback.

## Features

| Flow | Details |
| --- | --- |
| Landing | Product thesis, live-session hero mock, simulation showcase, trust & consent sections |
| Onboarding | Role pick → details → **real webcam face capture** + ID upload + email code → field selection → animated manual review → verified stamp |
| Dashboards | Candidate blind-match queue / employer hiring queue + live presence + session history |
| Live session | Matchmaking radar → 3-2-1 countdown → video tiles (your real webcam) → 10:00 timer → intro → unscripted phases |
| Simulation mode | Interactive scenarios per field: debug the bug (with verdicts), choose your architecture, 90-second sales pitch, $40k marketing campaign, funding-cut ranking, redesign crit |
| Unexpected changes | Employers fire mid-session curveballs — upset customer, investor changes, disagreeing teammate — with live adaptation cues |
| Collaboration | Shared whiteboard with pen / eraser / colours + simulated teammate sketching |
| Post-session | Continue / follow-up / save / skip, then a consent-gated **AI summary** with animated scores |
| Resume at match | The candidate's verified resume arrives with the match; the full profile unlocks after the session |

## Live matchmaking (two tabs, no backend)

Matchmaking genuinely works between two browser tabs on the same machine via `BroadcastChannel` —
no server required — and it stays blind: neither side ever sees the other's name or company.

1. Sign up **as a student** in one tab (pick a field).
2. Open the app in a second tab and sign up **as a startup** hiring the same field.
3. Flip the **LIVE MATCH** toggle on both dashboards — each shows the other as live.
4. Press start in both tabs: they discover each other, handshake (search → offer → accept), and
   land in a joint session marked `PEER LIVE`.

While matched, everything relays between the tabs in real time: simulations open on both sides, the
candidate's answers stream into the employer's activity feed, unexpected changes land as curveball
cards, whiteboard strokes draw live on both canvases, and end-of-session decisions are exchanged.

No peer within 12 seconds? It falls back to a clearly labeled `DEMO MATCH`.

## Run it locally

```bash
npm install
npm run dev   # → http://localhost:5173
```

## Stack & honesty note

React 18 + Vite 6, entirely client-side. **Real:** the UI, webcam capture, whiteboard canvas,
cross-tab matching and relay, form validation, timers, and consent gating. **Simulated for the
prototype:** the interview counterpart (scripted peers), the AI summary, verification (files are
not inspected; the email code is a fixed demo code), and persistence (localStorage, per device).
