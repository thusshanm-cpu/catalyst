const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Check = (p) => (
  <svg viewBox="0 0 24 24" width={p.size ?? 14} height={p.size ?? 14} style={p.style}>
    <path {...base} d="M20 6 9 17l-5-5" />
  </svg>
)

export const Lock = (p) => (
  <svg viewBox="0 0 24 24" width={p.size ?? 14} height={p.size ?? 14} style={p.style}>
    <rect {...base} x="5" y="11" width="14" height="9" rx="2" />
    <path {...base} d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
)

export const Mic = (p) => (
  <svg viewBox="0 0 24 24" width={p.size ?? 14} height={p.size ?? 14} style={p.style}>
    <rect {...base} x="9" y="3" width="6" height="11" rx="3" />
    <path {...base} d="M5 11a7 7 0 0 0 14 0M12 18v3" />
  </svg>
)

export const ArrowRight = (p) => (
  <svg viewBox="0 0 24 24" width={p.size ?? 14} height={p.size ?? 14} style={p.style}>
    <path {...base} d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
)

export const Spark = (p) => (
  <svg viewBox="0 0 24 24" width={p.size ?? 14} height={p.size ?? 14} style={p.style}>
    <path
      {...base}
      d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"
    />
  </svg>
)

export const Pencil = (p) => (
  <svg viewBox="0 0 24 24" width={p.size ?? 14} height={p.size ?? 14} style={p.style}>
    <path {...base} d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
  </svg>
)

export const Eraser = (p) => (
  <svg viewBox="0 0 24 24" width={p.size ?? 14} height={p.size ?? 14} style={p.style}>
    <path {...base} d="m7 21-4-4L14 6l7 7-6 8H7Z" />
    <path {...base} d="m10 11 7 7" />
  </svg>
)

export const Trash = (p) => (
  <svg viewBox="0 0 24 24" width={p.size ?? 14} height={p.size ?? 14} style={p.style}>
    <path {...base} d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  </svg>
)

export const Send = (p) => (
  <svg viewBox="0 0 24 24" width={p.size ?? 14} height={p.size ?? 14} style={p.style}>
    <path {...base} d="m22 2-7 20-4-9-9-4Z" />
    <path {...base} d="M22 2 11 13" />
  </svg>
)
