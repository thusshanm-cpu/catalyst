const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const Svg = ({ p, children }) => (
  <svg viewBox="0 0 24 24" width={p.size ?? 16} height={p.size ?? 16} style={p.style} aria-hidden>
    {children}
  </svg>
)

export const Check = (p) => (
  <Svg p={p}><path {...base} d="M20 6 9 17l-5-5" /></Svg>
)

export const Lock = (p) => (
  <Svg p={p}><rect {...base} x="5" y="11" width="14" height="9" rx="2" /><path {...base} d="M8 11V7a4 4 0 0 1 8 0v4" /></Svg>
)

export const Unlock = (p) => (
  <Svg p={p}><rect {...base} x="5" y="11" width="14" height="9" rx="2" /><path {...base} d="M8 11V7a4 4 0 0 1 7.7-1.4" /></Svg>
)

export const Mic = (p) => (
  <Svg p={p}><rect {...base} x="9" y="3" width="6" height="11" rx="3" /><path {...base} d="M5 11a7 7 0 0 0 14 0M12 18v3" /></Svg>
)

export const ArrowRight = (p) => (
  <Svg p={p}><path {...base} d="M5 12h14m-6-6 6 6-6 6" /></Svg>
)

export const ArrowUpRight = (p) => (
  <Svg p={p}><path {...base} d="M7 17 17 7M7 7h10v10" /></Svg>
)

export const Spark = (p) => (
  <Svg p={p}><path {...base} d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" /></Svg>
)

export const Zap = (p) => (
  <Svg p={p}><path {...base} d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" /></Svg>
)

export const Pencil = (p) => (
  <Svg p={p}><path {...base} d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /></Svg>
)

export const Eraser = (p) => (
  <Svg p={p}><path {...base} d="m7 21-4-4L14 6l7 7-6 8H7Z" /><path {...base} d="m10 11 7 7" /></Svg>
)

export const Trash = (p) => (
  <Svg p={p}><path {...base} d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /></Svg>
)

export const Send = (p) => (
  <Svg p={p}><path {...base} d="m22 2-7 20-4-9-9-4Z" /><path {...base} d="M22 2 11 13" /></Svg>
)

export const X = (p) => (
  <Svg p={p}><path {...base} d="M18 6 6 18M6 6l12 12" /></Svg>
)

export const Bug = (p) => (
  <Svg p={p}>
    <path {...base} d="M8 2v3m8-3v3" />
    <ellipse {...base} cx="12" cy="12" rx="7" ry="5" />
    <path {...base} d="M5 12H2m20 0h-3M5 7l-3 1m19-1 3 1M5 17l-3 1m19-1 3 1" />
    <path {...base} d="M8.5 15c1.1 1.2 5.9 1.2 7 0" />
  </Svg>
)

export const Layers = (p) => (
  <Svg p={p}><path {...base} d="m12 2 9 5-9 5-9-5 9-5Z" /><path {...base} d="m3 12 9 5 9-5" /><path {...base} d="m3 17 9 5 9-5" /></Svg>
)

export const Chart = (p) => (
  <Svg p={p}><path {...base} d="M3 3v18h18" /><path {...base} d="M8 17v-6m5 6V7m5 10v-4" /></Svg>
)

export const Coins = (p) => (
  <Svg p={p}>
    <circle {...base} cx="9" cy="9" r="6" />
    <path {...base} d="M9 6v6M7.2 7.4h3.6M7.2 10.6h3.6" />
    <ellipse {...base} cx="16.5" cy="16" rx="5.5" ry="3.5" />
    <path {...base} d="M16.5 12.5v7" />
  </Svg>
)

export const Megaphone = (p) => (
  <Svg p={p}>
    <path {...base} d="m3 11 18-5v12L3 14v-3Z" />
    <path {...base} d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
  </Svg>
)

export const PenTool = (p) => (
  <Svg p={p}>
    <path {...base} d="m12 19 7-7 3 3-7 7-3-3Z" />
    <path {...base} d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" />
    <circle {...base} cx="11" cy="11" r="2" />
  </Svg>
)

export const Compass = (p) => (
  <Svg p={p}><circle {...base} cx="12" cy="12" r="10" /><path {...base} d="m16 8-2 6-6 2 2-6 6-2Z" /></Svg>
)

export const Target = (p) => (
  <Svg p={p}><circle {...base} cx="12" cy="12" r="9" /><circle {...base} cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" /></Svg>
)

export const Calculator = (p) => (
  <Svg p={p}>
    <rect {...base} x="5" y="3" width="14" height="18" rx="2" />
    <path {...base} d="M9 7h6M9 12h.01M12 12h.01M15 12h.01M9 15h.01M12 15h.01M15 15h.01M9 18h.01M12 18h.01M15 18h.01" />
  </Svg>
)

export const Shield = (p) => (
  <Svg p={p}><path {...base} d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z" /></Svg>
)

export const IdCard = (p) => (
  <Svg p={p}>
    <rect {...base} x="2" y="5" width="20" height="14" rx="2" />
    <circle {...base} cx="8" cy="11" r="2" />
    <path {...base} d="M5 16c.6-1.6 1.8-2.4 3-2.4s2.4.8 3 2.4" />
    <path {...base} d="M14 9h5m-5 3h5m-5 3h3" />
  </Svg>
)

export const Camera = (p) => (
  <Svg p={p}>
    <path {...base} d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z" />
    <circle {...base} cx="12" cy="13" r="4" />
  </Svg>
)

export const Mail = (p) => (
  <Svg p={p}><rect {...base} x="2" y="4" width="20" height="16" rx="2" /><path {...base} d="m22 7-10 6L2 7" /></Svg>
)

export const FileText = (p) => (
  <Svg p={p}>
    <path {...base} d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
    <path {...base} d="M14 2v6h6M9 13h6M9 17h6" />
  </Svg>
)

export const Link = (p) => (
  <Svg p={p}>
    <path {...base} d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
    <path {...base} d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
  </Svg>
)

export const Bookmark = (p) => (
  <Svg p={p}><path {...base} d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" /></Svg>
)

export const Calendar = (p) => (
  <Svg p={p}><rect {...base} x="3" y="4" width="18" height="18" rx="2" /><path {...base} d="M16 2v4M8 2v4M3 10h18" /></Svg>
)

export const ChatBubble = (p) => (
  <Svg p={p}><path {...base} d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" /></Svg>
)

export const AlertTriangle = (p) => (
  <Svg p={p}>
    <path {...base} d="m10.3 3.9-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3l-8-14a2 2 0 0 0-3.4 0Z" />
    <path {...base} d="M12 9v4m0 4h.01" />
  </Svg>
)

export const Code = (p) => (
  <Svg p={p}><path {...base} d="m16 18 6-6-6-6M8 6l-6 6 6 6" /></Svg>
)

/* ————— Shared maps: role fields and simulation scenarios ————— */

export const FIELD_ICONS = {
  software: Code,
  civil: Layers,
  business: Chart,
  finance: Coins,
  marketing: Megaphone,
  design: PenTool,
  product: Compass,
  sales: Target,
  accounting: Calculator,
}

export const SIM_ICONS = {
  debug: Bug,
  system: Layers,
  pitch: Mic,
  campaign: Megaphone,
  funding: Coins,
  design: PenTool,
}
