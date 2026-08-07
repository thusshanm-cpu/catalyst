# Catalyst — hackathon prototype

> **Potential before credentials.** Catalyst pairs verified students with startups for blind,
> ten-minute video interviews and on-the-spot startup simulations.

A fully client-side React + Vite prototype. No backend, no API keys — everything (verification,
matchmaking, sessions, simulations, AI summaries) is simulated in the browser.

## Run it

```bash
npm install
npm run dev        # → http://localhost:5173
```

## Share it with judges

**Same WiFi (other devices):** the dev server already listens on your LAN IP — the firewall rule
`Catalyst Dev Server 5173` (TCP 5173) is added. Share `http://<your-ip>:5173` (`ipconfig` → IPv4).

**Any network (public URL):** the zero-account Cloudflare tunnel:

```bash
./.deploy/cloudflared.exe tunnel --url http://localhost:5173 --no-autoupdate
```

The first public URL printed in the log is the live link (a `*.trycloudflare.com` address). It stays
up while the process runs. The tunnel only proxies the same origin — two tabs on the tunnel URL
still live-match via BroadcastChannel.

## What's implemented

| Flow | Details |
| --- | --- |
| Landing | Product thesis, live-session hero mock, simulations, trust & consent sections |
| Onboarding | Role pick → details → **real webcam face capture** + ID upload + email code → field selection → animated manual-review → verified stamp |
| Dashboards | Candidate blind-match queue / employer hiring queue + session history |
| Live session | Matchmaking → 3-2-1 countdown → video tiles (**your real webcam**) → 10:00 timer → intro → unscripted phases |
| Simulation Mode | Interactive scenarios per field: debug the bug (with verdicts), 90-second sales pitch, $40k marketing campaign, funding-cut ranking |
| Unexpected changes | Employer fires mid-session curveballs (upset customer, investor changes, disagreeing teammate) |
| Collaboration | Shared whiteboard with pen/eraser/colors + simulated teammate sketching |
| Post-session | Continue / follow-up / save / skip, consent-gated **AI summary** with animated scores |
| Profile unlock | Employer unlocks the candidate's verified profile after the session — resume comes last |

## Demo tips

- **DEMO SPEED** toggle (dashboard) shrinks sessions to 90s for quick demos.
- The **CANDIDATE / EMPLOYER** toggle inside a demo session lets you demo both sides from one screen.
- Camera blocked? Every face-capture step offers a placeholder fallback.
- State persists in `localStorage` — open DevTools → Application → clear `catalyst.state.v1` to reset.

## Real matchmaking (two tabs, no backend)

Matchmaking genuinely works between two browser tabs on the same machine — via `BroadcastChannel`, so there's no server. It stays blind: neither side ever sees the other's name or company.

To demo it:

1. Sign up **as a student** in one tab (pick a field).
2. Open `http://localhost:5173` in a second tab and sign up **as a startup** hiring the same field.
3. Flip the **LIVE MATCH** toggle on both dashboards — each shows the other as "live" in the presence strip.
4. Press start in both tabs: they discover each other, handshake (search → offer → accept), and land in a joint session showing `PEER LIVE`.

While matched, everything relays between the tabs in real time — both directions:

- Employer launches a **simulation** → it opens on the candidate's screen.
- **The candidate's answers stream back live**: choice picks (with right/wrong verdict), the funding-cut ranking, the shipped campaign, pitch milestones — all appear in the employer's "Candidate activity" feed and inside the scenario.
- Employer fires an **unexpected change** → the candidate sees the curveball card; when they handle it, the employer gets the confirmation.
- **Whiteboard strokes draw live on both canvases** (streamed point-by-point with a "peer is drawing…" indicator); opening the board on one side notifies the other.
- Ending the session ends both; **decisions** (save / follow-up / skip) are exchanged on the post screen.

No peer within 12s? It falls back to a simulated match, clearly labeled `DEMO MATCH`.
