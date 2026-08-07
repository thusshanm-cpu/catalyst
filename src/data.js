// ————— Core vocabulary —————

export const FIELDS = [
  { id: 'software', label: 'Software Engineering', role: 'Engineering' },
  { id: 'civil', label: 'Civil Engineering', role: 'Civil Engineering' },
  { id: 'business', label: 'Business', role: 'Business' },
  { id: 'finance', label: 'Finance', role: 'Finance' },
  { id: 'accounting', label: 'Accounting', role: 'Accounting' },
  { id: 'marketing', label: 'Marketing', role: 'Marketing' },
  { id: 'design', label: 'Design', role: 'Design' },
  { id: 'product', label: 'Product Management', role: 'Product' },
  { id: 'sales', label: 'Sales', role: 'Sales' },
]

export const fieldLabel = (id) => FIELDS.find((f) => f.id === id)?.label ?? id

// ————— Startup profiles (the other side for candidate sessions) —————

export const STARTUPS = [
  {
    id: 's1',
    name: 'Helios Robotics',
    tagline: 'Autonomous drones for precision agriculture',
    role: 'Software Engineering',
    roleType: 'Intern',
    phase: 'Seed · Series A',
    team: '6 people',
    founder: 'Priya Nair',
    title: 'Co-founder & CTO',
  },
  {
    id: 's2',
    name: 'Loopback',
    tagline: 'Realtime analytics for indie game studios',
    role: 'Product Management',
    roleType: 'Intern',
    phase: 'Pre-seed',
    team: '4 people',
    founder: 'Marcus Feld',
    title: 'Founder',
  },
  {
    id: 's3',
    name: 'Fern & Flux',
    tagline: 'Carbon accounting for SMBs',
    role: 'Business',
    roleType: 'Associate',
    phase: 'Seed',
    team: '11 people',
    founder: 'Amina Yusuf',
    title: 'Head of Operations',
  },
  {
    id: 's4',
    name: 'Daymark Labs',
    tagline: 'B2B marketplace for surplus inventory',
    role: 'Sales',
    roleType: 'SDR',
    phase: 'Series A',
    team: '9 people',
    founder: 'Tomas Reyes',
    title: 'VP Revenue',
  },
  {
    id: 's5',
    name: 'Pulseboard',
    tagline: 'Patient vitals on a single dashboard',
    role: 'Design',
    roleType: 'Intern',
    phase: 'Seed',
    team: '8 people',
    founder: 'Ivy Zhang',
    title: 'Design Lead',
  },
]

// ————— Candidate profiles (the other side for employer sessions) —————

export const CANDIDATES = [
  {
    id: 'c1',
    name: 'Maya Chen',
    school: 'University of Waterloo',
    program: 'Computer Science · 3rd year',
    field: 'software',
    resume: [
      'Built an open-source CLI for CI cache busting (2.1k stars)',
      'SDE intern at a 40-person dev tools startup',
      'Led a 5-person team to win a 36-hour regional hackathon',
    ],
    links: { github: 'github.com/mayacodes', linkedin: 'in/maya-chen', portfolio: 'mayachen.dev' },
    certs: ['AWS Cloud Practitioner', 'Meta Front-End'],
    verified: ['ID verified', 'Face matched', 'School email confirmed'],
    sessionNote: 'Prior Catalyst session: 1',
  },
  {
    id: 'c2',
    name: 'Jonas Okafor',
    school: 'University of Toronto',
    program: 'Commerce · Finance specialist · 4th year',
    field: 'finance',
    resume: [
      'VP Finance, student investment fund ($180k AUM)',
      'Summer analyst at a credit union treasury team',
      'Won case comp: capital raise for a pre-revenue clinic',
    ],
    links: { linkedin: 'in/jonas-okafor' },
    certs: ['CFI FMVA (in progress)'],
    verified: ['ID verified', 'Face matched', 'Transcript confirmed'],
    sessionNote: 'New to Catalyst',
  },
]

// ————— Live queue (anonymous matches by role type only) —————

export const CANDIDATE_QUEUE = [
  { id: 'q1', field: 'software', roleType: 'Intern', hiring: 3, region: 'Anywhere' },
  { id: 'q2', field: 'business', roleType: 'Associate', hiring: 2, region: 'Anywhere' },
  { id: 'q3', field: 'sales', roleType: 'SDR', hiring: 4, region: 'North America' },
]

export const EMPLOYER_QUEUE = [
  { id: 'e1', field: 'software', sessionNote: 'CS · 3rd year · 1 prior session' },
  { id: 'e2', field: 'marketing', sessionNote: 'Marketing · 2nd year · new' },
  { id: 'e3', field: 'design', sessionNote: 'Design · grad student · 3 prior sessions' },
]

// ————— Startup Simulation Mode —————

export const SIMULATIONS = {
  software: [
    {
      id: 'debug',
      title: 'The disappearing order',
      kicker: 'Debugging · 90 seconds on the clock',
      brief:
        'A customer reports that "sometimes" their order total shows $0 at checkout. The team can\u2019t reproduce it locally. You\u2019re looking at the checkout handler:',
      code: `function checkout(cart, promo) {
  let total = 0;
  for (const item of cart) total += item.price;
  if (promo) total -= promo.discount;
  return { total: Math.max(0, total) };
}`,
      choices: [
        { id: 'a', label: 'Round totals to two decimals before returning', verdict: 'Hmm — good hygiene, but $0.01 drift wouldn\u2019t zero a total.' },
        { id: 'b', label: 'Guard against promo.discount being undefined', verdict: 'You found it — when a promo code has no discount field, total minus undefined is NaN, and Math.max(0, NaN) silently returns 0. That\u2019s the disappearing order.' },
        { id: 'c', label: 'Cache the cart total in a global variable', verdict: 'Shared mutable state makes the bug harder to find, not easier.' },
      ],
      correct: 'b',
      followup: 'The fix works. Now a teammate argues we should just disable promo codes at peak hours instead. How do you respond?',
    },
    {
      id: 'system',
      title: 'Choose your architecture',
      kicker: 'System design · 2 minutes',
      brief:
        'Your startup\u2019s feature flags service is one giant Postgres table, and the 3 engineers all edit it by hand. Traffic doubles every month. Pick the direction you\u2019d argue for:',
      choices: [
        { id: 'a', label: 'Move flags into the app code and ship with deploys', verdict: 'Simpler — but now every hotfix ships flags, and non-engineers lose access. You\u2019d keep a config API.' },
        { id: 'b', label: 'Keep Postgres, add an admin UI, cache reads in Redis', verdict: 'Practical and defensible: the DB stays the source of truth, the UI ends the hand-editing, and caching absorbs the traffic growth. Strong choice for a 3-person team.' },
        { id: 'c', label: 'Rewrite in a serverless framework over the weekend', verdict: 'Bold — but a rewrite is a lot of risk for a tool that works. You\u2019d ship the quick win first.' },
      ],
      correct: 'b',
      followup: 'The investor just said the flag service must be multi-tenant by Friday. What do you cut?',
    },
  ],
  sales: [
    {
      id: 'pitch',
      title: 'Sell the thing you\u2019ve never seen',
      kicker: '90-second pitch · go when ready',
      brief:
        'You pick up the call. The customer has never heard of you, and neither have you — it\u2019s a brand-new product. Sell it. 90 seconds, no notes.',
      product: { name: 'Anchorly', oneLiner: 'A weekly SMS that turns your unused gym memberships into resaleable credits.' },
      after: 'The customer asks: "Is this another subscription I\u2019ll forget about?"',
    },
  ],
  marketing: [
    {
      id: 'campaign',
      title: 'Launch a campaign, blind',
      kicker: 'Campaign design · 2 minutes',
      brief:
        'A fintech aimed at first-time investors launches next month. You have a $40k budget and zero brand awareness. Build the campaign — channels, split, and the one metric you\u2019ll defend.',
      channels: [
        { id: 'tiktok', label: 'TikTok creators', hint: 'Cheap reach, low trust' },
        { id: 'uab', label: 'University ambassadors', hint: 'High trust, slow to scale' },
        { id: 'pod', label: 'Finance podcasts', hint: 'Audience match, pricey' },
        { id: 'paid', label: 'Paid search', hint: 'Intent, but tiny volume early' },
      ],
    },
  ],
  business: [
    {
      id: 'funding',
      title: 'The funding cut',
      kicker: 'Resource prioritization · 2 minutes',
      brief:
        'A fictional startup just lost its next round of funding, effective in 30 days. You have 3 initiatives and can only keep one fully funded. Rank them, and be ready to defend the cut.',
      options: [
        { id: 'retention', label: 'Fix onboarding churn', note: 'Retention is 38%, churn costs ~$12k/mo' },
        { id: 'growth', label: 'Ship the referral loop', note: 'Projected +15% signups in 60 days' },
        { id: 'enterprise', label: 'Close the enterprise pilot', note: '$50k contract, 60% likely in 45 days' },
      ],
    },
  ],
  design: [
    {
      id: 'crit',
      title: 'The redesign crit',
      kicker: 'Design decision · 2 minutes',
      brief:
        'A teammate ships a new onboarding flow that tests 22% better but silently drops the dark-mode toggle users asked for last quarter. Walk us through what you do with it:',
      choices: [
        { id: 'a', label: 'Ship it — the data wins, dark mode can wait', verdict: 'Fast, but you just burned the quarter\u2019s most-requested feature and the users who asked for it.' },
        { id: 'b', label: 'Ask the teammate to add dark mode before shipping', verdict: 'Reasonable — but you\u2019re adding scope to a flow that was designed without it.' },
        { id: 'c', label: 'Frame it as a two-track problem: ship the flow, ship dark mode as a follow-up sprint with its own success metric', verdict: 'Strong answer — you\u2019re optimizing the whole system, not the test score.' },
      ],
      correct: 'c',
    },
  ],
}

// ————— Unexpected in-session events —————

export const EVENTS = [
  {
    id: 'ev1',
    title: 'The customer is upset',
    body: 'A customer just posted a public complaint about your last update. The interviewer wants to see how you handle it live.',
    ask: 'What do you say to them — on the record?',
  },
  {
    id: 'ev2',
    title: 'The investor changed the requirements',
    body: 'Mid-session: the investor quietly changed the deadline from "next quarter" to "Friday".',
    ask: 'What moves first? What gets cut?',
  },
  {
    id: 'ev3',
    title: 'A teammate disagrees',
    body: 'Your teammate (the interviewer) pushes back on your last idea: "That\u2019s not how we do it here."',
    ask: 'How do you respond?',
  },
]

// ————— AI summary scaffolding —————

export function buildSummary(role) {
  const dims = [
    { k: 'Communication', v: 84 },
    { k: 'Adaptability', v: 92 },
    { k: 'Critical thinking', v: 88 },
    { k: 'Problem-solving', v: 86 },
    { k: 'Collaboration', v: 81 },
    { k: 'Confidence', v: 79 },
  ]
  const strengths = [
    'Explains reasoning in plain language before jumping to answers',
    'Recovers quickly when new information contradicts a plan',
    'Asks one sharp clarifying question before acting',
  ]
  const growth = [
    'Pause before the first suggestion — let the interviewer finish the context',
    'When defending a decision, name the trade-off you are accepting',
    'Summarize next steps out loud so the other person can correct course',
  ]
  const headline =
    role === 'employer'
      ? 'Strong fit for a fast-moving, ambiguous environment. Candidate stays composed under mid-session curveballs and argues from first principles rather than reciting expected answers.'
      : 'You held up well under pressure. The mid-session change caught you once, then you adapted cleanly — that recovery is what startups are actually screening for.'
  return { dims, strengths, growth, headline }
}
